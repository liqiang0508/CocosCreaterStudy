//
//  WeChatModule.m
//  dlplazat-mobile
//
//  Created by wen on 2020/11/23.
//


#import "WXApiManager.h"
#import "../WeChatModule.h"

@implementation WXApiManager

#pragma mark - LifeCycle
+(instancetype)sharedManager {
    static dispatch_once_t onceToken;
    static WXApiManager *instance;
    dispatch_once(&onceToken, ^{
        instance = [[WXApiManager alloc] init];
    });
    return instance;
}

- (void)dealloc {
    self.delegate = nil;
    [super dealloc];
}

#pragma mark - WXApiDelegate
- (void)onResp:(BaseResp *)resp {
    if ([resp isKindOfClass:[SendMessageToWXResp class]])
    {
        SendMessageToWXResp *messageResp = (SendMessageToWXResp *)resp;
        int retCode = messageResp.errCode;
        BOOL result = YES;
        NSString* msg = @"";
        if (retCode != 0)
        {
            result = NO;
            switch (retCode)
            {
                case -1:
                    msg = @"微信分享失败";
                    break;
                case -2:
                    msg = @"微信分享失败，用户点击取消";
                    break;
                default:
                    msg = @"微信分享失败";
                    break;
            }
        }
        [WeChatModule wxShareResultCallback:result andMsg:msg];
    }
    else if ([resp isKindOfClass:[SendAuthResp class]])
    {
        int retCode = resp.errCode;
        BOOL result = YES;
        NSString* msg = @"";
        if (retCode != 0)
        {
            result = NO;
            switch (retCode) {
                case -1:
                    msg = @"微信登录失败";
                    break;
                case -2:
                    msg = @"登录失败，用户点击取消";
                    break;
                default:
                    msg = @"微信登录失败";
                    break;
            }
        } else {
            SendAuthResp *authResp = (SendAuthResp *)resp;
            msg = authResp.code;
        }
        [WeChatModule wxLoginResultCallback:result andCode:msg];
    }
//    else if ([resp isKindOfClass:[PayResp class]])
//    {
//        int retCode = resp.errCode;
//        PayResp *payResp = (PayResp *)resp;
//        NSString* msg = @"";
//        if (retCode != 0)
//        {
//            switch (retCode)
//            {
//                case -2:
//                    msg = @"微信支付取消";
//                    break;
//                default:
//                    msg = @"微信支付失败";
//                    break;
//            }
//        }
//        else
//        {
//            msg = payResp.returnKey;
//        }
//        [WeChatModule wxPayResultCallback:resp.errCode == 0 andMsg:msg];
//    }
}

- (void)onReq:(BaseReq *)req {
    if ([req isKindOfClass:[GetMessageFromWXReq class]])
    {
    }
    else if ([req isKindOfClass:[ShowMessageFromWXReq class]])
    {
        
    }
    else if ([req isKindOfClass:[LaunchFromWXReq class]])
    {
        
    }
}

@end
