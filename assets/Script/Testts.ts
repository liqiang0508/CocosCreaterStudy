/*
 * @Descripttion: 
 * @version: 
 * @Author: Lee
 * @Date: 2020-08-07 15:30:49
 * @LastEditTime: 2022-12-14 13:39:31
 */

import { Lee  } from "./Person";

import  ActivityOnlineConfig from "./config/ActivityOnlineConfig"

const {ccclass, property} = cc._decorator;
import xxtea = require("./core/xxtea.js")
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
        var data = xxtea.encryptToString("adadjaojdaj","poker")
        console.log("encrypt_data=", data);

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
        // console.log("Test ts SayHello=="+str)
        if (callback!=null)
        {
            callback(str)
        }
    }



    // update (dt) {}
}
