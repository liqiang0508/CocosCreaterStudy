
//slots cell 组件

const iconTexture = ["stop_banana","stop_begemot","stop_cocktail","stop_crocodile","stop_kakadu","stop_lion","stop_man","stop_monkey"];
cc.Class({
    extends: cc.Component,

    properties: {
       
    },


    setBgRes(_index){
        if (this.bg)
        {
            let sprite = this.bg.getComponent(cc.Sprite);
            if(sprite)
            {

                var index = _index;//random texture
                var name = iconTexture[index];
                var path =  "slots/"+name
                cc.resources.load(path,function(err,sp){

                    if(err)
                    {
                        cc.log("err==",err)
                        return 
                    }
                    
                    if (sp) {
                        // cc.log(sprite)
                        sprite.spriteFrame = new cc.SpriteFrame(sp)
                    }

                })
        
            }
        }   
        else{

            cc.log("this.bg  不存在")
        }

    },

    seTextString(str){
        if (this.textNode)
        {
            this.textNode.getComponent(cc.Label).string = str
        }   
        else{

            cc.log("this.textNode  不存在")
        }
        
    },
    onLoad () {
        this.bg = this.node
        this.textNode = cc.find("text",this.node)
    },

    start () {

    },

    // update (dt) {},
});
