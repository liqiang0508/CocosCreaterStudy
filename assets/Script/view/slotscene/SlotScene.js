// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        var btn_spin = cc.find("UI/btn_spin",this.node)
        var slot1 = cc.find("content/slot1",this.node)
        ua.darkButton(btn_spin,function(){
            cc.log("Start spin")
            var slotcompoent = slot1.getComponent("Slot")
            if(slotcompoent)
            {
                slotcompoent.Spin()
                slotcompoent.StopAtIndex(Math.floor(Math.random()*8),function(){
                    console.log("stop-")
                })

            }
        })
    },

    start () {
        var slot1 = cc.find("content/slot1",this.node)
        var bg = cc.find("content/bg",this.node)
        bg.height = slot1.height

    },

    // update (dt) {},
});
