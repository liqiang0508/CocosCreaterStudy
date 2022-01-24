var Sound = {
    effectIds: {},
    playEffect: function (effectName, loop = false, endCall: Function = null) {
        var effectPath = "sound/" + effectName
        cc.resources.load(effectPath, cc.AudioClip, function (err, audio: cc.AudioClip) {
            if (err) {
                cc.error(err);
                return;
            }
            var id = cc.audioEngine.playEffect(audio, loop);
            Sound.effectIds[effectPath] = id;
            cc.audioEngine.setFinishCallback(id, () => {
                if (endCall) {
                    endCall()
                    cc.resources.release(effectPath);
                }
            })
        });

    },
    playMusic: function (musicName, loop = true) {
        var musicPath = "sound/" + musicName
        cc.resources.load(musicPath, cc.AudioClip, function (err, audio: cc.AudioClip) {
            if (err) {
                cc.error(err);
                return;
            }
            var id = cc.audioEngine.playMusic(audio, loop);
            Sound.effectIds[musicPath] = id;
        });
    },
    setEffectVolume: function (volume) {
        cc.audioEngine.setEffectsVolume(volume);
    },
    setMusicVolume: function (volume) {
        cc.audioEngine.setMusicVolume(volume);
    },

}

globalThis.Sound = Sound