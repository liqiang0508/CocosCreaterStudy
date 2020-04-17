
var DevicesAndroid = {
    className:"com/casino/game/ApplicationUtil",
    getDevicesID:function(){
        //cc.log("TODO DevicesAndroid getDevicesID")
        var result = jsb.reflection.callStaticMethod(this.className, "getDeviceIdentifier", "()Ljava/lang/String;");
        return result
    },
    getAppVersion:function(){
        var result = jsb.reflection.callStaticMethod(this.className, "getApplicationVersion", "()Ljava/lang/String;");
        return result
        
    }

}


module.exports = DevicesAndroid;