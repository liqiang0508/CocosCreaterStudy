var Devices = {
    instance:undefined,
    //获取设备id
    getDevicesID:function(){
        return this.instance.getDevicesID()
        
    },
    //获取版本
    getAppVersion:function(){
        return this.instance.getAppVersion()
        
    }


}
Devices.instance = require("DevicesWeb")
if(cc.sys.isBrowser)//web
{
    Devices.instance = require("DevicesWeb")
}
else if(cc.sys.isNative&&cc.sys.os == cc.sys.OS_ANDROID)//android
{
    
    Devices.instance = require("DevicesAndroid")
}
else if(cc.sys.isNative&&cc.sys.os == cc.sys.OS_IOS)//ios
{
    Devices.instance = require("DevicesIos")
}

module.exports = Devices;