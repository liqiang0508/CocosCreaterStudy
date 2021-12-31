

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:
    onDestroy(){

    },
    onLoad () {

       
        var btnclose = this.node.getChildByName("bg").getChildByName("btn_close")
        UITool.addBtnClick(btnclose,()=>{
            this.bClose()
        })
    },
    onbackpress(){


    },

    start () {

    },

    // update (dt) {},
});
