
cc.Class({
    extends: cc.Component,

    properties: {

    },
    // 适配ui节点
    // LIFE-CYCLE CALLBACKS:
    //设置内容成大小
    onLoad() {

        this.node.setContentSize(cc.view.getVisibleSize())
    
        if(cc.sys.isNative&&cc.sys.os == cc.sys.OS_IOS)
        {
            this.node.setContentSize(cc.sys.getSafeAreaRect())
            
        }
        
        
       
    },

    start() {

    },

});
