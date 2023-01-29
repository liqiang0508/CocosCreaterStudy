/**
 * 翻译的 cocos2dx cc.TableView
 * 注意：
 *      1. cell 的锚点是 0.5, 0.5
 *      2. 只支持垂直滚动或水平滚动，不支持双向滚动
 * 函数：
 *      设置单元格间距的 setInterval(0, 0, 0)
 *      重新加载数据 reloadData(false)            添加参数(isUseLastOffset:是否使用上一次的容器偏移量)
 *      查找索引处的单元格 cellAtIndex(0)
 *      更新索引处的单元格 updateCellAtIndex(0)
 *      滚动到索引处的单元格 scrollToIndex(0)
 * 未实现：
 *      指定索引处插入新单元格 insertCellAtIndex
 *      删除指定索引处的单元格 removeCellAtIndex
 * 用法：
 *      import TableView, {TableViewCellNode} from "./TableView";
 *      export default class Helloworld extends cc.Component {
 *          tableData: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 *          @property({type: TableView})
 *          tableView: TableView = null;
 *          start() {
 *              this.tableView.reloadData();
 *          }
 *          tableCellCount(): number {
 *              return this.tableData.length;
 *          }
 *          tableCellSize(idx: number): cc.Size {
 *              return cc.size(300, 100);// 通过idx可为每个cell设置单独size
 *          }
 *          tableCellUpdate(idx: number, cell: TableViewCellNode) {
 *              cc.log("idx = " + idx, "data = " + this.tableData[idx]);
 *          }
 *      }
 */
const {ccclass, property, requireComponent, menu} = cc._decorator;
const CC_INVALID_INDEX: number = -1;
export enum VerticalFillOrder {TOP_DOWN = 0, BOTTOM_UP = 1}

@ccclass
export class TableViewCellNode extends cc.Node {
    private _idx: number = CC_INVALID_INDEX;
    public getIdx = (): number => this._idx;
    public setIdx = (idx: number) => this._idx = idx;
    public reset = () => this._idx = CC_INVALID_INDEX;
}

@ccclass
@menu("Extend/TableView")
@requireComponent(cc.ScrollView)
export default class TableView extends cc.Component {
    private scrollView: cc.ScrollView = null;

    @property({type: cc.Node, tooltip: "裁剪节点"})
    private maskNode: cc.Node = null

    @property({type: cc.Enum(VerticalFillOrder), tooltip: "单元格垂直填充顺序"})
    private vordering: VerticalFillOrder = VerticalFillOrder.TOP_DOWN;

    @property({type: cc.Integer, tooltip: "第一个单元格和边框的间隔"})
    private starInterval: number = 0;
    @property({type: cc.Integer, tooltip: "单元格之间的间隔"})
    private midInterval: number = 0;
    @property({type: cc.Integer, tooltip: "最后一个单元格和边框的间隔"})
    private endInterval: number = 0;

    @property({type: cc.Component.EventHandler, tooltip: "单元格的数量\n函数形参 () => number"})
    private handlerCellCount: cc.Component.EventHandler = new cc.Component.EventHandler();

    @property({type: cc.Component.EventHandler, tooltip: "单元格的大小\n函数形参 (idx: number) => cc.Size"})
    private handlerCellSize: cc.Component.EventHandler = new cc.Component.EventHandler();

    @property({type: cc.Component.EventHandler, tooltip: "更新单元格\n函数形参 (idx: number, cell: TableViewCellNode) => void"})
    private handlerCellUpdate: cc.Component.EventHandler = new cc.Component.EventHandler();

    private tableCellCount: () => number = null;                                         //单元格数量获取函数
    private tableCellSize: (idx: number) => cc.Size = null;                              //索引的单元格大小获取函数
    private tableCellUpdate: (idx: number, cell: TableViewCellNode) => void = null;      //索引的单元格更新回调函数

    private _indices: boolean[] = [];                                       //索引集用于查询所使用单元格的索引
    private _cellsPositions: number[] = [];                                 //所有单元格位置
    private _cellsUsed: TableViewCellNode[] = [];                           //当前在表中的单元格
    private _cellsFreed: TableViewCellNode[] = [];                          //未使用的单元格
    private _isUsedCellsDirty: boolean = false;                             //使用的单元格是否进行排序

    onLoad() {
        this.scrollView = this.node.getComponent(cc.ScrollView);

        // 获取EventHandler的回调函数
        let getEventHandlerCallback = (handler: cc.Component.EventHandler) => {
            let componentName = handler["_componentName"];
            let funcName = handler.handler;
            let component = handler.target.getComponent(componentName);
            return component[funcName].bind(component);
        }
        this.tableCellCount = getEventHandlerCallback(this.handlerCellCount);
        this.tableCellSize = getEventHandlerCallback(this.handlerCellSize);
        this.tableCellUpdate = getEventHandlerCallback(this.handlerCellUpdate);
    }

    onEnable() {
        this.node.on('scrolling', this._scrollViewDidScroll, this);
    }

    onDisable() {
        this.node.off('scrolling', this._scrollViewDidScroll, this);
    }

    //设置垂直填充顺序
    public setVerticalFillOrder(fillOrder: VerticalFillOrder) {
        this.vordering = fillOrder;
    }

    //设置间隔
    public setInterval(midInterval: number = 0, starInterval: number = 0, endInterval: number = 0) {
        this.midInterval = midInterval;
        this.starInterval = starInterval;
        this.endInterval = endInterval;
    }

    //加载数据
    public reloadData(isUseLastOffset: boolean = false) {
        if (this.scrollView.horizontal === this.scrollView.vertical) {
            cc.error("TableView only vertical or horizontal scrolling is supported");
            return;
        }
        for (let k in this._cellsUsed) {
            this._cellsFreed.push(this._cellsUsed[k]);
            this._cellsUsed[k].reset();
            this._cellsUsed[k].active = false;
        }
        this._indices = [];
        this._cellsUsed = [];
        this._updateCellPositions();
        this._updateContentSize(isUseLastOffset);
        if (this.tableCellCount() > 0)
            this._scrollViewDidScroll();
    }

    //查找索引处的单元格
    public cellAtIndex(idx: number) {
        if (this._indices[idx]) {
            for (let k in this._cellsUsed) {
                if (this._cellsUsed[k].getIdx() === idx)
                    return this._cellsUsed[k];
            }
        }
        return null;
    }

    //更新索引处的单元格
    public updateCellAtIndex(idx: number) {
        if (idx <= CC_INVALID_INDEX)
            return;
        let countOfItems = this.tableCellCount();
        if (0 === countOfItems || idx > countOfItems - 1)
            return;
        let cell = this.cellAtIndex(idx);
        if (cell)
            this._moveCellOutOfSight(cell);
        cell = this._createCellAtIndex(idx);
        this._setIndexForCell(idx, cell);
        this._addCellIfNecessary(cell);
    }

    //滚动到索引处的单元格
    public scrollToIndex(index: number, timeInSecond: number = 0.01) {
        let cellPos: number = this._cellsPositions[index];
        if (!cellPos)
            return;
        if (this.scrollView.horizontal) {
            this.scrollView.scrollToOffset(cc.v2(cellPos - this.midInterval, 0), Math.max(timeInSecond, 0.01));
        } else {
            if (this.vordering === VerticalFillOrder.TOP_DOWN) {
                this.scrollView.scrollToOffset(cc.v2(0, cellPos - this.midInterval), Math.max(timeInSecond, 0.01));
            } else {
                let itemSize = this.tableCellSize(index);
                this.scrollView.scrollToOffset(cc.v2(0, this.scrollView.getMaxScrollOffset().y - cellPos + this.midInterval), Math.max(timeInSecond, 0.01));
            }
        }
    }

    /** 下面是私有函数 */

    //更新单元格位置
    private _updateCellPositions() {
        let cellsCount = this.tableCellCount();
        this._cellsPositions = [];
        if (cellsCount > 0) {
            let currentPos = this.starInterval;
            for (let i = 0; i < cellsCount; ++i) {
                this._cellsPositions[i] = currentPos;
                let size = this.tableCellSize(i);
                if (this.scrollView.horizontal)
                    currentPos += size.width;
                else
                    currentPos += size.height;
                if (i < cellsCount - 1 && this.midInterval != 0)
                    currentPos += this.midInterval;
            }
            currentPos += this.endInterval;
            this._cellsPositions[cellsCount] = currentPos;
        }
    }

    //更新内部容器大小
    private _updateContentSize(isUseLastOffset: boolean) {
        let size = this.maskNode.getContentSize();
        let cellsCount = this.tableCellCount();
        if (cellsCount > 0) {
            let maxPosition = this._cellsPositions[cellsCount];
            if (this.scrollView.horizontal && maxPosition > this.maskNode.width)
                size = cc.size(maxPosition, this.maskNode.height);
            else if (this.scrollView.vertical && maxPosition > this.maskNode.height)
                size = cc.size(this.maskNode.width, maxPosition);
        }
        if (size.width != this.scrollView.content.width || size.height != this.scrollView.content.height) {
            this.scrollView.content.setContentSize(size);
        }
        if (!isUseLastOffset) {
            if (this.scrollView.horizontal)
                this.scrollView.scrollToLeft(0.01);
            else {
                if (this.vordering === VerticalFillOrder.TOP_DOWN)
                    this.scrollView.scrollToTop(0.01);
                else
                    this.scrollView.scrollToBottom(0.01);
            }
        } else {
            this.scrollView.scrollToOffset(this.scrollView.getScrollOffset(), 0.01);
        }
    }

    //索引转坐标
    private _positionFromIndex(index): cc.Vec2 {
        let pos = this.scrollView.horizontal ? cc.v2(this._cellsPositions[index], 0) : cc.v2(0, this._cellsPositions[index]);
        let size = this.tableCellSize(index);
        //转换坐标（cocos2dx的原点始终在左下角，而creator的原点是基于锚点来的）
        if (this.scrollView.vertical) {
            if (this.vordering === VerticalFillOrder.BOTTOM_UP)
                pos.y = pos.y + size.height / 2;
            else
                pos.y = this.scrollView.content.height - pos.y - size.height / 2;
        } else
            pos.x = pos.x + size.width / 2;
        if (this.scrollView.vertical) {
            pos.x = this.scrollView.content.width * (0.5 - this.scrollView.content.anchorX);
            pos.y = pos.y - this.scrollView.content.height * this.scrollView.content.anchorY;
        } else {
            pos.x = pos.x - this.scrollView.content.width * this.scrollView.content.anchorX;
            pos.y = this.scrollView.content.height * (0.5 - this.scrollView.content.anchorY);
        }
        return pos;
    }

    //偏移量转索引
    private _indexFromOffset(offset: cc.Vec2): number {
        let maxIdx = this.tableCellCount() - 1;
        let index = this.__indexFromOffset(offset);
        if (index != CC_INVALID_INDEX) {
            index = Math.max(0, index);
            if (index > maxIdx)
                index = CC_INVALID_INDEX;
        }
        return index;
    }

    //偏移量转索引的二分查找法
    private __indexFromOffset(offset: cc.Vec2): number {
        let low = 0;
        let high = this.tableCellCount() - 1;
        let search = this.scrollView.horizontal ? offset.x : offset.y;
        while (high >= low) {
            let index = Math.floor(low + (high - low) / 2);
            let cellStart = this._cellsPositions[index];
            let cellEnd = this._cellsPositions[index + 1];
            if (search >= cellStart && search <= cellEnd)
                return index;
            else if (search < cellStart)
                high = index - 1;
            else
                low = index + 1;
        }
        if (low <= 0)
            return 0;
        return CC_INVALID_INDEX;
    }

    //把单元格移除视线
    private _moveCellOutOfSight(cell: TableViewCellNode) {
        this._cellsFreed.push(cell);
        let idx = this._cellsUsed.indexOf(cell);
        if (idx != -1)
            this._cellsUsed.splice(idx, 1);
        this._isUsedCellsDirty = true;
        this._indices[cell.getIdx()] = null;
        cell.reset();
        cell.active = false;
    }

    //设置单元格索引
    private _setIndexForCell(index: number, cell: TableViewCellNode) {
        cell.setAnchorPoint(0.5, 0.5);
        cell.setPosition(this._positionFromIndex(index));
        cell.setIdx(index);
    }

    //必要时添加单元格
    private _addCellIfNecessary(cell: TableViewCellNode) {
        if (!cell.parent)
            cell.parent = this.scrollView.content;
        this._cellsUsed.push(cell);
        this._isUsedCellsDirty = true;
        this._indices[cell.getIdx()] = true;
        cell.active = true;
    }

    //滚动时调用计算显示位置
    private _scrollViewDidScroll() {
        let countOfItems = this.tableCellCount();
        if (0 === countOfItems)
            return;
        if (this._isUsedCellsDirty) {
            this._isUsedCellsDirty = false;
            this._cellsUsed.sort((a: TableViewCellNode, b: TableViewCellNode) => {
                return a.getIdx() - b.getIdx();
            })
        }

        //计算在显示范围的单元格的起始 startIdx 和结束 endIdx
        let startIdx = 0;
        let endIdx = 0;
        let maxIdx = Math.max(countOfItems - 1, 0);
        let offset = this.scrollView.getScrollOffset();
        offset.x *= -1

        if (this.vordering === VerticalFillOrder.BOTTOM_UP)
            offset.y = this.scrollView.content.height - offset.y - this.maskNode.height;
        startIdx = this._indexFromOffset(offset.clone());
        if (startIdx === CC_INVALID_INDEX)
            startIdx = countOfItems - 1;

        offset.x += this.maskNode.width;
        offset.y += this.maskNode.height;

        endIdx = this._indexFromOffset(offset.clone());
        if (endIdx === CC_INVALID_INDEX)
            endIdx = countOfItems - 1;

        //移除不在 startIdx 和 endIdx 范围的 cell
        if (this._cellsUsed.length > 0) {
            let cell = this._cellsUsed[0];
            let idx = cell.getIdx();
            while (idx < startIdx) {
                this._moveCellOutOfSight(cell);
                if (this._cellsUsed.length > 0) {
                    cell = this._cellsUsed[0];
                    idx = cell.getIdx();
                } else
                    break;
            }
        }
        if (this._cellsUsed.length > 0) {
            let cell = this._cellsUsed[this._cellsUsed.length - 1];
            let idx = cell.getIdx();
            while (idx <= maxIdx && idx > endIdx) {
                this._moveCellOutOfSight(cell);
                if (this._cellsUsed.length > 0) {
                    cell = this._cellsUsed[this._cellsUsed.length - 1];
                    idx = cell.getIdx();
                } else
                    break
            }
        }

        //更新未在区域显示的cell
        for (let i = startIdx; i <= endIdx; ++i) {
            if (!this._indices[i])
                this.updateCellAtIndex(i);
        }
    }

    //空闲的单元格离队
    private _dequeueCell(): TableViewCellNode | null {
        let cell: TableViewCellNode | null = null;
        if (this._cellsFreed.length > 0) {
            cell = this._cellsFreed.shift();
        }
        return cell;
    }

    //创建索引处的单元格
    private _createCellAtIndex(idx): TableViewCellNode {
        let cell: TableViewCellNode = this._dequeueCell();
        if (!cell) {
            cell = new TableViewCellNode;
        }
        cell.setContentSize(this.tableCellSize(idx));
        this.tableCellUpdate(idx, cell);
        return cell;
    }
}
