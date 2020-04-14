var Alert = {}
//公共弹框
// txt 弹框文字
// btnInfo 按钮信息
// call 回调
Alert.show = function(txt,btnInfo,call)//
{
    var self = this
    cc.loader.loadRes("prefabs/AlertLayer", function (err, prefab) {
        if(err)
        {
            cc.log("Load error---")
        }
        else
        {
            if(Alert.content)
            {
                return;
            }
          
            var newNode = cc.instantiate(prefab);
            cc.director.getScene().getChildByName("Canvas").addChild(newNode);
            newNode.setPosition(cc.v2(0,0))

            Alert.content = newNode
            //
            var text = Alert.content.getChildByName("text")
            text.getComponent(cc.Label).string = txt

            var btnyes = Alert.content.getChildByName("btn_yes")
            var btn_no = Alert.content.getChildByName("btn_no")
            var btn_middle =  Alert.content.getChildByName("btn_middle")
          
            if(btnInfo.length == 1)
            {
                btn_no.active = false
                btnyes.active = false
                self.setButtonText(btn_middle,btnInfo[0])
            }
            if(btnInfo.length == 2)
            {
                // btn_middle.opacity = 0
                btn_middle.active = false
                self.setButtonText(btnyes,btnInfo[0])
                self.setButtonText(btn_no,btnInfo[1])
            }
           

            // if(length())
            ua.darkButton(btn_middle,function(){

                if(call)
                    {
                        call(0)
                        self.remove()
                    }

            })
            ua.darkButton(btnyes,function(){

                if(call)
                    {
                        call(0)
                        self.remove()
                    }

            })
            ua.darkButton(btn_no,function(){

                if(call)
                    {
                        call(1)
                        self.remove()
                    }

            })

        }
       
    });
},

Alert.setButtonText = function(btnNode,text)
{
   var lable = btnNode.getChildByName("Background").getChildByName("Label")
   if(lable)
   {
       lable.getComponent(cc.Label).string = text
   }
},

Alert.remove = function()
{
    if( Alert.content )
    {
        Alert.content.destroy()
        Alert.content.removeFromParent()
        Alert.content = null
    }
}




module.exports = Alert;