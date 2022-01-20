import ConstEventDefine from "./Script/config/ConstEventDefine";


const { ccclass, property } = cc._decorator;

@ccclass
export default class eventTest extends cc.Component {


    start() {
        EventManager.on(ConstEventDefine.TEST, (data) => {

            console.log("eventTest==", data.detail)
        })
    }

}
