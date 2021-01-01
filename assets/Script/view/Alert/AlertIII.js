
var BaseComponent = require("BaseComponent")
cc.Class({
    extends: BaseComponent,

    properties: {
        AimType:{
            default:1,
            override:true
        }
    },

    onDestroy(){
        this._super()
    },
    onLoad () {
        this._super()
        
        
        var text = this.node.getChildByName("bg").getChildByName("text")
        text.getComponent(cc.Label).string = "LOL"
        this.text = text
        var btnyes = this.node.getChildByName("bg").getChildByName("btn_yes")
        var btn_no = this.node.getChildByName("bg").getChildByName("btn_no")
        var btn_middle = this.node.getChildByName("bg").getChildByName("btn_middle")

        this.btnyes = btnyes
        this.btn_no = btn_no
        this.btn_middle = btn_middle

        ua.darkButton(btn_middle,  () =>{
            this.BtnCall(2)
            this.bClose()
        })
        ua.darkButton(btnyes, () =>{
            this.BtnCall(1)
            this.bClose()
        })
        ua.darkButton(btn_no, () =>{
            this.BtnCall(0)
            this.bClose()

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

        if (info.length == 0) {//显示一个按钮
            this.btnyes.active = false
            this.btn_no.active = false
            this.btn_middle.active = true

            this.setButtonText(this.btn_middle,"Yes")
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
    
    showAlert(text,btninfo,call)
    {
        this.EnterAni()
        this.setTitle(text)
        this.setButtonInfo(btninfo)
        this.AddClickBtnCall(call)
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
    
    

    start () {

    },


    // update (dt) {},
});
