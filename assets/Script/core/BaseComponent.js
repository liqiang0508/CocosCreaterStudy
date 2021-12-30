var KeypadDispatch = require("KeypadDispatch");

cc.Class({
    extends: cc.Component,

    properties: {
        AimType: {// AimType = 1;                    动画效果:  1:弹出 2:渐变 3:从右到左滑入 4:从左到右滑入
            default: 0,
            override: true,
            tooltip: "弹出动画  1:弹出 2:渐变"
        },
        mStarted:false
    },
    onLoad() {
        console.log("BaseComponent onLoad")
        KeypadDispatch.getInstance().add(this)
    },

    start() {
        this.mStarted = true
    },
    onDestroy() {
        console.log("BaseComponent onDestroy")
        this.node.targetOff(this)
        KeypadDispatch.getInstance().remove()
    },

    isStarted(){
        return this.mStarted
    },

    bClose() {

        this.node.destroy()

    },


    onbackpress() {

        this.bClose()
    },
    


    // update (dt) {},
});
