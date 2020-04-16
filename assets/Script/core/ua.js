ua = {}


//点击事件
ua.darkButton = function(node,call)
{
    node.on(cc.Node.EventType.TOUCH_END,function(event){
        if(call)
        {
            call(event)
            
        }

    })

    
}

//加载预制资源
ua.loadPrefabRes = function(filepath,call)
{
    cc.loader.loadRes(filepath, function (err, prefab) {
        if(err)
        {
            cc.error("Load error===="+filepath)
            call(undefined)
        }
        else
        {    
            var newNode = cc.instantiate(prefab);
            call(newNode)
            cc.loader.setAutoRelease(filepath,true)
        }
    })
}
