/*
 * @Descripttion: 
 * @version: 
 * @Author: liqiang
 * @email: 497232807@qq.com
 * @Date: 2020-12-31 16:05:17
 * @LastEditTime: 2022-01-22 19:05:45
 */
// 渠道定义
var chanel = {
    WIN32: 0,
    IOS_APPSTORE: 1,
    H5: 2,
    ANDROID_GOOGLE_PLAY: 3,

}
globalThis.chanel = chanel
globalThis.DISTRIBUTE_CHANNEL = 0

if (cc.sys.isBrowser)//h5
{
    globalThis.DISTRIBUTE_CHANNEL = chanel.H5;
}
else if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID)//android
{
    globalThis.DISTRIBUTE_CHANNEL = chanel.ANDROID_GOOGLE_PLAY;
}
else if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS)//ios
{
    globalThis.DISTRIBUTE_CHANNEL = chanel.IOS_APPSTORE;
}
else //其他的都是算模拟器
{
    globalThis.DISTRIBUTE_CHANNEL = chanel.WIN32;
}
