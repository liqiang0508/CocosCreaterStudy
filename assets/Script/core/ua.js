/*
 * @Descripttion: 
 * @version: 
 * @Author: Lee
 * @Date: 2020-04-15 09:27:48
 * @LastEditTime: 2020-08-12 14:57:05
 */
var ua = {}


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

//点击事件
ua.ClickNode = function(node,call)
{
    node.on(cc.Node.EventType.TOUCH_START,function(event){
        if(call)
        {
            call(event)
            
        }

    })

    
}

//加载预制资源
ua.loadPrefabRes = function(filepath,call)
{
    cc.resources.load(filepath, function (err, prefab) {
        if(err)
        {
            cc.error("ua.loadPrefabRes error===="+filepath)
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


window.ua = ua;