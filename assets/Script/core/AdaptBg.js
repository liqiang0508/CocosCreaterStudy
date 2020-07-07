
cc.Class({
    extends: cc.Component,

    properties: {

    },
    // 适配bg节点

    onLoad() {


       
       
   
    },

    start() {
        
        var size  = cc.view.getVisibleSize()

        var scale = Math.min(this.node.width/size.width,this.node.height/size.height)
        
        this.node.scale =  this.node.scale/scale

    },

});
