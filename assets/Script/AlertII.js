
cc.Class({
    extends:require("BaseLayer"),
    properties:{
        resNodeName:"prefabs/AlertLayer",
    },
    
    sayHello:function(){

        cc.log("AlertII sayHello")
    },

    ctor(){
        
    },

    initUI(option)
    {
        cc.log("AlertII initUI",option)
        var self = this
        
        var text = this.rootNode.getChildByName("text")
        text.getComponent(cc.Label).string = "LOL"

        var btnyes = this.rootNode.getChildByName("btn_yes")
        var btn_no = this.rootNode.getChildByName("btn_no")
        var btn_middle = this.rootNode.getChildByName("btn_middle")

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
