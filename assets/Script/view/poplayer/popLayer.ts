/*
 * @Descripttion: 
 * @version: 
 * @Author: liqiang
 * @email: 497232807@qq.com
 * @Date: 2021-12-31 19:13:05
 * @LastEditTime: 2022-01-16 20:00:31
 */
const { ccclass, property } = cc._decorator;
import popBaseView from "../../core/popBaseView";
@ccclass
export default class popLayer extends popBaseView {
    onLoad() {
        super.onLoad()
        UITool.getChildNode(this.mChild, this.node)
    }

    start() {
        UITool.addBtnClick(this.mChild.btn_close, () => {
            this.dismisssAnimation()
        })
    }
    onbackpress() {
        this.dismisssAnimation()
    }
    onKeyEvent(code) {
        console.log("popLayer onKeyEvent code:", code)
    }

}
