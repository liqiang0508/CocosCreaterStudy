
var BaseComponent = require("BaseComponent")
cc.Class({
    extends: BaseComponent,

    properties: {
    },


    setTitle(str){//设置提示文字

        this.mChild.text.getComponent(cc.Label).string = str;
    },

    setButtonInfo(info)//按钮显示文字  ["btn_yes","btn_no","btn_middle"]
    {
        if (info.length == 1) {//显示一个按钮
            this.mChild.btn_yes.active = false
            this.mChild.btn_no.active = false
            this.mChild.btn_middle.active = true

            this.setButtonText(this.mChild.btn_middle,info[0])
        }

        if (info.length == 0) {//显示一个按钮
            this.mChild.btn_yes.active = false
            this.mChild.btn_no.active = false
            this.mChild.btn_middle.active = true

            this.setButtonText(this.mChild.btn_middle,"Yes")
        }

        if (info.length == 2) {//显示2个按钮
            this.mChild.btn_yes.active = true
            this.mChild.btn_no.active = true
            this.mChild.btn_middle.active = false

            this.setButtonText(this.mChild.btn_yes,info[0])
            this.setButtonText(this.mChild.btn_no,info[1])
            
        }

        if (info.length == 3) {//显示3个按钮
            this.mChild.btn_yes.active = true
            this.mChild.btn_no.active = true
            this.mChild.btn_middle.active = true

            this.setButtonText(this.mChild.btn_yes,info[0])
            this.setButtonText(this.mChild.btn_no,info[1])
            this.setButtonText(this.mChild.btn_middle,info[2])
        }

    },
    
    fresh(){
        if (this.mText)
        {
            this.setTitle(this.mText)
        }
        if (this.mBtnInfo)
        {
            this.setButtonInfo(this.mBtnInfo)
        }
        if (this.mCall)
        {
            this.AddClickBtnCall(this.mCall)
        }
    },
    showAlert(text,btninfo,call)
    {
        console.log("showAlert showAlert" )
        this.mText = text
        this.mBtnInfo = btninfo
        this.mCall = call
        if(this.isStarted())
        {
            
           this.fresh()

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
    
    

    start () {
        console.log("showAlert start" )
        this.mChild={}
        UITool.getChildNode(this.mChild,this.node)
        UITool.addBtnClick(this.mChild.btn_middle,  () =>{
            this.BtnCall(2)
            this.bClose()
        })
        UITool.addBtnClick(this.mChild.btn_yes, () =>{
            this.BtnCall(1)
            this.bClose()
        })
        UITool.addBtnClick(this.mChild.btn_no, () =>{
            this.BtnCall(0)
            this.bClose()

        })
        UITool.addBtnClick(this.mChild.mask, () =>{
            this.bClose()
        })
        this.fresh()
    },
    bclose(){

        UITool.playAnimation(this.mChild)
    }


    // update (dt) {},
});
