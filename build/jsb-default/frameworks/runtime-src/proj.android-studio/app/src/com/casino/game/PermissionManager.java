package com.casino.game;

import android.app.Activity;
import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Build;
//import android.support.v4.app.ContextCompat;

import android.util.Log;

import androidx.core.app.ActivityCompat;

/**
 * Created by Lee on 18/12/29.
 */

public class PermissionManager {

//    判断是否有权限 有返回true 没有返回false
   public static Boolean CheckPermission(Context context,String[] permissions)
    {

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M)
        {
            Boolean result = true;
            for (int i = 0;i<permissions.length;i++)
            {
                String permission = permissions[i];
                int have  = ActivityCompat.checkSelfPermission(context,permission);

                if (have== PackageManager.PERMISSION_DENIED)
                {
                    result = false;
                }
            }
            Log.i("CheckPermission result",result+"");
            return result;
        }else
        {

            return true;
        }

    }
//是否玩家  点过不再提醒
//#，true表示没有勾选“不再提醒”，而false则表示勾选了“不再提醒”。当取值为false时，告诉用户打开系统的设置页面手动打开权限。
    public static Boolean IsUserDenyPermission(Activity activity,String permission)
    {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {

            return ActivityCompat.shouldShowRequestPermissionRationale(activity,permission);
        }
        return true;
    }

    //请求一个或多个权限
    public static void RequestPermission(Activity activity, String[] permissions, int code)
    {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            ActivityCompat.requestPermissions(activity,permissions,code);
        }
    }
}
