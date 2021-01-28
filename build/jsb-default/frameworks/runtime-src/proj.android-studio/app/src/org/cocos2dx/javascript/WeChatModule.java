package org.cocos2dx.javascript;

/**
 * Created by liwenlong on 2020/11/16.
 */

import android.content.Intent;
import android.util.Log;

import org.cocos2dx.lib.Cocos2dxJavascriptJavaBridge;
import org.cocos2dx.lib.Cocos2dxActivity;

import com.tao.honour.wxapi.WXEntryActivity;
import com.tencent.mm.opensdk.openapi.IWXAPI;
import com.tencent.mm.opensdk.openapi.WXAPIFactory;

public class WeChatModule {
	private static AppActivity app = AppActivity.activity;
	public static String appId = "";
	public static String appSecret = "";
	public static String TAG = "WeChatModule";

	public static void setContext(AppActivity app) {
		WeChatModule.app = app;
	}

	public static void initWx(String appId, String appSecret) {
		Log.i(TAG,"initWx");
		WeChatModule.appId = appId;
		WeChatModule.appSecret = appSecret;
	}

	public static boolean isInstallWx() {
		IWXAPI api = WXAPIFactory.createWXAPI(app, appId, true);
		return api.isWXAppInstalled();
	}

	public static void runJsCode(final String code) {
		// 一定要在 GL 线程中执行
		app.runOnGLThread(new Runnable() {
			@Override
			public void run() {
				Cocos2dxJavascriptJavaBridge.evalString(code);
			}
		});
	}

	public static void loginWx() {
		Log.i(TAG,"loginWx");
		Intent intent = new Intent(Cocos2dxActivity.getContext(), WXEntryActivity.class);
		intent.putExtra(WXEntryActivity.ReqWxLogin,"wxlogin");
		Cocos2dxActivity.getContext().startActivity(intent);
	}

	public static void shareImageWx(String imgPath,int type) {
		Intent intent = new Intent(Cocos2dxActivity.getContext(), WXEntryActivity.class);
		intent.putExtra(WXEntryActivity.ReqWxShareImg,"ReqWxShareImg");
		intent.putExtra("ImgPath",imgPath);
		intent.putExtra("ShareType",type);
		Cocos2dxActivity.getContext().startActivity(intent);
	}

	public static void shareTextWx(String text,int type) {
		Intent intent = new Intent(Cocos2dxActivity.getContext(), WXEntryActivity.class);
		intent.putExtra(WXEntryActivity.ReqWxShareTxt,"ReqWxShareTxt");
		intent.putExtra("ShareText",text);
		intent.putExtra("ShareType",type);
		Cocos2dxActivity.getContext().startActivity(intent);
	}

	public static void shareUrlWx(String url,String title,String desc,int type) {
		Intent intent = new Intent(Cocos2dxActivity.getContext(), WXEntryActivity.class);
		intent.putExtra(WXEntryActivity.ReqWxShareUrl,"ReqWxShareUrl");
		intent.putExtra("ShareUrl",url);
		intent.putExtra("ShareTitle",title);
		intent.putExtra("ShareDesc",desc);
		intent.putExtra("ShareType",type);
		Cocos2dxActivity.getContext().startActivity(intent);
	}

	public static void payWx(String content) {
//		Intent intent = new Intent(Cocos2dxActivity.getContext(), WXPayEntryActivity.class);
//		intent.putExtra(WXPayEntryActivity.ReqWXPay,"ReqWXPay");
//		intent.putExtra("PayContent",content);
//		Cocos2dxActivity.getContext().startActivity(intent);
	}

	public static void wxLoginResultCallback(boolean result, String msg) {
		if (result) {
			String code = "gg.wechat.onWxLoginResultCallback(true, '";
			code += msg;
			code += "');";
			runJsCode(code);
		} else {
			String code = "gg.wechat.onWxLoginResultCallback(true, '";
			code += msg;
			code += "');";
			runJsCode(code);
		}
	}

	public static void wxShareResultCallback(boolean result, String msg) {
		if (result) {
			String code = "gg.wechat.onWxShareResultCallback(true, '";
			code += msg;
			code += "');";
			runJsCode(code);
		} else {
			String code = "gg.wechat.onWxShareResultCallback(true, '";
			code += msg;
			code += "');";
			runJsCode(code);
		}
	}

	public static void wxPayResultCallBack(boolean result, String msg) {
		if (result) {
			String code = "gg.wechat.onWxPayResultCallback(true, '";
			code += msg;
			code += "');";
			runJsCode(code);
		} else {
			String code = "gg.wechat.onWxPayResultCallback(false, '";
			code += msg;
			code += "');";
			runJsCode(code);
		}
	}
}
