/*
 * @Descripttion: 
 * @version: 
 * @Author: Lee
 * @Date: 2020-06-28 10:52:53
 * @LastEditTime: 2020-08-27 11:50:44
 */

cc.Class({
    extends: cc.Component,

    properties: {

    },
    // 适配bg节点

    onLoad() {


       
       
   
    },

    start() {
        cc.find('Canvas').on('resize',this.resize.bind(this));
        
        this.resize()
    },

    resize(){
        var size  = cc.view.getVisibleSize()

        var scale = Math.min(this.node.width/size.width,this.node.height/size.height)
        
        this.node.scale =  this.node.scale/scale
        
    }

});
