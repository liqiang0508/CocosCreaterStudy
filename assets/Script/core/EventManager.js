//事件分发

//event define


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
//取消事件
EventManager.off = function(node,eventName,call)
{

    node.off(eventName,function(event){

        if(call)
        {
            call()
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

window.EventManager  = EventManager ;


window.RefreshInfo = "refreshinfo";

