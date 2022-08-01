package com.casino.game;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.UUID;

import android.app.Service;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.SharedPreferences.Editor;
import android.content.pm.ActivityInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.PackageManager.NameNotFoundException;
import android.net.Uri;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import android.os.Build;
import android.os.Vibrator;
import android.telephony.TelephonyManager;

import org.cocos2dx.javascript.AppActivity;
//import cn.fraudmetrix.android.FMAgent;

public class ApplicationUtil {

	
	// Get Device information
	public static String getDeviceLanguage() {
		String local = Locale.getDefault().toString();
		if (local.equalsIgnoreCase("zh_tw")) {
			return "zh-Hant";
		} else if (local.equalsIgnoreCase("zh_cn")) {
			return "zh-Hans";
		}
		return "en";
	}
	
	public static String getDeviceOSVersion() {
		return Build.VERSION.RELEASE;
	}

	public static String getDeviceMode() {
		String model = Build.MODEL;
		String product = Build.MANUFACTURER;

		return product.toUpperCase() + " " + model;
	}

	public static String getDeviceIdentifier() {
		String uniqueId = null;
		// try device id
		final TelephonyManager tm = (TelephonyManager) AppActivity.context
				.getSystemService(Context.TELEPHONY_SERVICE);
		if (tm != null) {
			try {
				uniqueId = tm.getDeviceId();
			}catch (SecurityException ex){

			}

		}
		
		if (uniqueId == null || uniqueId.trim().length() == 0 || uniqueId.matches("0+"))//婵☆垪鍓濈�娆撳闯閿燂拷
		{
//			GameActivity.activity.finish();
		}

		// try Android_ID
		if (uniqueId == null) {
			uniqueId = android.provider.Settings.Secure.getString(
					AppActivity.context.getContentResolver(),
					android.provider.Settings.Secure.ANDROID_ID);
			if (("9774d56d682e549c".equals(uniqueId))) {
				uniqueId = null;
			}
		}

		// generate
		if (uniqueId != null) {
			try {
				uniqueId = UUID.nameUUIDFromBytes(uniqueId.getBytes("utf-8"))
						.toString();
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
				uniqueId = null;
			}
		}

		// try random
		if (uniqueId == null) {
			SharedPreferences perference = AppActivity.context
					.getSharedPreferences("Device", Context.MODE_PRIVATE);
			if (perference.contains("Identifier")) {
				uniqueId = perference.getString("Identifier", null);
			}

			if (uniqueId == null) {
				uniqueId = UUID.randomUUID().toString();
				Editor editor = perference.edit();
				editor.putString("Identifier", uniqueId);
				editor.commit();
			}
		}
		return uniqueId;
	}
	
	public static String getDeviceMAC(){
		WifiManager wifi = (WifiManager) AppActivity.activity.getApplicationContext().getSystemService(Context.WIFI_SERVICE);
		
		WifiInfo info = wifi.getConnectionInfo(); 
		String macAddr = info.getMacAddress();
		
		SharedPreferences perference = AppActivity.context
				.getSharedPreferences("Device", Context.MODE_PRIVATE);
		if(macAddr == null){
			macAddr = perference.getString("MAC", "");	
		}
		else{
			Editor editor = perference.edit();
			editor.putString("MAC", macAddr);
			editor.commit();
		}

		
		return macAddr; 
	}
	
	public static String getBlackBox()
	{
		//String blackBox = FMAgent.onEvent();
		return "";//Tongdun.getPhoneInfo();
	}

	// Get Application information
	public static String getApplicationVersion() {
		try {
			PackageInfo info = AppActivity.context.getPackageManager()
					.getPackageInfo(AppActivity.context.getPackageName(), 0);
			// Log.d("ApplicationUtil", "PackageInfo = " + info);
			return info.versionName;
		} catch (NameNotFoundException e) {
			e.printStackTrace();
			return "0.0.0";
		}
	}

	public static String getApplicationName() {
		int labelRes = AppActivity.context.getApplicationInfo().labelRes;
		return AppActivity.context.getResources().getString(labelRes);
	}

	public static void playVibrate() {
		Vibrator vib = (Vibrator) AppActivity.activity
				.getSystemService(Service.VIBRATOR_SERVICE);

		if (vib != null) {
			// long[] pattern = {800, 50, 400, 30}; // OFF/ON/OFF/ON..
			long[] pattern = { 0, 1000 }; // OFF/ON/OFF/ON..
			vib.vibrate(pattern, -1);
		}
	}

	public static boolean openUrl(String url) {
		if (url.startsWith("http://") || url.startsWith("https://")) {
			Intent intent = new Intent();
			intent.setAction(android.content.Intent.ACTION_VIEW);
			Uri content_url = Uri.parse(url);
			intent.setData(content_url);
			AppActivity.activity.startActivity(intent);
			return true;
		} else if (url.startsWith("mailto:")) {
			String content = url.substring("mailto:".length());

			Map<String, String> param = parseParameter(content);

			Intent intent = new Intent(android.content.Intent.ACTION_SEND);
			intent.putExtra(android.content.Intent.EXTRA_EMAIL,
					new String[] { param.get("__path__") });
			intent.putExtra(android.content.Intent.EXTRA_SUBJECT,
					param.get("subject"));
			intent.putExtra(android.content.Intent.EXTRA_TEXT,
					param.get("body"));
			intent.setType("plain/text");

			//AppActivity.activity.startActivity(Intent.createChooser(intent,
				//	AppActivity.activity.getText(R.string.select_mail)));
			return true;
		}
		return false;
	}
	
	public static void showConfirmBox(final String title, final String msg, final String yes, final String no)
	{
		/*AppActivity.activity.getHandler().post(new Runnable() {
			
			public void run() {
				new AlertDialog.Builder(AppActivity.activity)
				.setTitle(title)
				.setMessage(msg)
				.setPositiveButton(yes,
						new DialogInterface.OnClickListener() {
							public void onClick(DialogInterface dialog,
									int which) {
								GameEvent.send(GameEvent.CONFIRM_BOX_YES);
							}
						})
				.setNegativeButton(no,
						new DialogInterface.OnClickListener() {
							public void onClick(DialogInterface dialog,
									int which) {
								GameEvent.send(GameEvent.CONFIRM_BOX_NO);
							}
						}).show();
			}
		});*/

	}

	@SuppressWarnings("deprecation")
	private static Map<String, String> parseParameter(String paramStr) {
		Map<String, String> param = new HashMap<String, String>();
		int pos = paramStr.indexOf("?");
		param.put("__path__", paramStr.substring(0, pos));

		String[] sl = paramStr.substring(pos + 1).split("&");
		for (int i = 0; i < sl.length; i++) {
			String[] kv = sl[i].split("=");
			if (kv.length == 2) {
				param.put(kv[0], URLDecoder.decode(kv[1]));
			} else if (kv.length == 1) {
				param.put(kv[0], "");
			}
		}
		return param;
	}
	
	public static String getChanel()
	{
		String defaultValue = "1";
		try {
			//application标签下用getApplicationinfo，如果是activity下的用getActivityInfo
			//Sting类型的用getString，Boolean类型的getBoolean，其他具体看api
			String value = AppActivity.getContext().getPackageManager()
					.getApplicationInfo(AppActivity.getContext().getPackageName(), PackageManager.GET_META_DATA)
					.metaData.getString("GAME_CHANNEL", defaultValue);
			return value;
		} catch (PackageManager.NameNotFoundException e) {
			e.printStackTrace();
			return defaultValue;
		}
	}
	
	public static String getToken()
	{
		return "";//AppActivity.getToken();
	}
	
	private static String deviceIDFA="";
	public static void setDeviceIDFA(String idfa)
	{
		deviceIDFA = idfa;
	}
	public static String getDeviceIDFA()
	{
		return deviceIDFA;
	}

	//获取包名package
	public static String getPackageName(){
		String bRet =AppActivity.activity.getPackageName();
		return bRet;
	}
}
