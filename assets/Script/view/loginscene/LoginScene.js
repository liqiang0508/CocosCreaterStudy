var VersionManager = require("VersionManager")
var Global = require("Global")
var DevicesInfo = require("Devices")
cc.Class({
    extends: cc.Component,

    properties: {
        
        VersionText: {
            default: null,
            type: cc.Label,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    },

    start () {
        var self = this
        if(Global.GgameType == 1)//正式包
        {
            this.VersionText.string = DevicesInfo.getAppVersion()+"(R"+VersionManager.getScriptVersion()+")"
        }

        if(Global.GgameType == 3)//debug包
        {
            this.VersionText.string =DevicesInfo.getAppVersion()+"(D"+VersionManager.getScriptVersion()+")"
        }

        var gotest = cc.find("uipanel/gotest",this.node)
        ua.darkButton(gotest,function(){
            self.goTestScene()
        })

    },
    goTestScene(){
        cc.director.loadScene("TestScene")

    }

});
