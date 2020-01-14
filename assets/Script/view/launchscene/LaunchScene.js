
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



    onLoad () {},

    start() {
        var self = this

        if (cc && cc.sys.isNative) {//native
            VersionManager.checkUpdate(Global.Ghotupdateurl, function (code) {
                console.log("checkUpdate===code", code)
                self.Text.string = code
                if (code == 0) {//热更新成功
                    self.goHomeScene()
                }
                else {//热更新error
                 
                }
            }, function (progress) {
                console.log("progress===", progress)
                self.Text.string = "updateing" + progress + "%"
            })
        }
        else {//web
            self.goHomeScene()

        }
    },

    goHomeScene() {
        var self = this
        GameClient.initWs("54.179.180.39", "8089", function () {
            Global.gPreloadScene("helloworld", function (progress) {
                // self.Text.string = progress
                // console.log(progress)
            },
                function (scenename, error) {
                    if (!error) {
                        Global.gSchduleOnce(self, function () {
                            cc.director.loadScene(scenename, function () {

                                var Text = cc.director.getScene().getChildByName('Canvas').getChildByName("label")
                                Text.getComponent(cc.Label).string = "996"
                            })
                        }, 1)
                    }
                })
        })
    },

    // update (dt) {},
});
