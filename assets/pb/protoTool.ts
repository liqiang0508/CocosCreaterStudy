//@ts-nocheck
/*
 * @Description: 
 * @Author: li qiang
 * @Date: 2021-12-24 15:02:42
 * @LastEditTime: 2022-07-21 16:20:06
 */
var gameProto = require("gameProto")
let ProtoTool = {
    //根据协议编码pb数据
    encode: function (cmd, data) {
        var bytesData = null
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

            bytesData = message.create(data)
            bytesData = message.encode(bytesData).finish()
            // bytesData = bytesData.slice().buffer
            // bytesData = bytesData.buffer.slice(bytesData.byteOffset, bytesData.byteLength + bytesData.byteOffset)
        }
        return bytesData
    },
    //根据协议解码pb数据
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
            res = message.decode(new Uint8Array(bytes))
        }
        return res
    },

    Uint8ArrayToString: function (fileData) {
        var dataString = "";
        for (var i = 0; i < fileData.length; i++) {
            dataString += String.fromCharCode(fileData[i]);
        }

        return dataString

    },

    stringToUint8Array: function (str) {
        var arr = [];
        for (var i = 0, j = str.length; i < j; ++i) {
            arr.push(str.charCodeAt(i));
        }

        var tmpUint8Array = new Uint8Array(arr);
        return tmpUint8Array
    },

    /**
     * @description: 根据协议编码pb数据
     * @param {*} cmd 协议号
     * @param {*} data 协议数据
     * @return {*}
     */
    packData: function (cmd, data) {
        var byteData = this.encode(cmd, data)
        var data  = {cmd:cmd,data:byteData}
        var message = gameProto.tutorial.Package.create(data)
        var bytesData = gameProto.tutorial.Package.encode(message).finish()
        return bytesData
    },

    /**
     * @description: 根据协议号解析数据
     * @param {*} cmd  协议号
     * @param {*} byteData 数据
     * @return {*}
     */
    parseData: function (byteData) {
        var message = gameProto.tutorial.Package.decode(byteData)
        var cmd = message.cmd 
        var data = message.data
        return {cmd:cmd,data:this.decode(cmd,data)}
    },

}

globalThis.ProtoTool = ProtoTool