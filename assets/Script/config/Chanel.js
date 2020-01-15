// 渠道定义
var chanel = {
    WIN32:0,
    IOS_APPSTORE: 1,
    H5:2,
    ANDROID_GOOGLE_PLAY : 3,

}

if(cc.sys.isBrowser)//h5
{
    window.DISTRIBUTE_CHANNEL = chanel.H5;
}
else if(cc.sys.isNative&&cc.sys.os == cc.sys.OS_ANDROID)//android
{
    window.DISTRIBUTE_CHANNEL = chanel.ANDROID_GOOGLE_PLAY;
}
else if(cc.sys.isNative&&cc.sys.os == cc.sys.OS_IOS)//ios
{
    window.DISTRIBUTE_CHANNEL = chanel.IOS_APPSTORE;
}
else if(cc.sys.isNative&&cc.sys.os == cc.sys.OS_WINDOWS)//模拟器
{
    window.DISTRIBUTE_CHANNEL = chanel.WIN32;
}
