/*
 * @Descripttion: 
 * @version: 
 * @Author: Lee
 * @Date: 2020-08-07 15:30:49
 * @LastEditTime: 2023-02-13 10:22:40
 */

import { Lee } from "./Person";

import ActivityOnlineConfig from "./config/ActivityOnlineConfig"

const { ccclass, property } = cc._decorator;
import xxtea = require("./core/xxtea.js")
@ccclass
export default class Testts extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property({
        type: cc.String,

    })
    text: string = 'hello';
    timer: number = null;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        var data = xxtea.encryptToString("adadjaojdaj", "poker")
        console.log("encrypt_data=", data);
        console.log("ActivityOnlineConfig==", JSON.stringify(ActivityOnlineConfig));
        this.SayHello(this.text, (data: string) => {
            console.log("我是回调==" + data)
        })

        myModule.say("497232807")

        var p = new Lee.Person()
        p.Say("Hello world")

        new Promise((resolve, reject) => {
            console.log("Promise======", this.label)
            this.timer = setTimeout(() => {
                console.log(this.label)
                this.label.string = "666"
            }, 5000)
        })
        this.asyncFunc()
    }

    async asyncFunc() {
        await this.print(1000, "First");
        await this.print(4000, "Second");
        await this.print(3000, "Third");
    }

    print(delay, message) {
        return new Promise<void>(function (resolve, reject) {
            setTimeout(function () {
                console.log(message);
                resolve();
            }, delay);
        });
    }
    addSum(...arg): number {
        var total: number = 0
        for (const n of arg) {
            total = total + n
        }
        return total
    }

    Hello(): cc.Vec2 {
        return cc.v2(0, 0)
    }

    SayHello(str: string, callback: (data: string) => void) {
        // console.log("Test ts SayHello=="+str)
        if (callback != null) {
            callback(str)
        }
    }
    onDestroy() {
        if (this.timer) {
            clearTimeout(this.timer)
        }
    }


    // update (dt) {}
}
