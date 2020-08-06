/*
 * @Descripttion: 
 * @version: 
 * @Author: Lee
 * @Date: 2020-04-13 09:55:17
 * @LastEditTime: 2020-08-06 17:31:37
 */

cc.Class({
    extends: cc.Component,

    properties: {

    },
    // 适配ui节点
    // LIFE-CYCLE CALLBACKS:
    //设置内容成大小
    onLoad() {

       
        
            
        
        
        
       
    },

    start() {
        var safezize = cc.sys.getSafeAreaRect()
        var screensize = cc.view.getVisibleSize()
        // cc.log("safezize",safezize.width,safezize.height)
        // cc.log("screensize",screensize.width,screensize.height)
        // var h = screensize.height-(screensize.height-safezize.height)*2
        this.node.setContentSize(cc.size(safezize.width,safezize.height))
    },

});
