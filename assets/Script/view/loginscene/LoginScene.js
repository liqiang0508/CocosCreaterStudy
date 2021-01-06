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

    },

    goTestScene() {
        // cc.director.loadScene("TestScene")

        // var bundle = Global.gGetBundle("gametest")
        // if (bundle) {
        //     cc.log("gametest is loaded")
        // } 
        // else 
        // {
        //     var bunldeurl = "http://192.168.65.151/hotupversion/remote/gametest"
        //     Global.gLoadBUndle(bunldeurl, { onFileProgress: (loaded, total) => console.log("bundle progress==", loaded, total) }, function (err, bundle) {
        //         if (err) {
        //             console.log("Load bundle error")
        //             return console.error(err);
        //         }
        //         console.log('load bundle successfully.', bundle)
                

        //     })
        // }

        Global.gShowLoading((layer)=>{
            layer.updataProgress(30)
            this.scheduleOnce(()=>{
                Global.gPreloadScene("TestScene",null,()=>{
                    layer.updataProgress(100)
                })
            },2)

        },(layer)=>{
            cc.director.loadScene("TestScene")
            // layer.bClose()
        })


    }

});
