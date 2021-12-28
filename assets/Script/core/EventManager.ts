var EventManager = {
    init() {
        this.mEventTarget = new cc.EventTarget()
    },
    on(eventName: string, call: Function) {
        this.mEventTarget.on(eventName, (event) => {
            if (call) {
                call(event)
            }
        })
    },
    off(eventName: string, call: Function) {
        this.mEventTarget.off(eventName, (event) => {
            if (call) {
                call()
            }
        })
    },
    dispatchEvent(eventName: string, data: Object) {
        var event = new cc.Event.EventCustom(eventName, true)
        if (data) {
            event.setUserData(data)
        }
        this.mEventTarget.dispatchEvent(event)
    }
}
EventManager.init()
globalThis.EventManager = EventManager;