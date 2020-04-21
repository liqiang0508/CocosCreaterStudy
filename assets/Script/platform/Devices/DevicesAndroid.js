
const className ="com/casino/game/ApplicationUtil"
var DevicesAndroid = {
    getDevicesID:function(){
       // console.log("TODO DevicesAndroid getDevicesID")
        var result = jsb.reflection.callStaticMethod(className, "getDeviceIdentifier", "()Ljava/lang/String;");
        return result
    },
    getAppVersion:function(){
        var result = jsb.reflection.callStaticMethod(className, "getApplicationVersion", "()Ljava/lang/String;");
        //console.log("TODO DevicesAndroid getAppVersion===="+result,className)
        return result
        
    }

}


module.exports = DevicesAndroid;