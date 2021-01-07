一 项目初始化设置
    构建发布那设置好参数
    projectConfig.py 修改Key值，和发布面板一样的加密密钥
    当前文件夹下面新建ExePath.txt 文件 里面输入自己本地 cocoscreater.exe的路径  例如 D:/CocosDashboard/resources/.editors/Creator/2.4.3/CocosCreator.exe




二 原生主包热更新说明

打包debug包
    1 运行 GenerateDebugConfig.py

打包正式包
    1 运行 GenerateReleaseConfigII.py  


大致流程:热更新会自动调用命令行打包，将生成的代码和资源生成appinfoiii.json文件，生成对应Script_x文件夹, 并放在hotupversion文件夹下面




三 子游戏更新
配置subgameCfg.json
{
    "bundleScene": {
        "version": 5, 每个子游戏版本号
        "isupdate": true 小游戏bundle有修改，这个参数改成true 
    }, 
    "Testbundle": {
        "version": 5, 
        "isupdate": false
    },
    "xxx":{
        ....
    }
}

每个子游戏的资源为一个bundle
当子游戏的资源修改的时候，修改上面的isupdate为true，运行buildSubGameCfg.py
生成最新的   子游戏名称_版本号  文件夹