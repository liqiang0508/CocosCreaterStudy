
var Global = require("Global")
var VersionManager = require("VersionManager")
var GameClient = require("GameClient")
var xxtea = require("xxtea")
let i18n = require("i18n")
var Package = require("Package")
var HttpHelper = require("HttpHelper");
cc.Class({
    extends: cc.Component,

    properties: {

        Text: {
            default: null,
            type: cc.Label,
        }
    },



    onLoad() { },

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
        //Package
        var data = Package.biuldReq("Hello",{a:1,c:2})
        cc.log("data-------------",data)
        cc.log("data-------------2",data.encode())
        //xxtea
        var str = "Hello World! 你好，中国🇨🇳！";
        var key = "1234567890";
        var encrypt_data = xxtea.encryptToString(str, key);
        console.log("encrypt_data=",encrypt_data);
        var decrypt_data = xxtea.decryptToString(encrypt_data, key);
        console.log("decrypt_data==", decrypt_data);

        //some test
        cc.log("window.DISTRIBUTE_CHANNEL ==",window.DISTRIBUTE_CHANNEL,cc.sys.isNative,cc.sys.os )
        i18n.init("zh")
        cc.log("i18n===",i18n.t("STR_COREPLAY_BUTTON_FOLD"))
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
