
var BaseComponent = require("BaseComponent")
cc.Class({
    extends: BaseComponent,

    properties: {
        AimType:{
            default:1,
            override:true
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var self = this
        var btnclose = this.node.getChildByName("btn_close")
        ua.darkButton(btnclose,function(){
            self.bClose()
        })
    },

    start () {

    },

    // update (dt) {},
});
