var chanel = {
WIN32: 0,
IOS_APPSTORE: 1,
H5: 2,
ANDROID_GOOGLE_PLAY: 3
};

cc.sys.isBrowser ? window.DISTRIBUTE_CHANNEL = chanel.H5 : cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? window.DISTRIBUTE_CHANNEL = chanel.ANDROID_GOOGLE_PLAY : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS ? window.DISTRIBUTE_CHANNEL = chanel.IOS_APPSTORE : window.DISTRIBUTE_CHANNEL = chanel.WIN32;