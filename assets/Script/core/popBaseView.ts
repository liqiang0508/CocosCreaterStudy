/*
 * @Description: 弹框基类
 * @Author: li qiang
 * @Date: 2021-12-31 09:53:56
 * @LastEditTime: 2021-12-31 11:32:24
 */


const {ccclass, property} = cc._decorator;
import  KeypadDispatch = require("./KeypadDispatch.js");
import  BaseComponent  from "./BaseComponent.js";

@ccclass
export default class popBaseView extends BaseComponent {

    mChild:any = {};
    
    onLoad () {
        KeypadDispatch.getInstance().add(this)
    }

    onDestroy() {
        KeypadDispatch.getInstance().remove()
    }
    start () {

    }

    dismisssAnimation() {
        UITool.playAnimation(this.mChild.mask,"view_dismiss",()=>{
            this.node.destroy();
        })
    }

}
