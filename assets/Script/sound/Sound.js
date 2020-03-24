window.Sound = {
    audioId: {},
    backGroundResPath: {},
    /*
        respath: 音效资源
        loop: 是否循环
        volume: 音量衰减比例 0 ~ 1
        func: 音效播放结束回调
        single: 是否同时只播放一个respath音效资源
    */
    _playEffect: function (resPath, loop, volume, func, single) {
        let self = this;
        //cc.log("========sound========start", resPath);
        if (single && (self.audioId[resPath] != undefined && self.audioId[resPath].length > 0)) {
            return;
        }

        if (self.audioId[resPath] == undefined) {
            self.audioId[resPath] = [];
        }
        if (loop == undefined) {
            loop = false;
        }
        if (volume == undefined) {
            volume = 1;
        }
        if (typeof volume != "number") {
            volume = parseFloat(volume);
        }
        let id = -1
        cc.loader.loadRes(resPath, cc.AudioClip, function (err, clip) {
            if(err)
            {
                cc.log(err)
            }
            else{
                id = cc.audioEngine.playEffect(clip, loop);
                self.setEffcetVolume(volume)
            }
		   
		});
     
        // let id = cc.audioEngine.play(cc.url.raw(resPath), loop, volume);
        // cc.log("========sound========1", volume,id, cc.url.raw(resPath));
        // if (id == -1) {//播放不再resource 目录下的音乐.
        //     if (cc.sys.isNative) {
        //         let newPath = jsb.fileUtils.getWritablePath() + resPath;
        //         id = cc.audioEngine.play(newPath, loop, volume);
        //     }
        //     else{
        //         id = cc.audioEngine.play(cc.url.raw(resPath), loop, volume);
        //     }

        // }

        self.audioId[resPath].unshift(id);
        cc.audioEngine.setFinishCallback(id, function () {
            self.audioId[resPath].pop();
            if (func) {
                func();
            }
        });

        return id;
    },
    playMusic:function(resPath, loop, volume, func, single){
        let self = this;
        //cc.log("========sound========start", resPath);
        if (single && (self.audioId[resPath] != undefined && self.audioId[resPath].length > 0)) {
            return;
        }

        if (self.audioId[resPath] == undefined) {
            self.audioId[resPath] = [];
        }
        if (loop == undefined) {
            loop = false;
        }
        if (volume == undefined) {
            volume = 1;
        }
        if (typeof volume != "number") {
            volume = parseFloat(volume);
        }
        let id = -1
        cc.loader.loadRes(resPath, cc.AudioClip, function (err, clip) {
            if(err)
            {
                cc.log(err)
            }
            else{
                id = cc.audioEngine.playMusic(clip, loop);
                self.setBackGroundVolume(volume)
            }
		   
		});

    },
 

   
    /*
        播放背景音乐
    */
    playBackGround: function (resPath) {
        let volume = this.getBackGroundVolume();
        if (this.curPlayBgSound ) {
            if(this.curPlayBgSound != resPath){
                this.stop(this.curPlayBgSound);
            }else{
                return false;
            }
           
        }

        this.curPlayBgSound = resPath;
        this.playMusic(resPath, true, volume / 100 );
        this.backGroundResPath[resPath] = resPath;
        return true;
    },
    /*
        播放音效
    */
    playEffect: function (resPath, loop, volume, func, single) {
        let actVolume = this.getEffectVolume();
        this._playEffect(resPath, loop, actVolume/100, func, single);

    },

   


    /*
        得到语音音量
    */
    getVoiceVolume: function () {
        return window.Save.get("Sound_Voice_Volume", 100);
    },

    /*
        得到背景音乐音量
    */
    getBackGroundVolume: function () {
        return window.Save.get("Sound_BackGround_Volume", 100);
    },

    /*
        得到音效音量
    */
    getEffectVolume: function () {
        return window.Save.get("Sound_Effect_Volume", 100);
    },

    /*
        设置语音音量
    */
    setVoiceVolume: function (volume) {
        window.Save.set("Sound_Voice_Volume", volume);
    },

    /*
        设置背景音乐音量
    */
    setBackGroundVolume: function (volume) {
        window.Save.set("Sound_BackGround_Volume", volume);
        for (let resPath in this.backGroundResPath) {
            if (typeof (this.backGroundResPath[resPath]) == "string" && this.audioId[resPath] != undefined && this.audioId[resPath].length > 0) {
                let id = this.audioId[resPath][0];
                cc.audioEngine.setMusicVolume(volume / 100);
            }
        }
    },

    /*
        设置音效音量
    */
    setEffcetVolume: function (volume) {
        window.Save.set("Sound_Effect_Volume", volume);
        cc.audioEngine.setEffectsVolume(volume)
    },

    /*
        停止所有声音
    */
    stopAll: function () {
        cc.audioEngine.stopAll();
        this.audioId = {};
        this.backGroundResPath = {};
        this.curPlayBgSound = undefined;
    },
    /*
        停止对应资源的声音
    */
    stop: function (resPath) {
        if (this.audioId[resPath] == undefined || this.audioId[resPath].length == 0) {
            return;
        }

        for (let i = 0; i < this.audioId[resPath].length; i++) {
            let id = this.audioId[resPath].pop();
            cc.audioEngine.stop(id);
        }

        this.backGroundResPath[resPath] = undefined;
    },
};

window.SoundRes = {

    //背景音乐
    MainBg: "sound/bgm_main",
  
};