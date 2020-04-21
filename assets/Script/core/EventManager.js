//事件分发

var EventManager = {}


//注册事件
EventManager.on = function(node,eventName,call)
{

    node.on(eventName,function(event){

        if(call)
        {
            call(event)
        }
    })

}

//事件分发
EventManager.dispatchEvent = function(node,eventName,data)
{

    var event = new cc.Event.EventCustom(eventName, true)
    if(data)
    {
        event.setUserData(data)
    }
   
    node.dispatchEvent(event)

}


//event define
RefreshInfo = "refreshinfo";