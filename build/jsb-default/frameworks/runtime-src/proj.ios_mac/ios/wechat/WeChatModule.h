//
//  WeChatModule.m
//  dlplazat-mobile
//
//  Created by wen on 2020/11/23.
//

#import <Foundation/Foundation.h>

@interface WeChatModule: NSObject;

//检查是否安装微信
+(BOOL) isInstallWx;

//初始化微信appid，appsecret
+(BOOL) initWx: (NSString *)appId andSecret: (NSString *)appSecret;

//微信登录
+(void) loginWx;

//微信分享图片
+(void) shareImageWx: (NSString *)imgPath andType: (int)type;

//微信分享文字
+(void) shareTextWx: (NSString *)text andType: (int)type;

//微信分享链接
+(void) shareUrlWx:(NSString *)url andTitle: (NSString *)title andDesc: (NSString *)desc andType: (int)type;

//微信支付
+(void) paywx:(NSString *)content;
//微信登录回调
+(void) wxLoginResultCallback: (BOOL)result andCode: (NSString *)codeMsg;

//微信分享回调
+(void) wxShareResultCallback: (BOOL)result andMsg: (NSString *)msg;

//微信分享回调
//+(void) wxPayResultCallback: (BOOL)result andMsg: (NSString *)msg;

+(UIImage *)scaleImage:(UIImage *)image toSize:(CGSize)newSize;

@end
