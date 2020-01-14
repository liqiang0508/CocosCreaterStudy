var Global = require("Global")
var Base64Tool = require("Base64Tool")
const Buffer = require('buffer').Buffer;
cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!',
        num: 0
    },
    start() {
        var GameClient = require("GameClient")
        // GameClient.initData()
        // GameClient.initWs("54.179.180.39","8089",function(){
        cc.log("connect state",GameClient.getConnectState())
        var url = "https://httpbin.org/get?show_env=1"
        var HttpHelp = require("HttpHelper")
        HttpHelp.sendHttpRequest(url,function(data){
            if(data)
            {
                data =  JSON.parse(data);
                cc.log("data=",data["args"]["show_env"])
                // cc.log(Base64Tool.decode(data))//base64解密)
            }
           
        })

        var ConstantItem  = require("ConstantItem")
        cc.log(ConstantItem[1])
        
        window.Sound.playBackGround(window.SoundRes.MainBg);
        // })
        // Element.
        // Element.requestFullScreen(({navigationUI:"hide"}))
        // cc.view.enableAutoFullScreen(true)
        // if (!cc.sys.isNative) {
        //     var onFullScreenChange = function (event) {
        //         cc.log("onFullScreenChange")
        //     };
        //     var onFullScreenError = function (event) {
        //         cc.log("onFullScreenError",event)
        //     };
        //     // cc.view.enableAutoFullScreen(true)
        //     // cc.screen.requestFullScreen();
        // }
        // this.launchFullScreen(document.documentElement)

    },

    launchFullScreen: function (element) {
        if (element.requestFullScreen) { //webkit/edge
            element.requestFullScreen();
        } else if (element.mozRequestFullScreen) { //firefox
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        } else if (element.msRequestFullscreen) { //IE
            element.msRequestFullscreen();
        } else {
            return true;
        }
    },
    // use this for initialization
    onLoad: function () {
        console.log("helloworld onLoad")
        // this.num = 0;
        // var self = this
        // this.label.string = this.text;
        // var Text = this.node.getChildByName("label")
        // // Text.getComponent(cc.Label).string = "LoL"
        // Global.sayHello()
        // this.call = function () {
        //     self.num = self.num + 1;
        //     console.log("delay**" + self.num)
        //     if (self.num == 5) {
        //         console.log("gUnSchduleFun**" + self.num)
        //         Global.gUnSchduleFun(self,self.call)
        //     }
        // }
        // Global.gSchduleFun(this, this.call, 1)


    },

    // called every frame
    update: function (dt) {

    },
});
