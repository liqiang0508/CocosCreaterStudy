const Buffer = require('buffer').Buffer;
var Base64Tool = {};

//base64加解密工具类，主要用于发送json数据加密，接收数据解密

Base64Tool.encode = function(str)//字符串===》base64编码
{

    var buf = new Buffer(str);
    // cc.log("base64=",buf.toString("base64"));
    return buf.toString("base64");
},


Base64Tool.decode = function(str)//字符串<<===base64编码
{
    var decode = new Buffer(str,"base64");
    // cc.log("decode=",decode.toString());  
    return decode.toString();

},


module.exports = Base64Tool;