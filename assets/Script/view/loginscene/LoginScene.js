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

    onLoad () {},

    start () {
        if(Global.GgameType == 1)//正式包
        {
            this.VersionText.string = "R"+VersionManager.getScriptVersion()
        }

        if(Global.GgameType == 3)//debug包
        {
            this.VersionText.string = "D"+VersionManager.getScriptVersion()
        }

        var showAlertIII = cc.find("uipanel/btn_Alert",this.node)
        ua.darkButton(showAlertIII, function (event) {

            // event.currentTarget.active = false
            Global.ShowAlert("666", ["LOL", "LOL1", "LOL#"], function (index) {
                cc.log("click==", index)
            })

        })
        
    },

    // update (dt) {},
});
