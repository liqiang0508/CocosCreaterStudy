/*
 * @Descripttion: 
 * @version: 
 * @Author: liqiang
 * @email: 497232807@qq.com
 * @Date: 2023-01-29 15:32:54
 * @LastEditTime: 2023-02-13 14:00:55
 */
const { ccclass, property } = cc._decorator;
import UITool from "./core/UITool"
@ccclass
export default class TableItem extends cc.Component {
    @property(cc.Node)
    private bg: cc.Node = null;

    @property(cc.Label)
    private label: cc.Label = null;

    @property({
        type: cc.Float
    })
    num = 0.0;

    start() {
        UITool.addBtnClick(this.bg, () => {
            UITool.showFlotText(this.num.toString())
        })
    }
    /**
     * @name: 
     * @msg: 
     * @param {number} value
     * @return {*}
     */
    public refreshItem(value: number) {
        this.label.string = value.toString();
        this.num = parseFloat(value.toString())
        this.bg.color = cc.color(255 * Math.random(), 255 * Math.random(), 255 * Math.random());
        this.bg.getComponent(cc.Widget).updateAlignment();

    }
}
