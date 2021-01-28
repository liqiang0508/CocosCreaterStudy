//
//  WeChatModule.m
//  dlplazat-mobile
//
//  Created by wen on 2020/11/23.
//


#import <Foundation/Foundation.h>
#import "./wechat/WXApi.h"
#import "WeChatModule.h"
#import "DeviceModule.h"

@implementation WeChatModule

//检查是否安装微信
+(BOOL) isInstallWx {
    return [WXApi isWXAppInstalled];
}

//初始化微信appid，appsecret
+(BOOL) initWx: (NSString *)appId andSecret: (NSString *)appSecret {
    [WXApi startLogByLevel:WXLogLevelNormal logBlock:^(NSString *log) {
        NSLog(@"log : %@", log);
    }];
    
    [WXApi registerApp:appId universalLink:@"https://www.xxxgame.com/plaza/app/"]; //填写自己对应的url
    return true;
}

//微信登录
+(void) loginWx {
    //构造SendAuthReq结构体
    SendAuthReq* req =[[[SendAuthReq alloc ] init ] autorelease];
    req.scope = @"snsapi_userinfo";
    req.state = @"dlplazat";  //此处需要填写自己的key
    //第三方向微信终端发送一个SendAuthReq消息结构
    [WXApi sendReq:req completion:nil];
}

//微信分享图片
+(void) shareImageWx: (NSString *)imgPath andType: (int)type {

    WXMediaMessage *message = [WXMediaMessage message];
    
    UIImage *image = [UIImage imageNamed:imgPath];
    UIImage *scaleImage = [WeChatModule scaleImage:image toSize:CGSizeMake(300, 300)];
    [message setThumbImage:scaleImage];
    
    WXImageObject *ext = [WXImageObject object];
    ext.imageData = [NSData dataWithContentsOfFile:imgPath];
    
    message.mediaObject = ext;
    
    SendMessageToWXReq* req = [[[SendMessageToWXReq alloc] init]autorelease];
    req.bText = NO;
    req.message = message;
    
    if (type == 0) {
        req.scene = WXSceneSession;     /**< 聊天界面    */
    } else {
        req.scene = WXSceneTimeline;     /**< 朋友圈     */
    }
    
    [WXApi sendReq:req completion:nil];
}

//微信分享文字
+(void) shareTextWx: (NSString *)text andType: (int)type {
    SendMessageToWXReq* req = [[[SendMessageToWXReq alloc] init]autorelease];
    req.text = text;
    req.bText = YES;
    
    if (type == 0) {
        req.scene = WXSceneSession;     /**< 聊天界面    */
    } else {
        req.scene = WXSceneTimeline;     /**< 朋友圈     */
    }
    
    [WXApi sendReq:req completion:nil];
}
//微信支付
+(void) paywx:(NSString *)content{



}
//微信分享链接
+(void) shareUrlWx:(NSString *)url andTitle: (NSString *)title andDesc: (NSString *)desc andType: (int)type {
    WXMediaMessage *message = [WXMediaMessage message];
    message.title = title;
    message.description = desc;
    message.messageExt = title;
    message.messageAction = title;
    
    [message setThumbImage:[UIImage imageNamed:@"weixin_share_icon.png"]];
    
    WXWebpageObject *ext = [WXWebpageObject object];
    ext.webpageUrl = url;
    
    message.mediaObject = ext;
    
    SendMessageToWXReq* req = [[[SendMessageToWXReq alloc] init]autorelease];
    req.bText = NO;
    req.message = message;
    if (type == 0) {
        req.scene = WXSceneSession;     /**< 聊天界面    */
    } else {
        req.scene = WXSceneTimeline;     /**< 朋友圈     */
    }
    
    [WXApi sendReq:req completion:nil];
}

+(void) wxLoginResultCallback: (BOOL)result andCode: (NSString *)codeMsg {
    NSString* code = @"";
    if (result) {
        code = [NSString stringWithFormat:@"gg.wechat.onWxLoginResultCallback(true,'%@');", codeMsg];
    } else {
        code = [NSString stringWithFormat:@"gg.wechat.onWxLoginResultCallback(true,'%@');", codeMsg];
    }
    [DeviceModule evalString: code];
}

//微信分享回调
+(void) wxShareResultCallback: (BOOL)result andMsg: (NSString *)msg {
    NSString* code = @"";
    if (result) {
        code = [NSString stringWithFormat:@"gg.wechat.onWxShareResultCallback(true,'%@');", msg];
    } else {
        code = [NSString stringWithFormat:@"gg.wechat.onWxShareResultCallback(true,'%@');", msg];
    }
    [DeviceModule evalString: code];
}

////微信支付回调
//+(void) wxPayResultCallback: (BOOL)result andMsg: (NSString *)msg {
//    
//}

// 图片压缩
+(UIImage *)scaleImage:(UIImage *)image toSize:(CGSize)newSize
{
    CGSize actSize = image.size;
    float scale = actSize.width/actSize.height;
    
    if (scale < 1) {
        newSize.height = newSize.width/scale;
    } else {
        newSize.width = newSize.height*scale;
    }
    
    UIGraphicsBeginImageContext(newSize);
    [image drawInRect:CGRectMake(0, 0, newSize.width, newSize.height)];
    UIImage* newImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    
    return newImage;
}

@end
