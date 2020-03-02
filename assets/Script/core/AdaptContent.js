
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:
    //设置内容成大小
    onLoad() {
        this.node.setContentSize(cc.view.getVisibleSize())
        // console.log(cc.view.getVisibleSize())
        // console.log(cc.sys.getSafeAreaRect())
    },

    start() {

    },

});
