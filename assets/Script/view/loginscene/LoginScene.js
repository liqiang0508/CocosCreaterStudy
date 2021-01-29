/*
 * @Descripttion: 
 * @version: 
 * @Author: Lee
 * @Date: 2020-04-16 10:31:57
 * @LastEditTime: 2020-09-01 14:38:55
 */
var VersionManager = require("VersionManager")
// var Global = require("Global")
var DevicesInfo = require("Devices")
var BaseComponent = require("BaseComponent");

cc.Class({
    extends: BaseComponent,

    properties: {

        VersionText: {
            default: null,
            type: cc.Label,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        this._super()
    },

    onDestroy() {
        this._super()
    },


    start() {
        if (Global.GgameType == 1)//正式包
        {
            this.VersionText.string = DevicesInfo.getAppVersion() + "(R" + VersionManager.getScriptVersion() + ")"
        }

        if (Global.GgameType == 3)//debug包
        {
            this.VersionText.string = DevicesInfo.getAppVersion() + "(D" + VersionManager.getScriptVersion() + ")"
        }

        var gotest = cc.find("uipanel/gotest", this.node)
        var wechat = cc.find("uipanel/wechat", this.node)
        var label = cc.find("uipanel/label", this.node)
        var  wechatShare = cc.find("uipanel/wechatShare", this.node)

        ua.darkButton(wechat, () => {//微信登录
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
           
            gg.wechat.login((msg)=>{
                if (msg.ret==true)
                {
                    console.log("WeChatModule login success----"+JSON.stringify(msg))
                    UiManager.ShowAlert(JSON.stringify(msg))
                }
                else{
                    console.log("WeChatModule login Faild----"+JSON.stringify(msg))
                }
            })
        })

        ua.darkButton(wechatShare, () => {

            gg.wechat.shareTextWx("666",0,(result,msg)=>{
                if (result==true)
                {
                    console.log("WeChatModule share success----"+msg)
                }
                else{
                    console.log("WeChatModule share Faild----"+msg)
                }
            })
        })


        ua.darkButton(gotest, () => {

            this.goTestScene()
        })

        ua.darkButton(this.node, (event) => {
            console.log("getLocation=====", event.getLocation().x, event.getLocation().y)//原点在左下角
            // var pos = Global.ConverToNodePos(gotest.parent,event.getLocation())
            // gotest.setPosition(pos)
            console.log("getLocationInView=====", event.getLocationInView().x, event.getLocationInView().y)//原点在左上角

        })

        cc.director.on("test", (event) => {
            cc.log("test event", event)
        })


        

    },

    goTestScene() {
        // var param = {"name":"lee"}
        // cc.director.emit("test",param)
        UiManager.gShowLoading((layer)=>{
            layer.updataProgress(30)
            this.scheduleOnce(()=>{
                UiManager.gPreloadScene("TestScene",null,()=>{
                    layer.updataProgress(100)
                })
            },2)

        },(layer)=>{
            UiManager.gLoadScene("TestScene")
            // layer.bClose()
        })
       

    }

});
