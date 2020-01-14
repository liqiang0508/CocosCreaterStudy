const Buffer = require('buffer').Buffer;
cc.Class( {

    ctor:function(){
        // this.__instanceId = cc.ClassManager.getNewInstanceId();
        this.bclientClose = false;
    },

    //
    // use this for initialization
    connect: function (host, port) {

        this.netData = new Array();
        this.callbackMap = new Map();

        var def = require("Onlinedef");
        var self = this;

        if(host == null){
            this._wsiSendBinary = new WebSocket("ws://"+ def.hos+":" + def.port +"//")//def.host+":"+def.port);
        }else{
            this._wsiSendBinary = new WebSocket("ws://"+ host+":" +port +"//");
        }
        cc.log("-连接--------",host+":"+port);


        this._wsiSendBinary.binaryType = "arraybuffer";

        this._wsiSendBinary.onopen = function(evt) {
           cc.log("网络连接成功");
        //    self._wsiSendBinary.send(self.string2u8array("data"))
           self.reportConnectSuc();
           
        };

        this._wsiSendBinary.onmessage = function(evt) {

            var binaryStr = self.arrayU8ToU16Array(new Uint8Array(evt.data));
            
            var data = new Buffer(evt.data,"utf8");
            var Package  = require("Package");
            var _package = Package.ParseStrToPackage(data.toString());
         
            if(self.globalCall != null )
            {   
               
                self.globalCall(data);
                self.update1(_package.m_header_name,data);
             }

             cc.log("onmessage--33333333333333.........-",data);

            

        };

        this._wsiSendBinary.onerror = function(evt) {
            cc.log("网络错误");
            self.reportOnlineOff("网络错误");
        };

        this._wsiSendBinary.onclose = function(evt) {

            // After close, it's no longer possible to use it again, 
            // if you want to send another request, you need to create a new websocket instance
            self._wsiSendBinary = null;
            cc.log("网络已经断开");
            self.reportOnlineOff("网络已经断开");
        };

        this.onLoad();

    },

    //增加头
    addHead:function(obj){

        
        return obj;
    },

    //增加每次send的回调
    //一个funid 回调是唯一的， 后加入覆盖掉之前的
    addLocalCallback:function(id, call){
        if(id == null || call == null || call == undefined)
            return;
        this.callbackMap.set(id, call);
    },


    arrayU8ToU16Array:function(arry){

        // var data = new Buffer(arry);
        
        // return data.toString();
        var str = "";
        var utf8Length = 0;
        var utf16 = 0;
        for(var i = 0; i < arry.length; i++){
            if((arry[i]&0xF0) == 0xE0){
                utf8Length = 3;
                utf16 = utf16 | ((0x000F & arry[i]) << 12);
                utf16 = utf16 | ((0x003F & arry[i+1]) << 6);
                utf16 = utf16 | (0x003F & arry[i+2]); 
            }else if((arry[i]&0xE0) == 0xC0){
                utf8Length = 2;
                utf16 = utf16 | ((0x001F & arry[i]) << 6);
                utf16 = utf16 | (0x003F & arry[i+1]); 
            }else if(arry[i]  <= 0x7F){
                utf8Length = 1;
                utf16 = utf16 | (0x007F & arry[i]); 
            }
            i += utf8Length - 1;
            str += String.fromCharCode(utf16);
            utf16 = 0;
            utf8Length = 0;

        }
        
        return str;
       
    },

    string2u8array: function(str)
    {
        
        // var data = new Buffer(str);

        // return data;

        var u = new Uint8Array(str.length*3);
        var index = 0;
        for (var i = 0; i < str.length; i++) {
            var unic = str.charCodeAt(i);
            if ( unic <= 0x0000007F )  
            {  
                // * U-00000000 - U-0000007F:  0xxxxxxx  
                var c0 = (unic & 0x7F);
                u[index++] = c0;
            }  
            else if ( unic >= 0x00000080 && unic <= 0x000007FF )  
            {  
                // * U-00000080 - U-000007FF:  110xxxxx 10xxxxxx  
                var c1 = (unic & 0x3F) | 0x80;  
                var c0 = ((unic >> 6) & 0x1F) | 0xC0; 
                u[index++] = c0;
                u[index++] = c1;
            }  
            else if ( unic >= 0x00000800 && unic <= 0x0000FFFF )  
            {  
                // * U-00000800 - U-0000FFFF:  1110xxxx 10xxxxxx 10xxxxxx  
                var c2 = (unic & 0x3F) | 0x80;  
                var c1 = ((unic >>  6) & 0x3F) | 0x80;  
                var c0 = ((unic >> 12) & 0x0F) | 0xE0;  
                u[index++] = c0;
                u[index++] = c1;
                u[index++] = c2;
            }
            else
            {
                //ignore
            }
            // else if ( unic >= 0x00010000 && unic <= 0x001FFFFF )  
            // {  
            //     // * U-00010000 - U-001FFFFF:  11110xxx 10xxxxxx 10xxxxxx 10xxxxxx  
            //     *(pOutput+3) = (unic & 0x3F) | 0x80;  
            //     *(pOutput+2) = ((unic >>  6) & 0x3F) | 0x80;  
            //     *(pOutput+1) = ((unic >> 12) & 0x3F) | 0x80;  
            //     *pOutput     = ((unic >> 18) & 0x07) | 0xF0;  
            // }  
            // else if ( unic >= 0x00200000 && unic <= 0x03FFFFFF )  
            // {  
            //     // * U-00200000 - U-03FFFFFF:  111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx  
            //     *(pOutput+4) = (unic & 0x3F) | 0x80;  
            //     *(pOutput+3) = ((unic >>  6) & 0x3F) | 0x80;  
            //     *(pOutput+2) = ((unic >> 12) & 0x3F) | 0x80;  
            //     *(pOutput+1) = ((unic >> 18) & 0x3F) | 0x80;  
            //     *pOutput     = ((unic >> 24) & 0x03) | 0xF8;  
            // }  
            // else if ( unic >= 0x04000000 && unic <= 0x7FFFFFFF )  
            // {  
            //     // * U-04000000 - U-7FFFFFFF:  1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx  
            //     *(pOutput+5) = (unic & 0x3F) | 0x80;  
            //     *(pOutput+4) = ((unic >>  6) & 0x3F) | 0x80;  
            //     *(pOutput+3) = ((unic >> 12) & 0x3F) | 0x80;  
            //     *(pOutput+2) = ((unic >> 18) & 0x3F) | 0x80;  
            //     *(pOutput+1) = ((unic >> 24) & 0x3F) | 0x80;  
            //     *pOutput     = ((unic >> 30) & 0x01) | 0xFC;  
            // }
        }
        return new Uint8Array(u.buffer, 0, index)
    },

   
    // send: function(obj, callback)
    // {
        
    //     obj = this.addHead(obj);
    //     this.addLocalCallback(obj.funId, callback);

    //     if (!this._wsiSendBinary) { return; }
    //     if (this._wsiSendBinary.readyState === WebSocket.OPEN)
    //     {    
    //         var buf = JSON.stringify(obj);
    //         cc.log("======send json :" , buf);
    //         if(buf == null)
    //             return ;
    //         var arrData = this.string2u8array(buf)
    //         this._wsiSendBinary.send(arrData);
    //     }
    //     else
    //     {
    //         cc.log("网络已经断开", this._wsiSendBinary.readyState);
    //         this.reportOnlineOff("网络已经断开");
    //     }
    // },

      //增加head
    addProto:function(obj){
        
        var data = {};
        data.header = {type:0,
                        uid:0,
                        name:obj.name,
                        id:Math.floor(Math.random()*1000), 
                        // extdata:0,
                        sign:"972F12F7AC13B15F267B6555A80AED84", 
                                
        };
        name:obj.name,
        data.Data = obj.data;
        // data[0] = "AP2 REQ 1.0";
        // data.header["ext-data"] = 0;
        // cc.log("data--",JSON.stringify(data));
        var jsondata = JSON.stringify(obj.data);
        cc.log("jsondata====",jsondata);
        var encode = new Buffer(jsondata);
        cc.log("encode====",encode.toString("base64"));

        var _header="" ;
        for (var key in data.header) {
            // header = ""
                // cc.log("****",key,data.header[key]);
                _header+= key+":"+data.header[key]+"\n";

            
        } 
        // cc.log("header,",_header);
        var str = "AP2 REQ 1.0\n"+_header+"\n"+jsondata+"\n";
        cc.log(str);
      
         return str;
    },

//@param send data数据
    send:function(data,callback)
    {
        
        if(data.m_header_name != window.Message.MS_PingPong)
        {
            cc.log("Client send ===",data);
        }

        if(callback)
        {
            this.addLocalCallback(data.m_header_name, callback);
        }

        data = data.encode();
       
        if (!this._wsiSendBinary) { return; }
        if (this._wsiSendBinary.readyState === WebSocket.OPEN)
        {    
            // var buf = JSON.stringify(obj);
            // cc.log("======send json :" , buf);
            // if(buf == null)
            //     return ;
            var arrData = this.string2u8array(data.toString("utf-8"));
            this._wsiSendBinary.send(arrData);
           
        }
        else
        {
            cc.log("网络已经断开", this._wsiSendBinary.readyState);
            this.reportOnlineOff("网络已经断开");
        }
    },

    getWsState(){
        if(this._wsiSendBinary==null)
        {
            return false;
        }
        if(this._wsiSendBinary.readyState === WebSocket.OPEN)
        {
            return true;
        }
        return  false;
    },
    onLoad:function() {
        var self = this;
        // cc.director.getScheduler().scheduleUpdate(self, -1, false, this.update);
    },

    update1:function(funId, data){
        var func = this.callbackMap.get(funId);
        if(func!=undefined){
            cc.log("=========OnlineWs===heart==", funId);
            func(data);
        }
    },
    update:function(){
        
        if(this.netData == null || this.callbackMap == null)
            return;
        while(this.netData.length)
        {
            var data = this.netData.shift();
            // var obj = JSON.parse(data);
            // var Package  = require("Package");
            // var data = Package.ParseStrToPackage(data);
            // if(this.globalCall != null && obj.funId >= 10000)
            // {
            //     this.globalCall(data);
            //     if(obj.funId == 10000 || obj.funId == 10052)
            //     {
            //         this.update1(obj.funId,data);
            //     }
            // }else
            // {
            //     var index1;
            //     this.callbackMap.forEach(function(element, index, array) 
            //     {
            //         if(index == obj.funId){
            //             element(data)
            //             index1 = index;
            //         }
            //     });
            //     this.callbackMap.delete(index1);
            // }
        };

    }, 

    onDestroy:function(){
        cc.log("=====onlineWs=== onDestroy");
        cc.director.getScheduler().unscheduleUpdate(this);
        this.callbackMap.clear();
       
        if ( this._wsiSendBinary!=null && this._wsiSendBinary.readyState === WebSocket.OPEN){
            this.bclientClose = true;
            this._wsiSendBinary.close();
        }
       
        this._wsiSendBinary = null;
        this.globalCall = null;
    },

    setGlobalCallBack:function(callfunc){
        this.globalCall = callfunc;
        // cc.log("setGlobalCallBack--------",this.globalCall);
    },

    setOnlineErrorCall:function(call){
        this.errorCall = call;
    },

    reportOnlineOff:function(msg){
        cc.log("===onlinews==reportOnlineOff==");
        if(this.errorCall != null){
            this.errorCall(msg);
        }
    },

    setConnectCall:function(call){
        this.connectSuc = call;
    },

    reportConnectSuc:function(){
        if(this.connectSuc){
            this.connectSuc();
        }
    },

});
