
cc.Class({
    extends: cc.Component,

    properties: {

    },
    // 适配ui节点
    // LIFE-CYCLE CALLBACKS:
    //设置内容成大小
    onLoad() {

        if(cc.sys.isNative&&cc.sys.os == cc.sys.OS_IOS)
        {
            this.node.setContentSize(cc.sys.getSafeAreaRect())
        }
        if(cc.sys.isNative&&cc.sys.os == cc.sys.OS_ANDROID)
        {
            this.node.setContentSize(cc.view.getVisibleSize())
        }
        
       
    },

    start() {

    },

});
