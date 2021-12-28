var EventManager = {
    on(node:cc.Node, eventName:string, call:Function) {
        node.on(eventName, (event) => {
            if (call) {
                call(event)
            }
        })
    },
    off(node:cc.Node, eventName:string, call:Function) {
        node.off(eventName, (event) => {
            if (call) {
                call()
            }
        })
    },
    dispatchEvent(node:cc.Node, eventName:string, data:Object) {
        var event = new cc.Event.EventCustom(eventName, true)
        if (data) {
            event.setUserData(data)
        }
        node.dispatchEvent(event)
    }
}

globalThis.EventManager = EventManager;