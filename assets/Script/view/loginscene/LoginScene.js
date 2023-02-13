/*
 * @Descripttion: 
 * @version: 
 * @Author: Lee
 * @Date: 2020-04-16 10:31:57
 * @LastEditTime: 2023-02-13 13:59:28
 */
// var VersionManager = require("VersionManager")
import VersionManager from "VersionManager"
import UITool from "../../core/UITool"
import PopViewManager from "PopViewManager"
var DevicesInfo = require("Devices")
cc.Class({
    extends: cc.Component,

    properties: {

        VersionText: {
            default: null,
            type: cc.Label,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        PopViewManager.getInstance().SayHello()
        // this.schedule(this.update1, 1/60);
        this.speed = 5  //vt*vt-v0*v0=2as
        // this.MaxSpeed = 100
        this.S = 375.0
        this.ACC = -this.speed * this.speed / (2 * this.S) * 60
        this.offsetX = 0

    },

    onDestroy() {

    },

    update1(dt) {
        dt = 1 / 60
        if (this.speed == 0) {
            return
        }
        this.speed = this.speed + this.ACC * dt

        // cc.log("this.speed==",this.speed)
        if (this.speed <= 0) {

            this.gotest.x = this.gotest.x - this.speed.toFixed(2)

            this.speed = 0

            if (this.gotest.x != this.S) {
                this.gotest.runAction(cc.moveBy(0.01, cc.v2(this.S - this.gotest.x, 0)))
            }
            return
        }
        this.offsetX = this.offsetX + this.speed
        this.gotest.x = this.gotest.x + this.speed

    },

    start() {
        Sound.playMusic("bgm_main")
        this.VersionText.string = DevicesInfo.getAppVersion() + VersionManager.getScriptVersion() + ")"

        var gotest = cc.find("uipanel/gotest", this.node)
        this.gotest = gotest
        // cc.log("this.gotest.x1", this.gotest.x)
        var wechat = cc.find("uipanel/wechat", this.node)
        var label = cc.find("uipanel/label", this.node)
        var wechatShare = cc.find("uipanel/wechatShare", this.node)

        UITool.addBtnClick(wechat, () => {//微信登录
            // // msg返回数据
            // {
            //     "ret": true,
            //     "access_token": "41_SV9AdqFcpBfQ1DhMMg2Uj8tDa8dFarr5TyEPKfyRoAaYBUz4Hhm2jMK9IaNNXnque_mifuHleWJ_MiPTunE5M_ZkRwB8sibRMGhl9iGvPis",
            //     "openid": "oA4c1s3irUjxOdKONHqJajVDN04s",
            //     "userinfo": {
            //         "openid": "oA4c1s3irUjxOdKONHqJajVDN04s",
            //         "nickname": "断了的弦的小童鞋",
            //         "sex": 1,
            //         "language": "zh_CN",
            //         "city": "Chengdu",
            //         "province": "Sichuan",
            //         "country": "CN",
            //         "headimgurl": "https://thirdwx.qlogo.cn/mmopen/vi_32/Wdib0xAqRqyTxZkzLicMEicAkkwdOexCeVJ4yTGFKu6Ij5tXNOeI0HEwZJSxbWhlhRiaro5CaQAJg0jIyZy5JV12JA/132",
            //         "privilege": [],
            //         "unionid": "oL3hmuFGiJbK95lVFaBHHHXI-XhA"
            //     }
            // }
            console.log("wx登录")
            if (cc.sys.isNative == false || cc.sys.os == cc.sys.OS_WINDOWS) {
                // console.log("Wx 登录只支持原生平台")
                UITool.showFlotText("Wx 登录只支持原生平台")
                return
            }
            gg.wechat.login((msg) => {
                if (msg.ret == true) {
                    console.log("WeChatModule login success----" + JSON.stringify(msg))
                    UITool.showAlert(JSON.stringify(msg))
                }
                else {
                    console.log("WeChatModule login Faild----" + JSON.stringify(msg))
                }
            })
        })

        UITool.addBtnClick(wechatShare, () => {
            if (cc.sys.isNative == false || cc.sys.os == cc.sys.OS_WINDOWS) {
                // console.log("Wx 分享只支持原生平台")
                UITool.showFlotText("Wx 分享只支持原生平台")
                return
            }
            gg.wechat.shareTextWx("666", 0, (result, msg) => {
                if (result == true) {
                    console.log("WeChatModule share success----" + msg)
                }
                else {
                    console.log("WeChatModule share Faild----" + msg)
                }
            })

            // cc.log("cc.winSize.width",cc.winSize.width/2)
            // var ac = cc.moveBy(0.1,cc.v2(cc.winSize.width/2,0))
            // wechatShare.runAction(ac)


            // cc.log("cc.winSize.width",cc.winSize.width/2)
            // var ac = cc.moveBy(0.1,cc.v2(cc.winSize.width/2,0))
            // wechatShare.runAction(ac)
        })


        UITool.addBtnClick(gotest, () => {


            this.goTestScene()

        })

        UITool.addBtnClick(this.node, (event) => {
            console.log("getLocation=====", event.getLocation().x, event.getLocation().y)//原点在左下角
            // var pos = Global.converToNodePos(gotest.parent,event.getLocation())
            // gotest.setPosition(pos)
            console.log("getLocationInView=====", event.getLocationInView().x, event.getLocationInView().y)//原点在左上角

        })

        cc.director.on("test", (event) => {
            cc.log("test event", event)
        })


        // shader test
        this.img4 = cc.find("uipanel/4", this.node)
        this.img4Material = this.img4.getComponent(cc.Sprite).getMaterials()[0]
        this.schedule(() => {
            var randNum = cc.director.getTotalTime() / 1000
            //cc.log("randNum==",randNum)
            // cc.log(randNum)
            // this.img4Material.effect.setProperty('colorR', Math.abs(Math.sin(randNum)));
        }, 1)
    },

    goTestScene() {

        UITool.changeScene("TestScene")


    }

});
