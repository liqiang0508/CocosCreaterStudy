// var Global = require("Global")
var Base64Tool = require("Base64Tool")
var DevicesInfo = require("Devices")

cc.Class({
    extends: cc.Component,

    properties: {
      
    },
    start() {
        cc.log("MainScene start")
        var GameClient = require("GameClient")
      
        // cc.log("connect state",GameClient.getConnectState())
        var url = "https://httpbin.org/get?show_env=1"
        var HttpHelp = require("HttpHelper")
        HttpHelp.sendHttpRequest(url,function(data){
            if(data)
            {
                data =  JSON.parse(data);
                cc.log("data==",data["args"]["show_env"])
               
            }
           
        })
    

        var Text = cc.director.getScene().getChildByName('Canvas').getChildByName("label")
        Text.getComponent(cc.Label).string = "设备版本号："+DevicesInfo.getAppVersion()+"\n"+"chanle"+globalThis.DISTRIBUTE_CHANNEL
        

        // cc.director.getScheduler().schedule(function(){

        //     cc.log("schdule===")
        // },this,1,0,0,false)
       
      

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
       

      


    },

    // called every frame
    update: function (dt) {

    },
});
