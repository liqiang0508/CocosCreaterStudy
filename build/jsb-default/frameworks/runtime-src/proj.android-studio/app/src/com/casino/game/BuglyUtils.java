package com.casino.game;

import android.content.Context;
import android.os.Build;
import android.util.Log;

import com.tencent.bugly.crashreport.CrashReport;

import java.util.Map;

/**
 * author : Admin
 * date : 2022/7/29 9:47
 * description :
 */
public class BuglyUtils {
    public static void initSDK(Context context)
    {
        CrashReport.initCrashReport(context);
        CrashReport.setDeviceModel(context, Build.MODEL);
        Log.i("BuglyUtils","initSDK");
    }

    public static void postException(int category, String name, String reason, String stack){
        Log.i("BuglyUtils","postException");
        postException(category, name, reason, stack, null);
    }

    public static void postException(int category, String name, String reason, String stack, Map<String, String> extraInfo){
        CrashReport.postException(category, name, reason, stack, extraInfo);
    }
}
