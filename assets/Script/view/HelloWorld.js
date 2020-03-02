var Global = require("Global")
var Base64Tool = require("Base64Tool")
var VersionManager = require("VersionManager")
var Devices = require("Devices")


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
        cc.log("hello start")
        var GameClient = require("GameClient")
      
        cc.log("connect state",GameClient.getConnectState())
        var url = "https://httpbin.org/get?show_env=1"
        var HttpHelp = require("HttpHelper")
        HttpHelp.sendHttpRequest(url,function(data){
            if(data)
            {
                data =  JSON.parse(data);
                cc.log("data=",data["args"]["show_env"])
               
            }
           
        })

        var ConstantItem  = require("ConstantItem")
        cc.log(ConstantItem[1])

        var timeStamp = new Date().getTime()//时间戳

        cc.log("timeStamp=====",timeStamp,new Date().toLocaleDateString())
        cc.log("timeStamp=====",timeStamp,new Date().toLocaleString())
        cc.log("timeStamp=====",timeStamp,new Date().toLocaleTimeString())
        // cc.log(window.Save.get("loginid",timeStamp))
        var id = window.Save.get("decicesID",timeStamp)
        if (id==timeStamp)
        {
            window.Save.set("decicesID",timeStamp)
        }
       
        cc.log("Devices===id",Devices.getDevicesID(),cc.sys.os)

        
      
      

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
       
        Global.sayHello()
        // this.num = 0;
        // var self = this
        // this.label.string = this.text;
        // var Text = this.node.getChildByName("label")
        // // Text.getComponent(cc.Label).string = "LoL"

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
