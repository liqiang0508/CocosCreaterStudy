package com.casino.game;

import android.app.Activity;
import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Build;
import android.support.v4.app.ActivityCompat;
import android.support.v7.app.AppCompatActivity;

/**
 * Created by Lee on 18/12/29.
 */

public class PermissionManager {

//    判断是否有权限 有返回true 没有返回false
   public static Boolean CheckPermission(Context context,String[] permissions)
    {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            for (int i = 0;i<permissions.length;i++)
            {
                String permission = permissions[i];
                int result  = ActivityCompat.checkSelfPermission(context,permission);
                if (result== PackageManager.PERMISSION_DENIED)
                {

                    return false;
                }

            }
            return true;
//            int result  = ActivityCompat.checkSelfPermission(context,permission);
//            if (result== PackageManager.PERMISSION_DENIED)
//            {
//                return false;
//            }
//            else
//            {
//                return true;
//            }
        }else

        {
            return true;
        }

    }
//是否玩家拒绝过权限的请求
//# 1.用户第一次被拒绝(非永久拒绝)授予某个权限后，下次再次请求该权限，这个方法会返回true，用户有机会以某种方式对用户进行说明该权限用处
//# 2.用户在第一次拒绝某个权限后，下次再次申请时，授权的dialog中将会出现“不再提醒”选项，一旦选中勾选了，那么下次申请将不会提示用户。
//# 3.第二次请求权限时，用户拒绝了，并选择了“不再提醒”的选项，调用shouldShowRequestPermissionRationale()后返回false。
//# 4.设备的策略禁止当前应用获取这个权限的授权：shouldShowRequestPermissionRationale()返回false 。
//# 5.加这个提醒的好处在于，用户拒绝过一次权限后我们再次申请时可以提醒该权限的重要性，免得再次申请时用户勾选“不再提醒”并决绝，导致下次申请权限直接失败。
    public  static Boolean IsUserDenyPermission(Activity activity,String permission)
    {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {

            return ActivityCompat.shouldShowRequestPermissionRationale(activity,permission);
        }
        return false;
    }

    //请求一个或多个权限
    public static void RequestPermission(Activity activity, String[] permissions, int code)
    {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            ActivityCompat.requestPermissions(activity,permissions,code);
        }
    }
}
