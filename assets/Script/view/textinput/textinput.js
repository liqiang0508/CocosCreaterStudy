
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
        var btndone = this.node.getChildByName("uicontent").getChildByName("panel").getChildByName("btn_done")
        ua.darkButton(btndone,function(){
            if (self.call)
            {
                var text = self.Editbox.getComponent(cc.EditBox).string
                window.Save.set("LastHoturl",text)//记录上次输入的url
                self.call(text)
            }
            self.bClose()
        })

        this.Editbox = this.node.getChildByName("uicontent").getChildByName("panel").getChildByName("EditBox")
        
    },
    show(call)
    {
        this.call = call
        var lasturl = window.Save.get("LastHoturl",null)
        if  (lasturl)
        {
            this.Editbox.getComponent(cc.EditBox).string = lasturl
        }
        this.Editbox.getComponent(cc.EditBox).setFocus()
    },
    onbackpress(){
        this._super()

    },

    start () {

    },
});
