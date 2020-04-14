
cc.Class({
    name:"baseLayer",
    properties:{
        resNodeName:"",//加载prefab的名称
        rootNode:{
            override:true,
            default:null,
        },
    },
    
    sayHello:function(){

        cc.log("AlertII sayHello")
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
                cc.log("Load error---")
            }
            else
            {    
                var newNode = cc.instantiate(prefab);
                self.rootNode = newNode
                cc.log(option)
                cc.log(option["Parent"])
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
