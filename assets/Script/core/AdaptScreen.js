
cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var designSize = cc.view.getDesignResolutionSize()//设计尺寸
        var realSize = cc.view.getVisibleSize()//可见尺寸

        // console.log("designSize==",designSize)
        // console.log("realSize==",realSize)
        var scaleX = realSize.width/designSize.width
        var scaleY = realSize.height/designSize.height
        if(realSize.width>realSize.height)//横屏
        {
           
            cc.Canvas.instance.fitHeight = true
            cc.Canvas.instance.fitWidth = false
        }
        else//竖屏
        {

            cc.Canvas.instance.fitHeight = false
            cc.Canvas.instance.fitWidth = true

        }
       
    },

    start () {

    },

});
