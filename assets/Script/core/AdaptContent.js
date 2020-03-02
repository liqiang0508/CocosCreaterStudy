
cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.setContentSize(cc.size(cc.sys.getSafeAreaRect().width,cc.sys.getSafeAreaRect().height))
    },

    start () {

    },

});
