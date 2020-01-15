
var DevicesWeb = {
    getDevicesID:function(){//web先根据时间戳生成一个本地标识
        var timeStamp = new Date().getTime()
        var id = window.Save.get("decicesID",timeStamp)
        if(id==timeStamp)//本地没有就用当时的时间戳
        {
            window.Save.set("decicesID",timeStamp)
        }
        return id
    }

}


module.exports = DevicesWeb;