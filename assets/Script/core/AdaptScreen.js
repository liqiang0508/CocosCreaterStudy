
cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var designSize = cc.view.getDesignResolutionSize()//设计尺寸
        var realSize = cc.view.getCanvasSize()//设备真实尺寸

        var scaleX = realSize.width/designSize.width
        var scaleY = realSize.height/designSize.height

        if(scaleX>scaleY)//宽度大于高
        {
            cc.Canvas.instance.fitHeight = true
            cc.Canvas.instance.fitWidth = false
        }
        else
        {
            cc.Canvas.instance.fitHeight = false
            cc.Canvas.instance.fitWidth = true
        }
    },

    start () {

    },

});
