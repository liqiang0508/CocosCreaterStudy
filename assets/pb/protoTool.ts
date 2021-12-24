//@ts-nocheck
/*
 * @Description: 
 * @Author: li qiang
 * @Date: 2021-12-24 15:02:42
 * @LastEditTime: 2021-12-24 15:57:43
 */
var gameProto = require("gameProto")
let ProtoTool = {

    encode: function (cmd, data) {
        var res = null
        if (CMD2PB[cmd]) {
            var pak = CMD2PB[cmd].pak
            let arry = pak.split(".")
            let message = null
            for (var i = 0; i < arry.length; i++) {
                var key = arry[i]
                if (message) {
                    message = message[key]
                } else {
                    message = gameProto[key]
                }
            }

            res = message.create(data)
            res = message.encode(res).finish()
        }
        return res
    },

    decode: function (cmd, bytes) {
        var res = null

        if (CMD2PB[cmd]) {
            var pak = CMD2PB[cmd].pak
            let arry = pak.split(".")
            let message = null
            for (var i = 0; i < arry.length; i++) {
                var key = arry[i]
                if (message) {
                    message = message[key]
                } else {
                    message = gameProto[key]
                }
            }
            res = message.decode(bytes)
        }
        return res
    }

}

globalThis.ProtoTool = ProtoTool