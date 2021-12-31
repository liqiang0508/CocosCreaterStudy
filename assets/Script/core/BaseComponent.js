var KeypadDispatch = require("KeypadDispatch");

cc.Class({
    extends: cc.Component,

    properties: {
        mStarted:false
    },
    onLoad() {
        KeypadDispatch.getInstance().add(this)
    },

    start() {
        this.mStarted = true
    },
    onDestroy() {
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
