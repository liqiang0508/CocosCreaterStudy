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
var SubGameManager = require("SubGameManager")
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
        var label = cc.find("uipanel/label", this.node)



        ua.darkButton(gotest, () => {

            this.goTestScene()
        })

        ua.darkButton(this.node, (event) => {
            console.log("getLocation=====", event.getLocation().x, event.getLocation().y)//原点在左下角
            // var pos = Global.ConverToNodePos(gotest.parent,event.getLocation())
            // gotest.setPosition(pos)
            console.log("getLocationInView=====", event.getLocationInView().x, event.getLocationInView().y)//原点在左上角

        })

        cc.director.on("test",(event)=>{
            cc.log("test event",event)
        })

        SubGameManager.Hello()
        SubGameManager.parseCfgFromData(VersionManager.getSubGameCfg())

    },

    goTestScene() {
        var param = {"name":"lee"}
        cc.director.emit("test",param)
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
