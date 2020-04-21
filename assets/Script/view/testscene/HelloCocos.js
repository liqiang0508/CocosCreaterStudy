
cc.Class({
    extends: cc.Component,

    properties: {
      
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        var self = this
        this.node.on(cc.Node.EventType.TOUCH_END, function () {

            cc.log("Hellococos")

            EventManager.dispatchEvent(self.node, RefreshInfo, { "name": "Lee123" })
        })

    },

    // update (dt) {},
});
