const {ccclass, property} = cc._decorator;

@ccclass
export default class TableItem extends cc.Component {
    @property(cc.Node)
    private bg: cc.Node = null;

    @property(cc.Label)
    private label: cc.Label = null;

    public refreshItem (value: number) {
        this.label.string = value.toString();
        this.bg.color = cc.color(255 * Math.random(), 255 * Math.random(), 255 * Math.random());
        this.bg.getComponent(cc.Widget).updateAlignment();
    }
}
