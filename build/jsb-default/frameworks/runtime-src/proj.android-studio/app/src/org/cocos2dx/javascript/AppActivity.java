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

import android.Manifest;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;

import android.content.Intent;
import android.content.res.Configuration;
import android.util.Log;
import android.view.WindowManager;

import androidx.annotation.NonNull;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.casino.game.ApplicationUtil;
import com.casino.game.BuglyUtils;
import com.casino.game.PermissionManager;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class AppActivity extends Cocos2dxActivity {
    public static Context context;
    public static AppActivity activity;
    List<String> mPermissionList = new ArrayList<>();
    public String[] permissions = new String[]{
    };
    private static final int PERMISSION_REQUEST = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        activity = this;
        context = getApplication();
        super.onCreate(savedInstanceState);
        DetectCoverInstall();

        BuglyUtils.initSDK(getContext());
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
        permissions=  new String[]{
                android.Manifest.permission.READ_CONTACTS,
                android.Manifest.permission.WRITE_EXTERNAL_STORAGE,
                android.Manifest.permission.RECORD_AUDIO
        };
        checkPermissions();
    }

    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        switch (requestCode) {
            case PERMISSION_REQUEST:
                for (int i = 0; i<grantResults.length; i++){
                    if (grantResults[i] == -1){
                        showWaringDialog();
                        return;
                    }
                }
                checkPermissions();
                break;
            default:
                super.onRequestPermissionsResult(requestCode, permissions, grantResults);
                break;
        }
    }

    private void showWaringDialog() {
        AlertDialog dialog = new AlertDialog.Builder(this,android.R.style.Theme_DeviceDefault_Light_Dialog_Alert)
                .setTitle("WARNING")
                .setMessage("Insufficient permissions, go to settings！")
                .setPositiveButton("Ok", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        Intent intent = new Intent();
                        intent.setAction("android.settings.APPLICATION_DETAILS_SETTINGS");
                        intent.setData(Uri.fromParts("package", activity.getPackageName(), null));
                        startActivity(intent);
                    }
                })
                .setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        activity.finish();
                    }
                })
                .show();
    }

    private void checkPermissions(){
        mPermissionList.clear();
        //判断哪些权限未授予
        for (int i = 0; i < permissions.length; i++) {
            if (ContextCompat.checkSelfPermission(this, permissions[i]) != PackageManager.PERMISSION_GRANTED) {
                mPermissionList.add(permissions[i]);
            }
        }

        if (mPermissionList.isEmpty()) {

        } else {
            //请求权限方法
            String[] permissions = mPermissionList.toArray(new String[mPermissionList.size()]);//将List转为数组
            PermissionManager.RequestPermission(AppActivity.activity,permissions,PERMISSION_REQUEST);
        }
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


    public void DetectCoverInstall()//���ǰ�װ�Ļ���ɾ�����ȸ���Ŀ¼
    {

        SharedPreferences perference = getSharedPreferences("AppConfig", Context.MODE_PRIVATE);
        String appVersion = ApplicationUtil.getApplicationVersion();
        if(!appVersion.equalsIgnoreCase(perference.getString("resource_app_version", "0.0.0")))//��ǰapp �汾�����ڴ�İ汾�š��϶��Ǹ��ǰ�װ
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
        editor.putString("resource_app_version", appVersion);//���µ�ǰ�汾��
        editor.commit();

    }

    public  boolean deleteDirectory(String dir) {
        // ���dir�����ļ��ָ�����β���Զ�����ļ��ָ���
        if (!dir.endsWith(File.separator))
            dir = dir + File.separator;
        File dirFile = new File(dir);
        // ���dir��Ӧ���ļ������ڣ����߲���һ��Ŀ¼�����˳�
        if ((!dirFile.exists()) || (!dirFile.isDirectory())) {
            System.out.println("ɾ��Ŀ¼ʧ�ܣ�" + dir + "�����ڣ�");
            return false;
        }
        // ���ڱ�ʶ�Ƿ�ɾ���ɹ�
        boolean flag = true;
        // ɾ���ļ����е������ļ�������Ŀ¼
        File[] files = dirFile.listFiles();
        for (int i = 0; i < files.length; i++) {
            // ɾ�����ļ�
            if (files[i].isFile()) {
                flag = delFile(files[i].getAbsolutePath());
                if (!flag)
                    break;
            }
            // ɾ����Ŀ¼
            else if (files[i].isDirectory()) {
                flag = deleteDirectory(files[i]
                        .getAbsolutePath());
                if (!flag)
                    break;
            }
        }
        if (!flag) {
            System.out.println("ɾ��Ŀ¼ʧ�ܣ�");
            return false;
        }
        // ɾ����ǰĿ¼
        if (dirFile.delete()) {
            System.out.println("ɾ��Ŀ¼" + dir + "�ɹ���");
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
}
