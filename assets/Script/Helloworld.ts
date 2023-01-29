import TableView, {TableViewCellNode} from "./TableView";
import TableItem from "./TableItem";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {
    private tableData: number[] = [];

    @property(cc.Prefab)
    private itemPrefab1: cc.Prefab = null;

    @property(cc.Prefab)
    private itemPrefab2: cc.Prefab = null;

    @property(TableView)
    private tableView1: TableView = null;

    @property(TableView)
    private tableView2: TableView = null;

    @property(TableView)
    private tableView3: TableView = null;

    start() {
        this.setTableData([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
    }

    private setTableData(data: number[]) {
        this.tableData = data;
        this.tableView1.reloadData();
        this.tableView2.reloadData();
        this.tableView3.reloadData();
    }

    // 例子1
    private tableCellCount1() {
        return this.tableData.length;
    }
    private tableCellSize1(idx: number) {
        return cc.size(240, 40);
    }
    private tableCellUpdate1(idx: number, cell: TableViewCellNode) {
        let item = cell.getChildByName("item")
        if (!item) {
            item = cc.instantiate(this.itemPrefab1);
            item.parent = cell;
            item.name = "item";
        }
        item.getComponent(TableItem).refreshItem(this.tableData[idx]);
    }

    // 例子2
    private tableCellCount2() {
        return this.tableData.length;
    }
    private tableCellSize2(idx: number) {
        if (idx % 2 === 0)
            return cc.size(240, 40);
        return cc.size(240, 80);
    }
    private tableCellUpdate2(idx: number, cell: TableViewCellNode) {
        let item = cell.getChildByName("item")
        if (!item) {
            item = cc.instantiate(this.itemPrefab1);
            item.parent = cell;
            item.name = "item";
        }
        item.setContentSize(cell.getContentSize());
        item.getComponent(TableItem).refreshItem(this.tableData[idx]);
    }

    // 例子3
    private tableCellCount3() {
        return Math.ceil(this.tableData.length / 3);
    }
    private tableCellSize3(idx: number) {
        return cc.size(240, 40);
    }
    private tableCellUpdate3(idx: number, cell: TableViewCellNode) {
        for (let i = 0; i < 3; ++i) {
            let item = cell.getChildByName("item" + i)
            if (!item) {
                item = cc.instantiate(this.itemPrefab2);
                item.parent = cell;
                item.name = "item" + i;
                item.x = -240 / 3 + i * 80;
            }
            let itemIdx = idx * 3 + i;
            item.active = this.tableData[itemIdx] != null;
            if (this.tableData[itemIdx] != null) {
                item.active = true;
                item.getComponent(TableItem).refreshItem(this.tableData[itemIdx]);
            }
        }
    }
}



