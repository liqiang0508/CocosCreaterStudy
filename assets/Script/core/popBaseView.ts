/*
 * @Description: 弹框基类
 * @Author: li qiang
 * @Date: 2021-12-31 09:53:56
 * @LastEditTime: 2021-12-31 15:11:13
 */


const {ccclass, property} = cc._decorator;
import  BaseComponent  from "./BaseComponent";

@ccclass
export default class popBaseView extends BaseComponent {
    mChild:any = {}
    onLoad () {
        keypadManager.add(this)
    }

    onDestroy() {
        keypadManager.remove()
    }
    start () {

    }

    dismisssAnimation(anniName:string = "view_dismiss") {
        UITool.playAnimation(this.mChild.view,anniName,()=>{
            this.close();
        })
    }
    close(){
        this.node.destroy();
    }

}
