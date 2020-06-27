/****************************************************************************
Copyright (c) 2015-2016 Chukong Technologies Inc.
Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
http://www.cocos2d-x.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
****************************************************************************/
package org.cocos2dx.javascript;

import org.cocos2dx.lib.Cocos2dxActivity;
import org.cocos2dx.lib.Cocos2dxGLSurfaceView;

import android.content.SharedPreferences;
import android.graphics.Color;
import android.os.Build;
import android.util.Log;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.view.View;
import android.view.WindowManager;

import com.casino.game.ApplicationUtil;
import com.casino.game.PermissionManager;

import java.io.File;

public class AppActivity extends Cocos2dxActivity {
    public static Context context;
    public static AppActivity activity;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        activity = this;
        context = getApplication();
        DetectCoverInstall();
        //屏幕适配核心 在AppActivity的onCreate添加  让画布扩充到刘海部分
        if (Build.VERSION.SDK_INT >= 28) {
            getWindow().addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
            WindowManager.LayoutParams lp = getWindow().getAttributes();
            lp.layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
            getWindow().setAttributes(lp);
        }
        super.onCreate(savedInstanceState);
        //屏幕适配核心 在AppActivity的onCreate添加  让画布扩充到刘海部分

        // Workaround in
        // https://stackoverflow.com/questions/16283079/re-launch-of-activity-on-home-button-but-only-the-first-time/16447508
        if (!isTaskRoot()) {
            // Android launched another instance of the root activity into an existing task
            // so just quietly finish and go away, dropping the user back into the activity
            // at the top of the stack (ie: the last state of this task)
            // Don't need to finish it again since it's finished in super.onCreate .
            return;
        }
        // DO OTHER INITIALIZATION BELOW
        SDKWrapper.getInstance().init(this);

        Boolean b = PermissionManager.CheckPermission(AppActivity.context, new String[]{android.Manifest.permission.RECORD_AUDIO});
        Log.i("bbbbbbbbb===",b+"");
        if(!b)//没有权限
        {
            if (PermissionManager.IsUserDenyPermission(activity,android.Manifest.permission.RECORD_AUDIO)==false)//表示勾选了“不再提醒”。
            {
            }
            else
            {
                PermissionManager.RequestPermission(AppActivity.activity,new String[]{android.Manifest.permission.RECORD_AUDIO},1);
            }
        }

    }



    public void DetectCoverInstall()//覆盖安装的话先删掉的热更新目录
    {

        SharedPreferences perference = getSharedPreferences("AppConfig", Context.MODE_PRIVATE);
        String appVersion = ApplicationUtil.getApplicationVersion();
        if(!appVersion.equalsIgnoreCase(perference.getString("resource_app_version", "0.0.0")))//当前app 版本不等于存的版本号。肯定是覆盖安装
        {
            String dataDir = getApplication().getFilesDir().getAbsolutePath();
            File packageFile = new File(dataDir+"/package");
            File ConfigFolder = new File(dataDir+"/config");
            if (packageFile.exists())
            {
                deleteDirectory(dataDir+"/package");
                packageFile = new File(dataDir+"/package");
                packageFile.mkdir();
            }
            if (ConfigFolder.exists())
            {
                deleteDirectory(dataDir+"/config");
                ConfigFolder = new File(dataDir+"/config");
                ConfigFolder.mkdir();
            }
        }

        SharedPreferences.Editor editor = perference.edit();
        editor.putString("resource_app_version", appVersion);//存下当前版本号
        editor.commit();

    }

    public  boolean deleteDirectory(String dir) {
        // 如果dir不以文件分隔符结尾，自动添加文件分隔符
        if (!dir.endsWith(File.separator))
            dir = dir + File.separator;
        File dirFile = new File(dir);
        // 如果dir对应的文件不存在，或者不是一个目录，则退出
        if ((!dirFile.exists()) || (!dirFile.isDirectory())) {
            System.out.println("删除目录失败：" + dir + "不存在！");
            return false;
        }
        // 用于标识是否删除成功
        boolean flag = true;
        // 删除文件夹中的所有文件包括子目录
        File[] files = dirFile.listFiles();
        for (int i = 0; i < files.length; i++) {
            // 删除子文件
            if (files[i].isFile()) {
                flag = delFile(files[i].getAbsolutePath());
                if (!flag)
                    break;
            }
            // 删除子目录
            else if (files[i].isDirectory()) {
                flag = deleteDirectory(files[i]
                        .getAbsolutePath());
                if (!flag)
                    break;
            }
        }
        if (!flag) {
            System.out.println("删除目录失败！");
            return false;
        }
        // 删除当前目录
        if (dirFile.delete()) {
            System.out.println("删除目录" + dir + "成功！");
            return true;
        } else {
            return false;
        }
    }

    public  boolean delFile(String path) {
        if (path != null) {
            File file = new File(path);
            if (file.exists()) {
                if (file.delete())
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
        return true;
    }

    @Override
    public Cocos2dxGLSurfaceView onCreateView() {
        Cocos2dxGLSurfaceView glSurfaceView = new Cocos2dxGLSurfaceView(this);
        // TestCpp should create stencil buffer
        glSurfaceView.setEGLConfigChooser(5, 6, 5, 0, 16, 8);
        SDKWrapper.getInstance().setGLSurfaceView(glSurfaceView, this);

        return glSurfaceView;
    }

    @Override
    protected void onResume() {
        super.onResume();
        SDKWrapper.getInstance().onResume();

    }

    @Override
    protected void onPause() {
        super.onPause();
        SDKWrapper.getInstance().onPause();

    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        // Workaround in https://stackoverflow.com/questions/16283079/re-launch-of-activity-on-home-button-but-only-the-first-time/16447508
        if (!isTaskRoot()) {
            return;
        }

        SDKWrapper.getInstance().onDestroy();

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        SDKWrapper.getInstance().onActivityResult(requestCode, resultCode, data);
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        SDKWrapper.getInstance().onNewIntent(intent);
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        SDKWrapper.getInstance().onRestart();
    }

    @Override
    protected void onStop() {
        super.onStop();
        SDKWrapper.getInstance().onStop();
    }

    @Override
    public void onBackPressed() {
        SDKWrapper.getInstance().onBackPressed();
        super.onBackPressed();
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        SDKWrapper.getInstance().onConfigurationChanged(newConfig);
        super.onConfigurationChanged(newConfig);
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        SDKWrapper.getInstance().onRestoreInstanceState(savedInstanceState);
        super.onRestoreInstanceState(savedInstanceState);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        SDKWrapper.getInstance().onSaveInstanceState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onStart() {
        SDKWrapper.getInstance().onStart();
        super.onStart();
    }

    public static int getGameChanel()
    {
        int chanel = 3;
        return chanel;
    }

    public static int getLoginChanel()
    {
        int loginChanelID = 3;
        return loginChanelID;
    }
    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults)
    {
        Log.i("AppActivity","onRequestPermissionsResult"+requestCode);

        if (requestCode == 1)//record audio
        {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED)//同意了授权
            {
                Log.i("AppActivity","Yes  Audio");

            } else
            {
                Log.i("AppActivity","No  Audio");
            }
        }

        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }
}
