const pht_type	 = 	"type";
const pht_uid	 =	"uid";
const pht_name	 = 				"name";
const pht_id		 = 				"id";
const pht_sign	 =				"sign";
const pht_ext_data =				"ext-data";
const pht_state	  =				"state";

const protocol_type_req	=		"REQ";
const protocol_type_resp	=		"RESP";
const protocol_type_push	=		"PUSH";
const protocol_type_notify =		"NOTIFY";
const pkg_game_name =  "AP2";
const pkg_version	 =	"1.0";



 const  NegativePrefix = ' ';
 const  FullNumerPrefix = '\t';
 const  BigBytePrefix = '!';
 const  SmallBytePrefix = '~';
 const  SmallByte = 34;
 const  BigByte = 125;

 const Buffer = require('buffer').Buffer;

  const EN_KEY  = [
	"K4)$X,EAh1@7FoJ>P+M^e29v#Z36*}c_?WL'S<]Br8RQHDU-yu0am5C&l%`|Vgf\\/.:ItNxGbT\"{jqYwzk(s;dp[n=Oi",
	"L+.cAvY}l=j'BgyC%nIdZzx8P0o:s]-(7&|\"qHa5p$iU^O{@D#kFJG<4\\R*[b6Q?E/e23t1`_wNX>rM,Kf;WmSV9Th)u",
	",FL)WH7sdQ`<?i&-mP^eqI40\"Y|35$NcbB9y8@Az%OTwfk>2Mvjaolt=R[.]_#/pS'Vh;Jr+\\:x{6EUZCDug(n*X1K}G",
	";hCR#zT*bZOKfAW[w&9pi,gr%Id\"c@_ja]0ox/{N8(eJsmtXkU\\GMv)|^nu6+<3y:FVE=`2lQ7HL5S.}4YqBD1?'P->$",
	"O)U.&9\"}?tYKW@uFaEdx\\f|BHq_:I$b=i7hVS6JLsc/R#^jADy<8>r]1oMpC3N(4l%evQ-P`Zz+k*25G'0gwT[mX;{,n",
	"JK9?wVQ/r3H4.t%L=S$Z8b5)cy`q[i6xe<F\\N_DP,Bld7\"@]U+2A-fT#Oaj'n1&IWYz{o;0CEgRp*|hmX}s:>^uM(kGv",
	"&#PdFiCu0=M7tp)g{c\"4DO3@xn]+-^>m,$A<qoQj_JbH8?IzG6Y;eUhR2sr.vZ5[:VWB\\f%'9l(E1k}XSwT/Na*yLK`|",
	"fdF07S]$-Pt?cDHO#uY2W+.4UTBIwZ9R>m5E@:a*/8xo(e{;_|ph[,)n}N\"svCzJq\\kgr<1My`l6QXKi%V&'A=LbG^j3",
	"Hz_`(Gws5KJ\"C${B28c*gM4xUI'O?V|mX7}r-o9>l6&j/:y+\\TqhtibS.1[uW#03)nFdv]^E;aZDA,f@<YpeL%=NkPQR",
	"m42i&L3(yIu;K\\*MQOW|?^SaEZpk{@Yr]sxA865g[H/:z#ec_JF.10vXC>Bf=VtR-lqUTn),9\"h7odG<'`j}$wD+%NbP",
	"&Ip?g5/1:Jv^M2b-h>@o|yAQx{jWki;+OS\\=n_Hqa*C.ZVl9`B,)YFXu$cD(6N#UsE'4%3t07mdr<LK\"f}P[Re]GTw8z",
	":xrP5W=[>BaAg\\X9VIn0hS*G{k^_d+Cm2H$-y,eT1Z&}b(%36DzcLQ7RuOEpUF@l|4\"')YKs.<j?fo#tNq8JM;ivw`]/",
	"nT4a960*m&'[:_)E3XwOLk-AD8JC?IszFfv2+1%=UdpqHi]c}e<.@\\M>`|Kg;RZ\"PuyQtN/hoxj$^{VWSG#(b5,lrY7B",
	"f(b0I1sO-?37.XTB{/UY)_iEN4Pql:<kFV|@y>#6W&jcg,x`u\"KRmo;}%8Ah\\zvH]+d=tw2renG^Qa59Z$DL*'pSM[JC",
	"|WwE;{43k/)tqRjag?h^QnI`7Xc:_f1rH8F9z}0VPMK2exS&A.Ydv+\"soUmNO6lu-5B\\Z(]i$*pD#,GL@%='J[CbyT><",
    "mU<a1Voz{`_Q?^Z+Xh|\"\\t%pP24,xlqnEF&}3K58g-YejHv=#G[sR*>fCM(r;$'.Ju7S)Ldw9c0IDNO:WBb@6kAy/]iT" ];
    
 const DE_KEY  = [
	"l:%[YEt$>3'QcbT+7<#W=-K8dvG{1B,)IXO(.iNe0\"D4g|2MLFkP^C&p;yaH5A\\Uj@w6`_*}nsZVz/xoJufS9qhRrm]?",
	"ESK2C-A|\\#q@$c;hefYI_B9y=tX+naQ&.1RbUWG4Vr\"plO:`[wzMxum(6]Z?NjiH^%5ds/{L,T*v3<JFo>g}'k807PD)",
	":_?J0cv%xi\"1\\`9zQ=8>n(FDkf-YP.GHCrso#}'7g{$R@K3+ZbLpd&y;q[j]4^,UBA*5Nue/TOW2wVa6h)XtSMlEIm<|",
	"=&}:3yKX)^7{pGDwh`rn]kJ4b\"_f|x?/u$vecUl;M-mVI,zj%o(Sd0Qs+1TCZ@gB*><L.8#6ARiO[E5t9NP\\W2Fa'HYq",
	"(N?c&r`#nl|g%LsYo^apGCU'=zTAV*/Q9]R31q:>H-I[_\"hfMFv$E.y,jw6XO<i2@K4d7tDBPmbx}Z\\;WJ+0eu5Sk{8)",
	"OY40`]z9nSJV.)h_T+-8@N6$ugC2v%PUKiHjD|,a\"#1yFZI(l3XR'brc5>EQwG<[7:MBWkp?\\{Lq^fm=*t/x}&A;deos",
	"4#Ch\"il0x=B>]u*nZ85`S-NjbUE+@O9De(6m&RMPK{z,v7$HYrtWcdqT_af<?J|wL3%Vg1X'IokA;G/F\\[.)^s:yQ2}p",
	"\\2)rtuNXI7W*8J%h5}9Dm&K@GQgwB-Fv<_/E$z0=apxi[1+nA';:s6o4?Vc({RkHy.#O\"eUq|dlCYMTbf],3^>Lj`PSZ",
	"-_/wL<&b5QoFZN`[2a8*KC3HOjrxI>qn1.mid'\";,+v7y={|}YS:?^Bsl\\Rgh$%kX4eup6UWMzJAcGtTE)V]f(9P#0@D",
	"kOvz&r)h0yibULWV$(#HGmFjM-q^[6?E\\Zx:TpK+S.'1{3}2a8fe_4Y@;J/B7Rs9|QoP]Il%t=c\"gn<dAC`,XwD*N>5u",
	"q`Zf\"d]UKAT1M(i)/ge'^j|Q*@nE3%48SL\\cWyH#+po._Bt9vCzaO=XVNuDx-GRJ0[lwr&2?<>PkF5$ImbhY,{:7};6s",
	"dpDPLeOf8?GEj}5JBQc&RXt1\"wk(*m`-+@S\\_9C3uhVvr[%WY7I^2'0gK)/|<={,NU>Hn.6xl;aA4o]s$iqZyz#FT:bM",
	"atmH+,u0)Fx8Uh(GE2$w'|;&.^TIY>V9}=:1BsN?<\\6Xg5be_r#Jpq3{`-WPn/Z%vQKSC]iOl7y*\"jLMz@fcD4kdAo[R",
	"SHsZKw#6vcO*.3%'h,;pI-[q?X@eG+E\\1}t9Bla&|Tuz:)<nUy04CJ/5r{^bm7Qo$Mdj\"N]8LA>VkWx=i(fR`gPF_2DY",
	"XnjsQug,kWobS+H@M)(c_:CE=&}t|3rRdxm%DpB8vLqK]^J6/P{[I#;Tfweh5>91y<UN?24i0*`\\7Zl.AY-aV$OzF'\"G",
    "5R_8D`\\fW1=Kazl&;F<HvdIjq^$QX.uxsZnBCSOmbGg[op:-Ve}#'r2L0T6{/,+%tkhMYJ3|Nw?\"A(9@]U7cPi>y)*4E" ];
    
const EN_KEY_SIZE = 16;
const DE_KEY_SIZE = 16;
cc.Class( {

    // package header tag

properties:{

    //proto
    m_game_name: pkg_game_name,// AP2
    m_proto_type:0,   //req or push...
    m_version: pkg_version,  // version 1.0

    //header

    m_header_name:0,
    m_header_ext_data:0,
	m_header_id:42,
	m_header_sign:undefined,
	m_header_type:1,
    m_header_uid:0,
    m_header_state:0,

    //json
    m_json: undefined,

    //Ext-Data
    m_Ext_Data:undefined,
},
        

    statics:{

        biuldReq:function(funcName,data){
                    // cc.log("biuldReq---",funcName,data);
                    var Package = require("Package");
                    var Package = new Package();
                    Package.m_proto_type = protocol_type_req;
                    Package.m_json = data;
                    Package.m_header_name = funcName;
            
                    return Package;
                },

        biuldNotify:function(funcName,data){
                    // cc.log("biuldReq---",funcName,data);
                    var Package = require("Package");
                    var Package = new Package();
                    Package.m_proto_type = protocol_type_notify;
                    Package.m_json = data;
                    Package.m_header_name = funcName;
            
                    return Package;
    
        },

        ParseStrToPackage:function(str)//根据字符串生成一个package，主要用于服务器返回的数据解析
        {

            // cc.log("ParseStrToPackage");
            var Package = require("Package");
            var Package = new Package();
            Package.ParseProto(str);
            Package.ParseHeader(str);
            Package.ParseJson(str);
            return Package;

        },
    },


    encode()//编码成字符串
    {

        var proto = this.m_game_name+" "+this.m_proto_type+" "+this.m_version;
        var header = "";
        this.m_header_uid = window.GameEvent.UserInfo.uid;
        for (var key in this) {
            if(key.indexOf("header")>0)
            {
                var pos = key.lastIndexOf("_");
                var _key = key.substr(pos+1);
                if(key=="m_header_ext_data")
                {
                    _key = "ext-data";
                }
                header+=_key+":"+this[key]+"\n";
            }
        }
        var jsondata = JSON.stringify(this.m_json);
        if(this.m_header_type ==1)//加密
        {
            // jsondata = this.encry_data(jsondata+"\n");
            jsondata = new Buffer(jsondata+"\n").toString("base64");
        }
        var str = proto+"\n"+header+"\n"+jsondata+"\n";
        // cc.log("ste length",str.length);
        return str;

    },

 


    ParseProto(str)//根据字符串解析proto
    {

        var pos = str.indexOf(" ");
        var GameName = str.substr(0,pos); 
        // cc.log("ParseProto==",GameName);
        this.m_game_name = GameName;

        var pos1 = str.indexOf(" ",pos+1);
        var type = str.substr(pos+1,pos1-pos-1);
        // cc.log("type==",type);
        this.m_proto_type = type;

        var pos2 = str.indexOf("\n");
        var version = str.substr(pos1+1,pos2-pos1-1);
        // cc.log("version==",version);
        this.m_version = version;
        

        // return GameName;
    },

    ParseHeader(str)//根据字符串解析header
    {
        var pos = 0;
        var  posTemp = 0;
        while(pos<str.length-1)
        {
            if(str[pos]=="\n")
            {
                // cc.log(posTemp,pos);

                // cc.log("header==",str.substr(posTemp,pos-posTemp));
                var  str_line = str.substr(posTemp,pos-posTemp);

                var linepos = str_line.indexOf(":");
               
                var key = str_line.substr(0,linepos);
                var value = str_line.substr(linepos+1,str_line.length-linepos-1);
            //    cc.log("ParseHeader",key,value);
                if(key==pht_type)
                {
                    this.m_header_type = value;
                }
                if(key==pht_uid)
                {
                    this.m_header_uid = value;
                }
                if(key==pht_name)
                {
                    this.m_header_name = value;
                }
                if(key==pht_id)
                {
                    this.m_header_id = value;
                }
                if(key==pht_sign)
                {
                    this.m_header_sign = value;
                }
                if(key==pht_ext_data)
                {
                    this.m_header_ext_data = value;
                }
                if(key==pht_state)
                {
                    this.m_header_state= value;
                }

                posTemp = pos+1;
            }
            pos++;
        
        }

    },



    lastIndexOf(str,cha,num)//查找字符串出现的第几次
    {
        var x=str.lastIndexOf(cha);
        // cc.log("x---",x);
        for(var i=0;i<num-1;i++){
            
            x=str.lastIndexOf(cha,x-1);
            // cc.log("x====",x);
        }
        return x;
    },

    ParseJson(str)//根据字符串解析Json
    {
        var linepos = this.lastIndexOf(str,"\n",2);

        var json = str.substr(linepos+1,str.length-linepos-2);
      
       
        // cc.log("json--",json);
        if(this.m_header_type==1)
        {
            // json = this.decrpy_data(json);
            json = new Buffer(json,"base64").toString();//base64解密
        }
      
        json = JSON.parse(json);
        // cc.log("json=",JSON.stringify(json));
        this.m_json = json;
    },



    ctor:function(){
        // this.__instanceId = cc.ClassManager.getNewInstanceId();
        this.bclientClose = false;
    },


});




