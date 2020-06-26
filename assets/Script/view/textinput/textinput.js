
var BaseComponent = require("BaseComponent")
cc.Class({
    extends: BaseComponent,

    properties: {
        AimType:{
            default:2,
            override:true
        }
    },

    // LIFE-CYCLE CALLBACKS:
    onDestroy(){
        this._super()
    },
    onLoad () {
        this._super()
        var self = this
        var btndone = this.node.getChildByName("panel").getChildByName("btn_done")
        ua.darkButton(btndone,function(){
            if (self.call)
            {
                var text = self.Editbox.getComponent(cc.EditBox).string
                self.call(text)
            }
            self.bClose()
        })

        this.Editbox = this.node.getChildByName("panel").getChildByName("EditBox")
        
    },
    show(call)
    {
        this.call = call
    },
    onbackpress(){
        this._super()

    },

    start () {

    },
});
