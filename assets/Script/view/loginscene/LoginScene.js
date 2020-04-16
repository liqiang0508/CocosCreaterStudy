var VersionManager = require("VersionManager")
var Global = require("Global")
cc.Class({
    extends: cc.Component,

    properties: {
        
        VersionText: {
            default: null,
            type: cc.Label,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        if(Global.GgameType == 1)//正式包
        {
            this.VersionText.string = "R"+VersionManager.getScriptVersion()
        }

        if(Global.GgameType == 3)//debug包
        {
            this.VersionText.string = "D"+VersionManager.getScriptVersion()
        }
        
    },

    // update (dt) {},
});
