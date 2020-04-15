
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

        this.btnyes = btnyes
        this.btn_no = btn_no
        this.btn_middle = btn_middle

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

    setTitle(str){//设置提示文字

        this.text.getComponent(cc.Label).string = str;
    },

    setButtonInfo(info)//按钮显示文字  ["btn_yes","btn_no","btn_middle"]
    {
        if (info.length == 1) {//显示一个按钮
            this.btnyes.active = false
            this.btn_no.active = false
            this.btn_middle.active = true

            this.setButtonText(this.btn_middle,info[0])
        }

        if (info.length == 2) {//显示2个按钮
            this.btnyes.active = true
            this.btn_no.active = true
            this.btn_middle.active = false

            this.setButtonText(this.btnyes,info[0])
            this.setButtonText(this.btn_no,info[1])
            
        }

        if (info.length == 3) {//显示3个按钮
            this.btnyes.active = true
            this.btn_no.active = true
            this.btn_middle.active = true

            this.setButtonText(this.btnyes,info[0])
            this.setButtonText(this.btn_no,info[1])
            this.setButtonText(this.btn_middle,info[2])
        }

    },
    
    AddClickBtnCall(call){
        this.ClickCall = call
    },

    BtnCall(index) //yesbtn:1 nobtn：0 middbtn：2
    {
        if( this.ClickCall )
        {
            this.ClickCall(index)
        }
    },

    setButtonText(btn,text){
        var lable = btn.getChildByName("Background").getChildByName("Label")
        if(lable)
        {
            lable.getComponent(cc.Label).string = text
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
