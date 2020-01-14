
var Global = require("Global")
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
        Text: {
            default: null,
            type: cc.Label,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        var self = this
        var GameClient = require("GameClient")
        GameClient.initWs("54.179.180.39", "8089", function () {
           
            
            Global.gPreloadScene("helloworld", function (progress) {
                self.Text.string = progress
                // console.log(progress)
            },
                function (scenename, error) {
                    if (!error) {
                        Global.gSchduleOnce(self, function () {
                            cc.director.loadScene(scenename, function () {

                                //    console.log("loadScene111")
                                var Text = cc.director.getScene().getChildByName('Canvas').getChildByName("label")
                                //    console.log(Text)
                                Text.getComponent(cc.Label).string = "996"
                            })
                        }, 1)
                    }
                })
        })



    },

    // update (dt) {},
});
