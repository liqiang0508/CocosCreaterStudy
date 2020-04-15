
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


    onLoad () {

        var self = this
        
        var text = this.node.getChildByName("bg").getChildByName("text")
        text.getComponent(cc.Label).string = "LOL"
        this.text = text
        var btnyes = this.node.getChildByName("bg").getChildByName("btn_yes")
        var btn_no = this.node.getChildByName("bg").getChildByName("btn_no")
        var btn_middle = this.node.getChildByName("bg").getChildByName("btn_middle")

        ua.darkButton(btn_middle, function () {
            self.BtnCall(2)
            self.bClose()
        })
        ua.darkButton(btnyes, function () {
            self.BtnCall(1)
            self.bClose()
        })
        ua.darkButton(btn_no, function () {
            self.BtnCall(0)
            self.bClose()

        })

        
    },

    setTitle(str){
        this.text.getComponent(cc.Label).string = str;
    },
    
    AddClickBtnCall(call){
        this.ClickCall = call
    },

    BtnCall(index)
    {
        if( this.ClickCall )
        {
            this.ClickCall(index)
        }
    },
    
    bClose()
    {
        if(this.node)
        {
            this.node.destroy()
            this.node.removeFromParent()
           
        }
    },
    start () {

    },


    // update (dt) {},
});
