var Devices = {
    instance:undefined,
    //获取设备id
    getDevicesID:function(){
        return this.instance.getDevicesID()
        
    }

}

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