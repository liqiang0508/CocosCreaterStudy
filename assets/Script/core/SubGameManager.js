//子游戏管理类

var SubGameManager = {

}

SubGameManager.Hello = function(){
    cc.log("SubGameManager.Hello ")
}

//读取远程配置的小游戏情况
SubGameManager.parseCfgFromData = function(data){
    this.remoteData = data//远程小游戏配置 
    cc.log("SubGameManager.parseCfgFromData",this.remoteData)
}

//获取游戏名称获取本地小游戏状态 
// "not_in_app"     不在本地，没有下载
// "in_app"         在本地，下载了子游戏
// "need_update"    在本地，需要更新
// "no_need_update" 在本地，不需要更新
SubGameManager.getSubGameState = function(subgameName){
    
}

//根据子游戏名称获取子游戏的配置
SubGameManager.getSubGameCfg = function(subgameName){
    
}

//根据子游戏名称检查是否需要更新
SubGameManager.checkSubGame = function(subgameName){
    
}


module.exports = SubGameManager;