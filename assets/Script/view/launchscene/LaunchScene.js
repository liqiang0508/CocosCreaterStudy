
var Global = require("Global")
var VersionManager = require("VersionManager")
var GameClient = require("GameClient")

cc.Class({
    extends: cc.Component,

    properties: {

        Text: {
            default: null,
            type: cc.Label,
        }
    },



    onLoad() {
        cc.log("launchsene onLoad")
    },

    start() {
        cc.log("launchsene start",window.DISTRIBUTE_CHANNEL)
        var self = this
       
        if (cc && cc.sys.isNative&&window.DISTRIBUTE_CHANNEL!= chanel.WIN32) {//native  自带的模拟器不进行热更新
            VersionManager.checkUpdate(Global.Ghotupdateurl, function (code) {
               
                if (code == 0||code ==100) {//热更新成功或者不用更新
                    self.goHomeScene()
                }
                else {//热更新error
                    cc.log("热更新返回--Erorcode", code)
                    self.Text.string = "ErrorCode====="+code
                }
            }, function (progress) {
                cc.log("progress===", progress)
                self.Text.string = "updateing" + progress + "%"
            })
        }
        else {//web
            self.goHomeScene()

        }
        
    },

    goHomeScene() {
        var self = this
        GameClient.connect("54.179.180.39", "8089", function () {
            Global.gPreloadScene("MainScene", function (loadprogress) {
                // self.Text.string = progress
                // console.log(progress)
            },
            function (scenename, error)
            {
                if (!error) 
                {

                    cc.director.loadScene(scenename, function () 
                    {
                        var Text = cc.director.getScene().getChildByName('Canvas').getChildByName("label")
                        Text.getComponent(cc.Label).string = "996"
                    })
                  
                }
            })
        })
    },

    // update (dt) {},
});
