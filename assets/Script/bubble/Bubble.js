/*
 * @Descripttion: 
 * @version: 
 * @Author: Lee
 * @Date: 2020-08-12 11:09:31
 * @LastEditTime: 2023-02-13 14:08:23
 */

import UITool from "../core/UITool"
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        life: {//泡泡生命，碰撞几次屏幕边缘 就销毁
            type: cc.Integer,
            default: 5
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        // console.log("  buble start===",cc.view.getVisibleSize().width)

    },

    init() {
        this.life = 5
        this.Speed = cc.v2(Math.random() * 1000 - 500, Math.random() * 1000 - 500)
        if (this.Speed.x == 0 && this.Speed.y == 0) {
            this.Speed = cc.v2(0.5, 1)
        }
        this.ScreenSize = cc.view.getVisibleSize()
        this.node.color = cc.color(Math.random() * 255, Math.random() * 255, Math.random() * 255)
        UITool.addBtnClick(this.node, () => {
            if (globalThis.GameState == 1)//暂停
            {
                return
            }
            if (this.clickCall) {
                Sound.playEffect("audio_ui_btn_01")
                this.clickCall(this.node)
                this.clickCall = null
            }
        })
    },
    onDestroy() {
        this.node.targetOff(this)
    },
    setClickCall(call) {
        this.clickCall = call
    },
    setDeadCall(call) {
        this.deadCall = call
    },
    update(dt) {

        if (globalThis.GameState == 1 || this.life == 0)//暂停
        {
            return
        }
        // cc.log("update")
        this.node.x = this.node.x + this.Speed.x * dt
        this.node.y = this.node.y + this.Speed.y * dt
        if (this.node.x <= -(this.ScreenSize.width / 2 - this.node.width / 2)) {
            // cc.log("超出最左边")
            this.node.x = -(this.ScreenSize.width / 2 - this.node.width / 2)
            this.Speed.x = -this.Speed.x
            this.life = this.life - 1
        }

        if (this.node.x >= (this.ScreenSize.width / 2 - this.node.width / 2)) {
            this.node.x = (this.ScreenSize.width / 2 - this.node.width / 2)
            this.Speed.x = -this.Speed.x
            // cc.log("超出最右边")
            this.life = this.life - 1
        }

        if (this.node.y <= -(this.ScreenSize.height / 2 - this.node.height / 2)) {
            this.node.y = -(this.ScreenSize.height / 2 - this.node.height / 2)
            this.Speed.y = -this.Speed.y
            this.life = this.life - 1
        }

        if (this.node.y >= (this.ScreenSize.height / 2 - this.node.height / 2)) {
            this.node.y = (this.ScreenSize.height / 2 - this.node.height / 2)
            this.Speed.y = -this.Speed.y
            this.life = this.life - 1
        }
        // cc.log("update")
        if (this.life == 0) {
            if (this.deadCall) {
                this.deadCall(this.node)
                this.active = false
                this.deadCall = null
            }
        }

    },
});
