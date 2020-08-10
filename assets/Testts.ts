/*
 * @Descripttion: 
 * @version: 
 * @Author: Lee
 * @Date: 2020-08-07 15:30:49
 * @LastEditTime: 2020-08-10 11:08:24
 */
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import xxtea = require("./Script/core/xxtea.js")
@ccclass
export default class Testts extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        cc.log("test ts Start"+this.text)
        var data = xxtea.encryptToString("adadjaojdaj","poker")
        console.log("encrypt_data=", data);

        var a = (x:number):string=>{cc.log(x); return x.toString()}
        var b = a(66666666)
        cc.log(typeof(b))
        cc.log(this.addSum(1,2,3))
        cc.log(cc.ENGINE_VERSION)

    }

    addSum(...arg):number{
        var total:number = 0
        for (const n of arg) {
            total = total+n
        }
        return total
    }

    Hello():cc.Vec2{
        return cc.v2(0,0)
    }
    // update (dt) {}
}
