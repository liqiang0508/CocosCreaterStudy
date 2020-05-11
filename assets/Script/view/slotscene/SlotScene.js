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
        var self = this

        this.Slots = new Array()
        for(let i =1;i<=3;i++)
        {
            var slot = cc.find("content/slot"+i,this.node)
            this.Slots.push(slot)
        }
        var btn_spin = cc.find("UI/btn_spin",this.node)
     
        ua.darkButton(btn_spin,function(){
            cc.log("Start spin")
          
            for (var i = 0;i<self.Slots.length;i++) {
                let slot = self.Slots[i]
              
                let slotcompoent = slot.getComponent("Slot")
                if (slotcompoent) {
                    cc.log(i,slot)
                    slotcompoent.Spin()
                    let stopIndex = Math.floor(Math.random() * 8)

                    //请求服务器停止点显示什么图片
                    slotcompoent.StopAtIndex(stopIndex, function () {
                        console.log("stop-")
                    })


                   
                }
            }
        })
    },

    start () {
        var slot1 = cc.find("content/slot1",this.node)
        var bg = cc.find("content/bg",this.node)
        bg.height = slot1.height
        bg.width = slot1.width
       
    },

    // update (dt) {},
});