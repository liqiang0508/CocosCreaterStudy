
cc.Class({
    extends:require("BaseLayer"),
    properties:{
        resNodeName:
        {
            default:"prefabs/AlertLayer",
            override:true
        }
    },
    

    initUI(option)
    {

        var self = this
        
        var text = this.rootNode.getChildByName("bg").getChildByName("text")
        text.getComponent(cc.Label).string = "LOL"

        var btnyes = this.rootNode.getChildByName("bg").getChildByName("btn_yes")
        var btn_no = this.rootNode.getChildByName("bg").getChildByName("btn_no")
        var btn_middle = this.rootNode.getChildByName("bg").getChildByName("btn_middle")

        ua.darkButton(btn_middle,function(){
                    self.bClose()
        })
        ua.darkButton(btnyes,function(){
                    self.bClose()
        })
        ua.darkButton(btn_no,function(){
                    self.bClose()
      
        })
    }

    // update (dt) {},
});
