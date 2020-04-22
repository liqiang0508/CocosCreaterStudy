
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
    onDestroy(){
        this._super()
    },
    onLoad () {
        this._super()
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
