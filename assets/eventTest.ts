/*
 * @Descripttion: 
 * @version: 
 * @Author: liqiang
 * @email: 497232807@qq.com
 * @Date: 2022-01-20 20:00:06
 * @LastEditTime: 2022-02-17 14:25:40
 */
import ConstEventDefine from "./Script/config/ConstEventDefine";
import PopViewManager from "./Script/core/PopViewManager";


const { ccclass, property } = cc._decorator;

@ccclass
export default class eventTest extends cc.Component {


    start() {
        EventManager.on(ConstEventDefine.TEST, (data) => {

            console.log("eventTest==", data.detail)
        })
        console.log("eventTest==2")
        PopViewManager.getInstance().SayHello();
    }

}
