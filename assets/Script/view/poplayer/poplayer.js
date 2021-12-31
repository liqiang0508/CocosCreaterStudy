
var BaseComponent = require("BaseComponent")
cc.Class({
    extends: BaseComponent,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:
    onDestroy(){
        this._super()
    },
    onLoad () {
        this._super()
       
        var btnclose = this.node.getChildByName("bg").getChildByName("btn_close")
        UITool.addBtnClick(btnclose,()=>{
            this.bClose()
        })
    },
    onbackpress(){
        this._super()

    },

    start () {

    },

    // update (dt) {},
});
