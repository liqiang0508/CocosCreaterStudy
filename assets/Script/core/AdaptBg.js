
cc.Class({
    extends: cc.Component,

    properties: {

    },
    // 适配bg节点
    // LIFE-CYCLE CALLBACKS:
    //设置可见区域大小
    onLoad() {

        this.node.setContentSize(cc.view.getVisibleSize())
   
    },

    start() {

    },

});
