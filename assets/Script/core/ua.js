ua = {}



ua.darkButton = function(node,call)
{
    node.on(cc.Node.EventType.TOUCH_END,function(){
        if(call)
        {
            call()
            
        }

    },this)

    node.on(cc.Node.EventType.TOUCH_CANCEL,function(){
        if(call)
        {
            call()
            
        }

    },this)
}


// module.exports = ua;