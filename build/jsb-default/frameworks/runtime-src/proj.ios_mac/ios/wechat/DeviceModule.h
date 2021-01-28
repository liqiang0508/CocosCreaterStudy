//
//  DeviceModule.h
//
//  Created by liwenlong on 18/4/11.
//
//

#import <Foundation/Foundation.h>

@interface DeviceModule: NSObject

+(NSString *) getDeviceName;

+(NSString *) getSystemVersion;

+(NSString *) getUserToken;

+(NSString *) getAppVerCode;

+(NSString *) getAppVersion;

+(float) getBatteryLevel;

+(NSString *) getNetworkStatus;

+(void) mobileShake: (int)timeMs;

+(void) copyToClipboard: (NSString*) copyText;

+(NSString *) getClipContent;

+(void) openSysSetting;

+(void) selectPhoto: (NSString*) path;

+(void) saveFileToPhoto: (NSString*) path;

+(NSString *) md5: (NSString*) msg;

+(NSString *) createCFUUID;

+(void) selectPhotoCallback: (BOOL) result andMsg:(NSString*) path;

@end
