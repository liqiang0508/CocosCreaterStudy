package com.casino.game;



import java.io.IOException;

import org.cocos2dx.javascript.AppActivity;
import org.cocos2dx.lib.Cocos2dxJavascriptJavaBridge;

import android.media.AudioManager;
import android.media.MediaPlayer;
import android.media.MediaPlayer.OnErrorListener;
import android.util.Log;

public class VoicePlayer {


private static MediaPlayer mPlayer;
	
	private static boolean isPause;

	public static  void play(String filePathString) {
		// TODO Auto-generated method stub
		Boolean b = PermissionManager.CheckPermission(AppActivity.context, new String[]{android.Manifest.permission.RECORD_AUDIO});
		if(!b)//没有权限
		{
			PermissionManager.RequestPermission(AppActivity.activity,new String[]{android.Manifest.permission.RECORD_AUDIO},1);
			return;
		}

		if (mPlayer==null) {
			mPlayer=new MediaPlayer();
			//保险起见，设置报错监听
			mPlayer.setOnErrorListener(new OnErrorListener() {
				
				@Override
				public boolean onError(MediaPlayer mp, int what, int extra) {
					// TODO Auto-generated method stub
					mPlayer.reset();
					return false;
				}
			});
		}else {
			mPlayer.reset();//就回复
		}
		
		try {
			mPlayer.setAudioStreamType(AudioManager.STREAM_MUSIC);
			mPlayer.setOnCompletionListener(new MediaPlayer.OnCompletionListener() {
				
				@Override
				public void onCompletion(MediaPlayer mp) {
					// TODO Auto-generated method stub
					//Cocos2dxJavascriptJavaBridge.evalString("cc.vv.voiceMgr.onPlayEnd()");
				}
			});
			mPlayer.setDataSource(VoiceRecorder.getStorageDir() + filePathString);
			mPlayer.prepare();
			mPlayer.start();
		} catch (IllegalArgumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SecurityException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalStateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	//停止函数
	public static void pause(){
		if (mPlayer!=null&&mPlayer.isPlaying()) {
			mPlayer.pause();
			isPause=true;
		}
	}
	//是否正在播放
	public static  Boolean  isPlay()
	{
		if (mPlayer!=null)
		{
			return mPlayer.isPlaying();
		}
		return true;
	}
	public static void stop(){
		if (mPlayer!=null&&mPlayer.isPlaying()) {
			mPlayer.stop();
			isPause=false;
		}
	}
	
	//继续
	public static void resume()
	{
		if (mPlayer!=null&&isPause) {
			mPlayer.start();
			isPause=false;
		}
	}
	

	public  static void release()
	{
		if (mPlayer!=null) {
			mPlayer.release();
			mPlayer=null;
		}
	}
}
