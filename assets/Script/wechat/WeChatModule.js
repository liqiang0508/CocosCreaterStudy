
const wxClassPath = "org/cocos2dx/javascript/WeChatModule";

const KeyRefreshToken = 'plaza_refresh_token';

const WxAccessUrl = "https://api.weixin.qq.com/sns/oauth2/access_token";
const WxRefreshUrl = "https://api.weixin.qq.com/sns/oauth2/refresh_token";
const WxGetUserInfoUrl = "https://api.weixin.qq.com/sns/userinfo?access_token=%s&openid=%s"; //https://api.weixin.qq.com/sns/userinfo?access_token=ACCESS_TOKEN&openid=OPENID

const http = require("HttpModule");
// https://developers.weixin.qq.com/doc/oplatform/Mobile_App/WeChat_Login/Authorized_API_call_UnionID.html
var WeChatModule = cc.Class({
    name: "WeChatModlue",

    properties: {
        appId: 'wx05017e4a3290433a',
        appSecret: 'bf5bf75d9683f040907d7544f9be7735',
    },

    //构造函数
    ctor: function () {
        console.log(`[WeChatModule][ctor]---构造函数`);
        this.initWx(this.appId, this.appSecret);
    },

    //判断是否安装微信
    isInstallWx: function() {
        if (gg.isAndroid === true) {
            return jsb.reflection.callStaticMethod(
                wxClassPath, 
                "isInstallWx", 
                "()Z");
        } else if (gg.isIOS === true) {
            return jsb.reflection.callStaticMethod("WeChatModule", "isInstallWx");
        }
        return true;
    },

    //初始化接口 需要传入appId和secret
    initWx: function (appId, appSecret) {
        this.appId = appId;
        this.appSecret = appSecret;
        
        if (gg.isAndroid === true) {
            return jsb.reflection.callStaticMethod(
                wxClassPath, 
                "initWx", 
                "(Ljava/lang/String;Ljava/lang/String;)V", appId, appSecret);
        } else if (gg.isIOS === true) {
            return jsb.reflection.callStaticMethod("WeChatModule", "initWx:andSecret:", appId, appSecret);
        }
        return true;
    },

    loginWx: function () {
        if (gg.isAndroid === true) {
            jsb.reflection.callStaticMethod(
                wxClassPath, 
                "loginWx", 
                "()V");
        } else if (gg.isIOS === true) {
            jsb.reflection.callStaticMethod("WeChatModule", "loginWx");
        }
        
    },
    //imgPath 图片路径 
    //type 1 朋友圈，0转发好友
    shareImageWx: function (imgPath, type,shareCall) {
        this.ShareCall = shareCall
        if (gg.isAndroid === true) {
            jsb.reflection.callStaticMethod(
                wxClassPath, 
                "shareImageWx", 
                "(Ljava/lang/String;I)V", imgPath, type);
        } else if (gg.isIOS === true) {
            jsb.reflection.callStaticMethod("WeChatModule", "shareImageWx:andType:", imgPath, type);
        }
    },
    //text 文本
    //type 1 朋友圈，0转发好友
    shareTextWx: function (text, type,shareCall) {
        this.ShareCall = shareCall
        if (gg.isAndroid === true) {
            jsb.reflection.callStaticMethod(
                wxClassPath, 
                "shareTextWx", 
                "(Ljava/lang/String;I)V", text, type);
        } else if (gg.isIOS === true) {
            jsb.reflection.callStaticMethod("WeChatModule", "shareTextWx:andType:", text, type);
        }
    },

    //type 1 朋友圈，0转发好友
    shareUrlWx: function (url, title, desc, type,shareCall) {
        this.ShareCall = shareCall
        if (gg.isAndroid === true) {
            jsb.reflection.callStaticMethod(
                wxClassPath, 
                "shareUrlWx", 
                "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)V", url, title, desc, type);
        } else if (gg.isIOS === true) {
            jsb.reflection.callStaticMethod("WeChatModule", "shareUrlWx:andTitle:andDesc:andType:", url, title, desc, type);
        }
    },

    //微信登录
    login: function (call) {
        this.LoginCall = call//保存下登录回调
        let strToken = cc.sys.localStorage.getItem(KeyRefreshToken);
        var self = this;
        if (strToken)
        {
            let token = JSON.parse(strToken);
            let appid = token.appid;
            let refresh_token = token.refresh_token;
            let kUrl = `${WxRefreshUrl}?appid=${appid}&grant_type=refresh_token&refresh_token=${refresh_token}`;
            http.get({url:kUrl,timeout:10000},function(err,result) {
                if (err || result.errcode){
                    self.resetWx();
                    self.loginWx();
                    return;
                } 
                let msg = {};
                msg.ret = true;
                msg.access_token = result.access_token;
                msg.openid = result.openid;
                let token = {};
                token.refresh_token = result.refresh_token;
                token.appid = appid;
                cc.sys.localStorage.setItem(KeyRefreshToken, JSON.stringify(token));
                //cc.director.emit("WxLoginCallback", msg);
                if (self.LoginCall){
                    self.LoginCall(msg)
                }
            }.bind(self));
            return true;
        }

        //检查是否安装微信
        if (this.isInstallWx() === false) {
            // gg.fun.showAlert('微信登录失败，请检查是否安装微信');
            cc.log('微信登录失败，请检查是否安装微信')
            return false;
        }

        if (gg.isWindows) {
            // gg.fun.createDialog('WechatLoginView', '', false);
            cc.log('WechatLoginView')
            return true;
        } else {
            return this.loginWx();
        }
    },

    //微信支付
    pay:function (content,paycall) {
        this.PayCall = paycall
        if (gg.isAndroid === true) {
            jsb.reflection.callStaticMethod(
                wxClassPath, 
                "payWx", 
                "(Ljava/lang/String;)V", content);
        } else if (gg.isIOS === true) {
            jsb.reflection.callStaticMethod("WeChatModule", "payWx", content);
        }
        
    },
    onWxLoginResultCallback: function (result, codeMsg) {
        console.log("WeChatModule onWxLoginResultCallback")
        if (result === false) {
            let msg = {};
            msg.ret = false;
            msg.msg = '微信登录失败，' + codeMsg;
            //cc.director.emit("WxLoginCallback", msg);
            if (this.LoginCall){
                this.LoginCall(msg)
            }
            return;   
        }

        var self = this;
        let kUrl = `${WxAccessUrl}?appid=${this.appId}&secret=${this.appSecret}&code=${codeMsg}&grant_type=authorization_code`;
        http.get({url:kUrl,timeout:10000},function(err,result) {
            if (err || result.errcode) {
                self.resetWx();
                let msg = {};
                msg.ret = false;
                msg.msg = '微信登录失败,请稍后重试';
               // cc.director.emit("WxLoginCallback", msg);
               if (self.LoginCall){
                    self.LoginCall(msg)
                }
                return;
            } 
            let msg = {};
            msg.ret = true;
            msg.access_token = result.access_token;
            msg.openid = result.openid;
            let token = {};
            token.refresh_token = result.refresh_token;
            token.appid = self.appid;
            cc.sys.localStorage.setItem(KeyRefreshToken, JSON.stringify(token));

            self.getWxUserInfo(msg)
            //cc.director.emit("WxLoginCallback", msg);
           
        });
    },
    //获取微信玩家信息
    // 返回数据
    // {
    //     "openid": "OPENID",
    //     "nickname": "NICKNAME",
    //     "sex": 1,
    //     "province": "PROVINCE",
    //     "city": "CITY",
    //     "country": "COUNTRY",
    //     "headimgurl": "https://thirdwx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/0",
    //     "privilege": ["PRIVILEGE1", "PRIVILEGE2"],
    //     "unionid": " o6_bmasdasdsad6_2sgVt7hMZOPfL"
    // }
    getWxUserInfo:function (msg) {
        var self = this
        var kUrl = cc.js.formatStr(WxGetUserInfoUrl,msg.access_token,msg.openid)
       
        http.get({url:kUrl,timeout:10000},(err,result)=>{
            if (err || result.errcode) {
                self.resetWx();
                let msg = {};
                msg.ret = false;
                msg.msg = '获取玩家信息失败';
               // cc.director.emit("WxLoginCallback", msg);
               if (this.LoginCall){
                this.LoginCall(msg)
                }
                return;
            } 
            msg.userinfo = result
            if (self.LoginCall){
                self.LoginCall(msg)
            }
        })

    },
    onWxShareResultCallback: function (result, msg) {
        console.log("WeChatModule onWxShareResultCallback")
        if (this.ShareCall)
        {
            this.ShareCall(result,msg)
        }

    },
    //code 0成功  -1错误，-2用户取消
    onWxPayResultCallback: function (code) {
        if (this.PayCall )
        {
            this.PayCall(code)
        }
    },

    onWindowLoginCallback: function (appId, appSecret, code) {
        this.appId = appId;
        this.appSecret = appSecret;
        this.onWxLoginResultCallback(true, code);
    },

    resetWx: function () {
        cc.sys.localStorage.removeItem(KeyRefreshToken);
    },
});

module.exports = WeChatModule;