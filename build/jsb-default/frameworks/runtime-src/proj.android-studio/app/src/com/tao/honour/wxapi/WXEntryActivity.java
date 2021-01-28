package com.tao.honour.wxapi;

import java.io.File;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.util.Log;

import com.tencent.mm.opensdk.modelbase.BaseReq;
import com.tencent.mm.opensdk.modelbase.BaseResp;
import com.tencent.mm.opensdk.modelmsg.SendAuth;
import com.tencent.mm.opensdk.modelmsg.SendMessageToWX;
import com.tencent.mm.opensdk.modelmsg.WXAppExtendObject;
import com.tencent.mm.opensdk.modelmsg.WXImageObject;
import com.tencent.mm.opensdk.modelmsg.WXMediaMessage;
import com.tencent.mm.opensdk.modelmsg.WXTextObject;
import com.tencent.mm.opensdk.modelmsg.WXWebpageObject;
import com.tencent.mm.opensdk.openapi.IWXAPI;
import com.tencent.mm.opensdk.openapi.IWXAPIEventHandler;
import com.tencent.mm.opensdk.openapi.WXAPIFactory;
import com.tencent.mm.opensdk.constants.ConstantsAPI;

import org.cocos2dx.javascript.Util;
import org.cocos2dx.javascript.WeChatModule;
import com.tao.honour.R;

public class WXEntryActivity extends Activity implements IWXAPIEventHandler{
	
	public static String Tag = "WXEntryActivity";
	private static WXEntryActivity sContext = null;
	public static boolean bLogonWX = false;
	private static final int THUMB_SIZE = 120;

    public static IWXAPI 			  api;
    
	private static final int SceneSession = 0;
	private static final int SceneTimeline = 1; 
	
	public static String ReqWxLogin = "ReqWxLogin";
	public static String ReqWxShareImg = "ReqWxShareImg";
	public static String ReqWxShareTxt = "ReqWxShareTxt";
	public static String ReqWxShareUrl = "ReqWxShareUrl";
	
	  @Override
	 public void onCreate(Bundle savedInstanceState)
	 {
	        super.onCreate(savedInstanceState);
	        sContext = this;
    	    Log.d(Tag,"onCreate");
	        
			Intent intent = getIntent();

	    	api = WXAPIFactory.createWXAPI(this,WeChatModule.appId, true);
		    api.registerApp(WeChatModule.appId);
	        api.handleIntent(intent, this);
	        
			if (intent.hasExtra(ReqWxLogin)) 
			{
	        	reqLogin();
			}
			else if(intent.hasExtra(ReqWxShareImg))
			{
				String ImgPath = intent.getStringExtra("ImgPath");
				int nType = intent.getIntExtra("ShareType",0);
				reqShareImg(ImgPath,nType);
			}
			else if(intent.hasExtra(ReqWxShareTxt))
			{
				String ShareText = intent.getStringExtra("ShareText");
				int nType = intent.getIntExtra("ShareType",0);
				reqShareTxt(ShareText,nType);
			}
			else if(intent.hasExtra(ReqWxShareUrl))
			{
				String ShareUrl = intent.getStringExtra("ShareUrl");
				String ShareTitle = intent.getStringExtra("ShareTitle");
				String ShareDesc = intent.getStringExtra("ShareDesc");
				int nType = intent.getIntExtra("ShareType",0);
				reqShareUrl(ShareUrl,ShareTitle,ShareDesc,nType);
			}
			finish();
	 }
	  
	  @Override
	  protected void onNewIntent(Intent intent) 
	  {
			super.onNewIntent(intent);
			
			setIntent(intent);
			WXEntryActivity.api.handleIntent(intent, this);
	  }
 
    public void reqLogin()
    {
    	SendAuth.Req req = new SendAuth.Req();
    	req.scope = "snsapi_userinfo";
    	req.state = "qygame_qzdlyx";
    	WXEntryActivity.api.sendReq(req);
	    Log.d(Tag,"reqLogin!!!!");
    } 
    public void reqShareImg(String ImgPath,int nType)
    {
		File file = new File(ImgPath);
		if (!file.exists()) 
		{
		    Log.d(Tag,"reqShare file not exists:"+ImgPath);
		    return;
		}

		Bitmap bmp = BitmapFactory.decodeFile(ImgPath);
		WXImageObject imgObj = new WXImageObject(bmp);
		
		WXMediaMessage msg = new WXMediaMessage();
		msg.mediaObject = imgObj;
		
		Bitmap thumbBmp = Bitmap.createScaledBitmap(bmp, THUMB_SIZE, THUMB_SIZE, true);
		bmp.recycle();
		msg.thumbData = Util.bmpToByteArray(thumbBmp, true);
		
		SendMessageToWX.Req req = new SendMessageToWX.Req();
		req.transaction = buildTransaction("img");
		req.message = msg;
		if(nType==SceneTimeline )
		{
			req.scene = SendMessageToWX.Req.WXSceneTimeline;
		}
		else if(nType==SceneSession )
		{
			req.scene = SendMessageToWX.Req.WXSceneSession;
		}
		WXEntryActivity.api.sendReq(req);
	    Log.d(Tag,"reqShare Ok:"+ImgPath);
    }
    public void reqShareTxt(String text,int nType)
    {
		WXTextObject textObj = new WXTextObject();
		textObj.text = text;

		WXMediaMessage msg = new WXMediaMessage();
		msg.mediaObject = textObj;
		msg.description = text;
		
		SendMessageToWX.Req req = new SendMessageToWX.Req();
		req.transaction = buildTransaction("text"); 
		req.message = msg;
		if(nType==SceneTimeline )
		{
			req.scene = SendMessageToWX.Req.WXSceneTimeline;
		}
		else if(nType==SceneSession )
		{
			req.scene = SendMessageToWX.Req.WXSceneSession;
		}

		WXEntryActivity.api.sendReq(req);
		
	    Log.d(Tag,"reqShareTxt Ok:"+text);
    }
    
    public void reqShareUrl(String url, String title,String desc,int nType)
    {
		WXWebpageObject textObj = new WXWebpageObject();
		textObj.webpageUrl = url;

		WXMediaMessage msg = new WXMediaMessage();
		msg.mediaObject = textObj;

		msg.title = title;
		msg.description = desc;
		Bitmap bitmap = BitmapFactory.decodeResource(sContext.getResources(),R.mipmap.ic_launcher);
		bitmap = Bitmap.createScaledBitmap(bitmap, THUMB_SIZE, THUMB_SIZE, true);
		msg.thumbData = Util.bmpToByteArray(bitmap, true);
		
		SendMessageToWX.Req req = new SendMessageToWX.Req();
		req.transaction = buildTransaction("webpage"); 
		req.message = msg;
		if(nType==SceneTimeline )
		{
			req.scene = SendMessageToWX.Req.WXSceneTimeline;
		}
		else if(nType==SceneSession )
		{
			req.scene = SendMessageToWX.Req.WXSceneSession;
		}

		WXEntryActivity.api.sendReq(req);
    }

    public void reqShareTxtCB(String text,int nType)
    {
    	 // send appdata with no attachment
    	WXAppExtendObject appdata = new WXAppExtendObject("lallalallallal", "filePath");

    	boolean bValue =  appdata.checkArgs();
    	if (!bValue)
    	{
    	    Log.d(Tag,"reqShareTxtCB Error:"+text);
    	}
    	
    	WXMediaMessage msg = new WXMediaMessage();
    	msg.title ="11";
    	msg.description = "22";
    	msg.mediaObject = appdata;
    	
    	SendMessageToWX.Req req = new SendMessageToWX.Req();
		req.transaction = buildTransaction("appdata");
		req.message = msg;
		
		if(nType==SceneTimeline )
		{
			req.scene = SendMessageToWX.Req.WXSceneTimeline;
		}
		else if(nType==SceneSession )
		{
			req.scene = SendMessageToWX.Req.WXSceneSession;
		}

		WXEntryActivity.api.sendReq(req);

	    Log.d(Tag,"reqShareTxtCB Ok:"+text);
    }

	@Override
	public void onReq(BaseReq req) 
	{
		Log.d(Tag,"public void onReq(BaseReq req) !!!!!!!");
		switch (req.getType()) 
		{
		case ConstantsAPI.COMMAND_GETMESSAGE_FROM_WX: 
			Log.d(Tag,"onReq:COMMAND_GETMESSAGE_FROM_WX");
			break;
		case ConstantsAPI.COMMAND_SHOWMESSAGE_FROM_WX:
			Log.d(Tag,"onReq:COMMAND_SHOWMESSAGE_FROM_WX");
			break;
		default:
			break;
		}

	    Log.d(Tag,"onReq:"+req.getType());
	}

	@Override
	public void onResp(BaseResp resp) {
	    if (resp.getType() == ConstantsAPI.COMMAND_SENDMESSAGE_TO_WX)
	    {
	    	switch (resp.errCode) {
			case BaseResp.ErrCode.ERR_OK:
				WeChatModule.wxShareResultCallback(true, "分享成功");
				break;
			case BaseResp.ErrCode.ERR_USER_CANCEL:
				WeChatModule.wxShareResultCallback(false, "取消分享");
			case BaseResp.ErrCode.ERR_AUTH_DENIED:
				WeChatModule.wxShareResultCallback(false, "权限验证失败");
				break;
			default:
				WeChatModule.wxShareResultCallback(false, "分享失败");
				break;
			}	
	    }
	    if (resp.getType() == ConstantsAPI.COMMAND_SENDAUTH)
	    {
			switch (resp.errCode) {
			case BaseResp.ErrCode.ERR_OK:
				SendAuth.Resp newResp = (SendAuth.Resp) resp;
			    
				if (newResp.state.toString().equals("qygame_qzdlyx"))
				{
					String code = newResp.code;
				    WeChatModule.wxLoginResultCallback(true, code);
				}
				break;
			case BaseResp.ErrCode.ERR_USER_CANCEL:
				WeChatModule.wxLoginResultCallback(false,"取消微信登录");
				break;
			case BaseResp.ErrCode.ERR_AUTH_DENIED:
				WeChatModule.wxLoginResultCallback(false, "微信验证失败");
				break;
			default:
				WeChatModule.wxLoginResultCallback(false,"微信登录失败");
				break;
			}	
	    }
	}
	
	private String buildTransaction(final String type) {
		return (type == null) ? String.valueOf(System.currentTimeMillis()) : type + System.currentTimeMillis();
	}
}