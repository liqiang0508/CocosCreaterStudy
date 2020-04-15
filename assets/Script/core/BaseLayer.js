
cc.Class({
    name:"baseLayer",
    properties:{
        resNodeName:{//加载prefab的名称
            default:null,
            override:true
        },
        rootNode:{//根节点
            default:null,
            override:true
        },
    },
    

    ctor(option){
       
        this.LoadRes(option)
    },

    addToParent(parentNode,pos){
       
        this.rootNode.parent = parentNode
        this.rootNode.setPosition(pos)

    },
    LoadRes(option)
    {
        var self = this
        cc.loader.loadRes(this.resNodeName, function (err, prefab) {
            if(err)
            {
                cc.log("Load error===="+this.resNodeName)
            }
            else
            {    
                var newNode = cc.instantiate(prefab);
                self.rootNode = newNode
                // cc.log(option)
                // cc.log(option["Parent"])
                if(option["Parent"])
                {
                    self.addToParent(option["Parent"],option["pos"])
                }
                self.initUI(option)
            }
        })

    },

    initUI(option)
    {

    },

    bClose()
    {
        if(this.rootNode)
        {
            this.rootNode.destroy()
            this.rootNode.removeFromParent()
            this.rootNode = null
        }
    }


    // update (dt) {},
});
