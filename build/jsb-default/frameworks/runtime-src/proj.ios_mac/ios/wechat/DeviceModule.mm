//
//  DeviceModule.m
//
//  Created by liwenlong on 18/4/11
//
//

#import "DeviceModule.h"
#import <CommonCrypto/CommonDigest.h>
#import <UIKit/UIKit.h>
#import <sys/utsname.h>
#import "Reachability.h"
#import "CHKeychain/SAMKeychainQuery.h"
#import <AudioToolbox/AudioToolbox.h>
#import "IOSPhotoController.h"
//#include "cocos2d.h"
#include "platform/CCApplication.h"
#include "base/CCScheduler.h"
#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"

//需要把key改为您自己的游戏key标志
#define KEY_USERTOKEN @"com.lwlgame.nativeapi.token";

@implementation DeviceModule

+(NSString *) getDeviceName {
    struct utsname systemInfo;
    uname(&systemInfo);
    NSString *platform = [NSString stringWithCString: systemInfo.machine encoding:NSASCIIStringEncoding];
    return platform;
}

+(NSString *) getSystemVersion {
    NSString* version = [[UIDevice currentDevice] systemVersion];
    return version;
}

+(NSString *) getUserToken {
    NSString* appName = [[[NSBundle mainBundle] infoDictionary] objectForKey:(NSString*)kCFBundleNameKey];
    NSError *error = nil;
    SAMKeychainQuery *query = [[SAMKeychainQuery alloc] init];
    query.service = appName;
    query.account = KEY_USERTOKEN;
    [query fetch:&error];
    NSString* appUUID = query.password;
    if (appUUID == nil) {
        appUUID = [[[UIDevice currentDevice] identifierForVendor] UUIDString];
        query.password = appUUID;
        query.synchronizationMode = SAMKeychainQuerySynchronizationModeNo;
        [query save:&error];
    }
    return [DeviceModule md5:appUUID];
}

+(NSString *) getAppVerCode {
    NSString* verCode = [[[NSBundle mainBundle] infoDictionary] objectForKey:(NSString *)kCFBundleVersionKey];
    return verCode;
}

+(NSString *) getAppVersion {
    NSString *version = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"];
    return version;
}

+(float) getBatteryLevel {
    UIDevice *device = [UIDevice currentDevice];
    if (![device isBatteryMonitoringEnabled])
    {
        [device setBatteryMonitoringEnabled:YES];
    }
    
    float level = [device batteryLevel];
    if (level == -1)
    {
        level = 1;
    }
    return level;
}

+(NSString *) getNetworkStatus {
    Reachability *reachability = [Reachability reachabilityWithHostName:@"www.baidu.com"];
    NetworkStatus internetStatus = [reachability currentReachabilityStatus];
    switch (internetStatus) {
        case ReachableViaWiFi:
            return @"wifi";
        case ReachableViaWWAN:
            return @"wwan";
        default:
            return @"none";
    }
}

+(void) mobileShake: (int)timeMs{
    AudioServicesPlaySystemSound(kSystemSoundID_Vibrate);
    
//    如果想要其他震动效果，可参考：
//    // 普通短震，3D Touch 中 Pop 震动反馈
//    AudioServicesPlaySystemSound(1520);
//    
//    // 普通短震，3D Touch 中 Peek 震动反馈
//    AudioServicesPlaySystemSound(1519);
//
//    // 连续三次短震
//    AudioServicesPlaySystemSound(1521);
}

+(void) copyToClipboard: (NSString*) copyText {
    UIPasteboard *pasteboard = [UIPasteboard generalPasteboard];
    pasteboard.string = copyText;
}

+(NSString *) getClipContent {
      return [[UIPasteboard generalPasteboard] string];
}

+(void) openSysSetting {
    NSURL * url = [NSURL URLWithString:UIApplicationOpenSettingsURLString];
    if([[UIApplication sharedApplication] canOpenURL:url]) {
        [[UIApplication sharedApplication] openURL:url];
    }
}

+(void) selectPhoto: (NSString*) path {
    //如果app默认不是横屏则不需要此行代码
    [[NSNotificationCenter defaultCenter] postNotificationName:@"changeRotate" object:@"1"];// 横竖屏切换通知
    
    IOSPhotoController *helper = [[IOSPhotoController alloc]init];
    [[NSUserDefaults standardUserDefaults] setObject:path forKey:@"savePath"];
    [[NSUserDefaults standardUserDefaults] synchronize];
    [helper openPhoto];
}

+(void) selectPhotoCallback: (BOOL) result andMsg:(NSString*) path {
    if (result) {
        NSString *code = [NSString stringWithFormat: @"gg.device.selectPhotoCallback(true, '%@');",path];
        [DeviceModule evalString:code];
    } else {
        NSString *code = [NSString stringWithFormat: @"gg.device.selectPhotoCallback(false, '%@');",path];
        [DeviceModule evalString:code];
    }
}

+(void) saveFileToPhoto: (NSString*) path {
    //如果app默认不是横屏则不需要此行代码
    UIImage* image = [UIImage imageNamed: path];
    UIImageWriteToSavedPhotosAlbum(image, nil, nil, nil);
}

+(NSString *) createCFUUID {
    CFUUIDRef cfuuid = CFUUIDCreate(kCFAllocatorDefault);
    CFStringRef refuuid = CFUUIDCreateString(kCFAllocatorDefault, cfuuid);
    CFRelease(cfuuid);
    NSString *cfuuidString = (__bridge NSString *)refuuid;
    return cfuuidString;
}

+(NSString *) md5: (NSString*) msg {
    const char *cStr = [msg UTF8String];
    unsigned char result[16];
    CC_MD5(cStr, strlen(cStr), result); // This is the md5 call
    NSString *string = [NSString stringWithFormat:
                        @"%02x%02x%02x%02x%02x%02x%02x%02x%02x%02x%02x%02x%02x%02x%02x%02x",
                        result[0], result[1], result[2], result[3],
                        result[4], result[5], result[6], result[7],
                        result[8], result[9], result[10], result[11],
                        result[12], result[13], result[14], result[15]
                        ];
    return string;
}

+(void)evalString:(NSString *) code
{
    const char *msg = [code UTF8String];
    const char* strMsg = msg;
    
    cocos2d::Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
            se::ScriptEngine::getInstance()->evalString(strMsg);
    });
}

@end
