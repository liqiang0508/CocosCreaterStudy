/*
 * @Descripttion: 
 * @version: 
 * @Author: Lee
 * @Date: 2020-08-07 15:30:49
 * @LastEditTime: 2021-08-05 17:34:56
 */

import { Lee  } from "./Person";


const {ccclass, property} = cc._decorator;
import xxtea = require("./Script/core/xxtea.js")
@ccclass
export default class Testts extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property({
        type:cc.String,
    
    })
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        // cc.log("test ts Start"+this.text)
        // var data = xxtea.encryptToString("adadjaojdaj","poker")
        // console.log("encrypt_data=", data);

        // var a = (x:number):string=>{cc.log(x); return x.toString()}
        // var b = a(66666666)
        // cc.log(typeof(b))
        // cc.log(this.addSum(1,2,3))
        // cc.log(cc.ENGINE_VERSION)
        this.SayHello(this.text,(data:string)=>{
            console.log("我是回调=="+data)
        })

        myModule.say("497232807")
     
        var p = new Lee.Person()
        p.Say("Hello world")
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

    SayHello(str:string,callback:(data:string)=>void){
        console.log("Test ts SayHello=="+str)
        if (callback!=null)
        {
            callback(str)
        }
    }



    // update (dt) {}
}
