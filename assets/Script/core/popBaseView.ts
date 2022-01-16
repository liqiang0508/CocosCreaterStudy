/*
 * @Description: 弹框基类
 * @Author: li qiang
 * @Date: 2021-12-31 09:53:56
 * @LastEditTime: 2022-01-16 20:09:42
 */


const { ccclass, property } = cc._decorator;
import BaseComponent from "./BaseComponent";

@ccclass
export default class popBaseView extends BaseComponent {
    mChild: any = {}
    onLoad() {
        keypadManager.add(this)
    }

    onDestroy() {
        keypadManager.remove(this)
    }
    start() {

    }

    dismisssAnimation(anniName: string = "view_dismiss") {
        UITool.playAnimation(this.mChild.view, anniName, () => {
            this.close();
        })
    }
    close() {

        this.node.destroy();
    }
    //返回键点击弹起
    onbackpress() {
        this.dismisssAnimation()
    }
    // 其他按键点击弹起操作
    onKeyEvent(keyCode) {
        console.log("popBaseView onKeyEvent code:", keyCode)
    }
}
