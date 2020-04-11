
var OnlineWs = require("OnlineWS")
var GameClient = {

    initData: function () {

        cc.log("GameClient initData***")
        var self = this
       
    },

    connect: function (host, port, call) {
        this.ws = new OnlineWs();
        this.ws.connect(host, port);
        this.ws.setConnectCall(function () {//连接成功回调
            if (call) {
                call()
            }
        });
    },
    getConnectState: function () {
        if (this.ws) {
            return this.ws.getWsState()
        }
        return false
    }

}


module.exports = GameClient;
