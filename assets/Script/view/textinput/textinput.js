

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:
    onDestroy(){

    },
    onLoad () {

  
        var btndone = this.node.getChildByName("uicontent").getChildByName("panel").getChildByName("btn_done")
        UITool.addBtnClick(btndone,()=>{
            if (this.call)
            {
                var text = this.Editbox.getComponent(cc.EditBox).string
                window.Save.set("LastHoturl",text)//记录上次输入的url
                this.call(text)
            }
            this.bClose()
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


    },

    start () {

    },
});
