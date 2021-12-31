const { ccclass, property } = cc._decorator;
import popBaseView from "../../core/popBaseView";
@ccclass
export default class popLayer extends popBaseView {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        UITool.getChildNode(this.mChild,this.node)
    }

    start() {

        UITool.addBtnClick(this.mChild.btn_close, () => {
            console.log("关闭")
            this.dismisssAnimation()
        })
    }

    // update (dt) {}
}
