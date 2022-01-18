window.__require = function e(t, n, i) {
function o(s, a) {
if (!n[s]) {
if (!t[s]) {
var c = s.split("/");
c = c[c.length - 1];
if (!t[c]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(c, !0);
if (r) return r(c, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = c;
}
var u = n[s] = {
exports: {}
};
t[s][0].call(u.exports, function(e) {
return o(t[s][1][e] || e);
}, u, u.exports, e, t, n, i);
}
return n[s].exports;
}
for (var r = "function" == typeof __require && __require, s = 0; s < i.length; s++) o(i[s]);
return o;
}({
AdaptBg: [ function(e, t) {
"use strict";
cc._RF.push(t, "ee625B2iPdOz4Trq3USAlCq", "AdaptBg");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
start: function() {
cc.find("Canvas").on("resize", this.resize.bind(this));
this.resize();
},
resize: function() {
var e = cc.view.getVisibleSize(), t = Math.min(this.node.width / e.width, this.node.height / e.height);
this.node.scale = this.node.scale / t;
}
});
cc._RF.pop();
}, {} ],
AdaptCanvas: [ function(e, t) {
"use strict";
cc._RF.push(t, "3d5f7WCRqhE5bZ5is2EOwx6", "AdaptCanvas");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.resize();
cc.find("Canvas").on("resize", this.resize.bind(this));
},
start: function() {},
resize: function() {
var e = cc.view.getDesignResolutionSize(), t = cc.view.getVisibleSize();
if (t.width / e.width > t.height / e.height) {
cc.Canvas.instance.fitHeight = !0;
cc.Canvas.instance.fitWidth = !1;
} else {
cc.Canvas.instance.fitHeight = !1;
cc.Canvas.instance.fitWidth = !0;
}
}
});
cc._RF.pop();
}, {} ],
AdaptUI: [ function(e, t) {
"use strict";
cc._RF.push(t, "7f436dxylZH4bCxvIF2a+LV", "AdaptUI");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
start: function() {
cc.sys.getSafeAreaRect(), cc.view.getVisibleSize();
}
});
cc._RF.pop();
}, {} ],
Alert: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ddbe6DEUkJPyLv9UmKO+cUY", "Alert");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = cc._decorator, o = i.ccclass, r = (i.property, function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.mText = "";
t.mBtnInfo = [];
t.mCall = null;
return t;
}
t.prototype.setTitle = function(e) {
this.mChild.text.getComponent(cc.Label).string = e;
};
t.prototype.setButtonInfo = function(e) {
if (1 == e.length) {
this.mChild.btn_yes.active = !1;
this.mChild.btn_no.active = !1;
this.mChild.btn_middle.active = !0;
this.setButtonText(this.mChild.btn_middle, e[0]);
}
if (0 == e.length) {
this.mChild.btn_yes.active = !1;
this.mChild.btn_no.active = !1;
this.mChild.btn_middle.active = !0;
this.setButtonText(this.mChild.btn_middle, "Yes");
}
if (2 == e.length) {
this.mChild.btn_yes.active = !0;
this.mChild.btn_no.active = !0;
this.mChild.btn_middle.active = !1;
this.setButtonText(this.mChild.btn_yes, e[0]);
this.setButtonText(this.mChild.btn_no, e[1]);
}
if (3 == e.length) {
this.mChild.btn_yes.active = !0;
this.mChild.btn_no.active = !0;
this.mChild.btn_middle.active = !0;
this.setButtonText(this.mChild.btn_yes, e[0]);
this.setButtonText(this.mChild.btn_no, e[1]);
this.setButtonText(this.mChild.btn_middle, e[2]);
}
};
t.prototype.fresh = function() {
this.mText && this.setTitle(this.mText);
this.mBtnInfo && this.setButtonInfo(this.mBtnInfo);
};
t.prototype.showAlert = function(e, t, n) {
this.mText = e;
this.mBtnInfo = t;
this.mCall = n;
this.isStarted() && this.fresh();
};
t.prototype.BtnCall = function(e) {
this.mCall && this.mCall(e);
};
t.prototype.setButtonText = function(e, t) {
var n = e.getChildByName("Background").getChildByName("Label");
n && (n.getComponent(cc.Label).string = t);
};
t.prototype.start = function() {
var e = this;
this.mChild = {};
UITool.getChildNode(this.mChild, this.node);
UITool.addBtnClick(this.mChild.btn_middle, function() {
e.BtnCall(2);
e.dismisssAnimation();
});
UITool.addBtnClick(this.mChild.btn_yes, function() {
e.BtnCall(1);
e.dismisssAnimation();
});
UITool.addBtnClick(this.mChild.btn_no, function() {
e.BtnCall(0);
e.dismisssAnimation();
});
UITool.addBtnClick(this.mChild.mask, function() {
e.dismisssAnimation();
});
this.fresh();
};
t.prototype.onbackpress = function() {
this.dismisssAnimation();
};
return __decorate([ o ], t);
}(e("../../core/popBaseView").default));
n.default = r;
cc._RF.pop();
}, {
"../../core/popBaseView": "popBaseView"
} ],
Base64Tool: [ function(e, t) {
"use strict";
cc._RF.push(t, "04561E7wzpHiKoMn1wok8WB", "Base64Tool");
var n = e("buffer").Buffer, i = {
encode: function(e) {
return new n(e).toString("base64");
},
decode: function(e) {
return new n(e, "base64").toString();
}
};
t.exports = i;
cc._RF.pop();
}, {
buffer: 6
} ],
BaseComponent: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9f8731qGcZP64lVKwO/GgDA", "BaseComponent");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = cc._decorator, o = i.ccclass, r = (i.property, function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.mStarted = !1;
return t;
}
t.prototype.onLoad = function() {};
t.prototype.start = function() {
this.mStarted = !0;
};
t.prototype.onDestroy = function() {};
t.prototype.isStarted = function() {
return this.mStarted;
};
return __decorate([ o ], t);
}(cc.Component));
n.default = r;
cc._RF.pop();
}, {} ],
BubbleScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "056f1Xf3tBLE5KzIZKhSnU6", "BubbleScene");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
window.GameState = 0;
this.content = cc.find("content", this.node);
this.scoreText = cc.find("uipanel/scoretxt", this.node);
this.ball = cc.find("ball", this.node);
this.schedule(this.CreateBubble, 1);
this.Score = 0;
var e = cc.find("uipanel/btn_pause", this.node);
UITool.addBtnClick(e, function() {
0 == window.GameState ? window.GameState = 1 : window.GameState = 0;
});
},
addScore: function() {
this.Score = this.Score + 1;
this.scoreText.getComponent(cc.Label).string = "Score:" + this.Score;
cc.tween(this.scoreText).to(.08, {
scale: 1.1
}).to(.05, {
scale: .8
}).to(.05, {
scale: 1
}).start();
},
CreateBubble: function() {
var e = this;
if (1 != window.GameState) {
var t = cc.instantiate(this.ball);
t.active = !0;
t.getComponent("Bubble").setClickCall(function() {
e.addScore();
});
this.content.addChild(t);
t.x = 0;
t.y = 0;
}
}
});
cc._RF.pop();
}, {} ],
Bubble: [ function(e, t) {
"use strict";
cc._RF.push(t, "588d51xwI9Hoqya8KILiGGJ", "Bubble");
cc.Class({
extends: cc.Component,
properties: {
life: {
type: cc.Integer,
default: 5
}
},
start: function() {
var e = this;
this.Speed = cc.v2(1e3 * Math.random() - 500, 1e3 * Math.random() - 500);
this.ScreenSize = cc.view.getVisibleSize();
UITool.addBtnClick(this.node, null, function() {
if (1 != window.GameState) {
e.ClickCall && e.ClickCall();
e.node.removeFromParent();
e.node.destroy();
}
});
},
onDestroy: function() {
this.node.targetOff(this);
},
setClickCall: function(e) {
this.ClickCall = e;
},
update: function(e) {
if (1 != window.GameState) {
this.node.x = this.node.x + this.Speed.x * e;
this.node.y = this.node.y + this.Speed.y * e;
if (this.node.x <= -(this.ScreenSize.width / 2 - this.node.width / 2)) {
this.node.x = -(this.ScreenSize.width / 2 - this.node.width / 2);
this.Speed.x = -this.Speed.x;
this.life = this.life - 1;
}
if (this.node.x >= this.ScreenSize.width / 2 - this.node.width / 2) {
this.node.x = this.ScreenSize.width / 2 - this.node.width / 2;
this.Speed.x = -this.Speed.x;
this.life = this.life - 1;
}
if (this.node.y <= -(this.ScreenSize.height / 2 - this.node.height / 2)) {
this.node.y = -(this.ScreenSize.height / 2 - this.node.height / 2);
this.Speed.y = -this.Speed.y;
this.life = this.life - 1;
}
if (this.node.y >= this.ScreenSize.height / 2 - this.node.height / 2) {
this.node.y = this.ScreenSize.height / 2 - this.node.height / 2;
this.Speed.y = -this.Speed.y;
this.life = this.life - 1;
}
if (0 == this.life) {
this.node.removeFromParent();
this.node.destroy();
}
}
}
});
cc._RF.pop();
}, {} ],
CastTest: [ function(e, t) {
"use strict";
cc._RF.push(t, "27518R8AWdKgbFqyhaZ2dB+", "CastTest");
cc.Class({
extends: cc.Component,
properties: {
_cur_length: 0,
graphic_line: {
type: cc.Graphics,
default: null
}
},
onEnable: function() {},
onLoad: function() {
var e = this, t = this;
this.img = cc.find("img", this.node);
this.img.setPosition(cc.v2(0, 0));
window.EventManager.on(this.node, "gameover", function() {
console.log("game over====");
});
var n = cc.find("uipanel/firebtn", this.node);
UITool.addBtnClick(n, function() {
cc.log("firebtn*****vec", t.forceVec);
var n = cc.v2(t.forceVec.x, t.forceVec.y).mul(6e5);
cc.log("firebtn*****force", n);
e.img.getComponent(cc.RigidBody).applyForceToCenter(n);
});
UITool.addBtnClick(this.node, function(e) {
var n = e.getTouches()[0].getLocation();
n = t.img.parent.convertToNodeSpaceAR(n);
var i = t.img.getPosition().subSelf(n).normalizeSelf();
cc.log("v===", i);
t.forceVec = i;
});
},
onTouchStart: function() {
this.graphic_line.clear();
},
onTouchMove: function(e) {
this.graphic_line.clear();
this._cur_length = 0;
var t = e.getStartLocation(), n = e.getLocation();
this.drawRayCast(t, n.subSelf(t).normalizeSelf());
this.graphic_line.stroke();
},
onTouchEnd: function() {
this.graphic_line.clear();
},
drawRayCast: function(e, t) {
var n = 1440 - this._cur_length;
if (!(n <= 0)) {
var i = e.add(t.mul(n)), o = cc.director.getPhysicsManager().rayCast(e, i, cc.RayCastType.Closest);
if (o.length > 0) {
var r = o[0], s = r.point;
this.drawAimLine(e, s);
var a = s.sub(e).mag();
this._cur_length += a;
var c = r.normal, l = t, u = l.sub(c.mul(2 * l.dot(c)));
this.drawRayCast(s, u);
} else this.drawAimLine(e, i);
}
},
drawAimLine: function(e, t) {
var n = this.graphic_line.node.convertToNodeSpaceAR(e);
this.graphic_line.moveTo(n.x, n.y);
this.graphic_line.strokeColor = new cc.Color().fromHEX("#ffffff");
this.graphic_line.lineWidth = 2;
var i = t.sub(e), o = Math.round(i.mag() / 35);
i.normalizeSelf().mulSelf(35);
for (var r = 0; r < o; r++) {
n.addSelf(i);
this.graphic_line.circle(n.x, n.y, 6);
}
},
start: function() {},
update: function() {},
onBeginContact: function() {
console.log("onBeginContact");
},
onEndContact: function() {
console.log("onEndContact");
},
onPreSolve: function() {
console.log("onPreSolve");
},
onPostSolve: function() {
console.log("onPostSolve");
},
onCollisionEnter: function() {
console.log("onCollisionEnter");
}
});
cc._RF.pop();
}, {} ],
Cell: [ function(e, t) {
"use strict";
cc._RF.push(t, "6cd2bQoraxKY5HGNVMucv31", "Cell");
var n = [ "stop_banana", "stop_begemot", "stop_cocktail", "stop_crocodile", "stop_kakadu", "stop_lion", "stop_man", "stop_monkey" ];
cc.Class({
extends: cc.Component,
properties: {},
setBgRes: function(e) {
if (this.bg) {
var t = this.bg.getComponent(cc.Sprite);
if (t) {
var i = "slots/" + n[e];
cc.resources.load(i, function(e, n) {
e ? cc.log("err==", e) : n && (t.spriteFrame = new cc.SpriteFrame(n));
});
}
} else cc.log("this.bg  不存在");
},
seTextString: function(e) {
this.textNode ? this.textNode.getComponent(cc.Label).string = e : cc.log("this.textNode  不存在");
},
onLoad: function() {
this.bg = this.node;
this.textNode = cc.find("text", this.node);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Chanel: [ function(e, t) {
"use strict";
cc._RF.push(t, "15547fdAgdMZo3lwC1nVArs", "Chanel");
var n = {
WIN32: 0,
IOS_APPSTORE: 1,
H5: 2,
ANDROID_GOOGLE_PLAY: 3
};
window.chanel = n;
cc.sys.isBrowser ? window.DISTRIBUTE_CHANNEL = n.H5 : cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? window.DISTRIBUTE_CHANNEL = n.ANDROID_GOOGLE_PLAY : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS ? window.DISTRIBUTE_CHANNEL = n.IOS_APPSTORE : window.DISTRIBUTE_CHANNEL = n.WIN32;
cc._RF.pop();
}, {} ],
ConstEventDefine: [ function(e, t) {
"use strict";
cc._RF.push(t, "61b76Jo/yFIe6tdWMzfo4eF", "ConstEventDefine");
globalThis.ConstEventDefine = {
EVENT_NAME: {
TEST: "TEST"
}
};
cc._RF.pop();
}, {} ],
ConstantItem: [ function(e, t) {
"use strict";
cc._RF.push(t, "597b04MNS9KfIVJ0rR+fn0e", "ConstantItem");
var n = {
1: {}
};
n[1].ID = 1;
n[1].Name = "钻石包_1";
n[1].Type = 0;
n[1].PriceType = 2;
n[1].Price = 35;
n[1].PriceBeforeDiscount = 0;
n[1].Time = 0;
n[1].StorePosition = 1101;
n[1].InfoVersion = 0;
n[1].AddGem = 6;
n[1].AddInteractiveItem = 0;
n[1].AddSpeechItem = 0;
n[1].DiscountBuyItem = 0;
n[1].AddChip = 0;
n[1].MinRandomChip = 0;
n[1].MaxRandomChip = 0;
n[2] = {};
n[2].ID = 2;
n[2].Name = "钻石包_2";
n[2].Type = 0;
n[2].PriceType = 2;
n[2].Price = 175;
n[2].PriceBeforeDiscount = 0;
n[2].Time = 0;
n[2].StorePosition = 1102;
n[2].InfoVersion = 0;
n[2].AddGem = 31;
n[2].AddInteractiveItem = 0;
n[2].AddSpeechItem = 0;
n[2].DiscountBuyItem = 0;
n[2].AddChip = 0;
n[2].MinRandomChip = 0;
n[2].MaxRandomChip = 0;
n[3] = {};
n[3].ID = 3;
n[3].Name = "钻石包_3";
n[3].Type = 0;
n[3].PriceType = 2;
n[3].Price = 699;
n[3].PriceBeforeDiscount = 0;
n[3].Time = 0;
n[3].StorePosition = 1103;
n[3].InfoVersion = 0;
n[3].AddGem = 132;
n[3].AddInteractiveItem = 0;
n[3].AddSpeechItem = 0;
n[3].DiscountBuyItem = 0;
n[3].AddChip = 0;
n[3].MinRandomChip = 0;
n[3].MaxRandomChip = 0;
n[4] = {};
n[4].ID = 4;
n[4].Name = "钻石包_4";
n[4].Type = 0;
n[4].PriceType = 2;
n[4].Price = 1750;
n[4].PriceBeforeDiscount = 0;
n[4].Time = 0;
n[4].StorePosition = 1104;
n[4].InfoVersion = 0;
n[4].AddGem = 336;
n[4].AddInteractiveItem = 0;
n[4].AddSpeechItem = 0;
n[4].DiscountBuyItem = 0;
n[4].AddChip = 0;
n[4].MinRandomChip = 0;
n[4].MaxRandomChip = 0;
n[5] = {};
n[5].ID = 5;
n[5].Name = "钻石包_5";
n[5].Type = 0;
n[5].PriceType = 2;
n[5].Price = 3500;
n[5].PriceBeforeDiscount = 0;
n[5].Time = 0;
n[5].StorePosition = 1105;
n[5].InfoVersion = 0;
n[5].AddGem = 690;
n[5].AddInteractiveItem = 0;
n[5].AddSpeechItem = 0;
n[5].DiscountBuyItem = 0;
n[5].AddChip = 0;
n[5].MinRandomChip = 0;
n[5].MaxRandomChip = 0;
n[6] = {};
n[6].ID = 6;
n[6].Name = "周卡";
n[6].Type = 7;
n[6].PriceType = 2;
n[6].Price = 175;
n[6].PriceBeforeDiscount = 0;
n[6].Time = 168;
n[6].StorePosition = 0;
n[6].InfoVersion = 0;
n[6].AddGem = 15;
n[6].AddInteractiveItem = 0;
n[6].AddSpeechItem = 0;
n[6].DiscountBuyItem = 0;
n[6].AddChip = 0;
n[6].MinRandomChip = 0;
n[6].MaxRandomChip = 0;
n[7] = {};
n[7].ID = 7;
n[7].Name = "月卡";
n[7].Type = 7;
n[7].PriceType = 2;
n[7].Price = 699;
n[7].PriceBeforeDiscount = 0;
n[7].Time = 720;
n[7].StorePosition = 0;
n[7].InfoVersion = 0;
n[7].AddGem = 100;
n[7].AddInteractiveItem = 0;
n[7].AddSpeechItem = 0;
n[7].DiscountBuyItem = 0;
n[7].AddChip = 0;
n[7].MinRandomChip = 0;
n[7].MaxRandomChip = 0;
n[16] = {};
n[16].ID = 16;
n[16].Name = "互动道具包_1";
n[16].Type = 0;
n[16].PriceType = 0;
n[16].Price = 1e3;
n[16].PriceBeforeDiscount = 0;
n[16].Time = 0;
n[16].StorePosition = 2104;
n[16].InfoVersion = 0;
n[16].AddGem = 0;
n[16].AddInteractiveItem = 25;
n[16].AddSpeechItem = 0;
n[16].DiscountBuyItem = 0;
n[16].AddChip = 0;
n[16].MinRandomChip = 0;
n[16].MaxRandomChip = 0;
n[17] = {};
n[17].ID = 17;
n[17].Name = "互动道具包_2";
n[17].Type = 0;
n[17].PriceType = 0;
n[17].Price = 6e3;
n[17].PriceBeforeDiscount = 0;
n[17].Time = 0;
n[17].StorePosition = 2105;
n[17].InfoVersion = 0;
n[17].AddGem = 0;
n[17].AddInteractiveItem = 150;
n[17].AddSpeechItem = 0;
n[17].DiscountBuyItem = 0;
n[17].AddChip = 0;
n[17].MinRandomChip = 0;
n[17].MaxRandomChip = 0;
n[18] = {};
n[18].ID = 18;
n[18].Name = "互动道具包_3";
n[18].Type = 0;
n[18].PriceType = 0;
n[18].Price = 24e3;
n[18].PriceBeforeDiscount = 0;
n[18].Time = 0;
n[18].StorePosition = 2106;
n[18].InfoVersion = 0;
n[18].AddGem = 0;
n[18].AddInteractiveItem = 660;
n[18].AddSpeechItem = 0;
n[18].DiscountBuyItem = 0;
n[18].AddChip = 0;
n[18].MinRandomChip = 0;
n[18].MaxRandomChip = 0;
n[19] = {};
n[19].ID = 19;
n[19].Name = "喇叭包_1";
n[19].Type = 0;
n[19].PriceType = 0;
n[19].Price = 2500;
n[19].PriceBeforeDiscount = 0;
n[19].Time = 0;
n[19].StorePosition = 2101;
n[19].InfoVersion = 0;
n[19].AddGem = 0;
n[19].AddInteractiveItem = 0;
n[19].AddSpeechItem = 25;
n[19].DiscountBuyItem = 0;
n[19].AddChip = 0;
n[19].MinRandomChip = 0;
n[19].MaxRandomChip = 0;
n[20] = {};
n[20].ID = 20;
n[20].Name = "喇叭包_2";
n[20].Type = 0;
n[20].PriceType = 0;
n[20].Price = 15e3;
n[20].PriceBeforeDiscount = 0;
n[20].Time = 0;
n[20].StorePosition = 2102;
n[20].InfoVersion = 0;
n[20].AddGem = 0;
n[20].AddInteractiveItem = 0;
n[20].AddSpeechItem = 150;
n[20].DiscountBuyItem = 0;
n[20].AddChip = 0;
n[20].MinRandomChip = 0;
n[20].MaxRandomChip = 0;
n[21] = {};
n[21].ID = 21;
n[21].Name = "喇叭包_3";
n[21].Type = 0;
n[21].PriceType = 0;
n[21].Price = 6e4;
n[21].PriceBeforeDiscount = 0;
n[21].Time = 0;
n[21].StorePosition = 2103;
n[21].InfoVersion = 0;
n[21].AddGem = 0;
n[21].AddInteractiveItem = 0;
n[21].AddSpeechItem = 600;
n[21].DiscountBuyItem = 0;
n[21].AddChip = 0;
n[21].MinRandomChip = 0;
n[21].MaxRandomChip = 0;
n[22] = {};
n[22].ID = 22;
n[22].Name = "喇叭包_4";
n[22].Type = 0;
n[22].PriceType = 1;
n[22].Price = 10;
n[22].PriceBeforeDiscount = 0;
n[22].Time = 0;
n[22].StorePosition = 2107;
n[22].InfoVersion = 0;
n[22].AddGem = 0;
n[22].AddInteractiveItem = 0;
n[22].AddSpeechItem = 1;
n[22].DiscountBuyItem = 0;
n[22].AddChip = 0;
n[22].MinRandomChip = 0;
n[22].MaxRandomChip = 0;
n[4004] = {};
n[4004].ID = 4004;
n[4004].Name = "饮品_鲜榨果汁";
n[4004].Type = 4;
n[4004].PriceType = 0;
n[4004].Price = 3500;
n[4004].PriceBeforeDiscount = 0;
n[4004].Time = 24;
n[4004].StorePosition = 4101;
n[4004].InfoVersion = 0;
n[4004].AddGem = 0;
n[4004].AddInteractiveItem = 0;
n[4004].AddSpeechItem = 0;
n[4004].DiscountBuyItem = 0;
n[4004].AddChip = 0;
n[4004].MinRandomChip = 0;
n[4004].MaxRandomChip = 0;
n[4009] = {};
n[4009].ID = 4009;
n[4009].Name = "饮品_鸡尾酒（血腥玛丽）";
n[4009].Type = 4;
n[4009].PriceType = 0;
n[4009].Price = 3500;
n[4009].PriceBeforeDiscount = 0;
n[4009].Time = 24;
n[4009].StorePosition = 4102;
n[4009].InfoVersion = 0;
n[4009].AddGem = 0;
n[4009].AddInteractiveItem = 0;
n[4009].AddSpeechItem = 0;
n[4009].DiscountBuyItem = 0;
n[4009].AddChip = 0;
n[4009].MinRandomChip = 0;
n[4009].MaxRandomChip = 0;
n[4013] = {};
n[4013].ID = 4013;
n[4013].Name = "美食_棒棒糖";
n[4013].Type = 4;
n[4013].PriceType = 0;
n[4013].Price = 4500;
n[4013].PriceBeforeDiscount = 0;
n[4013].Time = 24;
n[4013].StorePosition = 4105;
n[4013].InfoVersion = 0;
n[4013].AddGem = 0;
n[4013].AddInteractiveItem = 0;
n[4013].AddSpeechItem = 0;
n[4013].DiscountBuyItem = 0;
n[4013].AddChip = 0;
n[4013].MinRandomChip = 0;
n[4013].MaxRandomChip = 0;
n[4014] = {};
n[4014].ID = 4014;
n[4014].Name = "美食_提拉米苏";
n[4014].Type = 4;
n[4014].PriceType = 0;
n[4014].Price = 5500;
n[4014].PriceBeforeDiscount = 0;
n[4014].Time = 24;
n[4014].StorePosition = 4107;
n[4014].InfoVersion = 0;
n[4014].AddGem = 0;
n[4014].AddInteractiveItem = 0;
n[4014].AddSpeechItem = 0;
n[4014].DiscountBuyItem = 0;
n[4014].AddChip = 0;
n[4014].MinRandomChip = 0;
n[4014].MaxRandomChip = 0;
n[4019] = {};
n[4019].ID = 4019;
n[4019].Name = "美食_冰淇林";
n[4019].Type = 4;
n[4019].PriceType = 0;
n[4019].Price = 5500;
n[4019].PriceBeforeDiscount = 0;
n[4019].Time = 24;
n[4019].StorePosition = 4106;
n[4019].InfoVersion = 0;
n[4019].AddGem = 0;
n[4019].AddInteractiveItem = 0;
n[4019].AddSpeechItem = 0;
n[4019].DiscountBuyItem = 0;
n[4019].AddChip = 0;
n[4019].MinRandomChip = 0;
n[4019].MaxRandomChip = 0;
n[4023] = {};
n[4023].ID = 4023;
n[4023].Name = "烟_雪茄";
n[4023].Type = 4;
n[4023].PriceType = 0;
n[4023].Price = 4500;
n[4023].PriceBeforeDiscount = 0;
n[4023].Time = 24;
n[4023].StorePosition = 4103;
n[4023].InfoVersion = 0;
n[4023].AddGem = 0;
n[4023].AddInteractiveItem = 0;
n[4023].AddSpeechItem = 0;
n[4023].DiscountBuyItem = 0;
n[4023].AddChip = 0;
n[4023].MinRandomChip = 0;
n[4023].MaxRandomChip = 0;
n[4024] = {};
n[4024].ID = 4024;
n[4024].Name = "烟_烟斗";
n[4024].Type = 4;
n[4024].PriceType = 0;
n[4024].Price = 4500;
n[4024].PriceBeforeDiscount = 0;
n[4024].Time = 24;
n[4024].StorePosition = 4104;
n[4024].InfoVersion = 0;
n[4024].AddGem = 0;
n[4024].AddInteractiveItem = 0;
n[4024].AddSpeechItem = 0;
n[4024].DiscountBuyItem = 0;
n[4024].AddChip = 0;
n[4024].MinRandomChip = 0;
n[4024].MaxRandomChip = 0;
n[4027] = {};
n[4027].ID = 4027;
n[4027].Name = "吉祥物_招财猫";
n[4027].Type = 4;
n[4027].PriceType = 0;
n[4027].Price = 6500;
n[4027].PriceBeforeDiscount = 0;
n[4027].Time = 24;
n[4027].StorePosition = 4108;
n[4027].InfoVersion = 0;
n[4027].AddGem = 0;
n[4027].AddInteractiveItem = 0;
n[4027].AddSpeechItem = 0;
n[4027].DiscountBuyItem = 0;
n[4027].AddChip = 0;
n[4027].MinRandomChip = 0;
n[4027].MaxRandomChip = 0;
n[4029] = {};
n[4029].ID = 4029;
n[4029].Name = "吉祥物_忠犬";
n[4029].Type = 4;
n[4029].PriceType = 0;
n[4029].Price = 6500;
n[4029].PriceBeforeDiscount = 0;
n[4029].Time = 24;
n[4029].StorePosition = 4109;
n[4029].InfoVersion = 0;
n[4029].AddGem = 0;
n[4029].AddInteractiveItem = 0;
n[4029].AddSpeechItem = 0;
n[4029].DiscountBuyItem = 0;
n[4029].AddChip = 0;
n[4029].MinRandomChip = 0;
n[4029].MaxRandomChip = 0;
n[4031] = {};
n[4031].ID = 4031;
n[4031].Name = "吉祥物_晴天娃娃";
n[4031].Type = 4;
n[4031].PriceType = 0;
n[4031].Price = 7500;
n[4031].PriceBeforeDiscount = 0;
n[4031].Time = 24;
n[4031].StorePosition = 4110;
n[4031].InfoVersion = 0;
n[4031].AddGem = 0;
n[4031].AddInteractiveItem = 0;
n[4031].AddSpeechItem = 0;
n[4031].DiscountBuyItem = 0;
n[4031].AddChip = 0;
n[4031].MinRandomChip = 0;
n[4031].MaxRandomChip = 0;
n[4038] = {};
n[4038].ID = 4038;
n[4038].Name = "饰品_手链";
n[4038].Type = 4;
n[4038].PriceType = 0;
n[4038].Price = 7500;
n[4038].PriceBeforeDiscount = 0;
n[4038].Time = 24;
n[4038].StorePosition = 4112;
n[4038].InfoVersion = 0;
n[4038].AddGem = 0;
n[4038].AddInteractiveItem = 0;
n[4038].AddSpeechItem = 0;
n[4038].DiscountBuyItem = 0;
n[4038].AddChip = 0;
n[4038].MinRandomChip = 0;
n[4038].MaxRandomChip = 0;
n[4039] = {};
n[4039].ID = 4039;
n[4039].Name = "饰品_铃铛";
n[4039].Type = 4;
n[4039].PriceType = 0;
n[4039].Price = 7500;
n[4039].PriceBeforeDiscount = 0;
n[4039].Time = 24;
n[4039].StorePosition = 4111;
n[4039].InfoVersion = 0;
n[4039].AddGem = 0;
n[4039].AddInteractiveItem = 0;
n[4039].AddSpeechItem = 0;
n[4039].DiscountBuyItem = 0;
n[4039].AddChip = 0;
n[4039].MinRandomChip = 0;
n[4039].MaxRandomChip = 0;
n[5001] = {};
n[5001].ID = 5001;
n[5001].Name = "VIP（白银）";
n[5001].Type = 5;
n[5001].PriceType = 0;
n[5001].Price = 0;
n[5001].PriceBeforeDiscount = 0;
n[5001].Time = 0;
n[5001].StorePosition = 0;
n[5001].InfoVersion = 0;
n[5001].AddGem = 0;
n[5001].AddInteractiveItem = 0;
n[5001].AddSpeechItem = 0;
n[5001].DiscountBuyItem = 100;
n[5001].AddChip = 0;
n[5001].MinRandomChip = 0;
n[5001].MaxRandomChip = 0;
n[5002] = {};
n[5002].ID = 5002;
n[5002].Name = "VIP（黄金）";
n[5002].Type = 5;
n[5002].PriceType = 0;
n[5002].Price = 0;
n[5002].PriceBeforeDiscount = 0;
n[5002].Time = 0;
n[5002].StorePosition = 0;
n[5002].InfoVersion = 0;
n[5002].AddGem = 0;
n[5002].AddInteractiveItem = 0;
n[5002].AddSpeechItem = 0;
n[5002].DiscountBuyItem = 95;
n[5002].AddChip = 0;
n[5002].MinRandomChip = 0;
n[5002].MaxRandomChip = 0;
n[5003] = {};
n[5003].ID = 5003;
n[5003].Name = "VIP（蓝钻）";
n[5003].Type = 5;
n[5003].PriceType = 0;
n[5003].Price = 0;
n[5003].PriceBeforeDiscount = 0;
n[5003].Time = 0;
n[5003].StorePosition = 0;
n[5003].InfoVersion = 0;
n[5003].AddGem = 0;
n[5003].AddInteractiveItem = 0;
n[5003].AddSpeechItem = 0;
n[5003].DiscountBuyItem = 90;
n[5003].AddChip = 0;
n[5003].MinRandomChip = 0;
n[5003].MaxRandomChip = 0;
n[5004] = {};
n[5004].ID = 5004;
n[5004].Name = "VIP（黑钻）";
n[5004].Type = 5;
n[5004].PriceType = 0;
n[5004].Price = 0;
n[5004].PriceBeforeDiscount = 0;
n[5004].Time = 0;
n[5004].StorePosition = 0;
n[5004].InfoVersion = 0;
n[5004].AddGem = 0;
n[5004].AddInteractiveItem = 0;
n[5004].AddSpeechItem = 0;
n[5004].DiscountBuyItem = 80;
n[5004].AddChip = 0;
n[5004].MinRandomChip = 0;
n[5004].MaxRandomChip = 0;
n[5005] = {};
n[5005].ID = 5005;
n[5005].Name = "VIP（至尊）";
n[5005].Type = 5;
n[5005].PriceType = 0;
n[5005].Price = 0;
n[5005].PriceBeforeDiscount = 0;
n[5005].Time = 0;
n[5005].StorePosition = 0;
n[5005].InfoVersion = 0;
n[5005].AddGem = 0;
n[5005].AddInteractiveItem = 0;
n[5005].AddSpeechItem = 0;
n[5005].DiscountBuyItem = 70;
n[5005].AddChip = 0;
n[5005].MinRandomChip = 0;
n[5005].MaxRandomChip = 0;
n[6001] = {};
n[6001].ID = 6001;
n[6001].Name = "互动道具";
n[6001].Type = 6;
n[6001].PriceType = 0;
n[6001].Price = 0;
n[6001].PriceBeforeDiscount = 0;
n[6001].Time = 0;
n[6001].StorePosition = 0;
n[6001].InfoVersion = 0;
n[6001].AddGem = 0;
n[6001].AddInteractiveItem = 0;
n[6001].AddSpeechItem = 0;
n[6001].DiscountBuyItem = 0;
n[6001].AddChip = 0;
n[6001].MinRandomChip = 0;
n[6001].MaxRandomChip = 0;
n[6002] = {};
n[6002].ID = 6002;
n[6002].Name = "语音聊天道具";
n[6002].Type = 6;
n[6002].PriceType = 0;
n[6002].Price = 0;
n[6002].PriceBeforeDiscount = 0;
n[6002].Time = 0;
n[6002].StorePosition = 0;
n[6002].InfoVersion = 0;
n[6002].AddGem = 0;
n[6002].AddInteractiveItem = 0;
n[6002].AddSpeechItem = 0;
n[6002].DiscountBuyItem = 0;
n[6002].AddChip = 0;
n[6002].MinRandomChip = 0;
n[6002].MaxRandomChip = 0;
n[6003] = {};
n[6003].ID = 6003;
n[6003].Name = "踢人卡";
n[6003].Type = 6;
n[6003].PriceType = 0;
n[6003].Price = 0;
n[6003].PriceBeforeDiscount = 0;
n[6003].Time = 0;
n[6003].StorePosition = 0;
n[6003].InfoVersion = 0;
n[6003].AddGem = 0;
n[6003].AddInteractiveItem = 0;
n[6003].AddSpeechItem = 0;
n[6003].DiscountBuyItem = 0;
n[6003].AddChip = 0;
n[6003].MinRandomChip = 0;
n[6003].MaxRandomChip = 0;
n[6004] = {};
n[6004].ID = 6004;
n[6004].Name = "锁房卡";
n[6004].Type = 6;
n[6004].PriceType = 0;
n[6004].Price = 0;
n[6004].PriceBeforeDiscount = 0;
n[6004].Time = 0;
n[6004].StorePosition = 0;
n[6004].InfoVersion = 0;
n[6004].AddGem = 0;
n[6004].AddInteractiveItem = 0;
n[6004].AddSpeechItem = 0;
n[6004].DiscountBuyItem = 0;
n[6004].AddChip = 0;
n[6004].MinRandomChip = 0;
n[6004].MaxRandomChip = 0;
n[6005] = {};
n[6005].ID = 6005;
n[6005].Name = "全服大喇叭";
n[6005].Type = 6;
n[6005].PriceType = 0;
n[6005].Price = 0;
n[6005].PriceBeforeDiscount = 0;
n[6005].Time = 0;
n[6005].StorePosition = 0;
n[6005].InfoVersion = 0;
n[6005].AddGem = 0;
n[6005].AddInteractiveItem = 0;
n[6005].AddSpeechItem = 0;
n[6005].DiscountBuyItem = 0;
n[6005].AddChip = 0;
n[6005].MinRandomChip = 0;
n[6005].MaxRandomChip = 0;
n[7001] = {};
n[7001].ID = 7001;
n[7001].Name = "小月卡";
n[7001].Type = 7;
n[7001].PriceType = 1;
n[7001].Price = 30;
n[7001].PriceBeforeDiscount = 0;
n[7001].Time = 720;
n[7001].StorePosition = 0;
n[7001].InfoVersion = 0;
n[7001].AddGem = 0;
n[7001].AddInteractiveItem = 0;
n[7001].AddSpeechItem = 0;
n[7001].DiscountBuyItem = 0;
n[7001].AddChip = 1e6;
n[7001].MinRandomChip = 15e4;
n[7001].MaxRandomChip = 2e5;
n[8001] = {};
n[8001].ID = 8001;
n[8001].Name = "小小兵";
n[8001].Type = 8;
n[8001].PriceType = 0;
n[8001].Price = 5e4;
n[8001].PriceBeforeDiscount = 0;
n[8001].Time = 72;
n[8001].StorePosition = 3109;
n[8001].InfoVersion = 0;
n[8001].AddGem = 0;
n[8001].AddInteractiveItem = 0;
n[8001].AddSpeechItem = 0;
n[8001].DiscountBuyItem = 0;
n[8001].AddChip = 0;
n[8001].MinRandomChip = 0;
n[8001].MaxRandomChip = 0;
n[8007] = {};
n[8007].ID = 8007;
n[8007].Name = "海盗";
n[8007].Type = 8;
n[8007].PriceType = 0;
n[8007].Price = 5e4;
n[8007].PriceBeforeDiscount = 0;
n[8007].Time = 72;
n[8007].StorePosition = 3110;
n[8007].InfoVersion = 0;
n[8007].AddGem = 0;
n[8007].AddInteractiveItem = 0;
n[8007].AddSpeechItem = 0;
n[8007].DiscountBuyItem = 0;
n[8007].AddChip = 0;
n[8007].MinRandomChip = 0;
n[8007].MaxRandomChip = 0;
n[8003] = {};
n[8003].ID = 8003;
n[8003].Name = "钢铁人";
n[8003].Type = 8;
n[8003].PriceType = 0;
n[8003].Price = 5e4;
n[8003].PriceBeforeDiscount = 0;
n[8003].Time = 72;
n[8003].StorePosition = 3111;
n[8003].InfoVersion = 0;
n[8003].AddGem = 0;
n[8003].AddInteractiveItem = 0;
n[8003].AddSpeechItem = 0;
n[8003].DiscountBuyItem = 0;
n[8003].AddChip = 0;
n[8003].MinRandomChip = 0;
n[8003].MaxRandomChip = 0;
n[8004] = {};
n[8004].ID = 8004;
n[8004].Name = "奇异博士";
n[8004].Type = 8;
n[8004].PriceType = 0;
n[8004].Price = 5e4;
n[8004].PriceBeforeDiscount = 0;
n[8004].Time = 72;
n[8004].StorePosition = 3112;
n[8004].InfoVersion = 0;
n[8004].AddGem = 0;
n[8004].AddInteractiveItem = 0;
n[8004].AddSpeechItem = 0;
n[8004].DiscountBuyItem = 0;
n[8004].AddChip = 0;
n[8004].MinRandomChip = 0;
n[8004].MaxRandomChip = 0;
n[8021] = {};
n[8021].ID = 8021;
n[8021].Name = "熊本熊";
n[8021].Type = 8;
n[8021].PriceType = 0;
n[8021].Price = 5e4;
n[8021].PriceBeforeDiscount = 0;
n[8021].Time = 72;
n[8021].StorePosition = 3108;
n[8021].InfoVersion = 0;
n[8021].AddGem = 0;
n[8021].AddInteractiveItem = 0;
n[8021].AddSpeechItem = 0;
n[8021].DiscountBuyItem = 0;
n[8021].AddChip = 0;
n[8021].MinRandomChip = 0;
n[8021].MaxRandomChip = 0;
n[8022] = {};
n[8022].ID = 8022;
n[8022].Name = "托尼乔巴";
n[8022].Type = 8;
n[8022].PriceType = 0;
n[8022].Price = 5e4;
n[8022].PriceBeforeDiscount = 0;
n[8022].Time = 72;
n[8022].StorePosition = 3103;
n[8022].InfoVersion = 0;
n[8022].AddGem = 0;
n[8022].AddInteractiveItem = 0;
n[8022].AddSpeechItem = 0;
n[8022].DiscountBuyItem = 0;
n[8022].AddChip = 0;
n[8022].MinRandomChip = 0;
n[8022].MaxRandomChip = 0;
n[8023] = {};
n[8023].ID = 8023;
n[8023].Name = "美少女战士";
n[8023].Type = 8;
n[8023].PriceType = 0;
n[8023].Price = 5e4;
n[8023].PriceBeforeDiscount = 0;
n[8023].Time = 72;
n[8023].StorePosition = 3104;
n[8023].InfoVersion = 0;
n[8023].AddGem = 0;
n[8023].AddInteractiveItem = 0;
n[8023].AddSpeechItem = 0;
n[8023].DiscountBuyItem = 0;
n[8023].AddChip = 0;
n[8023].MinRandomChip = 0;
n[8023].MaxRandomChip = 0;
n[8024] = {};
n[8024].ID = 8024;
n[8024].Name = "小兔子";
n[8024].Type = 8;
n[8024].PriceType = 0;
n[8024].Price = 5e4;
n[8024].PriceBeforeDiscount = 0;
n[8024].Time = 72;
n[8024].StorePosition = 3107;
n[8024].InfoVersion = 0;
n[8024].AddGem = 0;
n[8024].AddInteractiveItem = 0;
n[8024].AddSpeechItem = 0;
n[8024].DiscountBuyItem = 0;
n[8024].AddChip = 0;
n[8024].MinRandomChip = 0;
n[8024].MaxRandomChip = 0;
n[8025] = {};
n[8025].ID = 8025;
n[8025].Name = "猫猫";
n[8025].Type = 8;
n[8025].PriceType = 0;
n[8025].Price = 5e4;
n[8025].PriceBeforeDiscount = 0;
n[8025].Time = 72;
n[8025].StorePosition = 3106;
n[8025].InfoVersion = 0;
n[8025].AddGem = 0;
n[8025].AddInteractiveItem = 0;
n[8025].AddSpeechItem = 0;
n[8025].DiscountBuyItem = 0;
n[8025].AddChip = 0;
n[8025].MinRandomChip = 0;
n[8025].MaxRandomChip = 0;
n[8026] = {};
n[8026].ID = 8026;
n[8026].Name = "仓鼠";
n[8026].Type = 8;
n[8026].PriceType = 0;
n[8026].Price = 5e4;
n[8026].PriceBeforeDiscount = 0;
n[8026].Time = 72;
n[8026].StorePosition = 3105;
n[8026].InfoVersion = 0;
n[8026].AddGem = 0;
n[8026].AddInteractiveItem = 0;
n[8026].AddSpeechItem = 0;
n[8026].DiscountBuyItem = 0;
n[8026].AddChip = 0;
n[8026].MinRandomChip = 0;
n[8026].MaxRandomChip = 0;
n[8027] = {};
n[8027].ID = 8027;
n[8027].Name = "水灯节free";
n[8027].Type = 8;
n[8027].PriceType = 0;
n[8027].Price = 5e4;
n[8027].PriceBeforeDiscount = 0;
n[8027].Time = 168;
n[8027].StorePosition = 0;
n[8027].InfoVersion = 0;
n[8027].AddGem = 0;
n[8027].AddInteractiveItem = 0;
n[8027].AddSpeechItem = 0;
n[8027].DiscountBuyItem = 0;
n[8027].AddChip = 0;
n[8027].MinRandomChip = 0;
n[8027].MaxRandomChip = 0;
n[8028] = {};
n[8028].ID = 8028;
n[8028].Name = "水灯节";
n[8028].Type = 8;
n[8028].PriceType = 0;
n[8028].Price = 1e5;
n[8028].PriceBeforeDiscount = 0;
n[8028].Time = 72;
n[8028].StorePosition = 3113;
n[8028].InfoVersion = 0;
n[8028].AddGem = 0;
n[8028].AddInteractiveItem = 0;
n[8028].AddSpeechItem = 0;
n[8028].DiscountBuyItem = 0;
n[8028].AddChip = 0;
n[8028].MinRandomChip = 0;
n[8028].MaxRandomChip = 0;
n[8029] = {};
n[8029].ID = 8029;
n[8029].Name = "黄金";
n[8029].Type = 8;
n[8029].PriceType = 0;
n[8029].Price = 1e5;
n[8029].PriceBeforeDiscount = 0;
n[8029].Time = 72;
n[8029].StorePosition = 3114;
n[8029].InfoVersion = 0;
n[8029].AddGem = 0;
n[8029].AddInteractiveItem = 0;
n[8029].AddSpeechItem = 0;
n[8029].DiscountBuyItem = 0;
n[8029].AddChip = 0;
n[8029].MinRandomChip = 0;
n[8029].MaxRandomChip = 0;
n[8030] = {};
n[8030].ID = 8030;
n[8030].Name = "天空";
n[8030].Type = 8;
n[8030].PriceType = 0;
n[8030].Price = 1e5;
n[8030].PriceBeforeDiscount = 0;
n[8030].Time = 72;
n[8030].StorePosition = 3115;
n[8030].InfoVersion = 0;
n[8030].AddGem = 0;
n[8030].AddInteractiveItem = 0;
n[8030].AddSpeechItem = 0;
n[8030].DiscountBuyItem = 0;
n[8030].AddChip = 0;
n[8030].MinRandomChip = 0;
n[8030].MaxRandomChip = 0;
n[8031] = {};
n[8031].ID = 8031;
n[8031].Name = "魔卡小樱";
n[8031].Type = 8;
n[8031].PriceType = 0;
n[8031].Price = 1e5;
n[8031].PriceBeforeDiscount = 0;
n[8031].Time = 72;
n[8031].StorePosition = 3116;
n[8031].InfoVersion = 0;
n[8031].AddGem = 0;
n[8031].AddInteractiveItem = 0;
n[8031].AddSpeechItem = 0;
n[8031].DiscountBuyItem = 0;
n[8031].AddChip = 0;
n[8031].MinRandomChip = 0;
n[8031].MaxRandomChip = 0;
n[8032] = {};
n[8032].ID = 8032;
n[8032].Name = "可乐罐";
n[8032].Type = 8;
n[8032].PriceType = 0;
n[8032].Price = 1e5;
n[8032].PriceBeforeDiscount = 0;
n[8032].Time = 72;
n[8032].StorePosition = 3117;
n[8032].InfoVersion = 0;
n[8032].AddGem = 0;
n[8032].AddInteractiveItem = 0;
n[8032].AddSpeechItem = 0;
n[8032].DiscountBuyItem = 0;
n[8032].AddChip = 0;
n[8032].MinRandomChip = 0;
n[8032].MaxRandomChip = 0;
n[8033] = {};
n[8033].ID = 8033;
n[8033].Name = "Jinglebells";
n[8033].Type = 8;
n[8033].PriceType = 0;
n[8033].Price = 1e5;
n[8033].PriceBeforeDiscount = 0;
n[8033].Time = 72;
n[8033].StorePosition = 0;
n[8033].InfoVersion = 0;
n[8033].AddGem = 0;
n[8033].AddInteractiveItem = 0;
n[8033].AddSpeechItem = 0;
n[8033].DiscountBuyItem = 0;
n[8033].AddChip = 0;
n[8033].MinRandomChip = 0;
n[8033].MaxRandomChip = 0;
n[8034] = {};
n[8034].ID = 8034;
n[8034].Name = "圣诞帽";
n[8034].Type = 8;
n[8034].PriceType = 0;
n[8034].Price = 1e5;
n[8034].PriceBeforeDiscount = 0;
n[8034].Time = 72;
n[8034].StorePosition = 0;
n[8034].InfoVersion = 0;
n[8034].AddGem = 0;
n[8034].AddInteractiveItem = 0;
n[8034].AddSpeechItem = 0;
n[8034].DiscountBuyItem = 0;
n[8034].AddChip = 0;
n[8034].MinRandomChip = 0;
n[8034].MaxRandomChip = 0;
n[8035] = {};
n[8035].ID = 8035;
n[8035].Name = "元旦节";
n[8035].Type = 8;
n[8035].PriceType = 0;
n[8035].Price = 1e5;
n[8035].PriceBeforeDiscount = 0;
n[8035].Time = 72;
n[8035].StorePosition = 3102;
n[8035].InfoVersion = 0;
n[8035].AddGem = 0;
n[8035].AddInteractiveItem = 0;
n[8035].AddSpeechItem = 0;
n[8035].DiscountBuyItem = 0;
n[8035].AddChip = 0;
n[8035].MinRandomChip = 0;
n[8035].MaxRandomChip = 0;
n[8036] = {};
n[8036].ID = 8036;
n[8036].Name = "宋干节";
n[8036].Type = 8;
n[8036].PriceType = 0;
n[8036].Price = 1e4;
n[8036].PriceBeforeDiscount = 0;
n[8036].Time = 168;
n[8036].StorePosition = 3101;
n[8036].InfoVersion = 0;
n[8036].AddGem = 0;
n[8036].AddInteractiveItem = 0;
n[8036].AddSpeechItem = 0;
n[8036].DiscountBuyItem = 0;
n[8036].AddChip = 0;
n[8036].MinRandomChip = 0;
n[8036].MaxRandomChip = 0;
n[8037] = {};
n[8037].ID = 8037;
n[8037].Name = "四周年";
n[8037].Type = 8;
n[8037].PriceType = 0;
n[8037].Price = 1e4;
n[8037].PriceBeforeDiscount = 0;
n[8037].Time = 1e3;
n[8037].StorePosition = 0;
n[8037].InfoVersion = 0;
n[8037].AddGem = 0;
n[8037].AddInteractiveItem = 0;
n[8037].AddSpeechItem = 0;
n[8037].DiscountBuyItem = 0;
n[8037].AddChip = 0;
n[8037].MinRandomChip = 0;
n[8037].MaxRandomChip = 0;
n[8038] = {};
n[8038].ID = 8038;
n[8038].Name = "万圣节男";
n[8038].Type = 8;
n[8038].PriceType = 0;
n[8038].Price = 1e4;
n[8038].PriceBeforeDiscount = 0;
n[8038].Time = 168;
n[8038].StorePosition = 0;
n[8038].InfoVersion = 0;
n[8038].AddGem = 0;
n[8038].AddInteractiveItem = 0;
n[8038].AddSpeechItem = 0;
n[8038].DiscountBuyItem = 0;
n[8038].AddChip = 0;
n[8038].MinRandomChip = 0;
n[8038].MaxRandomChip = 0;
n[8039] = {};
n[8039].ID = 8039;
n[8039].Name = "万圣节女";
n[8039].Type = 8;
n[8039].PriceType = 0;
n[8039].Price = 1e4;
n[8039].PriceBeforeDiscount = 0;
n[8039].Time = 168;
n[8039].StorePosition = 0;
n[8039].InfoVersion = 0;
n[8039].AddGem = 0;
n[8039].AddInteractiveItem = 0;
n[8039].AddSpeechItem = 0;
n[8039].DiscountBuyItem = 0;
n[8039].AddChip = 0;
n[8039].MinRandomChip = 0;
n[8039].MaxRandomChip = 0;
n[8040] = {};
n[8040].ID = 8040;
n[8040].Name = "dummy皮肤";
n[8040].Type = 8;
n[8040].PriceType = 0;
n[8040].Price = 1e4;
n[8040].PriceBeforeDiscount = 0;
n[8040].Time = 168;
n[8040].StorePosition = 0;
n[8040].InfoVersion = 0;
n[8040].AddGem = 0;
n[8040].AddInteractiveItem = 0;
n[8040].AddSpeechItem = 0;
n[8040].DiscountBuyItem = 0;
n[8040].AddChip = 0;
n[8040].MinRandomChip = 0;
n[8040].MaxRandomChip = 0;
n[8041] = {};
n[8041].ID = 8041;
n[8041].Name = "圣诞动态皮肤";
n[8041].Type = 8;
n[8041].PriceType = 0;
n[8041].Price = 1e4;
n[8041].PriceBeforeDiscount = 0;
n[8041].Time = 168;
n[8041].StorePosition = 0;
n[8041].InfoVersion = 0;
n[8041].AddGem = 0;
n[8041].AddInteractiveItem = 0;
n[8041].AddSpeechItem = 0;
n[8041].DiscountBuyItem = 0;
n[8041].AddChip = 0;
n[8041].MinRandomChip = 0;
n[8041].MaxRandomChip = 0;
n[8042] = {};
n[8042].ID = 8042;
n[8042].Name = "2020年";
n[8042].Type = 8;
n[8042].PriceType = 0;
n[8042].Price = 1e5;
n[8042].PriceBeforeDiscount = 0;
n[8042].Time = 72;
n[8042].StorePosition = 3100;
n[8042].InfoVersion = 0;
n[8042].AddGem = 0;
n[8042].AddInteractiveItem = 0;
n[8042].AddSpeechItem = 0;
n[8042].DiscountBuyItem = 0;
n[8042].AddChip = 0;
n[8042].MinRandomChip = 0;
n[8042].MaxRandomChip = 0;
n[8043] = {};
n[8043].ID = 8043;
n[8043].Name = "2020春节活动皮肤";
n[8043].Type = 8;
n[8043].PriceType = 0;
n[8043].Price = 1e5;
n[8043].PriceBeforeDiscount = 0;
n[8043].Time = 168;
n[8043].StorePosition = 0;
n[8043].InfoVersion = 0;
n[8043].AddGem = 0;
n[8043].AddInteractiveItem = 0;
n[8043].AddSpeechItem = 0;
n[8043].DiscountBuyItem = 0;
n[8043].AddChip = 0;
n[8043].MinRandomChip = 0;
n[8043].MaxRandomChip = 0;
t.exports = n;
cc._RF.pop();
}, {} ],
1: [ function(e, t) {
var n = e("util/"), i = Array.prototype.slice, o = Object.prototype.hasOwnProperty, r = t.exports = u;
r.AssertionError = function(e) {
this.name = "AssertionError";
this.actual = e.actual;
this.expected = e.expected;
this.operator = e.operator;
if (e.message) {
this.message = e.message;
this.generatedMessage = !1;
} else {
this.message = c(this);
this.generatedMessage = !0;
}
var t = e.stackStartFunction || l;
if (Error.captureStackTrace) Error.captureStackTrace(this, t); else {
var n = new Error();
if (n.stack) {
var i = n.stack, o = t.name, r = i.indexOf("\n" + o);
if (r >= 0) {
var s = i.indexOf("\n", r + 1);
i = i.substring(s + 1);
}
this.stack = i;
}
}
};
n.inherits(r.AssertionError, Error);
function s(e, t) {
return n.isUndefined(t) ? "" + t : n.isNumber(t) && !isFinite(t) ? t.toString() : n.isFunction(t) || n.isRegExp(t) ? t.toString() : t;
}
function a(e, t) {
return n.isString(e) ? e.length < t ? e : e.slice(0, t) : e;
}
function c(e) {
return a(JSON.stringify(e.actual, s), 128) + " " + e.operator + " " + a(JSON.stringify(e.expected, s), 128);
}
function l(e, t, n, i, o) {
throw new r.AssertionError({
message: n,
actual: e,
expected: t,
operator: i,
stackStartFunction: o
});
}
r.fail = l;
function u(e, t) {
e || l(e, !0, t, "==", r.ok);
}
r.ok = u;
r.equal = function(e, t, n) {
e != t && l(e, t, n, "==", r.equal);
};
r.notEqual = function(e, t, n) {
e == t && l(e, t, n, "!=", r.notEqual);
};
r.deepEqual = function(e, t, n) {
f(e, t) || l(e, t, n, "deepEqual", r.deepEqual);
};
function f(e, t) {
if (e === t) return !0;
if (n.isBuffer(e) && n.isBuffer(t)) {
if (e.length != t.length) return !1;
for (var i = 0; i < e.length; i++) if (e[i] !== t[i]) return !1;
return !0;
}
return n.isDate(e) && n.isDate(t) ? e.getTime() === t.getTime() : n.isRegExp(e) && n.isRegExp(t) ? e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase : n.isObject(e) || n.isObject(t) ? h(e, t) : e == t;
}
function d(e) {
return "[object Arguments]" == Object.prototype.toString.call(e);
}
function h(e, t) {
if (n.isNullOrUndefined(e) || n.isNullOrUndefined(t)) return !1;
if (e.prototype !== t.prototype) return !1;
if (n.isPrimitive(e) || n.isPrimitive(t)) return e === t;
var o = d(e), r = d(t);
if (o && !r || !o && r) return !1;
if (o) return f(e = i.call(e), t = i.call(t));
var s, a, c = m(e), l = m(t);
if (c.length != l.length) return !1;
c.sort();
l.sort();
for (a = c.length - 1; a >= 0; a--) if (c[a] != l[a]) return !1;
for (a = c.length - 1; a >= 0; a--) if (!f(e[s = c[a]], t[s])) return !1;
return !0;
}
r.notDeepEqual = function(e, t, n) {
f(e, t) && l(e, t, n, "notDeepEqual", r.notDeepEqual);
};
r.strictEqual = function(e, t, n) {
e !== t && l(e, t, n, "===", r.strictEqual);
};
r.notStrictEqual = function(e, t, n) {
e === t && l(e, t, n, "!==", r.notStrictEqual);
};
function p(e, t) {
return !(!e || !t) && ("[object RegExp]" == Object.prototype.toString.call(t) ? t.test(e) : e instanceof t || !0 === t.call({}, e));
}
function g(e, t, i, o) {
var r;
if (n.isString(i)) {
o = i;
i = null;
}
try {
t();
} catch (e) {
r = e;
}
o = (i && i.name ? " (" + i.name + ")." : ".") + (o ? " " + o : ".");
e && !r && l(r, i, "Missing expected exception" + o);
!e && p(r, i) && l(r, i, "Got unwanted exception" + o);
if (e && r && i && !p(r, i) || !e && r) throw r;
}
r.throws = function(e, t, n) {
g.apply(this, [ !0 ].concat(i.call(arguments)));
};
r.doesNotThrow = function(e, t) {
g.apply(this, [ !1 ].concat(i.call(arguments)));
};
r.ifError = function(e) {
if (e) throw e;
};
var m = Object.keys || function(e) {
var t = [];
for (var n in e) o.call(e, n) && t.push(n);
return t;
};
}, {
"util/": 4
} ],
2: [ function(e, t) {
"function" == typeof Object.create ? t.exports = function(e, t) {
e.super_ = t;
e.prototype = Object.create(t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
} : t.exports = function(e, t) {
e.super_ = t;
var n = function() {};
n.prototype = t.prototype;
e.prototype = new n();
e.prototype.constructor = e;
};
}, {} ],
3: [ function(e, t) {
t.exports = function(e) {
return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8;
};
}, {} ],
4: [ function(e, t, n) {
(function(t, i) {
var o = /%[sdj%]/g;
n.format = function(e) {
if (!w(e)) {
for (var t = [], n = 0; n < arguments.length; n++) t.push(a(arguments[n]));
return t.join(" ");
}
n = 1;
for (var i = arguments, r = i.length, s = String(e).replace(o, function(e) {
if ("%%" === e) return "%";
if (n >= r) return e;
switch (e) {
case "%s":
return String(i[n++]);

case "%d":
return Number(i[n++]);

case "%j":
try {
return JSON.stringify(i[n++]);
} catch (e) {
return "[Circular]";
}

default:
return e;
}
}), c = i[n]; n < r; c = i[++n]) b(c) || !_(c) ? s += " " + c : s += " " + a(c);
return s;
};
n.deprecate = function(e, o) {
if (C(i.process)) return function() {
return n.deprecate(e, o).apply(this, arguments);
};
if (!0 === t.noDeprecation) return e;
var r = !1;
return function() {
if (!r) {
if (t.throwDeprecation) throw new Error(o);
t.traceDeprecation ? console.trace(o) : console.error(o);
r = !0;
}
return e.apply(this, arguments);
};
};
var r, s = {};
n.debuglog = function(e) {
C(r) && (r = t.env.NODE_DEBUG || "");
e = e.toUpperCase();
if (!s[e]) if (new RegExp("\\b" + e + "\\b", "i").test(r)) {
var i = t.pid;
s[e] = function() {
var t = n.format.apply(n, arguments);
console.error("%s %d: %s", e, i, t);
};
} else s[e] = function() {};
return s[e];
};
function a(e, t) {
var i = {
seen: [],
stylize: l
};
arguments.length >= 3 && (i.depth = arguments[2]);
arguments.length >= 4 && (i.colors = arguments[3]);
v(t) ? i.showHidden = t : t && n._extend(i, t);
C(i.showHidden) && (i.showHidden = !1);
C(i.depth) && (i.depth = 2);
C(i.colors) && (i.colors = !1);
C(i.customInspect) && (i.customInspect = !0);
i.colors && (i.stylize = c);
return f(i, e, i.depth);
}
n.inspect = a;
a.colors = {
bold: [ 1, 22 ],
italic: [ 3, 23 ],
underline: [ 4, 24 ],
inverse: [ 7, 27 ],
white: [ 37, 39 ],
grey: [ 90, 39 ],
black: [ 30, 39 ],
blue: [ 34, 39 ],
cyan: [ 36, 39 ],
green: [ 32, 39 ],
magenta: [ 35, 39 ],
red: [ 31, 39 ],
yellow: [ 33, 39 ]
};
a.styles = {
special: "cyan",
number: "yellow",
boolean: "yellow",
undefined: "grey",
null: "bold",
string: "green",
date: "magenta",
regexp: "red"
};
function c(e, t) {
var n = a.styles[t];
return n ? "[" + a.colors[n][0] + "m" + e + "[" + a.colors[n][1] + "m" : e;
}
function l(e) {
return e;
}
function u(e) {
var t = {};
e.forEach(function(e) {
t[e] = !0;
});
return t;
}
function f(e, t, i) {
if (e.customInspect && t && P(t.inspect) && t.inspect !== n.inspect && (!t.constructor || t.constructor.prototype !== t)) {
var o = t.inspect(i, e);
w(o) || (o = f(e, o, i));
return o;
}
var r = d(e, t);
if (r) return r;
var s = Object.keys(t), a = u(s);
e.showHidden && (s = Object.getOwnPropertyNames(t));
if (T(t) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return h(t);
if (0 === s.length) {
if (P(t)) {
var c = t.name ? ": " + t.name : "";
return e.stylize("[Function" + c + "]", "special");
}
if (A(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
if (I(t)) return e.stylize(Date.prototype.toString.call(t), "date");
if (T(t)) return h(t);
}
var l, v = "", b = !1, S = [ "{", "}" ];
if (y(t)) {
b = !0;
S = [ "[", "]" ];
}
P(t) && (v = " [Function" + (t.name ? ": " + t.name : "") + "]");
A(t) && (v = " " + RegExp.prototype.toString.call(t));
I(t) && (v = " " + Date.prototype.toUTCString.call(t));
T(t) && (v = " " + h(t));
if (0 === s.length && (!b || 0 == t.length)) return S[0] + v + S[1];
if (i < 0) return A(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special");
e.seen.push(t);
l = b ? p(e, t, i, a, s) : s.map(function(n) {
return g(e, t, i, a, n, b);
});
e.seen.pop();
return m(l, v, S);
}
function d(e, t) {
if (C(t)) return e.stylize("undefined", "undefined");
if (w(t)) {
var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
return e.stylize(n, "string");
}
return S(t) ? e.stylize("" + t, "number") : v(t) ? e.stylize("" + t, "boolean") : b(t) ? e.stylize("null", "null") : void 0;
}
function h(e) {
return "[" + Error.prototype.toString.call(e) + "]";
}
function p(e, t, n, i, o) {
for (var r = [], s = 0, a = t.length; s < a; ++s) R(t, String(s)) ? r.push(g(e, t, n, i, String(s), !0)) : r.push("");
o.forEach(function(o) {
o.match(/^\d+$/) || r.push(g(e, t, n, i, o, !0));
});
return r;
}
function g(e, t, n, i, o, r) {
var s, a, c;
(c = Object.getOwnPropertyDescriptor(t, o) || {
value: t[o]
}).get ? a = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (a = e.stylize("[Setter]", "special"));
R(i, o) || (s = "[" + o + "]");
a || (e.seen.indexOf(c.value) < 0 ? (a = b(n) ? f(e, c.value, null) : f(e, c.value, n - 1)).indexOf("\n") > -1 && (a = r ? a.split("\n").map(function(e) {
return "  " + e;
}).join("\n").substr(2) : "\n" + a.split("\n").map(function(e) {
return "   " + e;
}).join("\n")) : a = e.stylize("[Circular]", "special"));
if (C(s)) {
if (r && o.match(/^\d+$/)) return a;
if ((s = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
s = s.substr(1, s.length - 2);
s = e.stylize(s, "name");
} else {
s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
s = e.stylize(s, "string");
}
}
return s + ": " + a;
}
function m(e, t, n) {
return e.reduce(function(e, t) {
t.indexOf("\n");
return e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
}, 0) > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1];
}
function y(e) {
return Array.isArray(e);
}
n.isArray = y;
function v(e) {
return "boolean" == typeof e;
}
n.isBoolean = v;
function b(e) {
return null === e;
}
n.isNull = b;
n.isNullOrUndefined = function(e) {
return null == e;
};
function S(e) {
return "number" == typeof e;
}
n.isNumber = S;
function w(e) {
return "string" == typeof e;
}
n.isString = w;
n.isSymbol = function(e) {
return "symbol" == typeof e;
};
function C(e) {
return void 0 === e;
}
n.isUndefined = C;
function A(e) {
return _(e) && "[object RegExp]" === x(e);
}
n.isRegExp = A;
function _(e) {
return "object" == typeof e && null !== e;
}
n.isObject = _;
function I(e) {
return _(e) && "[object Date]" === x(e);
}
n.isDate = I;
function T(e) {
return _(e) && ("[object Error]" === x(e) || e instanceof Error);
}
n.isError = T;
function P(e) {
return "function" == typeof e;
}
n.isFunction = P;
n.isPrimitive = function(e) {
return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e;
};
n.isBuffer = e("./support/isBuffer");
function x(e) {
return Object.prototype.toString.call(e);
}
function O(e) {
return e < 10 ? "0" + e.toString(10) : e.toString(10);
}
var D = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
function B() {
var e = new Date(), t = [ O(e.getHours()), O(e.getMinutes()), O(e.getSeconds()) ].join(":");
return [ e.getDate(), D[e.getMonth()], t ].join(" ");
}
n.log = function() {
console.log("%s - %s", B(), n.format.apply(n, arguments));
};
n.inherits = e("inherits");
n._extend = function(e, t) {
if (!t || !_(t)) return e;
for (var n = Object.keys(t), i = n.length; i--; ) e[n[i]] = t[n[i]];
return e;
};
function R(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}
}).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
"./support/isBuffer": 3,
_process: 10,
inherits: 2
} ],
5: [ function(e, t, n) {
"use strict";
n.byteLength = function(e) {
var t = l(e), n = t[0], i = t[1];
return 3 * (n + i) / 4 - i;
};
n.toByteArray = function(e) {
var t, n, i = l(e), s = i[0], a = i[1], c = new r(u(0, s, a)), f = 0, d = a > 0 ? s - 4 : s;
for (n = 0; n < d; n += 4) {
t = o[e.charCodeAt(n)] << 18 | o[e.charCodeAt(n + 1)] << 12 | o[e.charCodeAt(n + 2)] << 6 | o[e.charCodeAt(n + 3)];
c[f++] = t >> 16 & 255;
c[f++] = t >> 8 & 255;
c[f++] = 255 & t;
}
if (2 === a) {
t = o[e.charCodeAt(n)] << 2 | o[e.charCodeAt(n + 1)] >> 4;
c[f++] = 255 & t;
}
if (1 === a) {
t = o[e.charCodeAt(n)] << 10 | o[e.charCodeAt(n + 1)] << 4 | o[e.charCodeAt(n + 2)] >> 2;
c[f++] = t >> 8 & 255;
c[f++] = 255 & t;
}
return c;
};
n.fromByteArray = function(e) {
for (var t, n = e.length, o = n % 3, r = [], s = 0, a = n - o; s < a; s += 16383) r.push(f(e, s, s + 16383 > a ? a : s + 16383));
if (1 === o) {
t = e[n - 1];
r.push(i[t >> 2] + i[t << 4 & 63] + "==");
} else if (2 === o) {
t = (e[n - 2] << 8) + e[n - 1];
r.push(i[t >> 10] + i[t >> 4 & 63] + i[t << 2 & 63] + "=");
}
return r.join("");
};
for (var i = [], o = [], r = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = s.length; a < c; ++a) {
i[a] = s[a];
o[s.charCodeAt(a)] = a;
}
o["-".charCodeAt(0)] = 62;
o["_".charCodeAt(0)] = 63;
function l(e) {
var t = e.length;
if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
var n = e.indexOf("=");
-1 === n && (n = t);
return [ n, n === t ? 0 : 4 - n % 4 ];
}
function u(e, t, n) {
return 3 * (t + n) / 4 - n;
}
function f(e, t, n) {
for (var o, r, s = [], a = t; a < n; a += 3) {
o = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]);
s.push(i[(r = o) >> 18 & 63] + i[r >> 12 & 63] + i[r >> 6 & 63] + i[63 & r]);
}
return s.join("");
}
}, {} ],
6: [ function(e, t, n) {
(function(t) {
"use strict";
var i = e("base64-js"), o = e("ieee754"), r = e("isarray");
n.Buffer = c;
n.SlowBuffer = function(e) {
+e != e && (e = 0);
return c.alloc(+e);
};
n.INSPECT_MAX_BYTES = 50;
c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
try {
var e = new Uint8Array(1);
e.__proto__ = {
__proto__: Uint8Array.prototype,
foo: function() {
return 42;
}
};
return 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength;
} catch (e) {
return !1;
}
}();
n.kMaxLength = s();
function s() {
return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function a(e, t) {
if (s() < t) throw new RangeError("Invalid typed array length");
if (c.TYPED_ARRAY_SUPPORT) (e = new Uint8Array(t)).__proto__ = c.prototype; else {
null === e && (e = new c(t));
e.length = t;
}
return e;
}
function c(e, t, n) {
if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(e, t, n);
if ("number" == typeof e) {
if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
return d(this, e);
}
return l(this, e, t, n);
}
c.poolSize = 8192;
c._augment = function(e) {
e.__proto__ = c.prototype;
return e;
};
function l(e, t, n, i) {
if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? g(e, t, n, i) : "string" == typeof t ? h(e, t, n) : m(e, t);
}
c.from = function(e, t, n) {
return l(null, e, t, n);
};
if (c.TYPED_ARRAY_SUPPORT) {
c.prototype.__proto__ = Uint8Array.prototype;
c.__proto__ = Uint8Array;
"undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
value: null,
configurable: !0
});
}
function u(e) {
if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
if (e < 0) throw new RangeError('"size" argument must not be negative');
}
function f(e, t, n, i) {
u(t);
return t <= 0 ? a(e, t) : void 0 !== n ? "string" == typeof i ? a(e, t).fill(n, i) : a(e, t).fill(n) : a(e, t);
}
c.alloc = function(e, t, n) {
return f(null, e, t, n);
};
function d(e, t) {
u(t);
e = a(e, t < 0 ? 0 : 0 | y(t));
if (!c.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) e[n] = 0;
return e;
}
c.allocUnsafe = function(e) {
return d(null, e);
};
c.allocUnsafeSlow = function(e) {
return d(null, e);
};
function h(e, t, n) {
"string" == typeof n && "" !== n || (n = "utf8");
if (!c.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
var i = 0 | v(t, n), o = (e = a(e, i)).write(t, n);
o !== i && (e = e.slice(0, o));
return e;
}
function p(e, t) {
var n = t.length < 0 ? 0 : 0 | y(t.length);
e = a(e, n);
for (var i = 0; i < n; i += 1) e[i] = 255 & t[i];
return e;
}
function g(e, t, n, i) {
t.byteLength;
if (n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
if (t.byteLength < n + (i || 0)) throw new RangeError("'length' is out of bounds");
t = void 0 === n && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t, n) : new Uint8Array(t, n, i);
c.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = c.prototype : e = p(e, t);
return e;
}
function m(e, t) {
if (c.isBuffer(t)) {
var n = 0 | y(t.length);
if (0 === (e = a(e, n)).length) return e;
t.copy(e, 0, 0, n);
return e;
}
if (t) {
if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (i = t.length) != i ? a(e, 0) : p(e, t);
if ("Buffer" === t.type && r(t.data)) return p(e, t.data);
}
var i;
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function y(e) {
if (e >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
return 0 | e;
}
c.isBuffer = function(e) {
return !(null == e || !e._isBuffer);
};
c.compare = function(e, t) {
if (!c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
if (e === t) return 0;
for (var n = e.length, i = t.length, o = 0, r = Math.min(n, i); o < r; ++o) if (e[o] !== t[o]) {
n = e[o];
i = t[o];
break;
}
return n < i ? -1 : i < n ? 1 : 0;
};
c.isEncoding = function(e) {
switch (String(e).toLowerCase()) {
case "hex":
case "utf8":
case "utf-8":
case "ascii":
case "latin1":
case "binary":
case "base64":
case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return !0;

default:
return !1;
}
};
c.concat = function(e, t) {
if (!r(e)) throw new TypeError('"list" argument must be an Array of Buffers');
if (0 === e.length) return c.alloc(0);
var n;
if (void 0 === t) {
t = 0;
for (n = 0; n < e.length; ++n) t += e[n].length;
}
var i = c.allocUnsafe(t), o = 0;
for (n = 0; n < e.length; ++n) {
var s = e[n];
if (!c.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
s.copy(i, o);
o += s.length;
}
return i;
};
function v(e, t) {
if (c.isBuffer(e)) return e.length;
if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
"string" != typeof e && (e = "" + e);
var n = e.length;
if (0 === n) return 0;
for (var i = !1; ;) switch (t) {
case "ascii":
case "latin1":
case "binary":
return n;

case "utf8":
case "utf-8":
case void 0:
return J(e).length;

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return 2 * n;

case "hex":
return n >>> 1;

case "base64":
return $(e).length;

default:
if (i) return J(e).length;
t = ("" + t).toLowerCase();
i = !0;
}
}
c.byteLength = v;
function b(e, t, n) {
var i = !1;
(void 0 === t || t < 0) && (t = 0);
if (t > this.length) return "";
(void 0 === n || n > this.length) && (n = this.length);
if (n <= 0) return "";
if ((n >>>= 0) <= (t >>>= 0)) return "";
e || (e = "utf8");
for (;;) switch (e) {
case "hex":
return M(this, t, n);

case "utf8":
case "utf-8":
return D(this, t, n);

case "ascii":
return k(this, t, n);

case "latin1":
case "binary":
return E(this, t, n);

case "base64":
return O(this, t, n);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return N(this, t, n);

default:
if (i) throw new TypeError("Unknown encoding: " + e);
e = (e + "").toLowerCase();
i = !0;
}
}
c.prototype._isBuffer = !0;
function S(e, t, n) {
var i = e[t];
e[t] = e[n];
e[n] = i;
}
c.prototype.swap16 = function() {
var e = this.length;
if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
for (var t = 0; t < e; t += 2) S(this, t, t + 1);
return this;
};
c.prototype.swap32 = function() {
var e = this.length;
if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
for (var t = 0; t < e; t += 4) {
S(this, t, t + 3);
S(this, t + 1, t + 2);
}
return this;
};
c.prototype.swap64 = function() {
var e = this.length;
if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
for (var t = 0; t < e; t += 8) {
S(this, t, t + 7);
S(this, t + 1, t + 6);
S(this, t + 2, t + 5);
S(this, t + 3, t + 4);
}
return this;
};
c.prototype.toString = function() {
var e = 0 | this.length;
return 0 === e ? "" : 0 === arguments.length ? D(this, 0, e) : b.apply(this, arguments);
};
c.prototype.equals = function(e) {
if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
return this === e || 0 === c.compare(this, e);
};
c.prototype.inspect = function() {
var e = "", t = n.INSPECT_MAX_BYTES;
if (this.length > 0) {
e = this.toString("hex", 0, t).match(/.{2}/g).join(" ");
this.length > t && (e += " ... ");
}
return "<Buffer " + e + ">";
};
c.prototype.compare = function(e, t, n, i, o) {
if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
void 0 === t && (t = 0);
void 0 === n && (n = e ? e.length : 0);
void 0 === i && (i = 0);
void 0 === o && (o = this.length);
if (t < 0 || n > e.length || i < 0 || o > this.length) throw new RangeError("out of range index");
if (i >= o && t >= n) return 0;
if (i >= o) return -1;
if (t >= n) return 1;
if (this === e) return 0;
for (var r = (o >>>= 0) - (i >>>= 0), s = (n >>>= 0) - (t >>>= 0), a = Math.min(r, s), l = this.slice(i, o), u = e.slice(t, n), f = 0; f < a; ++f) if (l[f] !== u[f]) {
r = l[f];
s = u[f];
break;
}
return r < s ? -1 : s < r ? 1 : 0;
};
function w(e, t, n, i, o) {
if (0 === e.length) return -1;
if ("string" == typeof n) {
i = n;
n = 0;
} else n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648);
n = +n;
isNaN(n) && (n = o ? 0 : e.length - 1);
n < 0 && (n = e.length + n);
if (n >= e.length) {
if (o) return -1;
n = e.length - 1;
} else if (n < 0) {
if (!o) return -1;
n = 0;
}
"string" == typeof t && (t = c.from(t, i));
if (c.isBuffer(t)) return 0 === t.length ? -1 : C(e, t, n, i, o);
if ("number" == typeof t) {
t &= 255;
return c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : C(e, [ t ], n, i, o);
}
throw new TypeError("val must be string, number or Buffer");
}
function C(e, t, n, i, o) {
var r, s = 1, a = e.length, c = t.length;
if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
if (e.length < 2 || t.length < 2) return -1;
s = 2;
a /= 2;
c /= 2;
n /= 2;
}
function l(e, t) {
return 1 === s ? e[t] : e.readUInt16BE(t * s);
}
if (o) {
var u = -1;
for (r = n; r < a; r++) if (l(e, r) === l(t, -1 === u ? 0 : r - u)) {
-1 === u && (u = r);
if (r - u + 1 === c) return u * s;
} else {
-1 !== u && (r -= r - u);
u = -1;
}
} else {
n + c > a && (n = a - c);
for (r = n; r >= 0; r--) {
for (var f = !0, d = 0; d < c; d++) if (l(e, r + d) !== l(t, d)) {
f = !1;
break;
}
if (f) return r;
}
}
return -1;
}
c.prototype.includes = function(e, t, n) {
return -1 !== this.indexOf(e, t, n);
};
c.prototype.indexOf = function(e, t, n) {
return w(this, e, t, n, !0);
};
c.prototype.lastIndexOf = function(e, t, n) {
return w(this, e, t, n, !1);
};
function A(e, t, n, i) {
n = Number(n) || 0;
var o = e.length - n;
i ? (i = Number(i)) > o && (i = o) : i = o;
var r = t.length;
if (r % 2 != 0) throw new TypeError("Invalid hex string");
i > r / 2 && (i = r / 2);
for (var s = 0; s < i; ++s) {
var a = parseInt(t.substr(2 * s, 2), 16);
if (isNaN(a)) return s;
e[n + s] = a;
}
return s;
}
function _(e, t, n, i) {
return Z(J(t, e.length - n), e, n, i);
}
function I(e, t, n, i) {
return Z(Y(t), e, n, i);
}
function T(e, t, n, i) {
return I(e, t, n, i);
}
function P(e, t, n, i) {
return Z($(t), e, n, i);
}
function x(e, t, n, i) {
return Z(K(t, e.length - n), e, n, i);
}
c.prototype.write = function(e, t, n, i) {
if (void 0 === t) {
i = "utf8";
n = this.length;
t = 0;
} else if (void 0 === n && "string" == typeof t) {
i = t;
n = this.length;
t = 0;
} else {
if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
t |= 0;
if (isFinite(n)) {
n |= 0;
void 0 === i && (i = "utf8");
} else {
i = n;
n = void 0;
}
}
var o = this.length - t;
(void 0 === n || n > o) && (n = o);
if (e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
i || (i = "utf8");
for (var r = !1; ;) switch (i) {
case "hex":
return A(this, e, t, n);

case "utf8":
case "utf-8":
return _(this, e, t, n);

case "ascii":
return I(this, e, t, n);

case "latin1":
case "binary":
return T(this, e, t, n);

case "base64":
return P(this, e, t, n);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return x(this, e, t, n);

default:
if (r) throw new TypeError("Unknown encoding: " + i);
i = ("" + i).toLowerCase();
r = !0;
}
};
c.prototype.toJSON = function() {
return {
type: "Buffer",
data: Array.prototype.slice.call(this._arr || this, 0)
};
};
function O(e, t, n) {
return 0 === t && n === e.length ? i.fromByteArray(e) : i.fromByteArray(e.slice(t, n));
}
function D(e, t, n) {
n = Math.min(e.length, n);
for (var i = [], o = t; o < n; ) {
var r = e[o], s = null, a = r > 239 ? 4 : r > 223 ? 3 : r > 191 ? 2 : 1;
if (o + a <= n) {
var c, l, u, f;
switch (a) {
case 1:
r < 128 && (s = r);
break;

case 2:
128 == (192 & (c = e[o + 1])) && (f = (31 & r) << 6 | 63 & c) > 127 && (s = f);
break;

case 3:
c = e[o + 1];
l = e[o + 2];
128 == (192 & c) && 128 == (192 & l) && (f = (15 & r) << 12 | (63 & c) << 6 | 63 & l) > 2047 && (f < 55296 || f > 57343) && (s = f);
break;

case 4:
c = e[o + 1];
l = e[o + 2];
u = e[o + 3];
128 == (192 & c) && 128 == (192 & l) && 128 == (192 & u) && (f = (15 & r) << 18 | (63 & c) << 12 | (63 & l) << 6 | 63 & u) > 65535 && f < 1114112 && (s = f);
}
}
if (null === s) {
s = 65533;
a = 1;
} else if (s > 65535) {
s -= 65536;
i.push(s >>> 10 & 1023 | 55296);
s = 56320 | 1023 & s;
}
i.push(s);
o += a;
}
return R(i);
}
var B = 4096;
function R(e) {
var t = e.length;
if (t <= B) return String.fromCharCode.apply(String, e);
for (var n = "", i = 0; i < t; ) n += String.fromCharCode.apply(String, e.slice(i, i += B));
return n;
}
function k(e, t, n) {
var i = "";
n = Math.min(e.length, n);
for (var o = t; o < n; ++o) i += String.fromCharCode(127 & e[o]);
return i;
}
function E(e, t, n) {
var i = "";
n = Math.min(e.length, n);
for (var o = t; o < n; ++o) i += String.fromCharCode(e[o]);
return i;
}
function M(e, t, n) {
var i, o = e.length;
(!t || t < 0) && (t = 0);
(!n || n < 0 || n > o) && (n = o);
for (var r = "", s = t; s < n; ++s) r += (i = e[s]) < 16 ? "0" + i.toString(16) : i.toString(16);
return r;
}
function N(e, t, n) {
for (var i = e.slice(t, n), o = "", r = 0; r < i.length; r += 2) o += String.fromCharCode(i[r] + 256 * i[r + 1]);
return o;
}
c.prototype.slice = function(e, t) {
var n, i = this.length;
(e = ~~e) < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i);
(t = void 0 === t ? i : ~~t) < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i);
t < e && (t = e);
if (c.TYPED_ARRAY_SUPPORT) (n = this.subarray(e, t)).__proto__ = c.prototype; else {
var o = t - e;
n = new c(o, void 0);
for (var r = 0; r < o; ++r) n[r] = this[r + e];
}
return n;
};
function j(e, t, n) {
if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
}
c.prototype.readUIntLE = function(e, t, n) {
e |= 0;
t |= 0;
n || j(e, t, this.length);
for (var i = this[e], o = 1, r = 0; ++r < t && (o *= 256); ) i += this[e + r] * o;
return i;
};
c.prototype.readUIntBE = function(e, t, n) {
e |= 0;
t |= 0;
n || j(e, t, this.length);
for (var i = this[e + --t], o = 1; t > 0 && (o *= 256); ) i += this[e + --t] * o;
return i;
};
c.prototype.readUInt8 = function(e, t) {
t || j(e, 1, this.length);
return this[e];
};
c.prototype.readUInt16LE = function(e, t) {
t || j(e, 2, this.length);
return this[e] | this[e + 1] << 8;
};
c.prototype.readUInt16BE = function(e, t) {
t || j(e, 2, this.length);
return this[e] << 8 | this[e + 1];
};
c.prototype.readUInt32LE = function(e, t) {
t || j(e, 4, this.length);
return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
};
c.prototype.readUInt32BE = function(e, t) {
t || j(e, 4, this.length);
return 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
};
c.prototype.readIntLE = function(e, t, n) {
e |= 0;
t |= 0;
n || j(e, t, this.length);
for (var i = this[e], o = 1, r = 0; ++r < t && (o *= 256); ) i += this[e + r] * o;
i >= (o *= 128) && (i -= Math.pow(2, 8 * t));
return i;
};
c.prototype.readIntBE = function(e, t, n) {
e |= 0;
t |= 0;
n || j(e, t, this.length);
for (var i = t, o = 1, r = this[e + --i]; i > 0 && (o *= 256); ) r += this[e + --i] * o;
r >= (o *= 128) && (r -= Math.pow(2, 8 * t));
return r;
};
c.prototype.readInt8 = function(e, t) {
t || j(e, 1, this.length);
return 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
};
c.prototype.readInt16LE = function(e, t) {
t || j(e, 2, this.length);
var n = this[e] | this[e + 1] << 8;
return 32768 & n ? 4294901760 | n : n;
};
c.prototype.readInt16BE = function(e, t) {
t || j(e, 2, this.length);
var n = this[e + 1] | this[e] << 8;
return 32768 & n ? 4294901760 | n : n;
};
c.prototype.readInt32LE = function(e, t) {
t || j(e, 4, this.length);
return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
};
c.prototype.readInt32BE = function(e, t) {
t || j(e, 4, this.length);
return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
};
c.prototype.readFloatLE = function(e, t) {
t || j(e, 4, this.length);
return o.read(this, e, !0, 23, 4);
};
c.prototype.readFloatBE = function(e, t) {
t || j(e, 4, this.length);
return o.read(this, e, !1, 23, 4);
};
c.prototype.readDoubleLE = function(e, t) {
t || j(e, 8, this.length);
return o.read(this, e, !0, 52, 8);
};
c.prototype.readDoubleBE = function(e, t) {
t || j(e, 8, this.length);
return o.read(this, e, !1, 52, 8);
};
function F(e, t, n, i, o, r) {
if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
if (t > o || t < r) throw new RangeError('"value" argument is out of bounds');
if (n + i > e.length) throw new RangeError("Index out of range");
}
c.prototype.writeUIntLE = function(e, t, n, i) {
e = +e;
t |= 0;
n |= 0;
i || F(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
var o = 1, r = 0;
this[t] = 255 & e;
for (;++r < n && (o *= 256); ) this[t + r] = e / o & 255;
return t + n;
};
c.prototype.writeUIntBE = function(e, t, n, i) {
e = +e;
t |= 0;
n |= 0;
i || F(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
var o = n - 1, r = 1;
this[t + o] = 255 & e;
for (;--o >= 0 && (r *= 256); ) this[t + o] = e / r & 255;
return t + n;
};
c.prototype.writeUInt8 = function(e, t, n) {
e = +e;
t |= 0;
n || F(this, e, t, 1, 255, 0);
c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e));
this[t] = 255 & e;
return t + 1;
};
function U(e, t, n, i) {
t < 0 && (t = 65535 + t + 1);
for (var o = 0, r = Math.min(e.length - n, 2); o < r; ++o) e[n + o] = (t & 255 << 8 * (i ? o : 1 - o)) >>> 8 * (i ? o : 1 - o);
}
c.prototype.writeUInt16LE = function(e, t, n) {
e = +e;
t |= 0;
n || F(this, e, t, 2, 65535, 0);
if (c.TYPED_ARRAY_SUPPORT) {
this[t] = 255 & e;
this[t + 1] = e >>> 8;
} else U(this, e, t, !0);
return t + 2;
};
c.prototype.writeUInt16BE = function(e, t, n) {
e = +e;
t |= 0;
n || F(this, e, t, 2, 65535, 0);
if (c.TYPED_ARRAY_SUPPORT) {
this[t] = e >>> 8;
this[t + 1] = 255 & e;
} else U(this, e, t, !1);
return t + 2;
};
function L(e, t, n, i) {
t < 0 && (t = 4294967295 + t + 1);
for (var o = 0, r = Math.min(e.length - n, 4); o < r; ++o) e[n + o] = t >>> 8 * (i ? o : 3 - o) & 255;
}
c.prototype.writeUInt32LE = function(e, t, n) {
e = +e;
t |= 0;
n || F(this, e, t, 4, 4294967295, 0);
if (c.TYPED_ARRAY_SUPPORT) {
this[t + 3] = e >>> 24;
this[t + 2] = e >>> 16;
this[t + 1] = e >>> 8;
this[t] = 255 & e;
} else L(this, e, t, !0);
return t + 4;
};
c.prototype.writeUInt32BE = function(e, t, n) {
e = +e;
t |= 0;
n || F(this, e, t, 4, 4294967295, 0);
if (c.TYPED_ARRAY_SUPPORT) {
this[t] = e >>> 24;
this[t + 1] = e >>> 16;
this[t + 2] = e >>> 8;
this[t + 3] = 255 & e;
} else L(this, e, t, !1);
return t + 4;
};
c.prototype.writeIntLE = function(e, t, n, i) {
e = +e;
t |= 0;
if (!i) {
var o = Math.pow(2, 8 * n - 1);
F(this, e, t, n, o - 1, -o);
}
var r = 0, s = 1, a = 0;
this[t] = 255 & e;
for (;++r < n && (s *= 256); ) {
e < 0 && 0 === a && 0 !== this[t + r - 1] && (a = 1);
this[t + r] = (e / s >> 0) - a & 255;
}
return t + n;
};
c.prototype.writeIntBE = function(e, t, n, i) {
e = +e;
t |= 0;
if (!i) {
var o = Math.pow(2, 8 * n - 1);
F(this, e, t, n, o - 1, -o);
}
var r = n - 1, s = 1, a = 0;
this[t + r] = 255 & e;
for (;--r >= 0 && (s *= 256); ) {
e < 0 && 0 === a && 0 !== this[t + r + 1] && (a = 1);
this[t + r] = (e / s >> 0) - a & 255;
}
return t + n;
};
c.prototype.writeInt8 = function(e, t, n) {
e = +e;
t |= 0;
n || F(this, e, t, 1, 127, -128);
c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e));
e < 0 && (e = 255 + e + 1);
this[t] = 255 & e;
return t + 1;
};
c.prototype.writeInt16LE = function(e, t, n) {
e = +e;
t |= 0;
n || F(this, e, t, 2, 32767, -32768);
if (c.TYPED_ARRAY_SUPPORT) {
this[t] = 255 & e;
this[t + 1] = e >>> 8;
} else U(this, e, t, !0);
return t + 2;
};
c.prototype.writeInt16BE = function(e, t, n) {
e = +e;
t |= 0;
n || F(this, e, t, 2, 32767, -32768);
if (c.TYPED_ARRAY_SUPPORT) {
this[t] = e >>> 8;
this[t + 1] = 255 & e;
} else U(this, e, t, !1);
return t + 2;
};
c.prototype.writeInt32LE = function(e, t, n) {
e = +e;
t |= 0;
n || F(this, e, t, 4, 2147483647, -2147483648);
if (c.TYPED_ARRAY_SUPPORT) {
this[t] = 255 & e;
this[t + 1] = e >>> 8;
this[t + 2] = e >>> 16;
this[t + 3] = e >>> 24;
} else L(this, e, t, !0);
return t + 4;
};
c.prototype.writeInt32BE = function(e, t, n) {
e = +e;
t |= 0;
n || F(this, e, t, 4, 2147483647, -2147483648);
e < 0 && (e = 4294967295 + e + 1);
if (c.TYPED_ARRAY_SUPPORT) {
this[t] = e >>> 24;
this[t + 1] = e >>> 16;
this[t + 2] = e >>> 8;
this[t + 3] = 255 & e;
} else L(this, e, t, !1);
return t + 4;
};
function G(e, t, n, i) {
if (n + i > e.length) throw new RangeError("Index out of range");
if (n < 0) throw new RangeError("Index out of range");
}
function V(e, t, n, i, r) {
r || G(e, 0, n, 4);
o.write(e, t, n, i, 23, 4);
return n + 4;
}
c.prototype.writeFloatLE = function(e, t, n) {
return V(this, e, t, !0, n);
};
c.prototype.writeFloatBE = function(e, t, n) {
return V(this, e, t, !1, n);
};
function W(e, t, n, i, r) {
r || G(e, 0, n, 8);
o.write(e, t, n, i, 52, 8);
return n + 8;
}
c.prototype.writeDoubleLE = function(e, t, n) {
return W(this, e, t, !0, n);
};
c.prototype.writeDoubleBE = function(e, t, n) {
return W(this, e, t, !1, n);
};
c.prototype.copy = function(e, t, n, i) {
n || (n = 0);
i || 0 === i || (i = this.length);
t >= e.length && (t = e.length);
t || (t = 0);
i > 0 && i < n && (i = n);
if (i === n) return 0;
if (0 === e.length || 0 === this.length) return 0;
if (t < 0) throw new RangeError("targetStart out of bounds");
if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
if (i < 0) throw new RangeError("sourceEnd out of bounds");
i > this.length && (i = this.length);
e.length - t < i - n && (i = e.length - t + n);
var o, r = i - n;
if (this === e && n < t && t < i) for (o = r - 1; o >= 0; --o) e[o + t] = this[o + n]; else if (r < 1e3 || !c.TYPED_ARRAY_SUPPORT) for (o = 0; o < r; ++o) e[o + t] = this[o + n]; else Uint8Array.prototype.set.call(e, this.subarray(n, n + r), t);
return r;
};
c.prototype.fill = function(e, t, n, i) {
if ("string" == typeof e) {
if ("string" == typeof t) {
i = t;
t = 0;
n = this.length;
} else if ("string" == typeof n) {
i = n;
n = this.length;
}
if (1 === e.length) {
var o = e.charCodeAt(0);
o < 256 && (e = o);
}
if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
if ("string" == typeof i && !c.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
} else "number" == typeof e && (e &= 255);
if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
if (n <= t) return this;
t >>>= 0;
n = void 0 === n ? this.length : n >>> 0;
e || (e = 0);
var r;
if ("number" == typeof e) for (r = t; r < n; ++r) this[r] = e; else {
var s = c.isBuffer(e) ? e : J(new c(e, i).toString()), a = s.length;
for (r = 0; r < n - t; ++r) this[r + t] = s[r % a];
}
return this;
};
var z = /[^+\/0-9A-Za-z-_]/g;
function H(e) {
if ((e = q(e).replace(z, "")).length < 2) return "";
for (;e.length % 4 != 0; ) e += "=";
return e;
}
function q(e) {
return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function J(e, t) {
t = t || Infinity;
for (var n, i = e.length, o = null, r = [], s = 0; s < i; ++s) {
if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
if (!o) {
if (n > 56319) {
(t -= 3) > -1 && r.push(239, 191, 189);
continue;
}
if (s + 1 === i) {
(t -= 3) > -1 && r.push(239, 191, 189);
continue;
}
o = n;
continue;
}
if (n < 56320) {
(t -= 3) > -1 && r.push(239, 191, 189);
o = n;
continue;
}
n = 65536 + (o - 55296 << 10 | n - 56320);
} else o && (t -= 3) > -1 && r.push(239, 191, 189);
o = null;
if (n < 128) {
if ((t -= 1) < 0) break;
r.push(n);
} else if (n < 2048) {
if ((t -= 2) < 0) break;
r.push(n >> 6 | 192, 63 & n | 128);
} else if (n < 65536) {
if ((t -= 3) < 0) break;
r.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
} else {
if (!(n < 1114112)) throw new Error("Invalid code point");
if ((t -= 4) < 0) break;
r.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
}
}
return r;
}
function Y(e) {
for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
return t;
}
function K(e, t) {
for (var n, i, o, r = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) {
i = (n = e.charCodeAt(s)) >> 8;
o = n % 256;
r.push(o);
r.push(i);
}
return r;
}
function $(e) {
return i.toByteArray(H(e));
}
function Z(e, t, n, i) {
for (var o = 0; o < i && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
return o;
}
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
"base64-js": 5,
ieee754: 9,
isarray: 7
} ],
7: [ function(e, t) {
var n = {}.toString;
t.exports = Array.isArray || function(e) {
return "[object Array]" == n.call(e);
};
}, {} ],
8: [ function(e, t) {
(function(n) {
var i = e("util"), o = e("assert");
function r() {
return new Date().getTime();
}
var s, a = Array.prototype.slice, c = {};
s = "undefined" != typeof n && n.console ? n.console : "undefined" != typeof window && window.console ? window.console : {};
for (var l = [ [ function() {}, "log" ], [ function() {
s.log.apply(s, arguments);
}, "info" ], [ function() {
s.log.apply(s, arguments);
}, "warn" ], [ function() {
s.warn.apply(s, arguments);
}, "error" ], [ function(e) {
c[e] = r();
}, "time" ], [ function(e) {
var t = c[e];
if (!t) throw new Error("No such label: " + e);
delete c[e];
var n = r() - t;
s.log(e + ": " + n + "ms");
}, "timeEnd" ], [ function() {
var e = new Error();
e.name = "Trace";
e.message = i.format.apply(null, arguments);
s.error(e.stack);
}, "trace" ], [ function(e) {
s.log(i.inspect(e) + "\n");
}, "dir" ], [ function(e) {
if (!e) {
var t = a.call(arguments, 1);
o.ok(!1, i.format.apply(null, t));
}
}, "assert" ] ], u = 0; u < l.length; u++) {
var f = l[u], d = f[0], h = f[1];
s[h] || (s[h] = d);
}
t.exports = s;
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
assert: 1,
util: 13
} ],
9: [ function(e, t, n) {
n.read = function(e, t, n, i, o) {
var r, s, a = 8 * o - i - 1, c = (1 << a) - 1, l = c >> 1, u = -7, f = n ? o - 1 : 0, d = n ? -1 : 1, h = e[t + f];
f += d;
r = h & (1 << -u) - 1;
h >>= -u;
u += a;
for (;u > 0; r = 256 * r + e[t + f], f += d, u -= 8) ;
s = r & (1 << -u) - 1;
r >>= -u;
u += i;
for (;u > 0; s = 256 * s + e[t + f], f += d, u -= 8) ;
if (0 === r) r = 1 - l; else {
if (r === c) return s ? NaN : Infinity * (h ? -1 : 1);
s += Math.pow(2, i);
r -= l;
}
return (h ? -1 : 1) * s * Math.pow(2, r - i);
};
n.write = function(e, t, n, i, o, r) {
var s, a, c, l = 8 * r - o - 1, u = (1 << l) - 1, f = u >> 1, d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = i ? 0 : r - 1, p = i ? 1 : -1, g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
t = Math.abs(t);
if (isNaN(t) || Infinity === t) {
a = isNaN(t) ? 1 : 0;
s = u;
} else {
s = Math.floor(Math.log(t) / Math.LN2);
if (t * (c = Math.pow(2, -s)) < 1) {
s--;
c *= 2;
}
if ((t += s + f >= 1 ? d / c : d * Math.pow(2, 1 - f)) * c >= 2) {
s++;
c /= 2;
}
if (s + f >= u) {
a = 0;
s = u;
} else if (s + f >= 1) {
a = (t * c - 1) * Math.pow(2, o);
s += f;
} else {
a = t * Math.pow(2, f - 1) * Math.pow(2, o);
s = 0;
}
}
for (;o >= 8; e[n + h] = 255 & a, h += p, a /= 256, o -= 8) ;
s = s << o | a;
l += o;
for (;l > 0; e[n + h] = 255 & s, h += p, s /= 256, l -= 8) ;
e[n + h - p] |= 128 * g;
};
}, {} ],
10: [ function(e, t) {
var n, i, o = t.exports = {};
function r() {
throw new Error("setTimeout has not been defined");
}
function s() {
throw new Error("clearTimeout has not been defined");
}
(function() {
try {
n = "function" == typeof setTimeout ? setTimeout : r;
} catch (e) {
n = r;
}
try {
i = "function" == typeof clearTimeout ? clearTimeout : s;
} catch (e) {
i = s;
}
})();
function a(e) {
if (n === setTimeout) return setTimeout(e, 0);
if ((n === r || !n) && setTimeout) {
n = setTimeout;
return setTimeout(e, 0);
}
try {
return n(e, 0);
} catch (t) {
try {
return n.call(null, e, 0);
} catch (t) {
return n.call(this, e, 0);
}
}
}
function c(e) {
if (i === clearTimeout) return clearTimeout(e);
if ((i === s || !i) && clearTimeout) {
i = clearTimeout;
return clearTimeout(e);
}
try {
return i(e);
} catch (t) {
try {
return i.call(null, e);
} catch (t) {
return i.call(this, e);
}
}
}
var l, u = [], f = !1, d = -1;
function h() {
if (f && l) {
f = !1;
l.length ? u = l.concat(u) : d = -1;
u.length && p();
}
}
function p() {
if (!f) {
var e = a(h);
f = !0;
for (var t = u.length; t; ) {
l = u;
u = [];
for (;++d < t; ) l && l[d].run();
d = -1;
t = u.length;
}
l = null;
f = !1;
c(e);
}
}
o.nextTick = function(e) {
var t = new Array(arguments.length - 1);
if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
u.push(new g(e, t));
1 !== u.length || f || a(p);
};
function g(e, t) {
this.fun = e;
this.array = t;
}
g.prototype.run = function() {
this.fun.apply(null, this.array);
};
o.title = "browser";
o.browser = !0;
o.env = {};
o.argv = [];
o.version = "";
o.versions = {};
function m() {}
o.on = m;
o.addListener = m;
o.once = m;
o.off = m;
o.removeListener = m;
o.removeAllListeners = m;
o.emit = m;
o.prependListener = m;
o.prependOnceListener = m;
o.listeners = function() {
return [];
};
o.binding = function() {
throw new Error("process.binding is not supported");
};
o.cwd = function() {
return "/";
};
o.chdir = function() {
throw new Error("process.chdir is not supported");
};
o.umask = function() {
return 0;
};
}, {} ],
11: [ function(e, t, n) {
arguments[4][2][0].apply(n, arguments);
}, {
dup: 2
} ],
12: [ function(e, t, n) {
arguments[4][3][0].apply(n, arguments);
}, {
dup: 3
} ],
13: [ function(e, t, n) {
arguments[4][4][0].apply(n, arguments);
}, {
"./support/isBuffer": 12,
_process: 10,
dup: 4,
inherits: 11
} ],
DevicesAndroid: [ function(e, t) {
"use strict";
cc._RF.push(t, "76007bwrn9IE5i9lxVbGD0F", "DevicesAndroid");
var n = "com/casino/game/ApplicationUtil", i = {
getDevicesID: function() {
return jsb.reflection.callStaticMethod(n, "getDeviceIdentifier", "()Ljava/lang/String;");
},
getAppVersion: function() {
return jsb.reflection.callStaticMethod(n, "getApplicationVersion", "()Ljava/lang/String;");
}
};
t.exports = i;
cc._RF.pop();
}, {} ],
DevicesIos: [ function(e, t) {
"use strict";
cc._RF.push(t, "6e0f94nMBRI+ZIyjS7/Emyg", "DevicesIos");
var n = {
getDevicesID: function() {
cc.log("TODO DevicesIos getDevicesID");
return "123";
},
getAppVersion: function() {
cc.log("TODO DevicesIos getAppVersion");
return "1.3.0";
}
};
t.exports = n;
cc._RF.pop();
}, {} ],
DevicesWeb: [ function(e, t) {
"use strict";
cc._RF.push(t, "1f7d1OvDdhKb6+AnPj2Q80P", "DevicesWeb");
var n = {
getDevicesID: function() {
var e = new Date().getTime(), t = window.Save.get("decicesID", e);
t == e && window.Save.set("decicesID", e);
return t;
},
getAppVersion: function() {
return "1.3.0";
}
};
t.exports = n;
cc._RF.pop();
}, {} ],
Devices: [ function(e, t) {
"use strict";
cc._RF.push(t, "cd548Gn7o1Afas1wT6k6Lak", "Devices");
var n = {
instance: void 0,
getDevicesID: function() {
return this.instance.getDevicesID();
},
getAppVersion: function() {
return this.instance.getAppVersion();
}
};
n.instance = e("DevicesWeb");
cc.sys.isBrowser ? n.instance = e("DevicesWeb") : cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? n.instance = e("DevicesAndroid") : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS && (n.instance = e("DevicesIos"));
t.exports = n;
cc._RF.pop();
}, {
DevicesAndroid: "DevicesAndroid",
DevicesIos: "DevicesIos",
DevicesWeb: "DevicesWeb"
} ],
EventManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "97b6e3fUlhDhbBdhiccGCP8", "EventManager");
var n = {
init: function() {
this.mEventTarget = new cc.EventTarget();
},
on: function(e, t) {
this.mEventTarget.on(e, function(e) {
t && t(e);
});
},
off: function(e, t) {
this.mEventTarget.off(e, function() {
t && t();
});
},
dispatchEvent: function(e, t) {
var n = new cc.Event.EventCustom(e, !0);
t && n.setUserData(t);
this.mEventTarget.dispatchEvent(n);
}
};
n.init();
globalThis.EventManager = n;
cc._RF.pop();
}, {} ],
GameClient: [ function(e, t) {
"use strict";
cc._RF.push(t, "7790f7DHIlN/LJdV2QxtWlg", "GameClient");
var n = e("OnlineWS"), i = {
initData: function() {
cc.log("GameClient initData***");
},
connect: function(e, t, i) {
this.ws = new n();
this.ws.connect(e, t);
this.ws.setConnectCall(function() {
i && i();
});
},
getConnectState: function() {
return !!this.ws && this.ws.getWsState();
}
};
t.exports = i;
cc._RF.pop();
}, {
OnlineWS: "OnlineWS"
} ],
Global: [ function(e, t) {
"use strict";
cc._RF.push(t, "b5395s9nXxHJIO9wugo2HKF", "Global");
var n = {
sayHello: function() {
console.log("Global sayehello");
},
gSchduleFun: function(e, t, n, i, o) {
null == i && (i = cc.macro.REPEAT_FOREVER);
null == o && (o = 0);
cc.director.getScheduler().schedule(t, e, n, i, o, !1);
},
gSchduleOnce: function(e, t, n) {
e.scheduleOnce(function() {
t();
}, n);
},
gUnSchduleFun: function(e, t) {
cc.director.getScheduler().unschedule(t, e);
},
GIsArrContain: function(e, t) {
for (var n in e) {
var i = e[n];
if (i == t || i == toString(t)) return !0;
}
return !1;
},
GgetDataFromFile: function(e) {
return cc.sys.isNative ? jsb.fileUtils.getDataFromFile(e) : null;
},
GwriteStringToFile: function(e, t) {
cc.sys.isNative && jsb.fileUtils.writeStringToFile(e, t);
},
GwriteDataToFile: function(e, t) {
cc.sys.isNative && jsb.fileUtils.writeDataToFile(new Uint8Array(e), t);
},
GcreateDir: function(e) {
cc.sys.isNative && (jsb.fileUtils.isDirectoryExist(e) || jsb.fileUtils.createDirectory(e));
},
GgetDirByUrl: function(e) {
var t = e.split("/"), n = "";
if (t.length > 1) for (var i = 0; i < t.length - 1; i++) {
var o = t[i];
n = 0 == i ? o : n + "/" + o;
} else n = t[0];
return n + "/";
},
GnumberToFix: function(e, t) {
var n = Math.pow(10, t);
return Math.floor(e * n) / n;
},
GgetFileNameByUrl: function(e) {
var t = e.split("/");
return t[t.length - 1];
},
GloadPic: function(e, t) {
var n = this;
if (cc.sys.isNative) {
var i = jsb.fileUtils.getWritablePath() + "PicTemp/";
this.GcreateDir(i);
var o = i + this.GgetFileNameByUrl(e);
jsb.fileUtils.isFileExist(o) ? this.loadTexture(o, function(e) {
t && t(e);
}) : this.GDownFile(e, function(e) {
n.GwriteDataToFile(e, o);
n.loadTexture(o, function(e) {
t && t(e);
});
});
} else cc.assetManager.loadRemote(e, {
ext: ".png"
}, function(e, n) {
e ? t && t(null) : t(n);
});
},
loadTexture: function(e, t) {
cc.assetManager.loadRemote(e, {
ext: ".png"
}, function(e, n) {
e ? t && t(null) : t(n);
});
},
GDownFile: function(e, t) {
if (cc.sys.isNative) {
var n = new XMLHttpRequest();
n.responseType = "arraybuffer";
n.open("GET", e, !0);
n.onreadystatechange = function() {
if (4 === n.readyState && n.status >= 200) {
var e = n.response;
t(e);
} else t(null);
};
n.onerror = function() {
t(null);
};
n.ontimeout = function() {
t(null);
};
n.open("GET", e, !0);
n.timeout = 5e3;
n.send();
}
},
StrTime: function(e, t) {
for (var n = "", i = 0; i < t; i++) n += e;
return n;
},
ConverToWorldPos: function(e) {
return e.parent.convertToWorldSpaceAR(e.getPosition());
},
ConverToNodePos: function(e, t) {
return e.convertToNodeSpaceAR(t);
},
GgetTwoV2Angle: function(e, t) {
var n = t.x - e.x, i = t.y - e.y, o = cc.v2(n, i).signAngle(cc.v2(0, 1));
return cc.misc.radiansToDegrees(o);
},
isjson: function(e) {
if ("string" == typeof e) try {
JSON.parse(e);
return !0;
} catch (e) {
console.log(e);
return !1;
}
},
loadBundle: function(e, t, n) {
cc.assetManager.loadBundle(e, t, function(e, t) {
n && n(e, t);
});
},
gReleaseBundle: function(e) {
var t = this.gGetBundle(e);
if (t) {
t.releaseAll();
cc.assetManager.removeBundle(t);
}
},
gGetBundle: function(e) {
return cc.assetManager.getBundle(e);
},
gReBoot: function() {
cc.game.restart();
},
gExitGame: function() {
cc.sys.isNative && cc.game.end();
},
Ghotupdateurl: "xxx",
GgameType: 1
};
if (1 == n.GgameType) {
n.Ghotupdateurl = "http://192.168.0.105/hotupversion/configrelease";
n.isDebugTest = !1;
}
if (3 == n.GgameType) {
n.Ghotupdateurl = "http://192.168.0.105/hotupversion/configdebug";
n.isDebugTest = !0;
}
window.Global = n;
window.gg = {};
var i = e("WeChatModule");
gg.isAndroid = !1;
gg.isIOS = !1;
gg.isWindows = !1;
cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? gg.isAndroid = !0 : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS ? gg.isIOS = !0 : gg.isWindows = !0;
gg.wechat = new i();
cc._RF.pop();
}, {
WeChatModule: "WeChatModule"
} ],
HttpHelper: [ function(e, t) {
"use strict";
cc._RF.push(t, "163fcvJNjZDzY673ehl7bYi", "HttpHelper");
var n = {
sendHttpRequest: function(e, t) {
var n = new XMLHttpRequest();
n.onreadystatechange = function() {
4 == n.readyState && n.status >= 200 && n.status < 300 && t && t(n.responseText);
};
n.onerror = function() {
cc.log(" xhr.onerror*******");
t(null);
};
n.ontimeout = function() {
cc.log(" xhr.ontimeout*******");
t(null);
};
n.onabort = function() {
cc.log(" xhr.onabort*******");
t(null);
};
n.open("GET", e, !0);
cc.sys.isNative && n.setRequestHeader("Accept-Encoding", "gzip, deflate");
n.send();
},
sendHttpPost: function(e, t, n) {
var i = new XMLHttpRequest();
i.onreadystatechange = function() {
4 == i.readyState && i.status >= 200 && i.status < 300 && n && n(i.responseText);
};
i.open("POST", e);
cc.sys.isNative && i.setRequestHeader("Accept-Encoding", "gzip, deflate");
i.timeout = 5e3;
i.setRequestHeader("Content-Type", "application/json");
var o = JSON.stringify(t);
console.log("_data", o);
i.send(o);
}
};
t.exports = n;
cc._RF.pop();
}, {} ],
HttpModule: [ function(e, t) {
"use strict";
cc._RF.push(t, "a23fcYTDHVNGq+mQACXkU+h", "HttpModule");
var n = {
quest: function(e, t) {
var n = e.url, i = e.method, o = e.data, r = e.timeout || 0, s = new XMLHttpRequest();
r > 0 && (s.timeout = r);
s.onreadystatechange = function() {
if (4 == s.readyState) if (s.status >= 200 && s.status < 400) {
var e = s.responseText;
try {
e = JSON.parse(s.responseText);
} catch (e) {}
t && t(null, e);
} else t && t("status: " + s.status);
}.bind(this);
s.open(i, n, !0);
if ("object" == typeof o) try {
o = JSON.stringify(o);
} catch (e) {}
s.send(o);
s.ontimeout = function() {
t && t("timeout");
console.log("连接超时");
};
},
get: function(e, t) {
var n = e.url ? e : {
url: e
};
n.method = "get";
this.quest(n, t);
},
post: function(e, t) {
var n = e.url ? e : {
url: e
};
n.method = "post";
this.quest(n, t);
},
postData: function(e, t, n) {
var i = [], o = new XMLHttpRequest(), r = {};
r.userid = gg.userData.userId;
r.data = n;
for (var s = JSON.stringify(r), a = 0; a < s.length; a++) i.push(s.charCodeAt(a));
var c = new Uint8Array(i);
o.onreadystatechange = function() {
if (4 == o.readyState) if (o.status >= 200 && o.status < 400) {
var e = o.responseText;
try {
e = JSON.parse(o.responseText);
} catch (e) {}
t && t(null, e);
} else t && t("status: " + o.status);
}.bind(this);
o.open("post", e, !0);
o.send(c);
o.ontimeout = function() {
t && t("timeout");
console.log("连接超时");
};
},
uploadFile: function(e, t, n) {
var i = jsb.fileUtils.getDataFromFile(n), o = new XMLHttpRequest();
o.open("POST", e);
o.setRequestHeader("Content-Type", "application/octet-stream");
o.send(i);
o.onreadystatechange = function() {
if (4 == o.readyState) if (200 == o.status) {
var e = o.responseText;
try {
e = JSON.parse(o.responseText);
} catch (t) {
e = o.responseText;
}
t && t(null, e);
} else t && t("status: " + o.status);
};
}
};
t.exports = n;
cc._RF.pop();
}, {} ],
Lang: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d33f0cfyklAmKbkZODfHo74", "Lang");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("./zh"), o = e("./en");
n.default = {
zh: i.default,
en: o.default
};
cc._RF.pop();
}, {
"./en": "en",
"./zh": "zh"
} ],
LaunchScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "a7016SMIJVNQrZxjzWJyjKM", "LaunchScene");
var n;
(n = e("zh")) && n.__esModule;
var i = e("VersionManager");
e("xxtea");
cc.Class({
extends: cc.Component,
properties: {
Text: {
default: null,
type: cc.Label
}
},
onLoad: function() {
cc.log("launchsene onLoad");
console.log("protobufjs test===========");
var t = e("gameProto"), n = t.tutorial.Person.create();
n.name = "hello world";
n.email = "497232807@qq.com";
n.id = 110;
var i = t.tutorial.Person.encode(n).finish();
console.log("编码测试===========", i);
if (cc.sys.isNative) {
var o = jsb.fileUtils.getWritablePath() + "test2.txt";
jsb.fileUtils.writeDataToFile(i, o);
}
var r = ProtoTool.Uint8ArrayToString(i);
console.log("编码测试 Uint8ArrayToString===========", r);
console.log("编码测试 stringToUint8Array===========", ProtoTool.stringToUint8Array(r));
var s = t.tutorial.Person.decode(i);
console.log("解码测试===========", JSON.stringify(s));
console.log("protobufjs test===========end");
console.log("ProtoTool test ===========================");
var a = ProtoTool.encode(CMD.Login, {
name: "hello world",
email: "497232807@qq.com",
id: 201162
});
console.log("ProtoTool 编码==", a);
var c = ProtoTool.decode(CMD.Login, a);
console.log("ProtoTool 解码==", JSON.stringify(c));
console.log("ProtoTool test =========================== end");
var l = ProtoTool.packData(CMD.Login, a);
console.log("pack message==", l);
var u = ProtoTool.parseData(l);
console.log("parseData==", u);
},
onDestroy: function() {},
updateText: function() {
this.count = this.count + 1;
this.count = this.count % 4;
this.Text.string = "Updating" + Global.StrTime(".", this.count);
},
unSchduleUpdateText: function() {
Global.gUnSchduleFun(this, this.updateText);
},
start: function() {
var e = this;
cc.log("渠道号===", window.DISTRIBUTE_CHANNEL);
cc.sys.localStorage.setItem("debugId", 724001);
this.count = 0;
if (cc && cc.sys.isNative) {
cc.log("Global.isDebugTest===", Global.isDebugTest);
Global.isDebugTest ? UITool.showChooseUpdate({
tips: "热更新选择",
items: [ {
text: "默认热更新地址"
}, {
text: "手动输入热更新地址"
}, {
text: "公司热更新地址"
} ]
}, function(t, n) {
console.log("点击了", t);
if (0 == t) {
e.goCheckUpdate(Global.Ghotupdateurl);
n.bClose();
} else if (1 == t) UITool.showTextInput(function(t) {
if (t.length > 0) {
Global.Ghotupdateurl = t;
e.goCheckUpdate(t);
n.bClose();
} else {
console.log("请输入自定义的热更新地址");
n.bClose();
UITool.showAlert("请输入正确自定义的热更新地址", [], function() {
Global.gExitGame();
});
}
}); else if (2 == t) {
Global.Ghotupdateurl = "http://192.168.65.151/hotupversion/configdebug";
e.goCheckUpdate(Global.Ghotupdateurl);
n.bClose();
}
}) : Global.gSchduleOnce(this, function() {
e.goCheckUpdate(Global.Ghotupdateurl);
}, 3);
Global.gSchduleFun(this, this.updateText, 1, cc.macro.REPEAT_FOREVER, 0);
} else {
i.getH5ScriptVersion();
this.goLoginScene();
}
},
goCheckUpdate: function(e) {
var t = this;
console.log("goCheckUpdate==" + e);
i.checkUpdate(e, function(e, n) {
SubGameManager.parseCfgFromData(i.getSubGameCfg());
0 == e ? t.goLoginScene() : 100 == e ? t.Reboot() : 8 == e ? UITool.showAlert("发现新版本" + n, [], function() {
cc.sys.openURL(n);
}) : UITool.showAlert("ErrorCode=====" + e, [], function() {
t.Reboot();
});
}, function(e, n, i) {
cc.log("load progress===", e);
cc.director.getScheduler().isScheduled(t.updateText, t) && t.unSchduleUpdateText();
var o = "updateing" + e + "% (" + n + "kb/" + i + "kb)";
t.Text.string = o;
});
},
Reboot: function() {
this.scheduleOnce(function() {
Global.gReBoot();
}, 2);
},
goLoginScene: function() {
Global.gSchduleOnce(this, function() {
UITool.changeScene("LoginScene");
}, 1.5);
}
});
cc._RF.pop();
}, {
VersionManager: "VersionManager",
gameProto: "gameProto",
xxtea: "xxtea",
zh: "zh"
} ],
LoadingLayer: [ function(e, t) {
"use strict";
cc._RF.push(t, "2bf46C7+jhAWb9zRwpfreic", "LoadingLayer");
e("console").timeStamp;
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
this.ProgreeNode = cc.find("progress", this.node);
this.percent = 0;
this.speed = 0;
this.targetPercent = 0;
},
updataProgress: function(e, t) {
void 0 === t && (t = 1);
this.targetPercent = e;
this.speed = (this.targetPercent - this.percent) / t;
},
setPercent: function(e) {
if (this.ProgreeNode) {
this.ProgreeNode.getComponent("cc.ProgressBar").progress = e / 100;
this.percent = e;
}
},
setCallFun: function(e, t) {
this.progresscall = e;
this.endcall = t;
},
update: function(e) {
if (this.percent >= 100) {
this.percent = 100;
this.setPercent(this.percent);
this.endcall && this.endcall(this);
} else {
if (this.targetPercent > this.percent) {
var t = parseFloat((this.percent + this.speed * e).toFixed(1));
this.setPercent(t);
}
if (this.progresscall) {
this.progresscall(this);
this.progresscall = null;
}
}
}
});
cc._RF.pop();
}, {
console: 8
} ],
LoginScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "43150sdB6ZHSKFTTRw2QZE7", "LoginScene");
var n = e("VersionManager"), i = e("Devices");
cc.Class({
extends: cc.Component,
properties: {
VersionText: {
default: null,
type: cc.Label
}
},
onLoad: function() {
this.speed = 5;
this.S = 375;
this.ACC = -this.speed * this.speed / (2 * this.S) * 60;
this.offsetX = 0;
cc.log("ACC", this.ACC);
},
onDestroy: function() {},
update1: function() {
if (0 != this.speed) {
this.speed = this.speed + this.ACC * (1 / 60);
if (this.speed <= 0) {
this.gotest.x = this.gotest.x - this.speed.toFixed(2);
this.speed = 0;
this.gotest.x != this.S && this.gotest.runAction(cc.moveBy(.01, cc.v2(this.S - this.gotest.x, 0)));
} else {
this.offsetX = this.offsetX + this.speed;
this.gotest.x = this.gotest.x + this.speed;
}
}
},
start: function() {
var e = this;
1 == Global.GgameType && (this.VersionText.string = i.getAppVersion() + "(R" + n.getScriptVersion() + ")");
3 == Global.GgameType && (this.VersionText.string = i.getAppVersion() + "(D" + n.getScriptVersion() + ")");
var t = cc.find("uipanel/gotest", this.node);
this.gotest = t;
cc.log("this.gotest.x1", this.gotest.x);
var o = cc.find("uipanel/wechat", this.node), r = (cc.find("uipanel/label", this.node), 
cc.find("uipanel/wechatShare", this.node));
UITool.addBtnClick(o, function() {
0 != cc.sys.isNative ? gg.wechat.login(function(e) {
if (1 == e.ret) {
console.log("WeChatModule login success----" + JSON.stringify(e));
UITool.showAlert(JSON.stringify(e));
} else console.log("WeChatModule login Faild----" + JSON.stringify(e));
}) : UITool.showFlotText("Wx 登录只支持原生平台");
});
UITool.addBtnClick(r, function() {
0 != cc.sys.isNative ? gg.wechat.shareTextWx("666", 0, function(e, t) {
1 == e ? console.log("WeChatModule share success----" + t) : console.log("WeChatModule share Faild----" + t);
}) : UITool.showFlotText("Wx 分享只支持原生平台");
});
UITool.addBtnClick(t, function() {
e.goTestScene();
});
UITool.addBtnClick(this.node, function(e) {
console.log("getLocation=====", e.getLocation().x, e.getLocation().y);
console.log("getLocationInView=====", e.getLocationInView().x, e.getLocationInView().y);
});
cc.director.on("test", function(e) {
cc.log("test event", e);
});
this.img4 = cc.find("uipanel/4", this.node);
this.img4Material = this.img4.getComponent(cc.Sprite).getMaterials()[0];
this.schedule(function() {
var t = Math.random();
e.img4Material.effect.setProperty("colorR", Math.abs(Math.sin(t)));
}, 1);
},
goTestScene: function() {
UITool.changeScene("TestScene");
}
});
cc._RF.pop();
}, {
Devices: "Devices",
VersionManager: "VersionManager"
} ],
MainScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "280c3rsZJJKnZ9RqbALVwtK", "MainScene");
e("Base64Tool");
var n = e("Devices");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
cc.log("MainScene start");
e("GameClient");
e("HttpHelper").sendHttpRequest("https://httpbin.org/get?show_env=1", function(e) {
if (e) {
e = JSON.parse(e);
cc.log("data==", e.args.show_env);
}
});
cc.director.getScene().getChildByName("Canvas").getChildByName("label").getComponent(cc.Label).string = "设备版本号：" + n.getAppVersion() + "\nchanle" + window.DISTRIBUTE_CHANNEL;
},
launchFullScreen: function(e) {
if (e.requestFullScreen) e.requestFullScreen(); else if (e.mozRequestFullScreen) e.mozRequestFullScreen(); else if (e.webkitRequestFullScreen) e.webkitRequestFullScreen(); else {
if (!e.msRequestFullscreen) return !0;
e.msRequestFullscreen();
}
},
onLoad: function() {},
update: function() {}
});
cc._RF.pop();
}, {
Base64Tool: "Base64Tool",
Devices: "Devices",
GameClient: "GameClient",
HttpHelper: "HttpHelper"
} ],
OnlineWS: [ function(e, t) {
"use strict";
cc._RF.push(t, "88503myvH9CnIObyoxlBC25", "OnlineWS");
var n = e("buffer").Buffer;
cc.Class({
ctor: function() {
this.bclientClose = !1;
},
connect: function(t, i) {
this.netData = new Array();
this.callbackMap = new Map();
var o = e("Onlinedef"), r = this;
this._wsiSendBinary = null == t ? new WebSocket("ws://" + o.hos + ":" + o.port + "//") : new WebSocket("ws://" + t + ":" + i + "//");
cc.log("-连接--------", t + ":" + i);
this._wsiSendBinary.binaryType = "arraybuffer";
this._wsiSendBinary.onopen = function() {
cc.log("网络连接成功");
r.reportConnectSuc();
};
this._wsiSendBinary.onmessage = function(t) {
r.arrayU8ToU16Array(new Uint8Array(t.data));
var i = new n(t.data, "utf8"), o = e("Package").ParseStrToPackage(i.toString());
cc.log("onmessage--33333333333333.........-", o);
r.callLocalFun(o.m_header_name, o.m_json);
};
this._wsiSendBinary.onerror = function() {
cc.log("网络错误");
r.reportOnlineOff("网络错误");
};
this._wsiSendBinary.onclose = function() {
r._wsiSendBinary = null;
cc.log("网络已经断开");
r.reportOnlineOff("网络已经断开");
};
this.onLoad();
},
addHead: function(e) {
return e;
},
addLocalCallback: function(e, t) {
null != e && null != t && null != t && this.callbackMap.set(e, t);
},
arrayU8ToU16Array: function(e) {
for (var t = "", n = 0, i = 0, o = 0; o < e.length; o++) {
if (224 == (240 & e[o])) {
n = 3;
i |= (15 & e[o]) << 12;
i |= (63 & e[o + 1]) << 6;
i |= 63 & e[o + 2];
} else if (192 == (224 & e[o])) {
n = 2;
i |= (31 & e[o]) << 6;
i |= 63 & e[o + 1];
} else if (e[o] <= 127) {
n = 1;
i |= 127 & e[o];
}
o += n - 1;
t += String.fromCharCode(i);
i = 0;
n = 0;
}
return t;
},
Uint8ArrayToString: function(e) {
for (var t = "", n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
return t;
},
stringToUint8Array: function(e) {
for (var t = [], n = 0, i = e.length; n < i; ++n) t.push(e.charCodeAt(n));
return new Uint8Array(t);
},
string2u8array: function(e) {
for (var t = new Uint8Array(3 * e.length), n = 0, i = 0; i < e.length; i++) {
var o = e.charCodeAt(i);
if (o <= 127) {
var r = 127 & o;
t[n++] = r;
} else if (o >= 128 && o <= 2047) {
var s = 63 & o | 128;
r = o >> 6 & 31 | 192;
t[n++] = r;
t[n++] = s;
} else if (o >= 2048 && o <= 65535) {
var a = 63 & o | 128;
s = o >> 6 & 63 | 128, r = o >> 12 & 15 | 224;
t[n++] = r;
t[n++] = s;
t[n++] = a;
}
}
return new Uint8Array(t.buffer, 0, n);
},
send: function(e, t) {
e.m_header_name != window.Message.MS_PingPong && cc.log("Client send ===", e);
t && this.addLocalCallback(e.m_header_name, t);
e = e.encode();
if (this._wsiSendBinary) if (this._wsiSendBinary.readyState === WebSocket.OPEN) {
var n = this.string2u8array(e.toString("utf-8"));
this._wsiSendBinary.send(n);
} else {
cc.log("网络已经断开", this._wsiSendBinary.readyState);
this.reportOnlineOff("网络已经断开");
}
},
getWsState: function() {
return null != this._wsiSendBinary && this._wsiSendBinary.readyState === WebSocket.OPEN;
},
onLoad: function() {},
callLocalFun: function(e, t) {
var n = this.callbackMap.get(e);
if (null != n) {
cc.log("=========OnlineWs===heart==", e);
n(t);
}
},
update: function() {
if (null != this.netData && null != this.callbackMap) for (;this.netData.length; ) this.netData.shift();
},
onDestroy: function() {
cc.log("=====onlineWs=== onDestroy");
this.callbackMap.clear();
if (null != this._wsiSendBinary && this._wsiSendBinary.readyState === WebSocket.OPEN) {
this.bclientClose = !0;
this._wsiSendBinary.close();
}
this._wsiSendBinary = null;
this.globalCall = null;
},
setGlobalCallBack: function(e) {
this.globalCall = e;
},
setOnlineErrorCall: function(e) {
this.errorCall = e;
},
reportOnlineOff: function(e) {
cc.log("===onlinews==reportOnlineOff==");
null != this.errorCall && this.errorCall(e);
},
setConnectCall: function(e) {
this.connectSuc = e;
},
reportConnectSuc: function() {
this.connectSuc && this.connectSuc();
}
});
cc._RF.pop();
}, {
Onlinedef: "Onlinedef",
Package: "Package",
buffer: 6
} ],
Onlinedef: [ function(e, t) {
"use strict";
cc._RF.push(t, "57b1eEV+nBLkozPyr6HImkN", "Onlinedef");
t.exports = {
host: "echo.websocket.org",
port: "80"
};
cc._RF.pop();
}, {} ],
Package: [ function(e, t) {
"use strict";
cc._RF.push(t, "328a3iqtbhCEafyBWl8EuDx", "Package");
var n = e("buffer").Buffer;
cc.Class({
properties: {
m_game_name: "AP2",
m_proto_type: 0,
m_version: "1.0",
m_header_name: 0,
m_header_ext_data: 0,
m_header_id: 42,
m_header_sign: "",
m_header_type: 1,
m_header_uid: 0,
m_header_state: 0,
m_json: void 0,
m_Ext_Data: void 0
},
statics: {
biuldReq: function(t, n) {
var i;
(i = new (i = e("Package"))()).m_proto_type = "REQ";
i.m_json = n;
i.m_header_name = t;
return i;
},
biuldNotify: function(t, n) {
var i;
(i = new (i = e("Package"))()).m_proto_type = "NOTIFY";
i.m_json = n;
i.m_header_name = t;
return i;
},
ParseStrToPackage: function(t) {
var n;
(n = new (n = e("Package"))()).ParseProto(t);
n.ParseHeader(t);
n.ParseJson(t);
return n;
}
},
encode: function() {
var e = this.m_game_name + " " + this.m_proto_type + " " + this.m_version, t = "";
this.m_header_uid = 0;
for (var i in this) if (i.indexOf("header") > 0) {
var o = i.lastIndexOf("_"), r = i.substr(o + 1);
"m_header_ext_data" == i && (r = "ext-data");
t += r + ":" + this[i] + "\n";
}
var s = JSON.stringify(this.m_json);
1 == this.m_header_type && (s = new n(s + "\n").toString("base64"));
return e + "\n" + t + "\n" + s + "\n";
},
ParseProto: function(e) {
var t = e.indexOf(" "), n = e.substr(0, t);
this.m_game_name = n;
var i = e.indexOf(" ", t + 1), o = e.substr(t + 1, i - t - 1);
this.m_proto_type = o;
var r = e.indexOf("\n"), s = e.substr(i + 1, r - i - 1);
this.m_version = s;
},
ParseHeader: function(e) {
for (var t = 0, n = 0; t < e.length - 1; ) {
if ("\n" == e[t]) {
var i = e.substr(n, t - n), o = i.indexOf(":"), r = i.substr(0, o), s = i.substr(o + 1, i.length - o - 1);
"type" == r && (this.m_header_type = s);
"uid" == r && (this.m_header_uid = s);
"name" == r && (this.m_header_name = s);
"id" == r && (this.m_header_id = s);
"sign" == r && (this.m_header_sign = s);
"ext-data" == r && (this.m_header_ext_data = s);
"state" == r && (this.m_header_state = s);
n = t + 1;
}
t++;
}
},
lastIndexOf: function(e, t, n) {
for (var i = e.lastIndexOf(t), o = 0; o < n - 1; o++) i = e.lastIndexOf(t, i - 1);
return i;
},
ParseJson: function(e) {
var t = this.lastIndexOf(e, "\n", 2), i = e.substr(t + 1, e.length - t - 2);
1 == this.m_header_type && (i = new n(i, "base64").toString());
i = JSON.parse(i);
this.m_json = i;
},
ctor: function() {
this.bclientClose = !1;
}
});
cc._RF.pop();
}, {
Package: "Package",
buffer: 6
} ],
Person: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "802653MbBdDn6IFk4t581n7", "Person");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Lee = void 0;
(function(e) {
var t = function() {
function e() {}
e.prototype.Say = function(e) {
console.log("Lee person.Say" + e);
};
return e;
}();
e.Person = t;
})(n.Lee || (n.Lee = {}));
cc._RF.pop();
}, {} ],
PhysicsCenter: [ function(e, t) {
"use strict";
cc._RF.push(t, "8b2c803BjFI/ZRhXMTnBd1H", "PhysicsCenter");
cc.Class({
extends: cc.Component,
properties: {
PhysicsManagerEnable: {
default: !1,
tooltip: "是否开启物理系统"
},
PhysicsManagerDrawDebug: {
default: !1,
tooltip: "是否开启物理绘制调试信息"
}
},
onLoad: function() {
console.log("onLoad", this.PhysicsManagerEnable);
cc.director.getPhysicsManager().enabled = this.PhysicsManagerEnable;
if (this.PhysicsManagerEnable) cc.director.getPhysicsManager().debugDrawFlags = this.PhysicsManagerDrawDebug; else {
cc.director.getPhysicsManager().enabled = this.PhysicsManagerEnable;
cc.director.getPhysicsManager().debugDrawFlags = 0;
}
},
start: function() {
console.log("物理测试");
}
});
cc._RF.pop();
}, {} ],
Save: [ function(e, t) {
"use strict";
cc._RF.push(t, "2e2b04XOU5KEb80xlTHT7LI", "Save");
window.Save = {
set: function(e, t) {
cc.sys.localStorage.setItem(e, t);
},
get: function(e, t) {
var n = cc.sys.localStorage.getItem(e);
null === n && (n = t);
return n;
}
};
cc._RF.pop();
}, {} ],
SlotPanel: [ function(e, t) {
"use strict";
cc._RF.push(t, "5374dvKetxDEoT2sKdzOV9Z", "SlotPanel");
window.SlotState = {
eStoped: 0,
eSpeedUp: 1,
eMaxSpeed: 2,
eWaitSpeedDown: 3,
eSpeedDown: 4,
eKickBack: 5
};
cc.Class({
extends: cc.Component,
properties: {
item: {
default: null,
type: cc.Prefab,
tooltip: "预制体item"
},
width: {
default: 0,
type: cc.Float,
tooltip: "itemd的宽度，初始化用来设置容器宽度"
},
space: {
default: 0,
type: cc.Float,
tooltip: "间距"
},
movedirection: {
default: 0,
type: cc.Integer,
tooltip: "方向 0为往上移动 1为往下"
},
showItemNum: {
default: 3,
type: cc.Integer,
tooltip: "面板显示几个可见的item"
}
},
onLoad: function() {
0 != this.width && (this.node.width = this.width);
this.node.height = this.showItemNum * this.width + (this.showItemNum + 1) * this.space;
this.SlotState = window.SlotState.eStoped;
this.addSlotCell();
this.curIndex = 1;
this.StartSpin = !1;
this.stopIndex = null;
this.HaveCompelete = !0;
this.SpeedY = 0;
this.restPos = !1;
this.schedule(this.update1, 1 / 60);
this.offsetY = 0;
this.itemNum = this.ItemArray.length;
},
start: function() {},
addSlotCell: function() {
this.ItemArray = new Array();
for (var e = 0; e < 5; e++) {
var t = cc.instantiate(this.item);
t.parent = this.node;
t.x = 0;
t.tag = e;
0 == this.movedirection ? t.y = this.node.height / 2 - t.height * e - t.height / 2 - this.space * (e + 1) : t.y = -this.node.height / 2 + t.height * e + t.height / 2 + this.space * (e + 1);
var n = t.getComponent("Cell");
n.seTextString(e);
n.setBgRes(e);
this.ItemArray.push(t);
}
this.item.height = 120;
},
updateItem: function(e) {
if (0 != e) {
for (var t = this.node.children, n = 0; n < t.length; n++) {
var i = t[n];
if (e > 0) {
var o = this.node.height / 2 + i.height / 2;
if (i.y >= o) {
i.y = i.y + (-t.length * this.item.height - t.length * this.space);
this.curIndex += 1;
this.curIndex > 4 && (this.curIndex -= 5);
} else {
i.y = i.y + e;
if (i.y >= o) {
i.y = i.y + (-t.length * this.item.height - t.length * this.space);
this.curIndex += 1;
this.curIndex > 4 && (this.curIndex -= 5);
}
}
} else {
o = -this.node.height / 2 - i.height / 2;
if (i.y <= o) i.y = i.y + (t.length * this.item.height + t.length * this.space); else {
i.y = i.y + e;
i.y <= o && (i.y = i.y + (t.length * this.item.height + t.length * this.space));
}
}
}
this.offsetY = this.offsetY + Math.abs(e);
if (this.offsetY > this.item.height) {
this.offsetY = this.offsetY - this.item.height;
this.curIndex = (this.curIndex + 1) % 5;
}
cc.log("Index==", this.curIndex);
}
},
updateSlotsToDown: function() {
if (this.SlotState == window.SlotState.eSpeedUp) if (this.SpeedY > -100) {
this.SpeedY = this.SpeedY + this.Acceleration * (1 / 60);
if (this.SpeedY <= -100) {
this.SpeedY = -100;
this.SlotState = window.SlotState.eWaitSpeedDown;
}
} else {
this.SpeedY = -100;
this.SlotState = window.SlotState.eWaitSpeedDown;
}
if (this.SlotState != window.SlotState.eWaitSpeedDown || this.stopIndex != this.curIndex) {
if (this.SlotState == window.SlotState.eSpeedDown) if (this.SpeedY < 0) {
this.SpeedY = this.SpeedY + this.Acceleration * (1 / 60);
if (this.SpeedY >= 0) {
this.SpeedY = 0;
this.SlotState = window.SlotState.eStoped;
}
} else {
this.SpeedY = 0;
this.SlotState = window.SlotState.eStoped;
}
this.SlotState, window.SlotState.eKickBack;
if (this.SlotState == window.SlotState.eStoped && this.StartSpin) {
this.Bounce();
this.StartSpin = !1;
}
this.updateItem(this.SpeedY);
} else {
var e = 0 - this.ItemArray[this.curIndex].y, t = 75 + this.itemNum * this.item.height - e;
cc.log("this offset----", t, this.offsetY);
this.Acceleration = this.SpeedY * this.SpeedY / (2 * t) * 60;
cc.log(" 减速this.Acceleration---", this.Acceleration);
this.SlotState = window.SlotState.eSpeedDown;
}
},
Bounce: function() {
for (var e = this, t = this.node.children, n = 0 - this.ItemArray[this.stopIndex].y, i = 0; i < t.length; i++) {
var o = t[i];
if (o) {
var r;
r = 0 == this.movedirection ? cc.moveBy(.1, cc.Vec2(0, -n)).easing(cc.easeOut(1)) : cc.moveBy(.1, cc.Vec2(0, n)).easing(cc.easeOut(1));
var s = cc.callFunc(function() {
if (e.StopCall) {
e.StopCall();
e.StopCall = null;
}
e.HaveCompelete = !0;
}), a = cc.sequence(r, s);
o.runAction(a);
}
}
},
resetPosY: function() {
this.restPos = !0;
for (var e = this.stopIndex, t = this.ItemArray[e].y, n = this.node.children, i = 0; i < n.length; i++) {
var o = n[i];
o && (o.y = o.y - t);
}
this.restPos = !1;
},
Spin: function() {
this.Acceleration = 50;
1 == this.movedirection && (this.Acceleration = -this.Acceleration);
cc.log(" 加速this.Acceleration---", this.Acceleration);
this.SlotState = window.SlotState.eSpeedUp;
this.StartSpin = !0;
this.HaveCompelete = !1;
},
setStopIndex: function(e) {
this.stopIndex = e;
},
StopAtIndex: function(e, t) {
console.log("StopAtIndex==", e);
this.stopIndex = e;
t && (this.StopCall = t);
},
update1: function(e) {
this.StartSpin && 1 != this.resetPosY && (0 == this.movedirection || this.updateSlotsToDown(e));
},
getSlotState: function() {
return this.SlotState;
}
});
cc._RF.pop();
}, {} ],
SlotScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "52728dRoZdOio+6APtNJstt", "SlotScene");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
var e = this;
this.Slots = new Array();
for (var t = 1; t <= 1; t++) {
var n = cc.find("content/slot" + t, this.node);
this.Slots.push(n);
}
var i = cc.find("UI/btn_spin", this.node);
UITool.addBtnClick(i, function() {
cc.log("Start spin");
for (var t = 0; t < e.Slots.length; t++) {
var n = e.Slots[t].getComponent("SlotPanel");
if (n) {
n.Spin();
var i = Math.floor(4 * Math.random());
n.StopAtIndex(i, function() {
console.log("stop- call");
});
}
}
});
var o = cc.find("UI/btn_back", this.node);
UITool.addBtnClick(o, function() {
cc.director.loadScene("TestScene");
});
},
start: function() {
var e = cc.find("content/slot1", this.node), t = cc.find("content/bg", this.node);
t.height = e.height;
t.width = e.width;
}
});
cc._RF.pop();
}, {} ],
Sound: [ function(e, t) {
"use strict";
cc._RF.push(t, "e3c22Dpi01Gp4EerFjvIKH0", "Sound");
window.Sound = {
audioId: {},
backGroundResPath: {},
_playEffect: function(e, t, n, i, o) {
var r = this;
if (!(o && null != r.audioId[e] && r.audioId[e].length > 0)) {
null == r.audioId[e] && (r.audioId[e] = []);
null == t && (t = !1);
null == n && (n = 1);
"number" != typeof n && (n = parseFloat(n));
var s = -1;
cc.resources.load(e, cc.AudioClip, function(e, i) {
if (e) cc.log(e); else {
s = cc.audioEngine.playEffect(i, t);
r.setEffcetVolume(n);
}
});
r.audioId[e].unshift(s);
cc.audioEngine.setFinishCallback(s, function() {
r.audioId[e].pop();
i && i();
});
return s;
}
},
playMusic: function(e, t, n, i, o) {
var r = this;
if (!(o && null != r.audioId[e] && r.audioId[e].length > 0)) {
null == r.audioId[e] && (r.audioId[e] = []);
null == t && (t = !1);
null == n && (n = 1);
"number" != typeof n && (n = parseFloat(n));
cc.resources.load(e, cc.AudioClip, function(e, i) {
if (e) cc.log(e); else {
cc.audioEngine.playMusic(i, t);
r.setBackGroundVolume(n);
}
});
}
},
playBackGround: function(e) {
var t = this.getBackGroundVolume();
if (this.curPlayBgSound) {
if (this.curPlayBgSound == e) return !1;
this.stop(this.curPlayBgSound);
}
this.curPlayBgSound = e;
this.playMusic(e, !0, t / 100);
this.backGroundResPath[e] = e;
return !0;
},
playEffect: function(e, t, n, i, o) {
var r = this.getEffectVolume();
this._playEffect(e, t, r / 100, i, o);
},
getVoiceVolume: function() {
return window.Save.get("Sound_Voice_Volume", 100);
},
getBackGroundVolume: function() {
return window.Save.get("Sound_BackGround_Volume", 100);
},
getEffectVolume: function() {
return window.Save.get("Sound_Effect_Volume", 100);
},
setVoiceVolume: function(e) {
window.Save.set("Sound_Voice_Volume", e);
},
setBackGroundVolume: function(e) {
window.Save.set("Sound_BackGround_Volume", e);
for (var t in this.backGroundResPath) if ("string" == typeof this.backGroundResPath[t] && null != this.audioId[t] && this.audioId[t].length > 0) {
this.audioId[t][0];
cc.audioEngine.setMusicVolume(e / 100);
}
},
setEffcetVolume: function(e) {
window.Save.set("Sound_Effect_Volume", e);
cc.audioEngine.setEffectsVolume(e);
},
stopAll: function() {
cc.audioEngine.stopAll();
this.audioId = {};
this.backGroundResPath = {};
this.curPlayBgSound = void 0;
},
stop: function(e) {
if (null != this.audioId[e] && 0 != this.audioId[e].length) {
for (var t = 0; t < this.audioId[e].length; t++) {
var n = this.audioId[e].pop();
cc.audioEngine.stop(n);
}
this.backGroundResPath[e] = void 0;
}
}
};
window.SoundRes = {
MainBg: "sound/bgm_main"
};
cc._RF.pop();
}, {} ],
SubGameManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "58117jddOFO2ZIu1G2cUrFt", "SubGameManager");
var n = e("HttpHelper"), i = {
remoteData: null
}, o = "", r = "";
if (cc && cc.sys.isNative) {
o = jsb.fileUtils.getWritablePath() + "SubGames/";
r = jsb.fileUtils.getWritablePath() + "SubGamesTemp/";
}
i.parseCfgFromData = function(e) {
this.remoteData = e;
cc.log("SubGameManager.parseCfgFromData", this.remoteData);
};
i.getSubGameState = function(e, t) {
this.curSubgameName = e;
var n = this.getLoclSubGameCfg(e);
if (n) {
var i = this.remoteData.games[e].version, o = this.remoteData.games[e].debugVersion;
if (this.isDeugPalyer()) {
cc.log("是测试玩家");
i = o;
}
var r = n.scriptVersion;
cc.log("子包本地版本=", e, r);
cc.log("子包远程debug版本=", e, o);
cc.log("子包远程正式版本=", e, i);
t(r != i ? "need_update" : "no_need_update");
} else t("not_in_app");
};
i.getLoclSubGameCfg = function(e) {
var t = o + e + "/appinfo.json";
if (jsb.fileUtils.isFileExist(t)) {
var n = jsb.fileUtils.getStringFromFile(t);
if (Global.isjson(n)) {
var i = JSON.parse(n);
this.localSubGameCfg = i;
return this.localSubGameCfg;
}
this.callFunWithState(1, "读取子游戏本地配置失败 json配置不合法====" + e);
this.localSubGameCfg = {
scriptVersion: -1,
files: []
};
return null;
}
this.localSubGameCfg = {
scriptVersion: -1,
files: []
};
return null;
};
i.downSubGame = function(e, t, i) {
var o = this;
this.baseUrl = this.remoteData.baseUrl;
this.downversion = this.remoteData.games[e].version;
var r = this.remoteData.games[e].debugVersion;
this.isDeugPalyer() && (this.downversion = r);
var s = this.baseUrl + e + "_" + this.downversion + "/appinfo.json";
this.progressCall = t;
this.finishCall = i;
cc.log("remoteSubGameCfgUrl=", s);
n.sendHttpRequest(s, function(t) {
if (null != t) if (Global.isjson(t)) {
o.remoteSubgameCfg = JSON.parse(t);
o.comparefile();
} else o.callFunWithState(4, "读取远程子游戏远程md5-json不合法====" + e); else o.callFunWithState(3, "读取远程子游戏配置失败====" + e);
});
};
i.comparefile = function() {
for (var e = this.localSubGameCfg.files, t = this.remoteSubgameCfg.files, n = new Array(), i = {}, o = {}, r = 0; r < e.length; r++) {
var s = (l = e[r]).filename, a = l.md5, c = l.size;
i[s] = {
md5: a,
fileSize: c
};
}
for (r = 0; r < t.length; r++) {
var l;
s = (l = t[r]).filename, a = l.md5, c = l.size;
o[s] = {
md5: a,
fileSize: c
};
}
for (var u in o) {
var f = o[u], d = f.md5;
c = f.fileSize;
i[u] ? d != i[u].md5 && n.push({
fileName: u,
md5: d,
fileSize: c
}) : n.push({
fileName: u,
md5: d,
fileSize: c
});
}
for (var h in n) {
c = n[h].fileSize;
this.totalDownSize = this.totalDownSize + c;
}
cc.log("准备下载子游戏差异文件");
this.downFiles(n);
};
i.downFiles = function(e) {
if (0 != e.length) {
var t = this, n = e;
t.DownIndex = 0;
var i = !1;
(function e(s) {
var a = t.baseUrl, c = n[s].fileName, l = n[s].fileSize, u = a + c.replace(t.curSubgameName, t.curSubgameName + "_" + t.downversion), f = r + c, d = o + c, h = r + Global.GgetDirByUrl(c), p = o + Global.GgetDirByUrl(c);
Global.GcreateDir(h);
Global.GcreateDir(p);
n[s].tempfile = f;
n[s].realfile = d;
cc.log("下载=====", u);
Global.GDownFile(u, function(o) {
if (o) {
Global.GwriteDataToFile(o, f);
t.downedSize = t.downedSize + l;
if (t.DownIndex < n.length - 1) {
t.DownIndex = t.DownIndex + 1;
t.progressCall && t.progressCall(Math.floor(t.DownIndex / n.length * 100), (t.downedSize / 1e3).toFixed(1), (t.totalDownSize / 1e3).toFixed(1));
cc.log("downError", i);
0 == i && e(t.DownIndex);
} else {
t.progressCall && t.progressCall(Math.floor(100), (t.downedSize / 1e3).toFixed(1), (t.totalDownSize / 1e3).toFixed(1));
t.MoveFiles(n);
}
} else {
i = !0;
t.callFunWithState(5, "子游戏下载单个文件失败=" + u);
}
});
})(t.DownIndex);
} else this.MoveDone();
}, i.MoveFiles = function(e) {
this.moveStep = 0;
var t = this;
(function n(i) {
var r = e[i].tempfile, s = e[i].realfile, a = Global.GgetDataFromFile(r);
if (a) {
Global.GwriteDataToFile(a, s);
if (t.moveStep < e.length - 1) {
t.moveStep = t.moveStep + 1;
n(t.moveStep);
} else t.MoveDone();
} else {
var c = o + t.curSubgameName;
this.removeLocalBundle(c);
t.callFunWithState(6, "移动文件失败" + r);
}
})(this.moveStep);
}, i.MoveDone = function() {
var e = JSON.stringify(this.remoteSubgameCfg, null, 4), t = o + this.curSubgameName + "/appinfo.json";
Global.GwriteStringToFile(e, t);
this.callFunWithState(0, "下载子游戏完成");
}, i.callFunWithState = function(e, t) {
cc.log(t + "====" + e);
this.finishCall && this.finishCall(e);
};
i.getLocalBundlePath = function(e) {
return o + e;
};
i.removeLocalBundle = function(e) {
var t = o + e;
jsb.fileUtils.removeDirectory(t);
jsb.fileUtils.createDirectory(t);
};
i.isDeugPalyer = function() {
var e = this.remoteData.debugUid, t = cc.sys.localStorage.getItem("debugId");
return !!Global.GIsArrContain(e, t);
};
globalThis.SubGameManager = i;
cc._RF.pop();
}, {
HttpHelper: "HttpHelper"
} ],
TestScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "43e41jtsGxORJ0f6gUlDaqj", "TestScene");
e("xxtea"), e("Package"), e("Devices");
var n = e("VoiceNative");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
n.init();
},
onDestroy: function() {},
start: function() {
var e = this;
cc && cc.sys.isNative && jsb.fileUtils.getSearchPaths();
var t = cc.find("uipanel/New Sprite", this.node), i = cc.find("content/sp4", this.node), o = Global.ConverToWorldPos(t), r = Global.ConverToNodePos(i.parent, o);
this.sp4OldPos = i.getPosition();
i.IsOriginPos = !0;
var s = cc.find("uipanel/btn_posconvert", this.node);
UITool.addBtnClick(s, function() {
if (!(i.getNumberOfRunningActions() > 0)) {
if (1 == i.IsOriginPos) {
var t = cc.moveTo(1, r).easing(cc.easeSineOut());
i.runAction(t);
} else {
t = cc.moveTo(1, e.sp4OldPos).easing(cc.easeSineOut());
i.runAction(t);
}
i.IsOriginPos = !i.IsOriginPos;
}
});
t.on(cc.Node.EventType.TOUCH_START, function() {
t.opacity = 150;
});
t.on(cc.Node.EventType.TOUCH_END, function() {
t.opacity = 255;
});
t.on(cc.Node.EventType.TOUCH_CANCEL, function() {
t.opacity = 255;
});
var a = cc.find("uipanel/btn_Alert", this.node);
UITool.addBtnClick(a, function() {
UITool.showAlert("666", [ "LOL", "LOL1", "LOL#" ], function(e) {
UITool.showFlotText(e);
});
});
var c = cc.find("uipanel/btn_showWaiting", this.node);
UITool.addBtnClick(c, function() {
UITool.showWaitNetWork();
UITool.showFlotText("3s后关闭");
setTimeout(function() {
UITool.dismissWaitNetWork();
}, 3e3);
});
var l = cc.find("uipanel/btn_EventTest", this.node);
UITool.addBtnClick(l, function() {
EventManager.dispatchEvent(ConstEventDefine.EVENT_NAME.TEST, {
name: "Lee123"
});
});
cc.dynamicAtlasManager.enabled = !1;
var u = cc.find("uipanel/loadTex", this.node);
Global.GloadPic("http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ1E1XEicr8vAj5o8DMT7GTfCtFyC6vok9TImPjf6BfKBKLFA8hKBS6Wiaz2GJyQQWoV5lA7fhqS4SA/96", function(e) {
e && (u.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e));
});
var f = null, d = cc.find("uipanel/btn_Speech", this.node);
d.on(cc.Node.EventType.TOUCH_START, function() {
f = Date.now();
cc.log("开始录音");
e.SpeechFile = Date.now() + ".amr";
n.prepare(e.SpeechFile);
}, this);
d.on(cc.Node.EventType.TOUCH_END, function() {
cc.log("结束录音");
if (Date.now() - f < 1e3) {
n.cancel();
cc.log("时间小于一秒");
UITool.showAlert("时间小于一秒", [ "Yes" ], function() {});
} else if (Date.now() - f > 8e3) {
n.cancel();
UITool.showAlert("录音时间大于8s", [ "Yes" ], function() {});
} else if (null != f) {
n.release();
var t = Date.now() - f;
console.log("record time。。。。。  " + t);
var i = n.getVoiceData(e.SpeechFile);
console.log("sound data。。。。。  " + i);
i && setTimeout(function() {
var t = e.SpeechFile;
n.play(t);
n.writeVoice(t, i);
}, 2e3);
}
}, this);
d.on(cc.Node.EventType.TOUCH_CANCEL, function() {
n.cancel();
cc.log("取消录音");
}, this);
EventManager.on(ConstEventDefine.EVENT_NAME.TEST, this.EventTest);
EventManager.on(ConstEventDefine.EVENT_NAME.TEST, function(e) {
console.log("EventTest===2", e.detail);
});
var h = cc.find("uipanel/btn_fps", this.node);
UITool.addBtnClick(h, function() {
console.log("setDisplayStats-", !cc.debug.isDisplayStats());
cc.debug.setDisplayStats(!cc.debug.isDisplayStats());
});
var p = cc.find("uipanel/btn_showpopLayer", this.node);
UITool.addBtnClick(p, function() {
UITool.loadPrefabRes("prefabs/poplayer", function(e) {
if (e) {
cc.director.getScene().getChildByName("Canvas").addChild(e);
e.getComponent("poplayer");
}
});
});
var g = cc.find("content/sp3", this.node);
g.isGray = !1;
var m = cc.find("uipanel/btn_GrayRenderCom", this.node);
UITool.addBtnClick(m, function() {
var e = g.getComponent(cc.Sprite);
if (0 == g.isGray) {
var t = cc.MaterialVariant.createWithBuiltin("2d-gray-sprite");
e.setMaterial(0, t);
} else {
var n = cc.MaterialVariant.createWithBuiltin("2d-sprite");
e.setMaterial(0, n);
}
g.isGray = !g.isGray;
});
var y = cc.find("uipanel/btn_bubble", this.node);
UITool.addBtnClick(y, function() {
UITool.loadScene("bubbleScene");
});
var v = cc.find("uipanel/btn_mipai", this.node);
UITool.addBtnClick(v, function() {
UITool.loadScene("mipaiScene");
});
var b = cc.find("uipanel/btn_loadbundle", this.node);
UITool.addBtnClick(b, function() {
0 != cc.sys.isNative ? SubGameManager.getSubGameState("bundleScene", function(e) {
if ("not_in_app" == e) {
cc.log("下载子游戏===");
UITool.showWaitNetWork();
SubGameManager.downSubGame("bundleScene", function(e) {
cc.log("downSubGame progress===", e);
}, function(e) {
UITool.dismissWaitNetWork();
cc.log("downSubGame return code == ", e);
0 == e ? UITool.showAlert("下载成功", [], function() {
UITool.loadBundleScene("bundleScene", function(e) {
0 == e ? cc.log("loadBundleScene success") : cc.log("loadBundleScene failed=", e);
});
}) : UITool.showAlert("下载失败" + e, [], function() {});
});
} else if ("need_update" == e) {
cc.log("需要更新====");
UITool.showWaitNetWork();
SubGameManager.downSubGame("bundleScene", function(e) {
cc.log("updateSubGame progress===", e);
}, function(e) {
UITool.dismissWaitNetWork();
cc.log("updateSubGame return code == ", e);
0 == e ? UITool.showAlert("更新成功", [], function() {
UITool.loadBundleScene("bundleScene", function(e) {
0 == e ? cc.log("loadBundleScene success") : cc.log("loadBundleScene failed=", e);
});
}) : UITool.showAlert("更新失败" + e, [], function() {});
});
} else {
cc.log("子包本地和远程版本一致，直接进游戏");
UITool.loadBundleScene("bundleScene", function(e) {
0 == e ? cc.log("loadBundleScene success") : cc.log("loadBundleScene failed=", e);
});
}
}) : console.log("bundle测试目前只测试了原生");
});
var S = cc.find("uipanel/btn_goslot", this.node);
UITool.addBtnClick(S, function() {
cc.director.loadScene("SlotScene");
});
cc.find("content/sp1", this.node).getComponent(cc.RenderComponent).getMaterial(0);
var w = cc.find("garpgicsnode", this.node), C = w.getComponent(cc.Graphics);
w.on(cc.Node.EventType.TOUCH_START, function(e) {
var n = e.getTouches(), i = n[0].getLocation();
n[0].getLocationInView();
i = t.parent.convertToNodeSpaceAR(i);
var o = Global.GgetTwoV2Angle(t.getPosition(), i);
t.angle = -o;
C.moveTo(i.x, i.y);
t.getPosition().subSelf(i).normalizeSelf();
});
w.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
var n = e.getTouches()[0].getLocation();
n = t.parent.convertToNodeSpaceAR(n);
var i = Global.GgetTwoV2Angle(t.getPosition(), n);
t.angle = -i;
C.lineTo(n.x, n.y);
C.stroke();
});
var A = cc.view.getVisibleSize(), _ = cc.v2(-A.width / 2, A.height / 2), I = cc.v2(A.width / 2, -A.height / 2), T = Global.GgetTwoV2Angle(_, I);
cc.find("uipanel/New Sprite", this.node).angle = -T;
var P = cc.view.getVisibleSize();
(w = w.getComponent(cc.Graphics)).moveTo(-P.width / 2, P.height / 2);
w.quadraticCurveTo(0, 0, P.width / 2, P.height / 2);
w.stroke();
},
startMove: function() {
var e = this, t = (cc.find("garpgicsnode", this.node), cc.find("uipanel/btn_goslot", this.node)), n = cc.view.getVisibleSize(), i = [ cc.v2(-n.width / 2, n.height / 2), cc.v2(0, 0), cc.v2(n.width / 2, n.height / 2) ], o = cc.bezierTo(2, i);
t.setPosition(cc.v2(-n.width / 2, n.height / 2));
var r = cc.callFunc(function() {
t.stopAllActions();
e.startMove();
}), s = cc.sequence(o, r);
t.runAction(cc.repeatForever(s));
},
EventTest: function(e) {
e.stopPropagation();
console.log("EventTest===1");
UITool.showAlert("事件传来的参数" + JSON.stringify(e.detail), []);
}
});
cc._RF.pop();
}, {
Devices: "Devices",
Package: "Package",
VoiceNative: "VoiceNative",
xxtea: "xxtea"
} ],
Testts: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5a00cnrQ/9L/Y0QWJw10Tsi", "Testts");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("./Person"), o = cc._decorator, r = o.ccclass, s = o.property, a = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.text = "hello";
return t;
}
t.prototype.start = function() {
this.SayHello(this.text, function(e) {
console.log("我是回调==" + e);
});
myModule.say("497232807");
new i.Lee.Person().Say("Hello world");
};
t.prototype.addSum = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
for (var n = 0, i = 0, o = e; i < o.length; i++) {
var r = o[i];
n += r;
}
return n;
};
t.prototype.Hello = function() {
return cc.v2(0, 0);
};
t.prototype.SayHello = function(e, t) {
console.log("Test ts SayHello==" + e);
null != t && t(e);
};
__decorate([ s(cc.Label) ], t.prototype, "label", void 0);
__decorate([ s({
type: cc.String
}) ], t.prototype, "text", void 0);
return __decorate([ r ], t);
}(cc.Component);
n.default = a;
cc._RF.pop();
}, {
"./Person": "Person"
} ],
UITool: [ function(e, t) {
"use strict";
cc._RF.push(t, "4f9399jM0VKd48qXjqRT+2W", "UITool");
var n = {
showWaitState: !1,
getChildNode: function(e, t) {
for (var n = t.children, i = 0; i < n.length; i++) {
e[n[i].name] = n[i];
this.getChildNode(e, n[i]);
}
},
showLoading: function(e, t) {
var n = this;
this.loadPrefabRes("prefabs/loadinglayer", function(i) {
if (i) {
n.sceneAddNode(i);
var o = i.getComponent("LoadingLayer");
o && o.setCallFun(e, t);
}
});
},
showFlotText: function(e, t, n) {
var i = this;
void 0 === t && (t = null);
void 0 === n && (n = cc.v2(0, 0));
this.loadPrefabRes("prefabs/FloatText", function(o) {
if (o) {
o.getComponent(cc.Label).string = e;
t ? t.addChild(o) : i.sceneAddNode(o);
o.setPosition(n);
i.playAnimation(o, "floatTextShow", function() {
o.destroy();
});
}
});
},
sceneAddNode: function(e) {
cc.director.getScene().getChildByName("Canvas").addChild(e);
},
loadScene: function(e, t) {
void 0 === t && (t = null);
cc.director.loadScene(e, t);
},
preloadScene: function(e, t, n) {
cc.director.preloadScene(e, function(e, n) {
var i = Math.floor(e / n * 100);
t && t(i);
}, function(t) {
n && n(e, t);
});
},
loadPrefabRes: function(e, t) {
cc.resources.load(e, function(n, i) {
if (n) {
console.log("UITool.loadPrefabRes error====" + e);
t && t(null);
} else {
var o = cc.instantiate(i);
t && t(o);
cc.loader.setAutoRelease(e, !0);
}
});
},
showAlert: function(e, t, n) {
void 0 === t && (t = []);
this.loadPrefabRes("prefabs/AlertLayer", function(i) {
if (i) {
cc.director.getScene().getChildByName("Canvas").addChild(i);
var o = i.getComponent("Alert");
o && o.showAlert(e, t, function(e) {
n && n(e);
});
}
});
},
showTextInput: function(e) {
this.loadPrefabRes("prefabs/textinput", function(t) {
if (t) {
cc.director.getScene().getChildByName("Canvas").addChild(t);
var n = t.getComponent("textinput");
n && n.show(e);
}
});
},
showChooseUpdate: function(e, t) {
this.loadPrefabRes("prefabs/selectupdate", function(n) {
if (n) {
cc.director.getScene().getChildByName("Canvas").addChild(n);
var i = n.getComponent("chooseupdate");
i && i.initData(e, t);
}
});
},
loadBundleScene: function(e, t) {
var n = this;
this.showLoading(function(i) {
i.updataProgress(30);
var o = SubGameManager.getLocalBundlePath(e);
n.loadBundle(o, {
onFileProgress: function(e, t) {
return console.log("bundle progress==", e, t);
}
}, function(n, o) {
if (n) {
console.log("Global loadBundle error");
t && t(1);
} else o.loadScene(e, function(e) {
if (e) {
console.log("Global loadBundle scene error");
t && t(2);
} else i.updataProgress(100);
});
});
}, function() {
t && t(0);
n.loadScene(e);
});
},
loadBundle: function(e, t, n) {
cc.assetManager.loadBundle(e, t, function(e, t) {
n && n(e, t);
});
},
changeScene: function(e, t) {
var n = this;
this.showLoading(function(t) {
n.preloadScene(e, function(e) {
t.updataProgress(e);
});
}, function(i) {
i.updataProgress(100);
n.loadScene(e);
t && t();
});
},
showWaitNetWork: function(e) {
void 0 === e && (e = 30);
if (!this.showWaitState) {
this.showWaitState = !0;
n.loadPrefabRes("prefabs/rotateLoading", function(t) {
if (t) {
cc.director.getScene().getChildByName("Canvas").addChild(t);
t.name = "rotateLoading";
cc.tween(t).delay(e).call(function() {
t.destroy();
}).start();
}
});
}
},
dismissWaitNetWork: function() {
this.showWaitState = !1;
var e = cc.director.getScene().getChildByName("Canvas").getChildByName("rotateLoading");
e && e.destroy();
},
playAnimation: function(e, t, n) {
var i = e.getComponent(cc.Animation);
if (i) {
i.play(t);
i.on("finished", function() {
n && n();
}, this);
}
},
addBtnClick: function(e, t, n, i) {
void 0 === n && (n = null);
void 0 === i && (i = null);
e.on(cc.Node.EventType.TOUCH_START, function(e) {
n && n(e);
});
e.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
i && i(e);
});
e.on(cc.Node.EventType.TOUCH_END, function(e) {
t && t(e);
});
e.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
t && t(e);
});
}
};
globalThis.UITool = n;
cc._RF.pop();
}, {} ],
VersionManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "5cca3EkU1NJZ4QUch/IWwni", "VersionManager");
var n = e("HttpHelper"), i = e("Devices"), o = "", r = "", s = "";
if (cc && cc.sys.isNative) {
o = jsb.fileUtils.getWritablePath() + "packageTemp/";
r = jsb.fileUtils.getWritablePath() + "package/";
s = jsb.fileUtils.getWritablePath() + "config/appinfoiii.json";
}
var a = {
remoteCfg: null,
remoteMd5Cfg: "",
localCfg: "",
stateCode: "",
totalDownSize: 0,
downedSize: 0,
checkUpdate: function(e, t, n) {
cc.log("checkUpdate----", e);
this.downcall = t;
this.progressCall = n;
this.remoteCfg = e;
this.parseLocalCfg();
},
downRemoteMd5: function(e) {
var t = this;
cc.log("下载远程md5,", e);
n.sendHttpRequest(e, function(e) {
if (null != e) if (Global.isjson(e)) {
t.remoteMd5Cfg = JSON.parse(e);
t.comparefiles();
} else t.callFunWithState(11, "远程md5-json不合法"); else t.callFunWithState(2, "获取MD5配置文件失败");
});
},
comparefiles: function() {
for (var e = this.localCfg.files, t = this.remoteMd5Cfg.files, n = new Array(), i = {}, o = {}, r = 0; r < e.length; r++) {
var s = (l = e[r]).filename, a = l.md5, c = l.size;
i[s] = {
md5: a,
fileSize: c
};
}
for (r = 0; r < t.length; r++) {
var l;
s = (l = t[r]).filename, a = l.md5, c = l.size;
o[s] = {
md5: a,
fileSize: c
};
}
for (var u in o) {
var f = o[u], d = f.md5;
c = f.fileSize;
i[u] ? d != i[u].md5 && n.push({
fileName: u,
md5: d,
fileSize: c
}) : n.push({
fileName: u,
md5: d,
fileSize: c
});
}
for (var h in n) {
c = n[h].fileSize;
this.totalDownSize = this.totalDownSize + c;
}
this.downFiles(n);
},
downFiles: function(e) {
if (0 != e.length) {
var t = this, n = e;
t.DownIndex = 0;
(function e(i) {
var s = t.BaseUrl, a = n[i].fileName, c = n[i].fileSize, l = s + a, u = o + a, f = r + a, d = o + Global.GgetDirByUrl(a), h = r + Global.GgetDirByUrl(a);
Global.GcreateDir(d);
Global.GcreateDir(h);
n[i].tempfile = u;
n[i].realfile = f;
cc.log("下载=====", l);
Global.GDownFile(l, function(i) {
if (i) {
Global.GwriteDataToFile(i, u);
t.downedSize = t.downedSize + c;
if (t.DownIndex < n.length - 1) {
t.DownIndex = t.DownIndex + 1;
t.progressCall && t.progressCall(Math.floor(t.DownIndex / n.length * 100), (t.downedSize / 1e3).toFixed(1), (t.totalDownSize / 1e3).toFixed(1));
e(t.DownIndex);
} else {
t.progressCall && t.progressCall(Math.floor(100), (t.downedSize / 1e3).toFixed(1), (t.totalDownSize / 1e3).toFixed(1));
cc.log("下载完成***");
t.MoveFiles(n);
}
} else t.callFunWithState(3, "下载单个文件失败=" + l);
});
})(t.DownIndex);
} else this.MoveDone();
},
MoveFiles: function(e) {
this.moveStep = 0;
var t = this;
(function n(i) {
var o = e[i].tempfile, a = e[i].realfile, c = Global.GgetDataFromFile(o);
if (c) {
Global.GwriteDataToFile(c, a);
if (t.moveStep < e.length - 1) {
t.moveStep = t.moveStep + 1;
n(t.moveStep);
} else t.MoveDone();
} else {
jsb.fileUtils.removeDirectory(r);
jsb.fileUtils.createDirectory(r);
jsb.fileUtils.removeFile(s);
t.callFunWithState(4, "移动文件失败" + o);
}
})(this.moveStep);
},
MoveDone: function() {
cc.log("移动成功****");
var e = JSON.stringify(this.remoteMd5Cfg, null, 4);
Global.GcreateDir(jsb.fileUtils.getWritablePath() + "config");
Global.GwriteStringToFile(e, s);
this.callFunWithState(100, "更新成功");
},
ReStartGame: function() {
cc.log("重启***");
cc.audioEngine.stopAll();
cc.game.restart();
},
RemoveTemp: function() {
if (cc.sys.isNative) {
jsb.fileUtils.removeDirectory(r);
jsb.fileUtils.createDirectory(r);
jsb.fileUtils.removeFile(s);
}
},
callFunWithState: function(e, t, n) {
if (this.downcall) {
console.log(t + ": 状态码=" + e);
this.downcall(e, n);
}
},
parseLocalCfg: function() {
var e = this, t = s;
if (jsb.fileUtils.isFileExist(t)) {
console.log("读取包外配置");
var n = jsb.fileUtils.getStringFromFile(t);
if (!Global.isjson(n)) {
e.RemoveTemp();
e.callFunWithState(9, "包外json配置不合法");
return;
}
e.localCfg = JSON.parse(n);
e.parseRemoteCfg();
} else {
console.log("读取包内配置");
cc.resources.load("appinfoiii", function(t, n) {
if (t) {
cc.log("读取包内配置失败" + t);
e.callFunWithState(5, "读取包内配置失败，请检查本地配置");
} else {
e.localCfg = n.json;
e.parseRemoteCfg();
}
});
}
},
getScriptVersion: function() {
return this.localCfg.scriptVersion;
},
getH5ScriptVersion: function() {
var e = this;
cc.resources.load("appinfoiii", function(t, n) {
if (t) {
cc.log("读取包内配置失败" + t);
e.callFunWithState(5, "读取包内配置失败，请检查本地配置");
} else e.localCfg = n.json;
});
},
getSubGameCfg: function() {
return this.remoteCfg.subgames;
},
parseRemoteCfg: function() {
if (0 != cc.sys.isNative && null != this.remoteCfg) {
var e = this;
console.log("拉取远程配置", this.remoteCfg);
n.sendHttpRequest(this.remoteCfg, function(t) {
if (null != t) if (Global.isjson(t)) {
e.remoteCfg = JSON.parse(t);
var n = e.localCfg.scriptVersion, o = e.remoteCfg.scriptVersion, r = e.remoteCfg.debugScriptVersion, s = e.remoteCfg.supportBinarys, a = e.remoteCfg.forcedBinaryVersions, c = e.remoteCfg.channels, l = e.remoteCfg.debugUIDs, u = e.remoteCfg.binaryUrl[window.DISTRIBUTE_CHANNEL] || e.remoteCfg[0], f = cc.sys.localStorage.getItem("debugId");
if (Global.GIsArrContain(c, window.DISTRIBUTE_CHANNEL)) if (Global.GIsArrContain(s, i.getAppVersion())) if (Global.GIsArrContain(a, i.getAppVersion())) e.callFunWithState(8, "强制更新", u); else {
console.log("主包本地脚本号==" + n);
console.log("主包远程debug版本号==" + r);
console.log("主包远程版本号==" + o);
if (Global.GIsArrContain(l, f)) {
if (parseInt(n) != parseInt(r)) {
console.log("走测试玩家----热更新");
var d = e.remoteCfg.debugBaseUrl, h = (d = cc.js.formatStr(d, r)) + e.remoteCfg.debugConfigFile;
e.BaseUrl = d;
e.downRemoteMd5(h);
return;
}
e.callFunWithState(0, "测试玩家版本和远程一样，不用更新");
} else if (parseInt(n) == parseInt(o)) e.callFunWithState(0, "不用更新-本地和远程版本一致:" + n); else {
console.log("走正式----热更新");
var p = e.remoteCfg.baseUrl;
h = (p = cc.js.formatStr(p, o)) + e.remoteCfg.configFile;
e.BaseUrl = p;
e.downRemoteMd5(h);
}
} else e.callFunWithState(6, "不支持热更新的2进制版本号" + i.getAppVersion()); else e.callFunWithState(7, "不支持热更新的渠道号" + window.DISTRIBUTE_CHANNEL);
} else e.callFunWithState(10, "远程配置json不合法"); else e.callFunWithState(1, "获取版本配置文件失败");
});
}
}
};
t.exports = a;
cc._RF.pop();
}, {
Devices: "Devices",
HttpHelper: "HttpHelper"
} ],
VoiceNative: [ function(e, t) {
"use strict";
cc._RF.push(t, "6659eBg8ldPA6/b57j6ol8I", "VoiceNative");
var n = 12, i = 128 - n;
function o(e) {
e -= i;
var t = Math.floor(e / n) + i, o = e % n + i;
return String.fromCharCode(t) + String.fromCharCode(o);
}
for (var r = {}, s = {}, a = 0; a < 256; ++a) {
var c, l = a + 1;
c = l >= i ? o(l) : String.fromCharCode(l);
r[a] = c;
s[c] = a;
}
function u(e) {
var t = "", n = e.length;
cc.log("encode, len=" + n + ", data=" + e);
var i = n >> 16 & 255, o = n >> 8 & 255, s = 255 & n;
t += r[n >> 24 & 255];
t += r[i];
t += r[o];
t += r[s];
for (var a = 0; a < e.length; ++a) t += r[e[a]];
return t;
}
var f = "com/casino/game/VoiceRecorder", d = cc.Class({
extends: cc.Component,
properties: {
_voiceMediaPath: null
},
onLoad: function() {},
init: function() {
if (cc.sys.isNative) {
this._voiceMediaPath = jsb.fileUtils.getWritablePath() + "voicemsgs/";
this.setStorageDir(this._voiceMediaPath);
}
},
prepare: function(e) {
if (cc.sys.isNative) {
cc.audioEngine.pauseAll();
this.clearCache(e);
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(f, "prepare", "(Ljava/lang/String;)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod("VoiceSDK", "prepareRecord:", e));
}
},
release: function() {
if (cc.sys.isNative) {
cc.audioEngine.resumeAll();
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(f, "release", "()V") : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod("VoiceSDK", "finishRecord"));
}
},
cancel: function() {
if (cc.sys.isNative) {
cc.audioEngine.resumeAll();
cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(f, "cancel", "()V") : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod("VoiceSDK", "cancelRecord"));
}
},
writeVoice: function(e, t) {
if (cc.sys.isNative && t && t.length > 0) {
var n = this._voiceMediaPath + e;
this.clearCache(e);
jsb.fileUtils.writeDataToFile(t, n);
}
},
clearCache: function(e) {
if (cc.sys.isNative) {
var t = this._voiceMediaPath + e;
jsb.fileUtils.isFileExist(t) && jsb.fileUtils.removeFile(t);
jsb.fileUtils.isFileExist(t + ".wav") && jsb.fileUtils.removeFile(t + ".wav");
}
},
play: function(e) {
if (cc.sys.isNative) {
cc.audioEngine.pauseAll();
cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("com/casino/game/VoicePlayer", "play", "(Ljava/lang/String;)V", e) : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod("VoiceSDK", "play:", e);
}
},
isSpeechPlaying: function() {
if (cc.sys.isNative) return cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("com/casino/game/VoicePlayer", "isPlay", "()Z") : cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod("VoiceSDK", "isPlay:");
},
getVoiceData: function(e) {
if (cc.sys.isNative) {
var t = this._voiceMediaPath + e;
console.log("VoiceNative getVoiceData:" + t);
var n = jsb.fileUtils.getDataFromFile(t);
if (n) return n;
}
return null;
},
getDataString: function(e) {
return u(e);
},
setStorageDir: function(e) {
if (cc.sys.isNative) if (cc.sys.os == cc.sys.OS_ANDROID) jsb.reflection.callStaticMethod(f, "setStorageDir", "(Ljava/lang/String;)V", e); else if (cc.sys.os == cc.sys.OS_IOS) {
jsb.reflection.callStaticMethod("VoiceSDK", "setStorageDir:", e);
jsb.fileUtils.isDirectoryExist(e) || jsb.fileUtils.createDirectory(e);
}
}
});
d = new d();
t.exports = d;
cc._RF.pop();
}, {} ],
WeChatModule: [ function(e, t) {
"use strict";
cc._RF.push(t, "87018xPYahKfYfnLy3FlfhY", "WeChatModule");
var n = "org/cocos2dx/javascript/WeChatModule", i = e("HttpModule"), o = cc.Class({
name: "WeChatModlue",
properties: {
appId: "wx05017e4a3290433a",
appSecret: "bf5bf75d9683f040907d7544f9be7735"
},
ctor: function() {
console.log("[WeChatModule][ctor]---构造函数");
this.initWx(this.appId, this.appSecret);
},
isInstallWx: function() {
return !0 === gg.isAndroid ? jsb.reflection.callStaticMethod(n, "isInstallWx", "()Z") : !0 !== gg.isIOS || jsb.reflection.callStaticMethod("WeChatModule", "isInstallWx");
},
initWx: function(e, t) {
this.appId = e;
this.appSecret = t;
return !0 === gg.isAndroid ? jsb.reflection.callStaticMethod(n, "initWx", "(Ljava/lang/String;Ljava/lang/String;)V", e, t) : !0 !== gg.isIOS || jsb.reflection.callStaticMethod("WeChatModule", "initWx:andSecret:", e, t);
},
loginWx: function() {
!0 === gg.isAndroid ? jsb.reflection.callStaticMethod(n, "loginWx", "()V") : !0 === gg.isIOS && jsb.reflection.callStaticMethod("WeChatModule", "loginWx");
},
shareImageWx: function(e, t, i) {
this.ShareCall = i;
!0 === gg.isAndroid ? jsb.reflection.callStaticMethod(n, "shareImageWx", "(Ljava/lang/String;I)V", e, t) : !0 === gg.isIOS && jsb.reflection.callStaticMethod("WeChatModule", "shareImageWx:andType:", e, t);
},
shareTextWx: function(e, t, i) {
this.ShareCall = i;
!0 === gg.isAndroid ? jsb.reflection.callStaticMethod(n, "shareTextWx", "(Ljava/lang/String;I)V", e, t) : !0 === gg.isIOS && jsb.reflection.callStaticMethod("WeChatModule", "shareTextWx:andType:", e, t);
},
shareUrlWx: function(e, t, i, o, r) {
this.ShareCall = r;
!0 === gg.isAndroid ? jsb.reflection.callStaticMethod(n, "shareUrlWx", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)V", e, t, i, o) : !0 === gg.isIOS && jsb.reflection.callStaticMethod("WeChatModule", "shareUrlWx:andTitle:andDesc:andType:", e, t, i, o);
},
login: function(e) {
this.LoginCall = e;
var t = cc.sys.localStorage.getItem("plaza_refresh_token"), n = this;
if (t) {
var o = JSON.parse(t), r = o.appid, s = o.refresh_token, a = "https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=" + r + "&grant_type=refresh_token&refresh_token=" + s;
i.get({
url: a,
timeout: 1e4
}, function(e, t) {
if (e || t.errcode) {
n.resetWx();
n.loginWx();
} else {
var i = {
ret: !0
};
i.access_token = t.access_token;
i.openid = t.openid;
var o = {};
o.refresh_token = t.refresh_token;
o.appid = r;
cc.sys.localStorage.setItem("plaza_refresh_token", JSON.stringify(o));
n.LoginCall && n.LoginCall(i);
}
}.bind(n));
return !0;
}
if (!1 === this.isInstallWx()) {
cc.log("微信登录失败，请检查是否安装微信");
return !1;
}
if (gg.isWindows) {
cc.log("WechatLoginView");
return !0;
}
return this.loginWx();
},
pay: function(e, t) {
this.PayCall = t;
!0 === gg.isAndroid ? jsb.reflection.callStaticMethod(n, "payWx", "(Ljava/lang/String;)V", e) : !0 === gg.isIOS && jsb.reflection.callStaticMethod("WeChatModule", "payWx", e);
},
onWxLoginResultCallback: function(e, t) {
console.log("WeChatModule onWxLoginResultCallback");
if (!1 !== e) {
var n = this, o = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" + this.appId + "&secret=" + this.appSecret + "&code=" + t + "&grant_type=authorization_code";
i.get({
url: o,
timeout: 1e4
}, function(e, t) {
if (e || t.errcode) {
n.resetWx();
n.LoginCall && n.LoginCall({
ret: !1,
msg: "微信登录失败,请稍后重试"
});
} else {
var i = {
ret: !0
};
i.access_token = t.access_token;
i.openid = t.openid;
var o = {};
o.refresh_token = t.refresh_token;
o.appid = n.appid;
cc.sys.localStorage.setItem("plaza_refresh_token", JSON.stringify(o));
n.getWxUserInfo(i);
}
});
} else {
var r = {
ret: !1
};
r.msg = "微信登录失败，" + t;
this.LoginCall && this.LoginCall(r);
}
},
getWxUserInfo: function(e) {
var t = this, n = this, o = cc.js.formatStr("https://api.weixin.qq.com/sns/userinfo?access_token=%s&openid=%s", e.access_token, e.openid);
i.get({
url: o,
timeout: 1e4
}, function(i, o) {
if (i || o.errcode) {
n.resetWx();
t.LoginCall && t.LoginCall({
ret: !1,
msg: "获取玩家信息失败"
});
} else {
e.userinfo = o;
n.LoginCall && n.LoginCall(e);
}
});
},
onWxShareResultCallback: function(e, t) {
console.log("WeChatModule onWxShareResultCallback");
this.ShareCall && this.ShareCall(e, t);
},
onWxPayResultCallback: function(e) {
this.PayCall && this.PayCall(e);
},
onWindowLoginCallback: function(e, t, n) {
this.appId = e;
this.appSecret = t;
this.onWxLoginResultCallback(!0, n);
},
resetWx: function() {
cc.sys.localStorage.removeItem("plaza_refresh_token");
}
});
t.exports = o;
cc._RF.pop();
}, {
HttpModule: "HttpModule"
} ],
WsTest: [ function(e, t) {
"use strict";
cc._RF.push(t, "e5e9fObFGlLQbIbtk/t0ooz", "WsTest");
var n = e("Ws");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
var e = new n();
e.connect("127.0.0.1", 9001);
e.setOpenCall(function() {
cc.log("连接成功");
});
e.setOnMessageCall(function() {
cc.log("消息来了");
});
},
sendText: function() {
var e = cc.find("uipanel/Edit", this.node).getComponent(cc.EditBox), t = e.string;
cc.log("txt==", t);
this._wsiSendBinary.send(JSON.stringify({
funcName: "chatText",
txt: t
}));
e.string = "";
},
addText: function(e) {
var t = cc.find("uipanel/scrollview", this.node), n = cc.instantiate(cc.find("uipanel/item", this.node));
n.getComponent(cc.Label).string = e;
n.x = 0;
n.active = !0;
var i = t.getComponent(cc.ScrollView);
i.content.addChild(n);
i.scrollToBottom(.5);
}
});
cc._RF.pop();
}, {
Ws: "Ws"
} ],
Ws: [ function(e, t) {
"use strict";
cc._RF.push(t, "5f755kjtT1EEbid5p4qY0Vw", "Ws");
cc.Class({
connect: function(e, t) {
this._wsiSendBinary = new WebSocket("ws://" + e + ":" + t + "//");
this._wsiSendBinary.binaryType = "arraybuffer";
},
setOpenCall: function(e) {
this._wsiSendBinary && (this._wsiSendBinary.onopen = function() {
e && e();
});
},
setOnMessageCall: function(e) {
this._wsiSendBinary && (this._wsiSendBinary.onmessage = function(t) {
e && e(t);
});
},
setOnErrorCall: function(e) {
this._wsiSendBinary && (this._wsiSendBinary.onerror = function(t) {
e && e(t);
});
},
setOnCloseCall: function(e) {
this._wsiSendBinary && (this._wsiSendBinary.onclose = function(t) {
e && e(t);
});
},
send: function(e) {
this._wsiSendBinary && this._wsiSendBinary.readyState === WebSocket.OPEN ? this._wsiSendBinary.send(e) : cc.log("WS 断开连接");
}
});
cc._RF.pop();
}, {} ],
ball: [ function(e, t) {
"use strict";
cc._RF.push(t, "cf9a69rTylNR4vuXlstck3D", "ball");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
tap: function() {
var e = this.node.getComponent(cc.RigidBody);
console.log("ball tap====", e);
e.applyForceToCenter(new cc.Vec2(0, 6e5), !0);
},
start: function() {
console.log("start", this.node.y);
},
printlog: function() {
this.node.getComponent(cc.RigidBody).linearVelocity;
},
onBeginContact: function() {
console.log("ball onBeginContact");
},
onEndContact: function() {
console.log("ball onEndContact");
},
onPreSolve: function() {
console.log("ball onPreSolve");
},
onPostSolve: function() {
console.log("ball onPostSolve");
},
update: function() {}
});
cc._RF.pop();
}, {} ],
bundleSceneTest: [ function(e, t) {
"use strict";
cc._RF.push(t, "aa93eq7R1lJppNkneqno1br", "bundleSceneTest");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
var e = this, t = cc.find("uipanel/btn_exit", this.node);
UITool.addBtnClick(t, function() {
UITool.showLoading(function(t) {
t.updataProgress(30);
e.scheduleOnce(function() {
t.updataProgress(100);
}, 2);
}, function() {
cc.director.loadScene("TestScene", function() {
Global.gReleaseBundle("bundleScene");
});
});
});
}
});
cc._RF.pop();
}, {} ],
chooseupdate: [ function(e, t) {
"use strict";
cc._RF.push(t, "5a10feVxjlCLr90Fw2jtkf1", "chooseupdate");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.content = this.node.getChildByName("bg").getChildByName("ScrollView").getChildByName("view").getChildByName("content");
this.item = this.node.getChildByName("bg").getChildByName("item");
this.tiptext = this.node.getChildByName("bg").getChildByName("tiptext");
},
initData: function(e, t) {
this.call = t;
this.initView(e);
},
initView: function(e) {
var t = this;
this.tiptext.getComponent(cc.Label).string = e.tips;
var n = e.items, i = function(e) {
r = cc.instantiate(t.item);
t.content.addChild(r);
r.active = !0;
r.getChildByName("text").getComponent(cc.Label).string = n[e].text;
UITool.addBtnClick(r, function() {
t.call && t.call(e, t);
});
};
for (var o in n) {
var r;
i(o);
}
},
onbackpress: function() {},
start: function() {}
});
cc._RF.pop();
}, {} ],
cmdDef: [ function(e, t) {
"use strict";
cc._RF.push(t, "e9f681cUfVN/rI19bJHUF5u", "cmdDef");
var n = {}, i = {};
n.Login = 100;
i[n.Login] = {
name: "Login",
pak: "tutorial.Person",
file: "addressbook.pb"
};
n.Login1 = 101;
i[n.Login1] = {
name: "Login1",
pak: "tutorial.Person",
file: "addressbook.pb"
};
n.Login2 = 102;
i[n.Login2] = {
name: "Login2",
pak: "tutorial.Person",
file: "addressbook.pb"
};
globalThis.CMD = n;
globalThis.CMD2PB = i;
cc._RF.pop();
}, {} ],
en: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "bc55aqoOKBC+4uvatFaL5MO", "en");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = {
2001: "Hello",
2002: "Chinese",
2003: "sixsixsix",
2004: "two",
2005: "five"
};
cc._RF.pop();
}, {} ],
gameProto: [ function(e, t) {
"use strict";
cc._RF.push(t, "13451CQ89dDZrtZKs92TJO3", "gameProto");
var n = e("./protobuf"), i = n.Reader, o = n.Writer, r = n.util, s = n.roots.default || (n.roots.default = {});
s.tutorial = function() {
var e = {};
e.Person = function() {
function e(e) {
this.phones = [];
if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
}
e.prototype.name = "";
e.prototype.id = 0;
e.prototype.email = "";
e.prototype.phones = r.emptyArray;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t) {
t || (t = o.create());
null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(10).string(e.name);
null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(16).int32(e.id);
null != e.email && Object.hasOwnProperty.call(e, "email") && t.uint32(26).string(e.email);
if (null != e.phones && e.phones.length) for (var n = 0; n < e.phones.length; ++n) s.tutorial.Person.PhoneNumber.encode(e.phones[n], t.uint32(34).fork()).ldelim();
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t).ldelim();
};
e.decode = function(e, t) {
e instanceof i || (e = i.create(e));
for (var n = void 0 === t ? e.len : e.pos + t, o = new s.tutorial.Person(); e.pos < n; ) {
var r = e.uint32();
switch (r >>> 3) {
case 1:
o.name = e.string();
break;

case 2:
o.id = e.int32();
break;

case 3:
o.email = e.string();
break;

case 4:
o.phones && o.phones.length || (o.phones = []);
o.phones.push(s.tutorial.Person.PhoneNumber.decode(e, e.uint32()));
break;

default:
e.skipType(7 & r);
}
}
return o;
};
e.decodeDelimited = function(e) {
e instanceof i || (e = new i(e));
return this.decode(e, e.uint32());
};
e.verify = function(e) {
if ("object" != typeof e || null === e) return "object expected";
if (null != e.name && e.hasOwnProperty("name") && !r.isString(e.name)) return "name: string expected";
if (null != e.id && e.hasOwnProperty("id") && !r.isInteger(e.id)) return "id: integer expected";
if (null != e.email && e.hasOwnProperty("email") && !r.isString(e.email)) return "email: string expected";
if (null != e.phones && e.hasOwnProperty("phones")) {
if (!Array.isArray(e.phones)) return "phones: array expected";
for (var t = 0; t < e.phones.length; ++t) {
var n = s.tutorial.Person.PhoneNumber.verify(e.phones[t]);
if (n) return "phones." + n;
}
}
return null;
};
e.fromObject = function(e) {
if (e instanceof s.tutorial.Person) return e;
var t = new s.tutorial.Person();
null != e.name && (t.name = String(e.name));
null != e.id && (t.id = 0 | e.id);
null != e.email && (t.email = String(e.email));
if (e.phones) {
if (!Array.isArray(e.phones)) throw TypeError(".tutorial.Person.phones: array expected");
t.phones = [];
for (var n = 0; n < e.phones.length; ++n) {
if ("object" != typeof e.phones[n]) throw TypeError(".tutorial.Person.phones: object expected");
t.phones[n] = s.tutorial.Person.PhoneNumber.fromObject(e.phones[n]);
}
}
return t;
};
e.toObject = function(e, t) {
t || (t = {});
var n = {};
(t.arrays || t.defaults) && (n.phones = []);
if (t.defaults) {
n.name = "";
n.id = 0;
n.email = "";
}
null != e.name && e.hasOwnProperty("name") && (n.name = e.name);
null != e.id && e.hasOwnProperty("id") && (n.id = e.id);
null != e.email && e.hasOwnProperty("email") && (n.email = e.email);
if (e.phones && e.phones.length) {
n.phones = [];
for (var i = 0; i < e.phones.length; ++i) n.phones[i] = s.tutorial.Person.PhoneNumber.toObject(e.phones[i], t);
}
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, n.util.toJSONOptions);
};
e.PhoneType = function() {
var e = {}, t = Object.create(e);
t[e[0] = "MOBILE"] = 0;
t[e[1] = "HOME"] = 1;
t[e[2] = "WORK"] = 2;
return t;
}();
e.PhoneNumber = function() {
function e(e) {
if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
}
e.prototype.number = "";
e.prototype.type = 0;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t) {
t || (t = o.create());
null != e.number && Object.hasOwnProperty.call(e, "number") && t.uint32(10).string(e.number);
null != e.type && Object.hasOwnProperty.call(e, "type") && t.uint32(16).int32(e.type);
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t).ldelim();
};
e.decode = function(e, t) {
e instanceof i || (e = i.create(e));
for (var n = void 0 === t ? e.len : e.pos + t, o = new s.tutorial.Person.PhoneNumber(); e.pos < n; ) {
var r = e.uint32();
switch (r >>> 3) {
case 1:
o.number = e.string();
break;

case 2:
o.type = e.int32();
break;

default:
e.skipType(7 & r);
}
}
return o;
};
e.decodeDelimited = function(e) {
e instanceof i || (e = new i(e));
return this.decode(e, e.uint32());
};
e.verify = function(e) {
if ("object" != typeof e || null === e) return "object expected";
if (null != e.number && e.hasOwnProperty("number") && !r.isString(e.number)) return "number: string expected";
if (null != e.type && e.hasOwnProperty("type")) switch (e.type) {
default:
return "type: enum value expected";

case 0:
case 1:
case 2:
}
return null;
};
e.fromObject = function(e) {
if (e instanceof s.tutorial.Person.PhoneNumber) return e;
var t = new s.tutorial.Person.PhoneNumber();
null != e.number && (t.number = String(e.number));
switch (e.type) {
case "MOBILE":
case 0:
t.type = 0;
break;

case "HOME":
case 1:
t.type = 1;
break;

case "WORK":
case 2:
t.type = 2;
}
return t;
};
e.toObject = function(e, t) {
t || (t = {});
var n = {};
if (t.defaults) {
n.number = "";
n.type = t.enums === String ? "MOBILE" : 0;
}
null != e.number && e.hasOwnProperty("number") && (n.number = e.number);
null != e.type && e.hasOwnProperty("type") && (n.type = t.enums === String ? s.tutorial.Person.PhoneType[e.type] : e.type);
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, n.util.toJSONOptions);
};
return e;
}();
return e;
}();
e.AddressBook = function() {
function e(e) {
this.people = [];
if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
}
e.prototype.people = r.emptyArray;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t) {
t || (t = o.create());
if (null != e.people && e.people.length) for (var n = 0; n < e.people.length; ++n) s.tutorial.Person.encode(e.people[n], t.uint32(10).fork()).ldelim();
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t).ldelim();
};
e.decode = function(e, t) {
e instanceof i || (e = i.create(e));
for (var n = void 0 === t ? e.len : e.pos + t, o = new s.tutorial.AddressBook(); e.pos < n; ) {
var r = e.uint32();
switch (r >>> 3) {
case 1:
o.people && o.people.length || (o.people = []);
o.people.push(s.tutorial.Person.decode(e, e.uint32()));
break;

default:
e.skipType(7 & r);
}
}
return o;
};
e.decodeDelimited = function(e) {
e instanceof i || (e = new i(e));
return this.decode(e, e.uint32());
};
e.verify = function(e) {
if ("object" != typeof e || null === e) return "object expected";
if (null != e.people && e.hasOwnProperty("people")) {
if (!Array.isArray(e.people)) return "people: array expected";
for (var t = 0; t < e.people.length; ++t) {
var n = s.tutorial.Person.verify(e.people[t]);
if (n) return "people." + n;
}
}
return null;
};
e.fromObject = function(e) {
if (e instanceof s.tutorial.AddressBook) return e;
var t = new s.tutorial.AddressBook();
if (e.people) {
if (!Array.isArray(e.people)) throw TypeError(".tutorial.AddressBook.people: array expected");
t.people = [];
for (var n = 0; n < e.people.length; ++n) {
if ("object" != typeof e.people[n]) throw TypeError(".tutorial.AddressBook.people: object expected");
t.people[n] = s.tutorial.Person.fromObject(e.people[n]);
}
}
return t;
};
e.toObject = function(e, t) {
t || (t = {});
var n = {};
(t.arrays || t.defaults) && (n.people = []);
if (e.people && e.people.length) {
n.people = [];
for (var i = 0; i < e.people.length; ++i) n.people[i] = s.tutorial.Person.toObject(e.people[i], t);
}
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, n.util.toJSONOptions);
};
return e;
}();
e.Package = function() {
function e(e) {
if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
}
e.prototype.id = 0;
e.prototype.data = r.newBuffer([]);
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t) {
t || (t = o.create());
null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(8).uint32(e.id);
null != e.data && Object.hasOwnProperty.call(e, "data") && t.uint32(18).bytes(e.data);
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t).ldelim();
};
e.decode = function(e, t) {
e instanceof i || (e = i.create(e));
for (var n = void 0 === t ? e.len : e.pos + t, o = new s.tutorial.Package(); e.pos < n; ) {
var r = e.uint32();
switch (r >>> 3) {
case 1:
o.id = e.uint32();
break;

case 2:
o.data = e.bytes();
break;

default:
e.skipType(7 & r);
}
}
return o;
};
e.decodeDelimited = function(e) {
e instanceof i || (e = new i(e));
return this.decode(e, e.uint32());
};
e.verify = function(e) {
return "object" != typeof e || null === e ? "object expected" : null != e.id && e.hasOwnProperty("id") && !r.isInteger(e.id) ? "id: integer expected" : null != e.data && e.hasOwnProperty("data") && !(e.data && "number" == typeof e.data.length || r.isString(e.data)) ? "data: buffer expected" : null;
};
e.fromObject = function(e) {
if (e instanceof s.tutorial.Package) return e;
var t = new s.tutorial.Package();
null != e.id && (t.id = e.id >>> 0);
null != e.data && ("string" == typeof e.data ? r.base64.decode(e.data, t.data = r.newBuffer(r.base64.length(e.data)), 0) : e.data.length && (t.data = e.data));
return t;
};
e.toObject = function(e, t) {
t || (t = {});
var n = {};
if (t.defaults) {
n.id = 0;
if (t.bytes === String) n.data = ""; else {
n.data = [];
t.bytes !== Array && (n.data = r.newBuffer(n.data));
}
}
null != e.id && e.hasOwnProperty("id") && (n.id = e.id);
null != e.data && e.hasOwnProperty("data") && (n.data = t.bytes === String ? r.base64.encode(e.data, 0, e.data.length) : t.bytes === Array ? Array.prototype.slice.call(e.data) : e.data);
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, n.util.toJSONOptions);
};
return e;
}();
return e;
}();
s.test = function() {
var e = {};
e.Hero = function() {
function e(e) {
this.skills = [];
if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]]);
}
e.prototype.name = "";
e.prototype.id = 0;
e.prototype.age = 0;
e.prototype.skills = r.emptyArray;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t) {
t || (t = o.create());
null != e.name && Object.hasOwnProperty.call(e, "name") && t.uint32(10).string(e.name);
null != e.id && Object.hasOwnProperty.call(e, "id") && t.uint32(16).int32(e.id);
null != e.age && Object.hasOwnProperty.call(e, "age") && t.uint32(24).int32(e.age);
if (null != e.skills && e.skills.length) for (var n = 0; n < e.skills.length; ++n) t.uint32(34).string(e.skills[n]);
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t).ldelim();
};
e.decode = function(e, t) {
e instanceof i || (e = i.create(e));
for (var n = void 0 === t ? e.len : e.pos + t, o = new s.test.Hero(); e.pos < n; ) {
var r = e.uint32();
switch (r >>> 3) {
case 1:
o.name = e.string();
break;

case 2:
o.id = e.int32();
break;

case 3:
o.age = e.int32();
break;

case 4:
o.skills && o.skills.length || (o.skills = []);
o.skills.push(e.string());
break;

default:
e.skipType(7 & r);
}
}
return o;
};
e.decodeDelimited = function(e) {
e instanceof i || (e = new i(e));
return this.decode(e, e.uint32());
};
e.verify = function(e) {
if ("object" != typeof e || null === e) return "object expected";
if (null != e.name && e.hasOwnProperty("name") && !r.isString(e.name)) return "name: string expected";
if (null != e.id && e.hasOwnProperty("id") && !r.isInteger(e.id)) return "id: integer expected";
if (null != e.age && e.hasOwnProperty("age") && !r.isInteger(e.age)) return "age: integer expected";
if (null != e.skills && e.hasOwnProperty("skills")) {
if (!Array.isArray(e.skills)) return "skills: array expected";
for (var t = 0; t < e.skills.length; ++t) if (!r.isString(e.skills[t])) return "skills: string[] expected";
}
return null;
};
e.fromObject = function(e) {
if (e instanceof s.test.Hero) return e;
var t = new s.test.Hero();
null != e.name && (t.name = String(e.name));
null != e.id && (t.id = 0 | e.id);
null != e.age && (t.age = 0 | e.age);
if (e.skills) {
if (!Array.isArray(e.skills)) throw TypeError(".test.Hero.skills: array expected");
t.skills = [];
for (var n = 0; n < e.skills.length; ++n) t.skills[n] = String(e.skills[n]);
}
return t;
};
e.toObject = function(e, t) {
t || (t = {});
var n = {};
(t.arrays || t.defaults) && (n.skills = []);
if (t.defaults) {
n.name = "";
n.id = 0;
n.age = 0;
}
null != e.name && e.hasOwnProperty("name") && (n.name = e.name);
null != e.id && e.hasOwnProperty("id") && (n.id = e.id);
null != e.age && e.hasOwnProperty("age") && (n.age = e.age);
if (e.skills && e.skills.length) {
n.skills = [];
for (var i = 0; i < e.skills.length; ++i) n.skills[i] = e.skills[i];
}
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, n.util.toJSONOptions);
};
return e;
}();
return e;
}();
t.exports = s;
cc._RF.pop();
}, {
"./protobuf": "protobuf"
} ],
i18nLabel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "41ebaVoPpRA4Kp67XEdHfZn", "i18nLabel");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.i18nLabel = void 0;
var i = e("./i18nMgr"), o = cc._decorator, r = o.ccclass, s = o.property, a = o.executeInEditMode, c = o.disallowMultiple, l = o.requireComponent, u = o.menu, f = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.i18n_string = "";
t.i18n_params = [];
return t;
}
t.prototype.start = function() {
i.i18nMgr._addOrDelLabel(this, !0);
this._resetValue();
};
Object.defineProperty(t.prototype, "string", {
get: function() {
return this.i18n_string;
},
set: function(e) {
this.i18n_string = e;
this.setEndValue();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "params", {
get: function() {
return this.i18n_params;
},
set: function(e) {
this.i18n_params = e;
this.setEndValue();
},
enumerable: !1,
configurable: !0
});
t.prototype.init = function(e, t) {
this.i18n_string = e;
this.i18n_params = t;
this.setEndValue();
};
t.prototype.setEndValue = function() {
var e = this.getComponent(cc.Label);
cc.isValid(e) && (e.string = i.i18nMgr._getLabel(this.i18n_string, this.i18n_params));
};
t.prototype._resetValue = function() {
this.string = this.i18n_string;
};
t.prototype.onDestroy = function() {
i.i18nMgr._addOrDelLabel(this, !1);
};
__decorate([ s({
visible: !1
}) ], t.prototype, "i18n_string", void 0);
__decorate([ s({
visible: !1
}) ], t.prototype, "i18n_params", void 0);
__decorate([ s({
type: cc.String
}) ], t.prototype, "string", null);
__decorate([ s({
type: [ cc.String ]
}) ], t.prototype, "params", null);
return __decorate([ r, a, l(cc.Label), c, u("多语言/i18nLabel") ], t);
}(cc.Component);
n.i18nLabel = f;
cc._RF.pop();
}, {
"./i18nMgr": "i18nMgr"
} ],
i18nMgr: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "1e36aJmHntDxqZis49hy52h", "i18nMgr");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.i18nMgr = void 0;
var i = e("./Lang"), o = function() {
function e() {}
e.checkInit = function() {
this.language || this.setLanguage("zh");
};
e.setLanguage = function(e) {
if (this.language !== e) {
this.language = e;
this.reloadLabel();
this.reloadSprite();
}
};
e._addOrDelLabel = function(e, t) {
if (t) this.labelArr.push(e); else {
var n = this.labelArr.indexOf(e);
-1 !== n && this.labelArr.splice(n, 1);
}
};
e._getLabel = function(e, t) {
this.checkInit();
if (0 === t.length) return this.labelData[e] || e;
for (var n = this.labelData[e] || e, i = 0; i < t.length; i++) {
var o = new RegExp("#" + i, "g");
n = n.replace(o, t[i]);
}
return n;
};
e._addOrDelSprite = function(e, t) {
if (t) this.spriteArr.push(e); else {
var n = this.spriteArr.indexOf(e);
-1 !== n && this.spriteArr.splice(n, 1);
}
};
e._getSprite = function(e, t) {
this.checkInit();
cc.resources.load("i18n/sprite/" + this.language + "/" + e, cc.SpriteFrame, function(e, n) {
if (e) return t(null);
t(n);
});
};
e.reloadLabel = function() {
this.labelData = i.default[this.language];
};
e.reloadSprite = function() {
for (var e = 0, t = this.spriteArr; e < t.length; e++) t[e]._resetValue();
};
e.language = "";
e.labelArr = [];
e.labelData = {};
e.spriteArr = [];
return e;
}();
n.i18nMgr = o;
cc._RF.pop();
}, {
"./Lang": "Lang"
} ],
i18nSprite: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0ffbcbl89xEj5yYYH4SQgf+", "i18nSprite");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.i18nSprite = void 0;
var i = e("./i18nMgr"), o = cc._decorator, r = o.ccclass, s = o.property, a = o.executeInEditMode, c = o.disallowMultiple, l = o.requireComponent, u = o.menu, f = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.i18n_string = "";
return t;
}
t.prototype.start = function() {
i.i18nMgr._addOrDelSprite(this, !0);
this._resetValue();
};
Object.defineProperty(t.prototype, "string", {
get: function() {
return this.i18n_string;
},
set: function(e) {
this.i18n_string = e;
var t = this.getComponent(cc.Sprite);
cc.isValid(t) && i.i18nMgr._getSprite(e, function(e) {
cc.isValid(t) && (t.spriteFrame = e);
});
},
enumerable: !1,
configurable: !0
});
t.prototype._resetValue = function() {
this.string = this.i18n_string;
};
t.prototype.onDestroy = function() {
i.i18nMgr._addOrDelSprite(this, !1);
};
__decorate([ s({
visible: !1
}) ], t.prototype, "i18n_string", void 0);
__decorate([ s({
type: cc.String
}) ], t.prototype, "string", null);
return __decorate([ r, a, l(cc.Sprite), c, u("多语言/i18nSprite") ], t);
}(cc.Component);
n.i18nSprite = f;
cc._RF.pop();
}, {
"./i18nMgr": "i18nMgr"
} ],
keypadManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "d693eQSas5J5JPqhyHIJfR+", "keypadManager");
var n = {
mStack: [],
init: function() {
this.addEventListener();
},
add: function(e) {
this.mStack.push(e);
},
remove: function(e) {
this.mStack = this.mStack.filter(function(t) {
return t._id !== e._id;
});
},
onbackkeyup: function() {
var e = this.mStack[this.mStack.length - 1];
e && e.onbackpress && e.onbackpress();
},
addEventListener: function() {
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
},
onKeyEvent: function(e) {
var t = this.mStack[this.mStack.length - 1];
t && t.onKeyEvent && t.onKeyEvent(e);
},
onKeyUp: function(e) {
switch (e.keyCode) {
case cc.macro.KEY.a:
case cc.macro.KEY.back:
this.onbackkeyup();
break;

default:
this.onKeyEvent(e.keyCode);
}
},
onDestroy: function() {
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
}
};
n.init();
globalThis.keypadManager = n;
cc._RF.pop();
}, {} ],
myModule: [ function(e, t) {
"use strict";
cc._RF.push(t, "eda722xrlhBrYGYnvjB3NbU", "myModule");
var n = {
say: function(e) {
console.log("mymodule say==" + e);
}
};
window.myModule = n;
cc._RF.pop();
}, {} ],
popBaseView: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2967aDcdoVPhKybAm7KLDhF", "popBaseView");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = cc._decorator, o = i.ccclass, r = (i.property, function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.mChild = {};
return t;
}
t.prototype.onLoad = function() {
keypadManager.add(this);
};
t.prototype.onDestroy = function() {
keypadManager.remove(this);
};
t.prototype.start = function() {};
t.prototype.dismisssAnimation = function(e) {
var t = this;
void 0 === e && (e = "view_dismiss");
UITool.playAnimation(this.mChild.view, e, function() {
t.close();
});
};
t.prototype.close = function() {
this.node.destroy();
};
t.prototype.onbackpress = function() {
this.dismisssAnimation();
};
t.prototype.onKeyEvent = function(e) {
console.log("popBaseView onKeyEvent code:", e);
};
return __decorate([ o ], t);
}(e("./BaseComponent").default));
n.default = r;
cc._RF.pop();
}, {
"./BaseComponent": "BaseComponent"
} ],
popLayer: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "fdb1bLvlMlICLftxQWYnKr+", "popLayer");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = cc._decorator, o = i.ccclass, r = (i.property, function(e) {
__extends(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
UITool.getChildNode(this.mChild, this.node);
};
t.prototype.start = function() {
var e = this;
UITool.addBtnClick(this.mChild.btn_close, function() {
e.dismisssAnimation();
});
};
t.prototype.onbackpress = function() {
this.dismisssAnimation();
};
t.prototype.onKeyEvent = function(e) {
console.log("popLayer onKeyEvent code:", e);
};
return __decorate([ o ], t);
}(e("../../core/popBaseView").default));
n.default = r;
cc._RF.pop();
}, {
"../../core/popBaseView": "popBaseView"
} ],
protoTool: [ function(e, t) {
"use strict";
cc._RF.push(t, "a5a7dhmpzJFxIxkTCe+Jlm8", "protoTool");
var n = e("gameProto"), i = {
encode: function(e, t) {
var i = null;
if (CMD2PB[e]) {
for (var o = CMD2PB[e].pak.split("."), r = null, s = 0; s < o.length; s++) {
var a = o[s];
r = r ? r[a] : n[a];
}
i = r.create(t);
i = r.encode(i).finish();
}
return i;
},
decode: function(e, t) {
var i = null;
if (CMD2PB[e]) {
for (var o = CMD2PB[e].pak.split("."), r = null, s = 0; s < o.length; s++) {
var a = o[s];
r = r ? r[a] : n[a];
}
i = r.decode(new Uint8Array(t));
}
return i;
},
Uint8ArrayToString: function(e) {
for (var t = "", n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
return t;
},
stringToUint8Array: function(e) {
for (var t = [], n = 0, i = e.length; n < i; ++n) t.push(e.charCodeAt(n));
return new Uint8Array(t);
},
packData: function(e, t) {
var i = {
id: e,
data: t
}, o = n.tutorial.Package.create(i);
return n.tutorial.Package.encode(o).finish();
},
parseData: function(e) {
return n.tutorial.Package.decode(e);
}
};
globalThis.ProtoTool = i;
cc._RF.pop();
}, {
gameProto: "gameProto"
} ],
protobuf: [ function(require, module, exports) {
(function(global) {
"use strict";
cc._RF.push(module, "72605jjxnlP8bI9N7a0gxhM", "protobuf");
(function(undefined) {
(function(e, t) {
var n = function n(i) {
var o = t[i];
o || e[i][0].call(o = t[i] = {
exports: {}
}, n, o, o.exports);
return o.exports;
}(19);
n.util.global.protobuf = n;
"function" == typeof define && define.amd && define([ "long" ], function(e) {
if (e && e.isLong) {
n.util.Long = e;
n.configure();
}
return n;
});
"object" == typeof module && module && module.exports && (module.exports = n);
})({
1: [ function(e, t) {
t.exports = function(e, t) {
for (var n = new Array(arguments.length - 1), i = 0, o = 2, r = !0; o < arguments.length; ) n[i++] = arguments[o++];
return new Promise(function(o, s) {
n[i] = function(e) {
if (r) {
r = !1;
if (e) s(e); else {
for (var t = new Array(arguments.length - 1), n = 0; n < t.length; ) t[n++] = arguments[n];
o.apply(null, t);
}
}
};
try {
e.apply(t || null, n);
} catch (e) {
if (r) {
r = !1;
s(e);
}
}
});
};
}, {} ],
2: [ function(e, t, n) {
var i = n;
i.length = function(e) {
var t = e.length;
if (!t) return 0;
for (var n = 0; --t % 4 > 1 && "=" === e.charAt(t); ) ++n;
return Math.ceil(3 * e.length) / 4 - n;
};
for (var o = new Array(64), r = new Array(123), s = 0; s < 64; ) r[o[s] = s < 26 ? s + 65 : s < 52 ? s + 71 : s < 62 ? s - 4 : s - 59 | 43] = s++;
i.encode = function(e, t, n) {
for (var i, r = null, s = [], a = 0, c = 0; t < n; ) {
var l = e[t++];
switch (c) {
case 0:
s[a++] = o[l >> 2];
i = (3 & l) << 4;
c = 1;
break;

case 1:
s[a++] = o[i | l >> 4];
i = (15 & l) << 2;
c = 2;
break;

case 2:
s[a++] = o[i | l >> 6];
s[a++] = o[63 & l];
c = 0;
}
if (a > 8191) {
(r || (r = [])).push(String.fromCharCode.apply(String, s));
a = 0;
}
}
if (c) {
s[a++] = o[i];
s[a++] = 61;
1 === c && (s[a++] = 61);
}
if (r) {
a && r.push(String.fromCharCode.apply(String, s.slice(0, a)));
return r.join("");
}
return String.fromCharCode.apply(String, s.slice(0, a));
};
i.decode = function(e, t, n) {
for (var i, o = n, s = 0, a = 0; a < e.length; ) {
var c = e.charCodeAt(a++);
if (61 === c && s > 1) break;
if ((c = r[c]) === undefined) throw Error("invalid encoding");
switch (s) {
case 0:
i = c;
s = 1;
break;

case 1:
t[n++] = i << 2 | (48 & c) >> 4;
i = c;
s = 2;
break;

case 2:
t[n++] = (15 & i) << 4 | (60 & c) >> 2;
i = c;
s = 3;
break;

case 3:
t[n++] = (3 & i) << 6 | c;
s = 0;
}
}
if (1 === s) throw Error("invalid encoding");
return n - o;
};
i.test = function(e) {
return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);
};
}, {} ],
3: [ function(e, t) {
t.exports = n;
function n(e, t) {
if ("string" == typeof e) {
t = e;
e = undefined;
}
var i = [];
function o(e) {
if ("string" != typeof e) {
var t = r();
n.verbose && console.log("codegen: " + t);
t = "return " + t;
if (e) {
for (var s = Object.keys(e), a = new Array(s.length + 1), c = new Array(s.length), l = 0; l < s.length; ) {
a[l] = s[l];
c[l] = e[s[l++]];
}
a[l] = t;
return Function.apply(null, a).apply(null, c);
}
return Function(t)();
}
for (var u = new Array(arguments.length - 1), f = 0; f < u.length; ) u[f] = arguments[++f];
f = 0;
e = e.replace(/%([%dfijs])/g, function(e, t) {
var n = u[f++];
switch (t) {
case "d":
case "f":
return String(Number(n));

case "i":
return String(Math.floor(n));

case "j":
return JSON.stringify(n);

case "s":
return String(n);
}
return "%";
});
if (f !== u.length) throw Error("parameter count mismatch");
i.push(e);
return o;
}
function r(n) {
return "function " + (n || t || "") + "(" + (e && e.join(",") || "") + "){\n  " + i.join("\n  ") + "\n}";
}
o.toString = r;
return o;
}
n.verbose = !1;
}, {} ],
4: [ function(e, t) {
t.exports = n;
function n() {
this._listeners = {};
}
n.prototype.on = function(e, t, n) {
(this._listeners[e] || (this._listeners[e] = [])).push({
fn: t,
ctx: n || this
});
return this;
};
n.prototype.off = function(e, t) {
if (e === undefined) this._listeners = {}; else if (t === undefined) this._listeners[e] = []; else for (var n = this._listeners[e], i = 0; i < n.length; ) n[i].fn === t ? n.splice(i, 1) : ++i;
return this;
};
n.prototype.emit = function(e) {
var t = this._listeners[e];
if (t) {
for (var n = [], i = 1; i < arguments.length; ) n.push(arguments[i++]);
for (i = 0; i < t.length; ) t[i].fn.apply(t[i++].ctx, n);
}
return this;
};
}, {} ],
5: [ function(e, t) {
t.exports = o;
var n = e(1), i = e(7)("fs");
function o(e, t, r) {
if ("function" == typeof t) {
r = t;
t = {};
} else t || (t = {});
return r ? !t.xhr && i && i.readFile ? i.readFile(e, function(n, i) {
return n && "undefined" != typeof XMLHttpRequest ? o.xhr(e, t, r) : n ? r(n) : r(null, t.binary ? i : i.toString("utf8"));
}) : o.xhr(e, t, r) : n(o, this, e, t);
}
o.xhr = function(e, t, n) {
var i = new XMLHttpRequest();
i.onreadystatechange = function() {
if (4 !== i.readyState) return undefined;
if (0 !== i.status && 200 !== i.status) return n(Error("status " + i.status));
if (t.binary) {
var e = i.response;
if (!e) {
e = [];
for (var o = 0; o < i.responseText.length; ++o) e.push(255 & i.responseText.charCodeAt(o));
}
return n(null, "undefined" != typeof Uint8Array ? new Uint8Array(e) : e);
}
return n(null, i.responseText);
};
if (t.binary) {
"overrideMimeType" in i && i.overrideMimeType("text/plain; charset=x-user-defined");
i.responseType = "arraybuffer";
}
i.open("GET", e);
i.send();
};
}, {
1: 1,
7: 7
} ],
6: [ function(e, t) {
t.exports = n(n);
function n(e) {
"undefined" != typeof Float32Array ? function() {
var t = new Float32Array([ -0 ]), n = new Uint8Array(t.buffer), i = 128 === n[3];
function o(e, i, o) {
t[0] = e;
i[o] = n[0];
i[o + 1] = n[1];
i[o + 2] = n[2];
i[o + 3] = n[3];
}
function r(e, i, o) {
t[0] = e;
i[o] = n[3];
i[o + 1] = n[2];
i[o + 2] = n[1];
i[o + 3] = n[0];
}
e.writeFloatLE = i ? o : r;
e.writeFloatBE = i ? r : o;
function s(e, i) {
n[0] = e[i];
n[1] = e[i + 1];
n[2] = e[i + 2];
n[3] = e[i + 3];
return t[0];
}
function a(e, i) {
n[3] = e[i];
n[2] = e[i + 1];
n[1] = e[i + 2];
n[0] = e[i + 3];
return t[0];
}
e.readFloatLE = i ? s : a;
e.readFloatBE = i ? a : s;
}() : function() {
function t(e, t, n, i) {
var o = t < 0 ? 1 : 0;
o && (t = -t);
if (0 === t) e(1 / t > 0 ? 0 : 2147483648, n, i); else if (isNaN(t)) e(2143289344, n, i); else if (t > 34028234663852886e22) e((o << 31 | 2139095040) >>> 0, n, i); else if (t < 11754943508222875e-54) e((o << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, n, i); else {
var r = Math.floor(Math.log(t) / Math.LN2);
e((o << 31 | r + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -r) * 8388608)) >>> 0, n, i);
}
}
e.writeFloatLE = t.bind(null, i);
e.writeFloatBE = t.bind(null, o);
function n(e, t, n) {
var i = e(t, n), o = 2 * (i >> 31) + 1, r = i >>> 23 & 255, s = 8388607 & i;
return 255 === r ? s ? NaN : Infinity * o : 0 === r ? 1401298464324817e-60 * o * s : o * Math.pow(2, r - 150) * (s + 8388608);
}
e.readFloatLE = n.bind(null, r);
e.readFloatBE = n.bind(null, s);
}();
"undefined" != typeof Float64Array ? function() {
var t = new Float64Array([ -0 ]), n = new Uint8Array(t.buffer), i = 128 === n[7];
function o(e, i, o) {
t[0] = e;
i[o] = n[0];
i[o + 1] = n[1];
i[o + 2] = n[2];
i[o + 3] = n[3];
i[o + 4] = n[4];
i[o + 5] = n[5];
i[o + 6] = n[6];
i[o + 7] = n[7];
}
function r(e, i, o) {
t[0] = e;
i[o] = n[7];
i[o + 1] = n[6];
i[o + 2] = n[5];
i[o + 3] = n[4];
i[o + 4] = n[3];
i[o + 5] = n[2];
i[o + 6] = n[1];
i[o + 7] = n[0];
}
e.writeDoubleLE = i ? o : r;
e.writeDoubleBE = i ? r : o;
function s(e, i) {
n[0] = e[i];
n[1] = e[i + 1];
n[2] = e[i + 2];
n[3] = e[i + 3];
n[4] = e[i + 4];
n[5] = e[i + 5];
n[6] = e[i + 6];
n[7] = e[i + 7];
return t[0];
}
function a(e, i) {
n[7] = e[i];
n[6] = e[i + 1];
n[5] = e[i + 2];
n[4] = e[i + 3];
n[3] = e[i + 4];
n[2] = e[i + 5];
n[1] = e[i + 6];
n[0] = e[i + 7];
return t[0];
}
e.readDoubleLE = i ? s : a;
e.readDoubleBE = i ? a : s;
}() : function() {
function t(e, t, n, i, o, r) {
var s = i < 0 ? 1 : 0;
s && (i = -i);
if (0 === i) {
e(0, o, r + t);
e(1 / i > 0 ? 0 : 2147483648, o, r + n);
} else if (isNaN(i)) {
e(0, o, r + t);
e(2146959360, o, r + n);
} else if (i > 17976931348623157e292) {
e(0, o, r + t);
e((s << 31 | 2146435072) >>> 0, o, r + n);
} else {
var a;
if (i < 22250738585072014e-324) {
e((a = i / 5e-324) >>> 0, o, r + t);
e((s << 31 | a / 4294967296) >>> 0, o, r + n);
} else {
var c = Math.floor(Math.log(i) / Math.LN2);
1024 === c && (c = 1023);
e(4503599627370496 * (a = i * Math.pow(2, -c)) >>> 0, o, r + t);
e((s << 31 | c + 1023 << 20 | 1048576 * a & 1048575) >>> 0, o, r + n);
}
}
}
e.writeDoubleLE = t.bind(null, i, 0, 4);
e.writeDoubleBE = t.bind(null, o, 4, 0);
function n(e, t, n, i, o) {
var r = e(i, o + t), s = e(i, o + n), a = 2 * (s >> 31) + 1, c = s >>> 20 & 2047, l = 4294967296 * (1048575 & s) + r;
return 2047 === c ? l ? NaN : Infinity * a : 0 === c ? 5e-324 * a * l : a * Math.pow(2, c - 1075) * (l + 4503599627370496);
}
e.readDoubleLE = n.bind(null, r, 0, 4);
e.readDoubleBE = n.bind(null, s, 4, 0);
}();
return e;
}
function i(e, t, n) {
t[n] = 255 & e;
t[n + 1] = e >>> 8 & 255;
t[n + 2] = e >>> 16 & 255;
t[n + 3] = e >>> 24;
}
function o(e, t, n) {
t[n] = e >>> 24;
t[n + 1] = e >>> 16 & 255;
t[n + 2] = e >>> 8 & 255;
t[n + 3] = 255 & e;
}
function r(e, t) {
return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
}
function s(e, t) {
return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
}
}, {} ],
7: [ function(require, module, exports) {
module.exports = inquire;
function inquire(moduleName) {
try {
var mod = eval("quire".replace(/^/, "re"))(moduleName);
if (mod && (mod.length || Object.keys(mod).length)) return mod;
} catch (e) {}
return null;
}
}, {} ],
8: [ function(e, t, n) {
var i = n, o = i.isAbsolute = function(e) {
return /^(?:\/|\w+:)/.test(e);
}, r = i.normalize = function(e) {
var t = (e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"), n = o(e), i = "";
n && (i = t.shift() + "/");
for (var r = 0; r < t.length; ) ".." === t[r] ? r > 0 && ".." !== t[r - 1] ? t.splice(--r, 2) : n ? t.splice(r, 1) : ++r : "." === t[r] ? t.splice(r, 1) : ++r;
return i + t.join("/");
};
i.resolve = function(e, t, n) {
n || (t = r(t));
if (o(t)) return t;
n || (e = r(e));
return (e = e.replace(/(?:\/|^)[^/]+$/, "")).length ? r(e + "/" + t) : t;
};
}, {} ],
9: [ function(e, t) {
t.exports = function(e, t, n) {
var i = n || 8192, o = i >>> 1, r = null, s = i;
return function(n) {
if (n < 1 || n > o) return e(n);
if (s + n > i) {
r = e(i);
s = 0;
}
var a = t.call(r, s, s += n);
7 & s && (s = 1 + (7 | s));
return a;
};
};
}, {} ],
10: [ function(e, t, n) {
var i = n;
i.length = function(e) {
for (var t = 0, n = 0, i = 0; i < e.length; ++i) if ((n = e.charCodeAt(i)) < 128) t += 1; else if (n < 2048) t += 2; else if (55296 == (64512 & n) && 56320 == (64512 & e.charCodeAt(i + 1))) {
++i;
t += 4;
} else t += 3;
return t;
};
i.read = function(e, t, n) {
if (n - t < 1) return "";
for (var i, o = null, r = [], s = 0; t < n; ) {
if ((i = e[t++]) < 128) r[s++] = i; else if (i > 191 && i < 224) r[s++] = (31 & i) << 6 | 63 & e[t++]; else if (i > 239 && i < 365) {
i = ((7 & i) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536;
r[s++] = 55296 + (i >> 10);
r[s++] = 56320 + (1023 & i);
} else r[s++] = (15 & i) << 12 | (63 & e[t++]) << 6 | 63 & e[t++];
if (s > 8191) {
(o || (o = [])).push(String.fromCharCode.apply(String, r));
s = 0;
}
}
if (o) {
s && o.push(String.fromCharCode.apply(String, r.slice(0, s)));
return o.join("");
}
return String.fromCharCode.apply(String, r.slice(0, s));
};
i.write = function(e, t, n) {
for (var i, o, r = n, s = 0; s < e.length; ++s) if ((i = e.charCodeAt(s)) < 128) t[n++] = i; else if (i < 2048) {
t[n++] = i >> 6 | 192;
t[n++] = 63 & i | 128;
} else if (55296 == (64512 & i) && 56320 == (64512 & (o = e.charCodeAt(s + 1)))) {
i = 65536 + ((1023 & i) << 10) + (1023 & o);
++s;
t[n++] = i >> 18 | 240;
t[n++] = i >> 12 & 63 | 128;
t[n++] = i >> 6 & 63 | 128;
t[n++] = 63 & i | 128;
} else {
t[n++] = i >> 12 | 224;
t[n++] = i >> 6 & 63 | 128;
t[n++] = 63 & i | 128;
}
return n - r;
};
}, {} ],
11: [ function(e, t) {
t.exports = o;
var n, i = /\/|\./;
function o(e, t) {
if (!i.test(e)) {
e = "google/protobuf/" + e + ".proto";
t = {
nested: {
google: {
nested: {
protobuf: {
nested: t
}
}
}
}
};
}
o[e] = t;
}
o("any", {
Any: {
fields: {
type_url: {
type: "string",
id: 1
},
value: {
type: "bytes",
id: 2
}
}
}
});
o("duration", {
Duration: n = {
fields: {
seconds: {
type: "int64",
id: 1
},
nanos: {
type: "int32",
id: 2
}
}
}
});
o("timestamp", {
Timestamp: n
});
o("empty", {
Empty: {
fields: {}
}
});
o("struct", {
Struct: {
fields: {
fields: {
keyType: "string",
type: "Value",
id: 1
}
}
},
Value: {
oneofs: {
kind: {
oneof: [ "nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue" ]
}
},
fields: {
nullValue: {
type: "NullValue",
id: 1
},
numberValue: {
type: "double",
id: 2
},
stringValue: {
type: "string",
id: 3
},
boolValue: {
type: "bool",
id: 4
},
structValue: {
type: "Struct",
id: 5
},
listValue: {
type: "ListValue",
id: 6
}
}
},
NullValue: {
values: {
NULL_VALUE: 0
}
},
ListValue: {
fields: {
values: {
rule: "repeated",
type: "Value",
id: 1
}
}
}
});
o("wrappers", {
DoubleValue: {
fields: {
value: {
type: "double",
id: 1
}
}
},
FloatValue: {
fields: {
value: {
type: "float",
id: 1
}
}
},
Int64Value: {
fields: {
value: {
type: "int64",
id: 1
}
}
},
UInt64Value: {
fields: {
value: {
type: "uint64",
id: 1
}
}
},
Int32Value: {
fields: {
value: {
type: "int32",
id: 1
}
}
},
UInt32Value: {
fields: {
value: {
type: "uint32",
id: 1
}
}
},
BoolValue: {
fields: {
value: {
type: "bool",
id: 1
}
}
},
StringValue: {
fields: {
value: {
type: "string",
id: 1
}
}
},
BytesValue: {
fields: {
value: {
type: "bytes",
id: 1
}
}
}
});
o("field_mask", {
FieldMask: {
fields: {
paths: {
rule: "repeated",
type: "string",
id: 1
}
}
}
});
o.get = function(e) {
return o[e] || null;
};
}, {} ],
12: [ function(e, t, n) {
var i = n, o = e(15), r = e(37);
function s(e, t, n, i) {
if (t.resolvedType) if (t.resolvedType instanceof o) {
e("switch(d%s){", i);
for (var r = t.resolvedType.values, s = Object.keys(r), a = 0; a < s.length; ++a) {
t.repeated && r[s[a]] === t.typeDefault && e("default:");
e("case%j:", s[a])("case %i:", r[s[a]])("m%s=%j", i, r[s[a]])("break");
}
e("}");
} else e('if(typeof d%s!=="object")', i)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", i, n, i); else {
var c = !1;
switch (t.type) {
case "double":
case "float":
e("m%s=Number(d%s)", i, i);
break;

case "uint32":
case "fixed32":
e("m%s=d%s>>>0", i, i);
break;

case "int32":
case "sint32":
case "sfixed32":
e("m%s=d%s|0", i, i);
break;

case "uint64":
c = !0;

case "int64":
case "sint64":
case "fixed64":
case "sfixed64":
e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", i, i, c)('else if(typeof d%s==="string")', i)("m%s=parseInt(d%s,10)", i, i)('else if(typeof d%s==="number")', i)("m%s=d%s", i, i)('else if(typeof d%s==="object")', i)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", i, i, i, c ? "true" : "");
break;

case "bytes":
e('if(typeof d%s==="string")', i)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", i, i, i)("else if(d%s.length)", i)("m%s=d%s", i, i);
break;

case "string":
e("m%s=String(d%s)", i, i);
break;

case "bool":
e("m%s=Boolean(d%s)", i, i);
}
}
return e;
}
i.fromObject = function(e) {
var t = e.fieldsArray, n = r.codegen([ "d" ], e.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
if (!t.length) return n("return new this.ctor");
n("var m=new this.ctor");
for (var i = 0; i < t.length; ++i) {
var a = t[i].resolve(), c = r.safeProp(a.name);
if (a.map) {
n("if(d%s){", c)('if(typeof d%s!=="object")', c)("throw TypeError(%j)", a.fullName + ": object expected")("m%s={}", c)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", c);
s(n, a, i, c + "[ks[i]]")("}")("}");
} else if (a.repeated) {
n("if(d%s){", c)("if(!Array.isArray(d%s))", c)("throw TypeError(%j)", a.fullName + ": array expected")("m%s=[]", c)("for(var i=0;i<d%s.length;++i){", c);
s(n, a, i, c + "[i]")("}")("}");
} else {
a.resolvedType instanceof o || n("if(d%s!=null){", c);
s(n, a, i, c);
a.resolvedType instanceof o || n("}");
}
}
return n("return m");
};
function a(e, t, n, i) {
if (t.resolvedType) t.resolvedType instanceof o ? e("d%s=o.enums===String?types[%i].values[m%s]:m%s", i, n, i, i) : e("d%s=types[%i].toObject(m%s,o)", i, n, i); else {
var r = !1;
switch (t.type) {
case "double":
case "float":
e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", i, i, i, i);
break;

case "uint64":
r = !0;

case "int64":
case "sint64":
case "fixed64":
case "sfixed64":
e('if(typeof m%s==="number")', i)("d%s=o.longs===String?String(m%s):m%s", i, i, i)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", i, i, i, i, r ? "true" : "", i);
break;

case "bytes":
e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", i, i, i, i, i);
break;

default:
e("d%s=m%s", i, i);
}
}
return e;
}
i.toObject = function(e) {
var t = e.fieldsArray.slice().sort(r.compareFieldsById);
if (!t.length) return r.codegen()("return {}");
for (var n = r.codegen([ "m", "o" ], e.name + "$toObject")("if(!o)")("o={}")("var d={}"), i = [], s = [], c = [], l = 0; l < t.length; ++l) t[l].partOf || (t[l].resolve().repeated ? i : t[l].map ? s : c).push(t[l]);
if (i.length) {
n("if(o.arrays||o.defaults){");
for (l = 0; l < i.length; ++l) n("d%s=[]", r.safeProp(i[l].name));
n("}");
}
if (s.length) {
n("if(o.objects||o.defaults){");
for (l = 0; l < s.length; ++l) n("d%s={}", r.safeProp(s[l].name));
n("}");
}
if (c.length) {
n("if(o.defaults){");
for (l = 0; l < c.length; ++l) {
var u = c[l], f = r.safeProp(u.name);
if (u.resolvedType instanceof o) n("d%s=o.enums===String?%j:%j", f, u.resolvedType.valuesById[u.typeDefault], u.typeDefault); else if (u.long) n("if(util.Long){")("var n=new util.Long(%i,%i,%j)", u.typeDefault.low, u.typeDefault.high, u.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", f)("}else")("d%s=o.longs===String?%j:%i", f, u.typeDefault.toString(), u.typeDefault.toNumber()); else if (u.bytes) {
var d = "[" + Array.prototype.slice.call(u.typeDefault).join(",") + "]";
n("if(o.bytes===String)d%s=%j", f, String.fromCharCode.apply(String, u.typeDefault))("else{")("d%s=%s", f, d)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", f, f)("}");
} else n("d%s=%j", f, u.typeDefault);
}
n("}");
}
var h = !1;
for (l = 0; l < t.length; ++l) {
u = t[l];
var p = e._fieldsArray.indexOf(u);
f = r.safeProp(u.name);
if (u.map) {
if (!h) {
h = !0;
n("var ks2");
}
n("if(m%s&&(ks2=Object.keys(m%s)).length){", f, f)("d%s={}", f)("for(var j=0;j<ks2.length;++j){");
a(n, u, p, f + "[ks2[j]]")("}");
} else if (u.repeated) {
n("if(m%s&&m%s.length){", f, f)("d%s=[]", f)("for(var j=0;j<m%s.length;++j){", f);
a(n, u, p, f + "[j]")("}");
} else {
n("if(m%s!=null&&m.hasOwnProperty(%j)){", f, u.name);
a(n, u, p, f);
u.partOf && n("if(o.oneofs)")("d%s=%j", r.safeProp(u.partOf.name), u.name);
}
n("}");
}
return n("return d");
};
}, {
15: 15,
37: 37
} ],
13: [ function(e, t) {
t.exports = function(e) {
var t = o.codegen([ "r", "l" ], e.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (e.fieldsArray.filter(function(e) {
return e.map;
}).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
e.group && t("if((t&7)===4)")("break");
t("switch(t>>>3){");
for (var s = 0; s < e.fieldsArray.length; ++s) {
var a = e._fieldsArray[s].resolve(), c = a.resolvedType instanceof n ? "int32" : a.type, l = "m" + o.safeProp(a.name);
t("case %i:", a.id);
if (a.map) {
t("if(%s===util.emptyObject)", l)("%s={}", l)("var c2 = r.uint32()+r.pos");
i.defaults[a.keyType] !== undefined ? t("k=%j", i.defaults[a.keyType]) : t("k=null");
i.defaults[c] !== undefined ? t("value=%j", i.defaults[c]) : t("value=null");
t("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", a.keyType)("case 2:");
i.basic[c] === undefined ? t("value=types[%i].decode(r,r.uint32())", s) : t("value=r.%s()", c);
t("break")("default:")("r.skipType(tag2&7)")("break")("}")("}");
i.long[a.keyType] !== undefined ? t('%s[typeof k==="object"?util.longToHash(k):k]=value', l) : t("%s[k]=value", l);
} else if (a.repeated) {
t("if(!(%s&&%s.length))", l, l)("%s=[]", l);
i.packed[c] !== undefined && t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", l, c)("}else");
i.basic[c] === undefined ? t(a.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", l, s) : t("%s.push(r.%s())", l, c);
} else i.basic[c] === undefined ? t(a.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", l, s) : t("%s=r.%s()", l, c);
t("break");
}
t("default:")("r.skipType(t&7)")("break")("}")("}");
for (s = 0; s < e._fieldsArray.length; ++s) {
var u = e._fieldsArray[s];
u.required && t("if(!m.hasOwnProperty(%j))", u.name)("throw util.ProtocolError(%j,{instance:m})", r(u));
}
return t("return m");
};
var n = e(15), i = e(36), o = e(37);
function r(e) {
return "missing required '" + e.name + "'";
}
}, {
15: 15,
36: 36,
37: 37
} ],
14: [ function(e, t) {
t.exports = function(e) {
for (var t, s = o.codegen([ "m", "w" ], e.name + "$encode")("if(!w)")("w=Writer.create()"), a = e.fieldsArray.slice().sort(o.compareFieldsById), c = 0; c < a.length; ++c) {
var l = a[c].resolve(), u = e._fieldsArray.indexOf(l), f = l.resolvedType instanceof n ? "int32" : l.type, d = i.basic[f];
t = "m" + o.safeProp(l.name);
if (l.map) {
s("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", t, l.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (l.id << 3 | 2) >>> 0, 8 | i.mapKey[l.keyType], l.keyType);
d === undefined ? s("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", u, t) : s(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | d, f, t);
s("}")("}");
} else if (l.repeated) {
s("if(%s!=null&&%s.length){", t, t);
if (l.packed && i.packed[f] !== undefined) s("w.uint32(%i).fork()", (l.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", t)("w.%s(%s[i])", f, t)("w.ldelim()"); else {
s("for(var i=0;i<%s.length;++i)", t);
d === undefined ? r(s, l, u, t + "[i]") : s("w.uint32(%i).%s(%s[i])", (l.id << 3 | d) >>> 0, f, t);
}
s("}");
} else {
l.optional && s("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", t, l.name);
d === undefined ? r(s, l, u, t) : s("w.uint32(%i).%s(%s)", (l.id << 3 | d) >>> 0, f, t);
}
}
return s("return w");
};
var n = e(15), i = e(36), o = e(37);
function r(e, t, n, i) {
return t.resolvedType.group ? e("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", n, i, (t.id << 3 | 3) >>> 0, (t.id << 3 | 4) >>> 0) : e("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", n, i, (t.id << 3 | 2) >>> 0);
}
}, {
15: 15,
36: 36,
37: 37
} ],
15: [ function(e, t) {
t.exports = r;
var n = e(24);
((r.prototype = Object.create(n.prototype)).constructor = r).className = "Enum";
var i = e(23), o = e(37);
function r(e, t, i, o, r) {
n.call(this, e, i);
if (t && "object" != typeof t) throw TypeError("values must be an object");
this.valuesById = {};
this.values = Object.create(this.valuesById);
this.comment = o;
this.comments = r || {};
this.reserved = undefined;
if (t) for (var s = Object.keys(t), a = 0; a < s.length; ++a) "number" == typeof t[s[a]] && (this.valuesById[this.values[s[a]] = t[s[a]]] = s[a]);
}
r.fromJSON = function(e, t) {
var n = new r(e, t.values, t.options, t.comment, t.comments);
n.reserved = t.reserved;
return n;
};
r.prototype.toJSON = function(e) {
var t = !!e && Boolean(e.keepComments);
return o.toObject([ "options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", t ? this.comment : undefined, "comments", t ? this.comments : undefined ]);
};
r.prototype.add = function(e, t, n) {
if (!o.isString(e)) throw TypeError("name must be a string");
if (!o.isInteger(t)) throw TypeError("id must be an integer");
if (this.values[e] !== undefined) throw Error("duplicate name '" + e + "' in " + this);
if (this.isReservedId(t)) throw Error("id " + t + " is reserved in " + this);
if (this.isReservedName(e)) throw Error("name '" + e + "' is reserved in " + this);
if (this.valuesById[t] !== undefined) {
if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + t + " in " + this);
this.values[e] = t;
} else this.valuesById[this.values[e] = t] = e;
this.comments[e] = n || null;
return this;
};
r.prototype.remove = function(e) {
if (!o.isString(e)) throw TypeError("name must be a string");
var t = this.values[e];
if (null == t) throw Error("name '" + e + "' does not exist in " + this);
delete this.valuesById[t];
delete this.values[e];
delete this.comments[e];
return this;
};
r.prototype.isReservedId = function(e) {
return i.isReservedId(this.reserved, e);
};
r.prototype.isReservedName = function(e) {
return i.isReservedName(this.reserved, e);
};
}, {
23: 23,
24: 24,
37: 37
} ],
16: [ function(e, t) {
t.exports = c;
var n = e(24);
((c.prototype = Object.create(n.prototype)).constructor = c).className = "Field";
var i, o = e(15), r = e(36), s = e(37), a = /^required|optional|repeated$/;
c.fromJSON = function(e, t) {
return new c(e, t.id, t.type, t.rule, t.extend, t.options, t.comment);
};
function c(e, t, i, o, c, l, u) {
if (s.isObject(o)) {
u = c;
l = o;
o = c = undefined;
} else if (s.isObject(c)) {
u = l;
l = c;
c = undefined;
}
n.call(this, e, l);
if (!s.isInteger(t) || t < 0) throw TypeError("id must be a non-negative integer");
if (!s.isString(i)) throw TypeError("type must be a string");
if (o !== undefined && !a.test(o = o.toString().toLowerCase())) throw TypeError("rule must be a string rule");
if (c !== undefined && !s.isString(c)) throw TypeError("extend must be a string");
"proto3_optional" === o && (o = "optional");
this.rule = o && "optional" !== o ? o : undefined;
this.type = i;
this.id = t;
this.extend = c || undefined;
this.required = "required" === o;
this.optional = !this.required;
this.repeated = "repeated" === o;
this.map = !1;
this.message = null;
this.partOf = null;
this.typeDefault = null;
this.defaultValue = null;
this.long = !!s.Long && r.long[i] !== undefined;
this.bytes = "bytes" === i;
this.resolvedType = null;
this.extensionField = null;
this.declaringField = null;
this._packed = null;
this.comment = u;
}
Object.defineProperty(c.prototype, "packed", {
get: function() {
null === this._packed && (this._packed = !1 !== this.getOption("packed"));
return this._packed;
}
});
c.prototype.setOption = function(e, t, i) {
"packed" === e && (this._packed = null);
return n.prototype.setOption.call(this, e, t, i);
};
c.prototype.toJSON = function(e) {
var t = !!e && Boolean(e.keepComments);
return s.toObject([ "rule", "optional" !== this.rule && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined ]);
};
c.prototype.resolve = function() {
if (this.resolved) return this;
if ((this.typeDefault = r.defaults[this.type]) === undefined) {
this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
this.resolvedType instanceof i ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
}
if (this.options && null != this.options.default) {
this.typeDefault = this.options.default;
this.resolvedType instanceof o && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault]);
}
if (this.options) {
!0 !== this.options.packed && (this.options.packed === undefined || !this.resolvedType || this.resolvedType instanceof o) || delete this.options.packed;
Object.keys(this.options).length || (this.options = undefined);
}
if (this.long) {
this.typeDefault = s.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0));
Object.freeze && Object.freeze(this.typeDefault);
} else if (this.bytes && "string" == typeof this.typeDefault) {
var e;
s.base64.test(this.typeDefault) ? s.base64.decode(this.typeDefault, e = s.newBuffer(s.base64.length(this.typeDefault)), 0) : s.utf8.write(this.typeDefault, e = s.newBuffer(s.utf8.length(this.typeDefault)), 0);
this.typeDefault = e;
}
this.map ? this.defaultValue = s.emptyObject : this.repeated ? this.defaultValue = s.emptyArray : this.defaultValue = this.typeDefault;
this.parent instanceof i && (this.parent.ctor.prototype[this.name] = this.defaultValue);
return n.prototype.resolve.call(this);
};
c.d = function(e, t, n, i) {
"function" == typeof t ? t = s.decorateType(t).name : t && "object" == typeof t && (t = s.decorateEnum(t).name);
return function(o, r) {
s.decorateType(o.constructor).add(new c(r, e, t, n, {
default: i
}));
};
};
c._configure = function(e) {
i = e;
};
}, {
15: 15,
24: 24,
36: 36,
37: 37
} ],
17: [ function(e, t) {
var n = t.exports = e(18);
n.build = "light";
n.load = function(e, t, i) {
if ("function" == typeof t) {
i = t;
t = new n.Root();
} else t || (t = new n.Root());
return t.load(e, i);
};
n.loadSync = function(e, t) {
t || (t = new n.Root());
return t.loadSync(e);
};
n.encoder = e(14);
n.decoder = e(13);
n.verifier = e(40);
n.converter = e(12);
n.ReflectionObject = e(24);
n.Namespace = e(23);
n.Root = e(29);
n.Enum = e(15);
n.Type = e(35);
n.Field = e(16);
n.OneOf = e(25);
n.MapField = e(20);
n.Service = e(33);
n.Method = e(22);
n.Message = e(21);
n.wrappers = e(41);
n.types = e(36);
n.util = e(37);
n.ReflectionObject._configure(n.Root);
n.Namespace._configure(n.Type, n.Service, n.Enum);
n.Root._configure(n.Type);
n.Field._configure(n.Type);
}, {
12: 12,
13: 13,
14: 14,
15: 15,
16: 16,
18: 18,
20: 20,
21: 21,
22: 22,
23: 23,
24: 24,
25: 25,
29: 29,
33: 33,
35: 35,
36: 36,
37: 37,
40: 40,
41: 41
} ],
18: [ function(e, t, n) {
var i = n;
i.build = "minimal";
i.Writer = e(42);
i.BufferWriter = e(43);
i.Reader = e(27);
i.BufferReader = e(28);
i.util = e(39);
i.rpc = e(31);
i.roots = e(30);
i.configure = o;
function o() {
i.util._configure();
i.Writer._configure(i.BufferWriter);
i.Reader._configure(i.BufferReader);
}
o();
}, {
27: 27,
28: 28,
30: 30,
31: 31,
39: 39,
42: 42,
43: 43
} ],
19: [ function(e, t) {
var n = t.exports = e(17);
n.build = "full";
n.tokenize = e(34);
n.parse = e(26);
n.common = e(11);
n.Root._configure(n.Type, n.parse, n.common);
}, {
11: 11,
17: 17,
26: 26,
34: 34
} ],
20: [ function(e, t) {
t.exports = r;
var n = e(16);
((r.prototype = Object.create(n.prototype)).constructor = r).className = "MapField";
var i = e(36), o = e(37);
function r(e, t, i, r, s, a) {
n.call(this, e, t, r, undefined, undefined, s, a);
if (!o.isString(i)) throw TypeError("keyType must be a string");
this.keyType = i;
this.resolvedKeyType = null;
this.map = !0;
}
r.fromJSON = function(e, t) {
return new r(e, t.id, t.keyType, t.type, t.options, t.comment);
};
r.prototype.toJSON = function(e) {
var t = !!e && Boolean(e.keepComments);
return o.toObject([ "keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined ]);
};
r.prototype.resolve = function() {
if (this.resolved) return this;
if (i.mapKey[this.keyType] === undefined) throw Error("invalid key type: " + this.keyType);
return n.prototype.resolve.call(this);
};
r.d = function(e, t, n) {
"function" == typeof n ? n = o.decorateType(n).name : n && "object" == typeof n && (n = o.decorateEnum(n).name);
return function(i, s) {
o.decorateType(i.constructor).add(new r(s, e, t, n));
};
};
}, {
16: 16,
36: 36,
37: 37
} ],
21: [ function(e, t) {
t.exports = i;
var n = e(39);
function i(e) {
if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) this[t[n]] = e[t[n]];
}
i.create = function(e) {
return this.$type.create(e);
};
i.encode = function(e, t) {
return this.$type.encode(e, t);
};
i.encodeDelimited = function(e, t) {
return this.$type.encodeDelimited(e, t);
};
i.decode = function(e) {
return this.$type.decode(e);
};
i.decodeDelimited = function(e) {
return this.$type.decodeDelimited(e);
};
i.verify = function(e) {
return this.$type.verify(e);
};
i.fromObject = function(e) {
return this.$type.fromObject(e);
};
i.toObject = function(e, t) {
return this.$type.toObject(e, t);
};
i.prototype.toJSON = function() {
return this.$type.toObject(this, n.toJSONOptions);
};
}, {
39: 39
} ],
22: [ function(e, t) {
t.exports = o;
var n = e(24);
((o.prototype = Object.create(n.prototype)).constructor = o).className = "Method";
var i = e(37);
function o(e, t, o, r, s, a, c, l, u) {
if (i.isObject(s)) {
c = s;
s = a = undefined;
} else if (i.isObject(a)) {
c = a;
a = undefined;
}
if (t !== undefined && !i.isString(t)) throw TypeError("type must be a string");
if (!i.isString(o)) throw TypeError("requestType must be a string");
if (!i.isString(r)) throw TypeError("responseType must be a string");
n.call(this, e, c);
this.type = t || "rpc";
this.requestType = o;
this.requestStream = !!s || undefined;
this.responseType = r;
this.responseStream = !!a || undefined;
this.resolvedRequestType = null;
this.resolvedResponseType = null;
this.comment = l;
this.parsedOptions = u;
}
o.fromJSON = function(e, t) {
return new o(e, t.type, t.requestType, t.responseType, t.requestStream, t.responseStream, t.options, t.comment, t.parsedOptions);
};
o.prototype.toJSON = function(e) {
var t = !!e && Boolean(e.keepComments);
return i.toObject([ "type", "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t ? this.comment : undefined, "parsedOptions", this.parsedOptions ]);
};
o.prototype.resolve = function() {
if (this.resolved) return this;
this.resolvedRequestType = this.parent.lookupType(this.requestType);
this.resolvedResponseType = this.parent.lookupType(this.responseType);
return n.prototype.resolve.call(this);
};
}, {
24: 24,
37: 37
} ],
23: [ function(e, t) {
t.exports = l;
var n = e(24);
((l.prototype = Object.create(n.prototype)).constructor = l).className = "Namespace";
var i, o, r, s = e(16), a = e(37);
l.fromJSON = function(e, t) {
return new l(e, t.options).addJSON(t.nested);
};
function c(e, t) {
if (!e || !e.length) return undefined;
for (var n = {}, i = 0; i < e.length; ++i) n[e[i].name] = e[i].toJSON(t);
return n;
}
l.arrayToJSON = c;
l.isReservedId = function(e, t) {
if (e) for (var n = 0; n < e.length; ++n) if ("string" != typeof e[n] && e[n][0] <= t && e[n][1] > t) return !0;
return !1;
};
l.isReservedName = function(e, t) {
if (e) for (var n = 0; n < e.length; ++n) if (e[n] === t) return !0;
return !1;
};
function l(e, t) {
n.call(this, e, t);
this.nested = undefined;
this._nestedArray = null;
}
function u(e) {
e._nestedArray = null;
return e;
}
Object.defineProperty(l.prototype, "nestedArray", {
get: function() {
return this._nestedArray || (this._nestedArray = a.toArray(this.nested));
}
});
l.prototype.toJSON = function(e) {
return a.toObject([ "options", this.options, "nested", c(this.nestedArray, e) ]);
};
l.prototype.addJSON = function(e) {
if (e) for (var t, n = Object.keys(e), a = 0; a < n.length; ++a) {
t = e[n[a]];
this.add((t.fields !== undefined ? i.fromJSON : t.values !== undefined ? r.fromJSON : t.methods !== undefined ? o.fromJSON : t.id !== undefined ? s.fromJSON : l.fromJSON)(n[a], t));
}
return this;
};
l.prototype.get = function(e) {
return this.nested && this.nested[e] || null;
};
l.prototype.getEnum = function(e) {
if (this.nested && this.nested[e] instanceof r) return this.nested[e].values;
throw Error("no such enum: " + e);
};
l.prototype.add = function(e) {
if (!(e instanceof s && e.extend !== undefined || e instanceof i || e instanceof r || e instanceof o || e instanceof l)) throw TypeError("object must be a valid nested object");
if (this.nested) {
var t = this.get(e.name);
if (t) {
if (!(t instanceof l && e instanceof l) || t instanceof i || t instanceof o) throw Error("duplicate name '" + e.name + "' in " + this);
for (var n = t.nestedArray, a = 0; a < n.length; ++a) e.add(n[a]);
this.remove(t);
this.nested || (this.nested = {});
e.setOptions(t.options, !0);
}
} else this.nested = {};
this.nested[e.name] = e;
e.onAdd(this);
return u(this);
};
l.prototype.remove = function(e) {
if (!(e instanceof n)) throw TypeError("object must be a ReflectionObject");
if (e.parent !== this) throw Error(e + " is not a member of " + this);
delete this.nested[e.name];
Object.keys(this.nested).length || (this.nested = undefined);
e.onRemove(this);
return u(this);
};
l.prototype.define = function(e, t) {
if (a.isString(e)) e = e.split("."); else if (!Array.isArray(e)) throw TypeError("illegal path");
if (e && e.length && "" === e[0]) throw Error("path must be relative");
for (var n = this; e.length > 0; ) {
var i = e.shift();
if (n.nested && n.nested[i]) {
if (!((n = n.nested[i]) instanceof l)) throw Error("path conflicts with non-namespace objects");
} else n.add(n = new l(i));
}
t && n.addJSON(t);
return n;
};
l.prototype.resolveAll = function() {
for (var e = this.nestedArray, t = 0; t < e.length; ) e[t] instanceof l ? e[t++].resolveAll() : e[t++].resolve();
return this.resolve();
};
l.prototype.lookup = function(e, t, n) {
if ("boolean" == typeof t) {
n = t;
t = undefined;
} else t && !Array.isArray(t) && (t = [ t ]);
if (a.isString(e) && e.length) {
if ("." === e) return this.root;
e = e.split(".");
} else if (!e.length) return this;
if ("" === e[0]) return this.root.lookup(e.slice(1), t);
var i = this.get(e[0]);
if (i) {
if (1 === e.length) {
if (!t || t.indexOf(i.constructor) > -1) return i;
} else if (i instanceof l && (i = i.lookup(e.slice(1), t, !0))) return i;
} else for (var o = 0; o < this.nestedArray.length; ++o) if (this._nestedArray[o] instanceof l && (i = this._nestedArray[o].lookup(e, t, !0))) return i;
return null === this.parent || n ? null : this.parent.lookup(e, t);
};
l.prototype.lookupType = function(e) {
var t = this.lookup(e, [ i ]);
if (!t) throw Error("no such type: " + e);
return t;
};
l.prototype.lookupEnum = function(e) {
var t = this.lookup(e, [ r ]);
if (!t) throw Error("no such Enum '" + e + "' in " + this);
return t;
};
l.prototype.lookupTypeOrEnum = function(e) {
var t = this.lookup(e, [ i, r ]);
if (!t) throw Error("no such Type or Enum '" + e + "' in " + this);
return t;
};
l.prototype.lookupService = function(e) {
var t = this.lookup(e, [ o ]);
if (!t) throw Error("no such Service '" + e + "' in " + this);
return t;
};
l._configure = function(e, t, n) {
i = e;
o = t;
r = n;
};
}, {
16: 16,
24: 24,
37: 37
} ],
24: [ function(e, t) {
t.exports = o;
o.className = "ReflectionObject";
var n, i = e(37);
function o(e, t) {
if (!i.isString(e)) throw TypeError("name must be a string");
if (t && !i.isObject(t)) throw TypeError("options must be an object");
this.options = t;
this.parsedOptions = null;
this.name = e;
this.parent = null;
this.resolved = !1;
this.comment = null;
this.filename = null;
}
Object.defineProperties(o.prototype, {
root: {
get: function() {
for (var e = this; null !== e.parent; ) e = e.parent;
return e;
}
},
fullName: {
get: function() {
for (var e = [ this.name ], t = this.parent; t; ) {
e.unshift(t.name);
t = t.parent;
}
return e.join(".");
}
}
});
o.prototype.toJSON = function() {
throw Error();
};
o.prototype.onAdd = function(e) {
this.parent && this.parent !== e && this.parent.remove(this);
this.parent = e;
this.resolved = !1;
var t = e.root;
t instanceof n && t._handleAdd(this);
};
o.prototype.onRemove = function(e) {
var t = e.root;
t instanceof n && t._handleRemove(this);
this.parent = null;
this.resolved = !1;
};
o.prototype.resolve = function() {
if (this.resolved) return this;
this.root instanceof n && (this.resolved = !0);
return this;
};
o.prototype.getOption = function(e) {
return this.options ? this.options[e] : undefined;
};
o.prototype.setOption = function(e, t, n) {
n && this.options && this.options[e] !== undefined || ((this.options || (this.options = {}))[e] = t);
return this;
};
o.prototype.setParsedOption = function(e, t, n) {
this.parsedOptions || (this.parsedOptions = []);
var o = this.parsedOptions;
if (n) {
var r = o.find(function(t) {
return Object.prototype.hasOwnProperty.call(t, e);
});
if (r) {
var s = r[e];
i.setProperty(s, n, t);
} else {
(r = {})[e] = i.setProperty({}, n, t);
o.push(r);
}
} else {
var a = {};
a[e] = t;
o.push(a);
}
return this;
};
o.prototype.setOptions = function(e, t) {
if (e) for (var n = Object.keys(e), i = 0; i < n.length; ++i) this.setOption(n[i], e[n[i]], t);
return this;
};
o.prototype.toString = function() {
var e = this.constructor.className, t = this.fullName;
return t.length ? e + " " + t : e;
};
o._configure = function(e) {
n = e;
};
}, {
37: 37
} ],
25: [ function(e, t) {
t.exports = r;
var n = e(24);
((r.prototype = Object.create(n.prototype)).constructor = r).className = "OneOf";
var i = e(16), o = e(37);
function r(e, t, i, o) {
if (!Array.isArray(t)) {
i = t;
t = undefined;
}
n.call(this, e, i);
if (t !== undefined && !Array.isArray(t)) throw TypeError("fieldNames must be an Array");
this.oneof = t || [];
this.fieldsArray = [];
this.comment = o;
}
r.fromJSON = function(e, t) {
return new r(e, t.oneof, t.options, t.comment);
};
r.prototype.toJSON = function(e) {
var t = !!e && Boolean(e.keepComments);
return o.toObject([ "options", this.options, "oneof", this.oneof, "comment", t ? this.comment : undefined ]);
};
function s(e) {
if (e.parent) for (var t = 0; t < e.fieldsArray.length; ++t) e.fieldsArray[t].parent || e.parent.add(e.fieldsArray[t]);
}
r.prototype.add = function(e) {
if (!(e instanceof i)) throw TypeError("field must be a Field");
e.parent && e.parent !== this.parent && e.parent.remove(e);
this.oneof.push(e.name);
this.fieldsArray.push(e);
e.partOf = this;
s(this);
return this;
};
r.prototype.remove = function(e) {
if (!(e instanceof i)) throw TypeError("field must be a Field");
var t = this.fieldsArray.indexOf(e);
if (t < 0) throw Error(e + " is not a member of " + this);
this.fieldsArray.splice(t, 1);
(t = this.oneof.indexOf(e.name)) > -1 && this.oneof.splice(t, 1);
e.partOf = null;
return this;
};
r.prototype.onAdd = function(e) {
n.prototype.onAdd.call(this, e);
for (var t = 0; t < this.oneof.length; ++t) {
var i = e.get(this.oneof[t]);
if (i && !i.partOf) {
i.partOf = this;
this.fieldsArray.push(i);
}
}
s(this);
};
r.prototype.onRemove = function(e) {
for (var t, i = 0; i < this.fieldsArray.length; ++i) (t = this.fieldsArray[i]).parent && t.parent.remove(t);
n.prototype.onRemove.call(this, e);
};
r.d = function() {
for (var e = new Array(arguments.length), t = 0; t < arguments.length; ) e[t] = arguments[t++];
return function(t, n) {
o.decorateType(t.constructor).add(new r(n, e));
Object.defineProperty(t, n, {
get: o.oneOfGetter(e),
set: o.oneOfSetter(e)
});
};
};
}, {
16: 16,
24: 24,
37: 37
} ],
26: [ function(e, t) {
t.exports = A;
A.filename = null;
A.defaults = {
keepCase: !1
};
var n = e(34), i = e(29), o = e(35), r = e(16), s = e(20), a = e(25), c = e(15), l = e(33), u = e(22), f = e(36), d = e(37), h = /^[1-9][0-9]*$/, p = /^-?[1-9][0-9]*$/, g = /^0[x][0-9a-fA-F]+$/, m = /^-?0[x][0-9a-fA-F]+$/, y = /^0[0-7]+$/, v = /^-?0[0-7]+$/, b = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/, S = /^[a-zA-Z_][a-zA-Z_0-9]*$/, w = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/, C = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
function A(e, t, _) {
if (!(t instanceof i)) {
_ = t;
t = new i();
}
_ || (_ = A.defaults);
var I, T, P, x, O, D = _.preferTrailingComment || !1, B = n(e, _.alternateCommentMode || !1), R = B.next, k = B.push, E = B.peek, M = B.skip, N = B.cmnt, j = !0, F = !1, U = t, L = _.keepCase ? function(e) {
return e;
} : d.camelCase;
function G(e, t, n) {
var i = A.filename;
n || (A.filename = null);
return Error("illegal " + (t || "token") + " '" + e + "' (" + (i ? i + ", " : "") + "line " + B.line + ")");
}
function V() {
var e, t = [];
do {
if ('"' !== (e = R()) && "'" !== e) throw G(e);
t.push(R());
M(e);
e = E();
} while ('"' === e || "'" === e);
return t.join("");
}
function W(e) {
var t = R();
switch (t) {
case "'":
case '"':
k(t);
return V();

case "true":
case "TRUE":
return !0;

case "false":
case "FALSE":
return !1;
}
try {
return H(t, !0);
} catch (n) {
if (e && w.test(t)) return t;
throw G(t, "value");
}
}
function z(e, t) {
var n, i;
do {
!t || '"' !== (n = E()) && "'" !== n ? e.push([ i = q(R()), M("to", !0) ? q(R()) : i ]) : e.push(V());
} while (M(",", !0));
M(";");
}
function H(e, t) {
var n = 1;
if ("-" === e.charAt(0)) {
n = -1;
e = e.substring(1);
}
switch (e) {
case "inf":
case "INF":
case "Inf":
return Infinity * n;

case "nan":
case "NAN":
case "Nan":
case "NaN":
return NaN;

case "0":
return 0;
}
if (h.test(e)) return n * parseInt(e, 10);
if (g.test(e)) return n * parseInt(e, 16);
if (y.test(e)) return n * parseInt(e, 8);
if (b.test(e)) return n * parseFloat(e);
throw G(e, "number", t);
}
function q(e, t) {
switch (e) {
case "max":
case "MAX":
case "Max":
return 536870911;

case "0":
return 0;
}
if (!t && "-" === e.charAt(0)) throw G(e, "id");
if (p.test(e)) return parseInt(e, 10);
if (m.test(e)) return parseInt(e, 16);
if (v.test(e)) return parseInt(e, 8);
throw G(e, "id");
}
function J() {
if (I !== undefined) throw G("package");
I = R();
if (!w.test(I)) throw G(I, "name");
U = U.define(I);
M(";");
}
function Y() {
var e, t = E();
switch (t) {
case "weak":
e = P || (P = []);
R();
break;

case "public":
R();

default:
e = T || (T = []);
}
t = V();
M(";");
e.push(t);
}
function K() {
M("=");
x = V();
if (!(F = "proto3" === x) && "proto2" !== x) throw G(x, "syntax");
M(";");
}
function $(e, t) {
switch (t) {
case "option":
re(e, t);
M(";");
return !0;

case "message":
X(e, t);
return !0;

case "enum":
ie(e, t);
return !0;

case "service":
ue(e, t);
return !0;

case "extend":
de(e, t);
return !0;
}
return !1;
}
function Z(e, t, n) {
var i = B.line;
if (e) {
"string" != typeof e.comment && (e.comment = N());
e.filename = A.filename;
}
if (M("{", !0)) {
for (var o; "}" !== (o = R()); ) t(o);
M(";", !0);
} else {
n && n();
M(";");
e && ("string" != typeof e.comment || D) && (e.comment = N(i) || e.comment);
}
}
function X(e, t) {
if (!S.test(t = R())) throw G(t, "type name");
var n = new o(t);
Z(n, function(e) {
if (!$(n, e)) switch (e) {
case "map":
te(n);
break;

case "required":
case "repeated":
Q(n, e);
break;

case "optional":
Q(n, F ? "proto3_optional" : "optional");
break;

case "oneof":
ne(n, e);
break;

case "extensions":
z(n.extensions || (n.extensions = []));
break;

case "reserved":
z(n.reserved || (n.reserved = []), !0);
break;

default:
if (!F || !w.test(e)) throw G(e);
k(e);
Q(n, "optional");
}
});
e.add(n);
}
function Q(e, t, n) {
var i = R();
if ("group" !== i) {
if (!w.test(i)) throw G(i, "type");
var o = R();
if (!S.test(o)) throw G(o, "name");
o = L(o);
M("=");
var s = new r(o, q(R()), i, t, n);
Z(s, function(e) {
if ("option" !== e) throw G(e);
re(s, e);
M(";");
}, function() {
le(s);
});
if ("proto3_optional" === t) {
var c = new a("_" + o);
s.setOption("proto3_optional", !0);
c.add(s);
e.add(c);
} else e.add(s);
F || !s.repeated || f.packed[i] === undefined && f.basic[i] !== undefined || s.setOption("packed", !1, !0);
} else ee(e, t);
}
function ee(e, t) {
var n = R();
if (!S.test(n)) throw G(n, "name");
var i = d.lcFirst(n);
n === i && (n = d.ucFirst(n));
M("=");
var s = q(R()), a = new o(n);
a.group = !0;
var c = new r(i, s, n, t);
c.filename = A.filename;
Z(a, function(e) {
switch (e) {
case "option":
re(a, e);
M(";");
break;

case "required":
case "repeated":
Q(a, e);
break;

case "optional":
Q(a, F ? "proto3_optional" : "optional");
break;

default:
throw G(e);
}
});
e.add(a).add(c);
}
function te(e) {
M("<");
var t = R();
if (f.mapKey[t] === undefined) throw G(t, "type");
M(",");
var n = R();
if (!w.test(n)) throw G(n, "type");
M(">");
var i = R();
if (!S.test(i)) throw G(i, "name");
M("=");
var o = new s(L(i), q(R()), t, n);
Z(o, function(e) {
if ("option" !== e) throw G(e);
re(o, e);
M(";");
}, function() {
le(o);
});
e.add(o);
}
function ne(e, t) {
if (!S.test(t = R())) throw G(t, "name");
var n = new a(L(t));
Z(n, function(e) {
if ("option" === e) {
re(n, e);
M(";");
} else {
k(e);
Q(n, "optional");
}
});
e.add(n);
}
function ie(e, t) {
if (!S.test(t = R())) throw G(t, "name");
var n = new c(t);
Z(n, function(e) {
switch (e) {
case "option":
re(n, e);
M(";");
break;

case "reserved":
z(n.reserved || (n.reserved = []), !0);
break;

default:
oe(n, e);
}
});
e.add(n);
}
function oe(e, t) {
if (!S.test(t)) throw G(t, "name");
M("=");
var n = q(R(), !0), i = {};
Z(i, function(e) {
if ("option" !== e) throw G(e);
re(i, e);
M(";");
}, function() {
le(i);
});
e.add(t, n, i.comment);
}
function re(e, t) {
var n = M("(", !0);
if (!w.test(t = R())) throw G(t, "name");
var i, o = t, r = o;
if (n) {
M(")");
r = o = "(" + o + ")";
t = E();
if (C.test(t)) {
i = t.substr(1);
o += t;
R();
}
}
M("=");
ce(e, r, se(e, o), i);
}
function se(e, t) {
if (M("{", !0)) {
for (var n = {}; !M("}", !0); ) {
if (!S.test(O = R())) throw G(O, "name");
var i, o = O;
if ("{" === E()) i = se(e, t + "." + O); else {
M(":");
if ("{" === E()) i = se(e, t + "." + O); else {
i = W(!0);
ae(e, t + "." + O, i);
}
}
var r = n[o];
r && (i = [].concat(r).concat(i));
n[o] = i;
M(",", !0);
}
return n;
}
var s = W(!0);
ae(e, t, s);
return s;
}
function ae(e, t, n) {
e.setOption && e.setOption(t, n);
}
function ce(e, t, n, i) {
e.setParsedOption && e.setParsedOption(t, n, i);
}
function le(e) {
if (M("[", !0)) {
do {
re(e, "option");
} while (M(",", !0));
M("]");
}
return e;
}
function ue(e, t) {
if (!S.test(t = R())) throw G(t, "service name");
var n = new l(t);
Z(n, function(e) {
if (!$(n, e)) {
if ("rpc" !== e) throw G(e);
fe(n, e);
}
});
e.add(n);
}
function fe(e, t) {
var n = N(), i = t;
if (!S.test(t = R())) throw G(t, "name");
var o, r, s, a, c = t;
M("(");
M("stream", !0) && (r = !0);
if (!w.test(t = R())) throw G(t);
o = t;
M(")");
M("returns");
M("(");
M("stream", !0) && (a = !0);
if (!w.test(t = R())) throw G(t);
s = t;
M(")");
var l = new u(c, i, o, s, r, a);
l.comment = n;
Z(l, function(e) {
if ("option" !== e) throw G(e);
re(l, e);
M(";");
});
e.add(l);
}
function de(e, t) {
if (!w.test(t = R())) throw G(t, "reference");
var n = t;
Z(null, function(t) {
switch (t) {
case "required":
case "repeated":
Q(e, t, n);
break;

case "optional":
Q(e, F ? "proto3_optional" : "optional", n);
break;

default:
if (!F || !w.test(t)) throw G(t);
k(t);
Q(e, "optional", n);
}
});
}
for (;null !== (O = R()); ) switch (O) {
case "package":
if (!j) throw G(O);
J();
break;

case "import":
if (!j) throw G(O);
Y();
break;

case "syntax":
if (!j) throw G(O);
K();
break;

case "option":
re(U, O);
M(";");
break;

default:
if ($(U, O)) {
j = !1;
continue;
}
throw G(O);
}
A.filename = null;
return {
package: I,
imports: T,
weakImports: P,
syntax: x,
root: t
};
}
}, {
15: 15,
16: 16,
20: 20,
22: 22,
25: 25,
29: 29,
33: 33,
34: 34,
35: 35,
36: 36,
37: 37
} ],
27: [ function(e, t) {
t.exports = a;
var n, i = e(39), o = i.LongBits, r = i.utf8;
function s(e, t) {
return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len);
}
function a(e) {
this.buf = e;
this.pos = 0;
this.len = e.length;
}
var c, l = "undefined" != typeof Uint8Array ? function(e) {
if (e instanceof Uint8Array || Array.isArray(e)) return new a(e);
throw Error("illegal buffer");
} : function(e) {
if (Array.isArray(e)) return new a(e);
throw Error("illegal buffer");
}, u = function() {
return i.Buffer ? function(e) {
return (a.create = function(e) {
return i.Buffer.isBuffer(e) ? new n(e) : l(e);
})(e);
} : l;
};
a.create = u();
a.prototype._slice = i.Array.prototype.subarray || i.Array.prototype.slice;
a.prototype.uint32 = (c = 4294967295, function() {
c = (127 & this.buf[this.pos]) >>> 0;
if (this.buf[this.pos++] < 128) return c;
c = (c | (127 & this.buf[this.pos]) << 7) >>> 0;
if (this.buf[this.pos++] < 128) return c;
c = (c | (127 & this.buf[this.pos]) << 14) >>> 0;
if (this.buf[this.pos++] < 128) return c;
c = (c | (127 & this.buf[this.pos]) << 21) >>> 0;
if (this.buf[this.pos++] < 128) return c;
c = (c | (15 & this.buf[this.pos]) << 28) >>> 0;
if (this.buf[this.pos++] < 128) return c;
if ((this.pos += 5) > this.len) {
this.pos = this.len;
throw s(this, 10);
}
return c;
});
a.prototype.int32 = function() {
return 0 | this.uint32();
};
a.prototype.sint32 = function() {
var e = this.uint32();
return e >>> 1 ^ -(1 & e) | 0;
};
function f() {
var e = new o(0, 0), t = 0;
if (!(this.len - this.pos > 4)) {
for (;t < 3; ++t) {
if (this.pos >= this.len) throw s(this);
e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0;
if (this.buf[this.pos++] < 128) return e;
}
e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0;
return e;
}
for (;t < 4; ++t) {
e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0;
if (this.buf[this.pos++] < 128) return e;
}
e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0;
e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0;
if (this.buf[this.pos++] < 128) return e;
t = 0;
if (this.len - this.pos > 4) for (;t < 5; ++t) {
e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0;
if (this.buf[this.pos++] < 128) return e;
} else for (;t < 5; ++t) {
if (this.pos >= this.len) throw s(this);
e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0;
if (this.buf[this.pos++] < 128) return e;
}
throw Error("invalid varint encoding");
}
a.prototype.bool = function() {
return 0 !== this.uint32();
};
function d(e, t) {
return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
}
a.prototype.fixed32 = function() {
if (this.pos + 4 > this.len) throw s(this, 4);
return d(this.buf, this.pos += 4);
};
a.prototype.sfixed32 = function() {
if (this.pos + 4 > this.len) throw s(this, 4);
return 0 | d(this.buf, this.pos += 4);
};
function h() {
if (this.pos + 8 > this.len) throw s(this, 8);
return new o(d(this.buf, this.pos += 4), d(this.buf, this.pos += 4));
}
a.prototype.float = function() {
if (this.pos + 4 > this.len) throw s(this, 4);
var e = i.float.readFloatLE(this.buf, this.pos);
this.pos += 4;
return e;
};
a.prototype.double = function() {
if (this.pos + 8 > this.len) throw s(this, 4);
var e = i.float.readDoubleLE(this.buf, this.pos);
this.pos += 8;
return e;
};
a.prototype.bytes = function() {
var e = this.uint32(), t = this.pos, n = this.pos + e;
if (n > this.len) throw s(this, e);
this.pos += e;
return Array.isArray(this.buf) ? this.buf.slice(t, n) : t === n ? new this.buf.constructor(0) : this._slice.call(this.buf, t, n);
};
a.prototype.string = function() {
var e = this.bytes();
return r.read(e, 0, e.length);
};
a.prototype.skip = function(e) {
if ("number" == typeof e) {
if (this.pos + e > this.len) throw s(this, e);
this.pos += e;
} else do {
if (this.pos >= this.len) throw s(this);
} while (128 & this.buf[this.pos++]);
return this;
};
a.prototype.skipType = function(e) {
switch (e) {
case 0:
this.skip();
break;

case 1:
this.skip(8);
break;

case 2:
this.skip(this.uint32());
break;

case 3:
for (;4 != (e = 7 & this.uint32()); ) this.skipType(e);
break;

case 5:
this.skip(4);
break;

default:
throw Error("invalid wire type " + e + " at offset " + this.pos);
}
return this;
};
a._configure = function(e) {
n = e;
a.create = u();
n._configure();
var t = i.Long ? "toLong" : "toNumber";
i.merge(a.prototype, {
int64: function() {
return f.call(this)[t](!1);
},
uint64: function() {
return f.call(this)[t](!0);
},
sint64: function() {
return f.call(this).zzDecode()[t](!1);
},
fixed64: function() {
return h.call(this)[t](!0);
},
sfixed64: function() {
return h.call(this)[t](!1);
}
});
};
}, {
39: 39
} ],
28: [ function(e, t) {
t.exports = o;
var n = e(27);
(o.prototype = Object.create(n.prototype)).constructor = o;
var i = e(39);
function o(e) {
n.call(this, e);
}
o._configure = function() {
i.Buffer && (o.prototype._slice = i.Buffer.prototype.slice);
};
o.prototype.string = function() {
var e = this.uint32();
return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
};
o._configure();
}, {
27: 27,
39: 39
} ],
29: [ function(e, t) {
t.exports = u;
var n = e(23);
((u.prototype = Object.create(n.prototype)).constructor = u).className = "Root";
var i, o, r, s = e(16), a = e(15), c = e(25), l = e(37);
function u(e) {
n.call(this, "", e);
this.deferred = [];
this.files = [];
}
u.fromJSON = function(e, t) {
t || (t = new u());
e.options && t.setOptions(e.options);
return t.addJSON(e.nested);
};
u.prototype.resolvePath = l.path.resolve;
u.prototype.fetch = l.fetch;
function f() {}
u.prototype.load = function e(t, n, i) {
if ("function" == typeof n) {
i = n;
n = undefined;
}
var s = this;
if (!i) return l.asPromise(e, s, t, n);
var a = i === f;
function c(e, t) {
if (i) {
var n = i;
i = null;
if (a) throw e;
n(e, t);
}
}
function u(e) {
var t = e.lastIndexOf("google/protobuf/");
if (t > -1) {
var n = e.substring(t);
if (n in r) return n;
}
return null;
}
function d(e, t) {
try {
l.isString(t) && "{" === t.charAt(0) && (t = JSON.parse(t));
if (l.isString(t)) {
o.filename = e;
var i, r = o(t, s, n), f = 0;
if (r.imports) for (;f < r.imports.length; ++f) (i = u(r.imports[f]) || s.resolvePath(e, r.imports[f])) && h(i);
if (r.weakImports) for (f = 0; f < r.weakImports.length; ++f) (i = u(r.weakImports[f]) || s.resolvePath(e, r.weakImports[f])) && h(i, !0);
} else s.setOptions(t.options).addJSON(t.nested);
} catch (e) {
c(e);
}
a || p || c(null, s);
}
function h(e, t) {
if (!(s.files.indexOf(e) > -1)) {
s.files.push(e);
if (e in r) if (a) d(e, r[e]); else {
++p;
setTimeout(function() {
--p;
d(e, r[e]);
});
} else if (a) {
var n;
try {
n = l.fs.readFileSync(e).toString("utf8");
} catch (e) {
t || c(e);
return;
}
d(e, n);
} else {
++p;
s.fetch(e, function(n, o) {
--p;
i && (n ? t ? p || c(null, s) : c(n) : d(e, o));
});
}
}
}
var p = 0;
l.isString(t) && (t = [ t ]);
for (var g, m = 0; m < t.length; ++m) (g = s.resolvePath("", t[m])) && h(g);
if (a) return s;
p || c(null, s);
return undefined;
};
u.prototype.loadSync = function(e, t) {
if (!l.isNode) throw Error("not supported");
return this.load(e, t, f);
};
u.prototype.resolveAll = function() {
if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function(e) {
return "'extend " + e.extend + "' in " + e.parent.fullName;
}).join(", "));
return n.prototype.resolveAll.call(this);
};
var d = /^[A-Z]/;
function h(e, t) {
var n = t.parent.lookup(t.extend);
if (n) {
var i = new s(t.fullName, t.id, t.type, t.rule, undefined, t.options);
i.declaringField = t;
t.extensionField = i;
n.add(i);
return !0;
}
return !1;
}
u.prototype._handleAdd = function(e) {
if (e instanceof s) e.extend === undefined || e.extensionField || h(0, e) || this.deferred.push(e); else if (e instanceof a) d.test(e.name) && (e.parent[e.name] = e.values); else if (!(e instanceof c)) {
if (e instanceof i) for (var t = 0; t < this.deferred.length; ) h(0, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
for (var n = 0; n < e.nestedArray.length; ++n) this._handleAdd(e._nestedArray[n]);
d.test(e.name) && (e.parent[e.name] = e);
}
};
u.prototype._handleRemove = function(e) {
if (e instanceof s) {
if (e.extend !== undefined) if (e.extensionField) {
e.extensionField.parent.remove(e.extensionField);
e.extensionField = null;
} else {
var t = this.deferred.indexOf(e);
t > -1 && this.deferred.splice(t, 1);
}
} else if (e instanceof a) d.test(e.name) && delete e.parent[e.name]; else if (e instanceof n) {
for (var i = 0; i < e.nestedArray.length; ++i) this._handleRemove(e._nestedArray[i]);
d.test(e.name) && delete e.parent[e.name];
}
};
u._configure = function(e, t, n) {
i = e;
o = t;
r = n;
};
}, {
15: 15,
16: 16,
23: 23,
25: 25,
37: 37
} ],
30: [ function(e, t) {
t.exports = {};
}, {} ],
31: [ function(e, t, n) {
n.Service = e(32);
}, {
32: 32
} ],
32: [ function(e, t) {
t.exports = i;
var n = e(39);
(i.prototype = Object.create(n.EventEmitter.prototype)).constructor = i;
function i(e, t, i) {
if ("function" != typeof e) throw TypeError("rpcImpl must be a function");
n.EventEmitter.call(this);
this.rpcImpl = e;
this.requestDelimited = Boolean(t);
this.responseDelimited = Boolean(i);
}
i.prototype.rpcCall = function e(t, i, o, r, s) {
if (!r) throw TypeError("request must be specified");
var a = this;
if (!s) return n.asPromise(e, a, t, i, o, r);
if (!a.rpcImpl) {
setTimeout(function() {
s(Error("already ended"));
}, 0);
return undefined;
}
try {
return a.rpcImpl(t, i[a.requestDelimited ? "encodeDelimited" : "encode"](r).finish(), function(e, n) {
if (e) {
a.emit("error", e, t);
return s(e);
}
if (null === n) {
a.end(!0);
return undefined;
}
if (!(n instanceof o)) try {
n = o[a.responseDelimited ? "decodeDelimited" : "decode"](n);
} catch (e) {
a.emit("error", e, t);
return s(e);
}
a.emit("data", n, t);
return s(null, n);
});
} catch (e) {
a.emit("error", e, t);
setTimeout(function() {
s(e);
}, 0);
return undefined;
}
};
i.prototype.end = function(e) {
if (this.rpcImpl) {
e || this.rpcImpl(null, null, null);
this.rpcImpl = null;
this.emit("end").off();
}
return this;
};
}, {
39: 39
} ],
33: [ function(e, t) {
t.exports = s;
var n = e(23);
((s.prototype = Object.create(n.prototype)).constructor = s).className = "Service";
var i = e(22), o = e(37), r = e(31);
function s(e, t) {
n.call(this, e, t);
this.methods = {};
this._methodsArray = null;
}
s.fromJSON = function(e, t) {
var n = new s(e, t.options);
if (t.methods) for (var o = Object.keys(t.methods), r = 0; r < o.length; ++r) n.add(i.fromJSON(o[r], t.methods[o[r]]));
t.nested && n.addJSON(t.nested);
n.comment = t.comment;
return n;
};
s.prototype.toJSON = function(e) {
var t = n.prototype.toJSON.call(this, e), i = !!e && Boolean(e.keepComments);
return o.toObject([ "options", t && t.options || undefined, "methods", n.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || undefined, "comment", i ? this.comment : undefined ]);
};
Object.defineProperty(s.prototype, "methodsArray", {
get: function() {
return this._methodsArray || (this._methodsArray = o.toArray(this.methods));
}
});
function a(e) {
e._methodsArray = null;
return e;
}
s.prototype.get = function(e) {
return this.methods[e] || n.prototype.get.call(this, e);
};
s.prototype.resolveAll = function() {
for (var e = this.methodsArray, t = 0; t < e.length; ++t) e[t].resolve();
return n.prototype.resolve.call(this);
};
s.prototype.add = function(e) {
if (this.get(e.name)) throw Error("duplicate name '" + e.name + "' in " + this);
if (e instanceof i) {
this.methods[e.name] = e;
e.parent = this;
return a(this);
}
return n.prototype.add.call(this, e);
};
s.prototype.remove = function(e) {
if (e instanceof i) {
if (this.methods[e.name] !== e) throw Error(e + " is not a member of " + this);
delete this.methods[e.name];
e.parent = null;
return a(this);
}
return n.prototype.remove.call(this, e);
};
s.prototype.create = function(e, t, n) {
for (var i, s = new r.Service(e, t, n), a = 0; a < this.methodsArray.length; ++a) {
var c = o.lcFirst((i = this._methodsArray[a]).resolve().name).replace(/[^$\w_]/g, "");
s[c] = o.codegen([ "r", "c" ], o.isReserved(c) ? c + "_" : c)("return this.rpcCall(m,q,s,r,c)")({
m: i,
q: i.resolvedRequestType.ctor,
s: i.resolvedResponseType.ctor
});
}
return s;
};
}, {
22: 22,
23: 23,
31: 31,
37: 37
} ],
34: [ function(e, t) {
t.exports = d;
var n = /[\s{}=;:[\],'"()<>]/g, i = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g, o = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g, r = /^ *[*/]+ */, s = /^\s*\*?\/*/, a = /\n/g, c = /\s/, l = /\\(.?)/g, u = {
0: "\0",
r: "\r",
n: "\n",
t: "\t"
};
function f(e) {
return e.replace(l, function(e, t) {
switch (t) {
case "\\":
case "":
return t;

default:
return u[t] || "";
}
});
}
d.unescape = f;
function d(e, t) {
e = e.toString();
var l = 0, u = e.length, d = 1, h = null, p = null, g = 0, m = !1, y = !1, v = [], b = null;
function S(e) {
return Error("illegal " + e + " (line " + d + ")");
}
function w() {
var t = "'" === b ? o : i;
t.lastIndex = l - 1;
var n = t.exec(e);
if (!n) throw S("string");
l = t.lastIndex;
P(b);
b = null;
return f(n[1]);
}
function C(t) {
return e.charAt(t);
}
function A(n, i, o) {
h = e.charAt(n++);
g = d;
m = !1;
y = o;
var c, l = n - (t ? 2 : 3);
do {
if (--l < 0 || "\n" === (c = e.charAt(l))) {
m = !0;
break;
}
} while (" " === c || "\t" === c);
for (var u = e.substring(n, i).split(a), f = 0; f < u.length; ++f) u[f] = u[f].replace(t ? s : r, "").trim();
p = u.join("\n").trim();
}
function _(t) {
var n = I(t), i = e.substring(t, n);
return /^\s*\/{1,2}/.test(i);
}
function I(e) {
for (var t = e; t < u && "\n" !== C(t); ) t++;
return t;
}
function T() {
if (v.length > 0) return v.shift();
if (b) return w();
var i, o, r, s, a, f = 0 === l;
do {
if (l === u) return null;
i = !1;
for (;c.test(r = C(l)); ) {
if ("\n" === r) {
f = !0;
++d;
}
if (++l === u) return null;
}
if ("/" === C(l)) {
if (++l === u) throw S("comment");
if ("/" === C(l)) if (t) {
s = l;
a = !1;
if (_(l)) {
a = !0;
do {
if ((l = I(l)) === u) break;
l++;
} while (_(l));
} else l = Math.min(u, I(l) + 1);
a && A(s, l, f);
d++;
i = !0;
} else {
a = "/" === C(s = l + 1);
for (;"\n" !== C(++l); ) if (l === u) return null;
++l;
a && A(s, l - 1, f);
++d;
i = !0;
} else {
if ("*" !== (r = C(l))) return "/";
s = l + 1;
a = t || "*" === C(s);
do {
"\n" === r && ++d;
if (++l === u) throw S("comment");
o = r;
r = C(l);
} while ("*" !== o || "/" !== r);
++l;
a && A(s, l - 2, f);
i = !0;
}
}
} while (i);
var h = l;
n.lastIndex = 0;
if (!n.test(C(h++))) for (;h < u && !n.test(C(h)); ) ++h;
var p = e.substring(l, l = h);
'"' !== p && "'" !== p || (b = p);
return p;
}
function P(e) {
v.push(e);
}
function x() {
if (!v.length) {
var e = T();
if (null === e) return null;
P(e);
}
return v[0];
}
return Object.defineProperty({
next: T,
peek: x,
push: P,
skip: function(e, t) {
var n = x();
if (n === e) {
T();
return !0;
}
if (!t) throw S("token '" + n + "', '" + e + "' expected");
return !1;
},
cmnt: function(e) {
var n = null;
if (e === undefined) g === d - 1 && (t || "*" === h || m) && (n = y ? p : null); else {
g < e && x();
g !== e || m || !t && "/" !== h || (n = y ? null : p);
}
return n;
}
}, "line", {
get: function() {
return d;
}
});
}
}, {} ],
35: [ function(e, t) {
t.exports = y;
var n = e(23);
((y.prototype = Object.create(n.prototype)).constructor = y).className = "Type";
var i = e(15), o = e(25), r = e(16), s = e(20), a = e(33), c = e(21), l = e(27), u = e(42), f = e(37), d = e(14), h = e(13), p = e(40), g = e(12), m = e(41);
function y(e, t) {
n.call(this, e, t);
this.fields = {};
this.oneofs = undefined;
this.extensions = undefined;
this.reserved = undefined;
this.group = undefined;
this._fieldsById = null;
this._fieldsArray = null;
this._oneofsArray = null;
this._ctor = null;
}
Object.defineProperties(y.prototype, {
fieldsById: {
get: function() {
if (this._fieldsById) return this._fieldsById;
this._fieldsById = {};
for (var e = Object.keys(this.fields), t = 0; t < e.length; ++t) {
var n = this.fields[e[t]], i = n.id;
if (this._fieldsById[i]) throw Error("duplicate id " + i + " in " + this);
this._fieldsById[i] = n;
}
return this._fieldsById;
}
},
fieldsArray: {
get: function() {
return this._fieldsArray || (this._fieldsArray = f.toArray(this.fields));
}
},
oneofsArray: {
get: function() {
return this._oneofsArray || (this._oneofsArray = f.toArray(this.oneofs));
}
},
ctor: {
get: function() {
return this._ctor || (this.ctor = y.generateConstructor(this)());
},
set: function(e) {
var t = e.prototype;
if (!(t instanceof c)) {
(e.prototype = new c()).constructor = e;
f.merge(e.prototype, t);
}
e.$type = e.prototype.$type = this;
f.merge(e, c, !0);
this._ctor = e;
for (var n = 0; n < this.fieldsArray.length; ++n) this._fieldsArray[n].resolve();
var i = {};
for (n = 0; n < this.oneofsArray.length; ++n) i[this._oneofsArray[n].resolve().name] = {
get: f.oneOfGetter(this._oneofsArray[n].oneof),
set: f.oneOfSetter(this._oneofsArray[n].oneof)
};
n && Object.defineProperties(e.prototype, i);
}
}
});
y.generateConstructor = function(e) {
for (var t, n = f.codegen([ "p" ], e.name), i = 0; i < e.fieldsArray.length; ++i) (t = e._fieldsArray[i]).map ? n("this%s={}", f.safeProp(t.name)) : t.repeated && n("this%s=[]", f.safeProp(t.name));
return n("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
};
function v(e) {
e._fieldsById = e._fieldsArray = e._oneofsArray = null;
delete e.encode;
delete e.decode;
delete e.verify;
return e;
}
y.fromJSON = function(e, t) {
var c = new y(e, t.options);
c.extensions = t.extensions;
c.reserved = t.reserved;
for (var l = Object.keys(t.fields), u = 0; u < l.length; ++u) c.add(("undefined" != typeof t.fields[l[u]].keyType ? s.fromJSON : r.fromJSON)(l[u], t.fields[l[u]]));
if (t.oneofs) for (l = Object.keys(t.oneofs), u = 0; u < l.length; ++u) c.add(o.fromJSON(l[u], t.oneofs[l[u]]));
if (t.nested) for (l = Object.keys(t.nested), u = 0; u < l.length; ++u) {
var f = t.nested[l[u]];
c.add((f.id !== undefined ? r.fromJSON : f.fields !== undefined ? y.fromJSON : f.values !== undefined ? i.fromJSON : f.methods !== undefined ? a.fromJSON : n.fromJSON)(l[u], f));
}
t.extensions && t.extensions.length && (c.extensions = t.extensions);
t.reserved && t.reserved.length && (c.reserved = t.reserved);
t.group && (c.group = !0);
t.comment && (c.comment = t.comment);
return c;
};
y.prototype.toJSON = function(e) {
var t = n.prototype.toJSON.call(this, e), i = !!e && Boolean(e.keepComments);
return f.toObject([ "options", t && t.options || undefined, "oneofs", n.arrayToJSON(this.oneofsArray, e), "fields", n.arrayToJSON(this.fieldsArray.filter(function(e) {
return !e.declaringField;
}), e) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", t && t.nested || undefined, "comment", i ? this.comment : undefined ]);
};
y.prototype.resolveAll = function() {
for (var e = this.fieldsArray, t = 0; t < e.length; ) e[t++].resolve();
var i = this.oneofsArray;
t = 0;
for (;t < i.length; ) i[t++].resolve();
return n.prototype.resolveAll.call(this);
};
y.prototype.get = function(e) {
return this.fields[e] || this.oneofs && this.oneofs[e] || this.nested && this.nested[e] || null;
};
y.prototype.add = function(e) {
if (this.get(e.name)) throw Error("duplicate name '" + e.name + "' in " + this);
if (e instanceof r && e.extend === undefined) {
if (this._fieldsById ? this._fieldsById[e.id] : this.fieldsById[e.id]) throw Error("duplicate id " + e.id + " in " + this);
if (this.isReservedId(e.id)) throw Error("id " + e.id + " is reserved in " + this);
if (this.isReservedName(e.name)) throw Error("name '" + e.name + "' is reserved in " + this);
e.parent && e.parent.remove(e);
this.fields[e.name] = e;
e.message = this;
e.onAdd(this);
return v(this);
}
if (e instanceof o) {
this.oneofs || (this.oneofs = {});
this.oneofs[e.name] = e;
e.onAdd(this);
return v(this);
}
return n.prototype.add.call(this, e);
};
y.prototype.remove = function(e) {
if (e instanceof r && e.extend === undefined) {
if (!this.fields || this.fields[e.name] !== e) throw Error(e + " is not a member of " + this);
delete this.fields[e.name];
e.parent = null;
e.onRemove(this);
return v(this);
}
if (e instanceof o) {
if (!this.oneofs || this.oneofs[e.name] !== e) throw Error(e + " is not a member of " + this);
delete this.oneofs[e.name];
e.parent = null;
e.onRemove(this);
return v(this);
}
return n.prototype.remove.call(this, e);
};
y.prototype.isReservedId = function(e) {
return n.isReservedId(this.reserved, e);
};
y.prototype.isReservedName = function(e) {
return n.isReservedName(this.reserved, e);
};
y.prototype.create = function(e) {
return new this.ctor(e);
};
y.prototype.setup = function() {
for (var e = this.fullName, t = [], n = 0; n < this.fieldsArray.length; ++n) t.push(this._fieldsArray[n].resolve().resolvedType);
this.encode = d(this)({
Writer: u,
types: t,
util: f
});
this.decode = h(this)({
Reader: l,
types: t,
util: f
});
this.verify = p(this)({
types: t,
util: f
});
this.fromObject = g.fromObject(this)({
types: t,
util: f
});
this.toObject = g.toObject(this)({
types: t,
util: f
});
var i = m[e];
if (i) {
var o = Object.create(this);
o.fromObject = this.fromObject;
this.fromObject = i.fromObject.bind(o);
o.toObject = this.toObject;
this.toObject = i.toObject.bind(o);
}
return this;
};
y.prototype.encode = function(e, t) {
return this.setup().encode(e, t);
};
y.prototype.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
y.prototype.decode = function(e, t) {
return this.setup().decode(e, t);
};
y.prototype.decodeDelimited = function(e) {
e instanceof l || (e = l.create(e));
return this.decode(e, e.uint32());
};
y.prototype.verify = function(e) {
return this.setup().verify(e);
};
y.prototype.fromObject = function(e) {
return this.setup().fromObject(e);
};
y.prototype.toObject = function(e, t) {
return this.setup().toObject(e, t);
};
y.d = function(e) {
return function(t) {
f.decorateType(t, e);
};
};
}, {
12: 12,
13: 13,
14: 14,
15: 15,
16: 16,
20: 20,
21: 21,
23: 23,
25: 25,
27: 27,
33: 33,
37: 37,
40: 40,
41: 41,
42: 42
} ],
36: [ function(e, t, n) {
var i = n, o = e(37), r = [ "double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes" ];
function s(e, t) {
var n = 0, i = {};
t |= 0;
for (;n < e.length; ) i[r[n + t]] = e[n++];
return i;
}
i.basic = s([ 1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2 ]);
i.defaults = s([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", o.emptyArray, null ]);
i.long = s([ 0, 0, 0, 1, 1 ], 7);
i.mapKey = s([ 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2 ], 2);
i.packed = s([ 1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0 ]);
}, {
37: 37
} ],
37: [ function(e, t) {
var n, i, o = t.exports = e(39), r = e(30);
o.codegen = e(3);
o.fetch = e(5);
o.path = e(8);
o.fs = o.inquire("fs");
o.toArray = function(e) {
if (e) {
for (var t = Object.keys(e), n = new Array(t.length), i = 0; i < t.length; ) n[i] = e[t[i++]];
return n;
}
return [];
};
o.toObject = function(e) {
for (var t = {}, n = 0; n < e.length; ) {
var i = e[n++], o = e[n++];
o !== undefined && (t[i] = o);
}
return t;
};
var s = /\\/g, a = /"/g;
o.isReserved = function(e) {
return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e);
};
o.safeProp = function(e) {
return !/^[$\w_]+$/.test(e) || o.isReserved(e) ? '["' + e.replace(s, "\\\\").replace(a, '\\"') + '"]' : "." + e;
};
o.ucFirst = function(e) {
return e.charAt(0).toUpperCase() + e.substring(1);
};
var c = /_([a-z])/g;
o.camelCase = function(e) {
return e.substring(0, 1) + e.substring(1).replace(c, function(e, t) {
return t.toUpperCase();
});
};
o.compareFieldsById = function(e, t) {
return e.id - t.id;
};
o.decorateType = function(t, i) {
if (t.$type) {
if (i && t.$type.name !== i) {
o.decorateRoot.remove(t.$type);
t.$type.name = i;
o.decorateRoot.add(t.$type);
}
return t.$type;
}
n || (n = e(35));
var r = new n(i || t.name);
o.decorateRoot.add(r);
r.ctor = t;
Object.defineProperty(t, "$type", {
value: r,
enumerable: !1
});
Object.defineProperty(t.prototype, "$type", {
value: r,
enumerable: !1
});
return r;
};
var l = 0;
o.decorateEnum = function(t) {
if (t.$type) return t.$type;
i || (i = e(15));
var n = new i("Enum" + l++, t);
o.decorateRoot.add(n);
Object.defineProperty(t, "$type", {
value: n,
enumerable: !1
});
return n;
};
o.setProperty = function(e, t, n) {
if ("object" != typeof e) throw TypeError("dst must be an object");
if (!t) throw TypeError("path must be specified");
return function e(t, n, i) {
var o = n.shift();
if (n.length > 0) t[o] = e(t[o] || {}, n, i); else {
var r = t[o];
r && (i = [].concat(r).concat(i));
t[o] = i;
}
return t;
}(e, t = t.split("."), n);
};
Object.defineProperty(o, "decorateRoot", {
get: function() {
return r.decorated || (r.decorated = new (e(29))());
}
});
}, {
15: 15,
29: 29,
3: 3,
30: 30,
35: 35,
39: 39,
5: 5,
8: 8
} ],
38: [ function(e, t) {
t.exports = i;
var n = e(39);
function i(e, t) {
this.lo = e >>> 0;
this.hi = t >>> 0;
}
var o = i.zero = new i(0, 0);
o.toNumber = function() {
return 0;
};
o.zzEncode = o.zzDecode = function() {
return this;
};
o.length = function() {
return 1;
};
var r = i.zeroHash = "\0\0\0\0\0\0\0\0";
i.fromNumber = function(e) {
if (0 === e) return o;
var t = e < 0;
t && (e = -e);
var n = e >>> 0, r = (e - n) / 4294967296 >>> 0;
if (t) {
r = ~r >>> 0;
n = ~n >>> 0;
if (++n > 4294967295) {
n = 0;
++r > 4294967295 && (r = 0);
}
}
return new i(n, r);
};
i.from = function(e) {
if ("number" == typeof e) return i.fromNumber(e);
if (n.isString(e)) {
if (!n.Long) return i.fromNumber(parseInt(e, 10));
e = n.Long.fromString(e);
}
return e.low || e.high ? new i(e.low >>> 0, e.high >>> 0) : o;
};
i.prototype.toNumber = function(e) {
if (!e && this.hi >>> 31) {
var t = 1 + ~this.lo >>> 0, n = ~this.hi >>> 0;
t || (n = n + 1 >>> 0);
return -(t + 4294967296 * n);
}
return this.lo + 4294967296 * this.hi;
};
i.prototype.toLong = function(e) {
return n.Long ? new n.Long(0 | this.lo, 0 | this.hi, Boolean(e)) : {
low: 0 | this.lo,
high: 0 | this.hi,
unsigned: Boolean(e)
};
};
var s = String.prototype.charCodeAt;
i.fromHash = function(e) {
return e === r ? o : new i((s.call(e, 0) | s.call(e, 1) << 8 | s.call(e, 2) << 16 | s.call(e, 3) << 24) >>> 0, (s.call(e, 4) | s.call(e, 5) << 8 | s.call(e, 6) << 16 | s.call(e, 7) << 24) >>> 0);
};
i.prototype.toHash = function() {
return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
};
i.prototype.zzEncode = function() {
var e = this.hi >> 31;
this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0;
this.lo = (this.lo << 1 ^ e) >>> 0;
return this;
};
i.prototype.zzDecode = function() {
var e = -(1 & this.lo);
this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0;
this.hi = (this.hi >>> 1 ^ e) >>> 0;
return this;
};
i.prototype.length = function() {
var e = this.lo, t = (this.lo >>> 28 | this.hi << 4) >>> 0, n = this.hi >>> 24;
return 0 === n ? 0 === t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : n < 128 ? 9 : 10;
};
}, {
39: 39
} ],
39: [ function(e, t, n) {
var i = n;
i.asPromise = e(1);
i.base64 = e(2);
i.EventEmitter = e(4);
i.float = e(6);
i.inquire = e(7);
i.utf8 = e(10);
i.pool = e(9);
i.LongBits = e(38);
i.isNode = Boolean("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node);
i.global = i.isNode && global || "undefined" != typeof window && window || "undefined" != typeof self && self || this;
i.emptyArray = Object.freeze ? Object.freeze([]) : [];
i.emptyObject = Object.freeze ? Object.freeze({}) : {};
i.isInteger = Number.isInteger || function(e) {
return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
};
i.isString = function(e) {
return "string" == typeof e || e instanceof String;
};
i.isObject = function(e) {
return e && "object" == typeof e;
};
i.isset = i.isSet = function(e, t) {
var n = e[t];
return !(null == n || !e.hasOwnProperty(t)) && ("object" != typeof n || (Array.isArray(n) ? n.length : Object.keys(n).length) > 0);
};
i.Buffer = function() {
try {
var e = i.inquire("buffer").Buffer;
return e.prototype.utf8Write ? e : null;
} catch (e) {
return null;
}
}();
i._Buffer_from = null;
i._Buffer_allocUnsafe = null;
i.newBuffer = function(e) {
return "number" == typeof e ? i.Buffer ? i._Buffer_allocUnsafe(e) : new i.Array(e) : i.Buffer ? i._Buffer_from(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e);
};
i.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array;
i.Long = i.global.dcodeIO && i.global.dcodeIO.Long || i.global.Long || i.inquire("long");
i.key2Re = /^true|false|0|1$/;
i.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
i.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
i.longToHash = function(e) {
return e ? i.LongBits.from(e).toHash() : i.LongBits.zeroHash;
};
i.longFromHash = function(e, t) {
var n = i.LongBits.fromHash(e);
return i.Long ? i.Long.fromBits(n.lo, n.hi, t) : n.toNumber(Boolean(t));
};
function o(e, t, n) {
for (var i = Object.keys(t), o = 0; o < i.length; ++o) e[i[o]] !== undefined && n || (e[i[o]] = t[i[o]]);
return e;
}
i.merge = o;
i.lcFirst = function(e) {
return e.charAt(0).toLowerCase() + e.substring(1);
};
function r(e) {
function t(e, n) {
if (!(this instanceof t)) return new t(e, n);
Object.defineProperty(this, "message", {
get: function() {
return e;
}
});
Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", {
value: new Error().stack || ""
});
n && o(this, n);
}
(t.prototype = Object.create(Error.prototype)).constructor = t;
Object.defineProperty(t.prototype, "name", {
get: function() {
return e;
}
});
t.prototype.toString = function() {
return this.name + ": " + this.message;
};
return t;
}
i.newError = r;
i.ProtocolError = r("ProtocolError");
i.oneOfGetter = function(e) {
for (var t = {}, n = 0; n < e.length; ++n) t[e[n]] = 1;
return function() {
for (var e = Object.keys(this), n = e.length - 1; n > -1; --n) if (1 === t[e[n]] && this[e[n]] !== undefined && null !== this[e[n]]) return e[n];
};
};
i.oneOfSetter = function(e) {
return function(t) {
for (var n = 0; n < e.length; ++n) e[n] !== t && delete this[e[n]];
};
};
i.toJSONOptions = {
longs: String,
enums: String,
bytes: String,
json: !0
};
i._configure = function() {
var e = i.Buffer;
if (e) {
i._Buffer_from = e.from !== Uint8Array.from && e.from || function(t, n) {
return new e(t, n);
};
i._Buffer_allocUnsafe = e.allocUnsafe || function(t) {
return new e(t);
};
} else i._Buffer_from = i._Buffer_allocUnsafe = null;
};
}, {
1: 1,
10: 10,
2: 2,
38: 38,
4: 4,
6: 6,
7: 7,
9: 9
} ],
40: [ function(e, t) {
t.exports = function(e) {
var t = i.codegen([ "m" ], e.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"), n = {};
e.oneofsArray.length && t("var p={}");
for (var a = 0; a < e.fieldsArray.length; ++a) {
var c = e._fieldsArray[a].resolve(), l = "m" + i.safeProp(c.name);
c.optional && t("if(%s!=null&&m.hasOwnProperty(%j)){", l, c.name);
if (c.map) {
t("if(!util.isObject(%s))", l)("return%j", o(c, "object"))("var k=Object.keys(%s)", l)("for(var i=0;i<k.length;++i){");
s(t, c, "k[i]");
r(t, c, a, l + "[k[i]]")("}");
} else if (c.repeated) {
t("if(!Array.isArray(%s))", l)("return%j", o(c, "array"))("for(var i=0;i<%s.length;++i){", l);
r(t, c, a, l + "[i]")("}");
} else {
if (c.partOf) {
var u = i.safeProp(c.partOf.name);
1 === n[c.partOf.name] && t("if(p%s===1)", u)("return%j", c.partOf.name + ": multiple values");
n[c.partOf.name] = 1;
t("p%s=1", u);
}
r(t, c, a, l);
}
c.optional && t("}");
}
return t("return null");
};
var n = e(15), i = e(37);
function o(e, t) {
return e.name + ": " + t + (e.repeated && "array" !== t ? "[]" : e.map && "object" !== t ? "{k:" + e.keyType + "}" : "") + " expected";
}
function r(e, t, i, r) {
if (t.resolvedType) if (t.resolvedType instanceof n) {
e("switch(%s){", r)("default:")("return%j", o(t, "enum value"));
for (var s = Object.keys(t.resolvedType.values), a = 0; a < s.length; ++a) e("case %i:", t.resolvedType.values[s[a]]);
e("break")("}");
} else e("{")("var e=types[%i].verify(%s);", i, r)("if(e)")("return%j+e", t.name + ".")("}"); else switch (t.type) {
case "int32":
case "uint32":
case "sint32":
case "fixed32":
case "sfixed32":
e("if(!util.isInteger(%s))", r)("return%j", o(t, "integer"));
break;

case "int64":
case "uint64":
case "sint64":
case "fixed64":
case "sfixed64":
e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", r, r, r, r)("return%j", o(t, "integer|Long"));
break;

case "float":
case "double":
e('if(typeof %s!=="number")', r)("return%j", o(t, "number"));
break;

case "bool":
e('if(typeof %s!=="boolean")', r)("return%j", o(t, "boolean"));
break;

case "string":
e("if(!util.isString(%s))", r)("return%j", o(t, "string"));
break;

case "bytes":
e('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', r, r, r)("return%j", o(t, "buffer"));
}
return e;
}
function s(e, t, n) {
switch (t.keyType) {
case "int32":
case "uint32":
case "sint32":
case "fixed32":
case "sfixed32":
e("if(!util.key32Re.test(%s))", n)("return%j", o(t, "integer key"));
break;

case "int64":
case "uint64":
case "sint64":
case "fixed64":
case "sfixed64":
e("if(!util.key64Re.test(%s))", n)("return%j", o(t, "integer|Long key"));
break;

case "bool":
e("if(!util.key2Re.test(%s))", n)("return%j", o(t, "boolean key"));
}
return e;
}
}, {
15: 15,
37: 37
} ],
41: [ function(e, t, n) {
var i = n, o = e(21);
i[".google.protobuf.Any"] = {
fromObject: function(e) {
if (e && e["@type"]) {
var t = e["@type"].substring(e["@type"].lastIndexOf("/") + 1), n = this.lookup(t);
if (n) {
var i = "." === e["@type"].charAt(0) ? e["@type"].substr(1) : e["@type"];
-1 === i.indexOf("/") && (i = "/" + i);
return this.create({
type_url: i,
value: n.encode(n.fromObject(e)).finish()
});
}
}
return this.fromObject(e);
},
toObject: function(e, t) {
var n = "", i = "";
if (t && t.json && e.type_url && e.value) {
i = e.type_url.substring(e.type_url.lastIndexOf("/") + 1);
n = e.type_url.substring(0, e.type_url.lastIndexOf("/") + 1);
var r = this.lookup(i);
r && (e = r.decode(e.value));
}
if (!(e instanceof this.ctor) && e instanceof o) {
var s = e.$type.toObject(e, t);
"" === n && (n = "type.googleapis.com/");
i = n + ("." === e.$type.fullName[0] ? e.$type.fullName.substr(1) : e.$type.fullName);
s["@type"] = i;
return s;
}
return this.toObject(e, t);
}
};
}, {
21: 21
} ],
42: [ function(e, t) {
t.exports = u;
var n, i = e(39), o = i.LongBits, r = i.base64, s = i.utf8;
function a(e, t, n) {
this.fn = e;
this.len = t;
this.next = undefined;
this.val = n;
}
function c() {}
function l(e) {
this.head = e.head;
this.tail = e.tail;
this.len = e.len;
this.next = e.states;
}
function u() {
this.len = 0;
this.head = new a(c, 0, 0);
this.tail = this.head;
this.states = null;
}
var f = function() {
return i.Buffer ? function() {
return (u.create = function() {
return new n();
})();
} : function() {
return new u();
};
};
u.create = f();
u.alloc = function(e) {
return new i.Array(e);
};
i.Array !== Array && (u.alloc = i.pool(u.alloc, i.Array.prototype.subarray));
u.prototype._push = function(e, t, n) {
this.tail = this.tail.next = new a(e, t, n);
this.len += t;
return this;
};
function d(e, t, n) {
t[n] = 255 & e;
}
function h(e, t) {
this.len = e;
this.next = undefined;
this.val = t;
}
h.prototype = Object.create(a.prototype);
h.prototype.fn = function(e, t, n) {
for (;e > 127; ) {
t[n++] = 127 & e | 128;
e >>>= 7;
}
t[n] = e;
};
u.prototype.uint32 = function(e) {
this.len += (this.tail = this.tail.next = new h((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len;
return this;
};
u.prototype.int32 = function(e) {
return e < 0 ? this._push(p, 10, o.fromNumber(e)) : this.uint32(e);
};
u.prototype.sint32 = function(e) {
return this.uint32((e << 1 ^ e >> 31) >>> 0);
};
function p(e, t, n) {
for (;e.hi; ) {
t[n++] = 127 & e.lo | 128;
e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0;
e.hi >>>= 7;
}
for (;e.lo > 127; ) {
t[n++] = 127 & e.lo | 128;
e.lo = e.lo >>> 7;
}
t[n++] = e.lo;
}
u.prototype.uint64 = function(e) {
var t = o.from(e);
return this._push(p, t.length(), t);
};
u.prototype.int64 = u.prototype.uint64;
u.prototype.sint64 = function(e) {
var t = o.from(e).zzEncode();
return this._push(p, t.length(), t);
};
u.prototype.bool = function(e) {
return this._push(d, 1, e ? 1 : 0);
};
function g(e, t, n) {
t[n] = 255 & e;
t[n + 1] = e >>> 8 & 255;
t[n + 2] = e >>> 16 & 255;
t[n + 3] = e >>> 24;
}
u.prototype.fixed32 = function(e) {
return this._push(g, 4, e >>> 0);
};
u.prototype.sfixed32 = u.prototype.fixed32;
u.prototype.fixed64 = function(e) {
var t = o.from(e);
return this._push(g, 4, t.lo)._push(g, 4, t.hi);
};
u.prototype.sfixed64 = u.prototype.fixed64;
u.prototype.float = function(e) {
return this._push(i.float.writeFloatLE, 4, e);
};
u.prototype.double = function(e) {
return this._push(i.float.writeDoubleLE, 8, e);
};
var m = i.Array.prototype.set ? function(e, t, n) {
t.set(e, n);
} : function(e, t, n) {
for (var i = 0; i < e.length; ++i) t[n + i] = e[i];
};
u.prototype.bytes = function(e) {
var t = e.length >>> 0;
if (!t) return this._push(d, 1, 0);
if (i.isString(e)) {
var n = u.alloc(t = r.length(e));
r.decode(e, n, 0);
e = n;
}
return this.uint32(t)._push(m, t, e);
};
u.prototype.string = function(e) {
var t = s.length(e);
return t ? this.uint32(t)._push(s.write, t, e) : this._push(d, 1, 0);
};
u.prototype.fork = function() {
this.states = new l(this);
this.head = this.tail = new a(c, 0, 0);
this.len = 0;
return this;
};
u.prototype.reset = function() {
if (this.states) {
this.head = this.states.head;
this.tail = this.states.tail;
this.len = this.states.len;
this.states = this.states.next;
} else {
this.head = this.tail = new a(c, 0, 0);
this.len = 0;
}
return this;
};
u.prototype.ldelim = function() {
var e = this.head, t = this.tail, n = this.len;
this.reset().uint32(n);
if (n) {
this.tail.next = e.next;
this.tail = t;
this.len += n;
}
return this;
};
u.prototype.finish = function() {
for (var e = this.head.next, t = this.constructor.alloc(this.len), n = 0; e; ) {
e.fn(e.val, t, n);
n += e.len;
e = e.next;
}
return t;
};
u._configure = function(e) {
n = e;
u.create = f();
n._configure();
};
}, {
39: 39
} ],
43: [ function(e, t) {
t.exports = o;
var n = e(42);
(o.prototype = Object.create(n.prototype)).constructor = o;
var i = e(39);
function o() {
n.call(this);
}
o._configure = function() {
o.alloc = i._Buffer_allocUnsafe;
o.writeBytesBuffer = i.Buffer && i.Buffer.prototype instanceof Uint8Array && "set" === i.Buffer.prototype.set.name ? function(e, t, n) {
t.set(e, n);
} : function(e, t, n) {
if (e.copy) e.copy(t, n, 0, e.length); else for (var i = 0; i < e.length; ) t[n++] = e[i++];
};
};
o.prototype.bytes = function(e) {
i.isString(e) && (e = i._Buffer_from(e, "base64"));
var t = e.length >>> 0;
this.uint32(t);
t && this._push(o.writeBytesBuffer, t, e);
return this;
};
function r(e, t, n) {
e.length < 40 ? i.utf8.write(e, t, n) : t.utf8Write ? t.utf8Write(e, n) : t.write(e, n);
}
o.prototype.string = function(e) {
var t = i.Buffer.byteLength(e);
this.uint32(t);
t && this._push(r, t, e);
return this;
};
o._configure();
}, {
39: 39,
42: 42
} ]
}, {});
})();
cc._RF.pop();
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
1: void 0,
10: void 0,
11: void 0,
12: void 0,
13: void 0,
14: void 0,
15: void 0,
16: void 0,
17: void 0,
18: void 0,
2: void 0,
20: void 0,
21: void 0,
22: void 0,
23: void 0,
24: void 0,
25: void 0,
26: void 0,
27: void 0,
28: void 0,
29: void 0,
3: void 0,
30: void 0,
31: void 0,
32: void 0,
33: void 0,
34: void 0,
35: void 0,
36: void 0,
37: void 0,
38: void 0,
39: void 0,
4: void 0,
40: void 0,
41: void 0,
42: void 0,
43: void 0,
5: void 0,
6: void 0,
7: void 0,
8: void 0,
9: void 0
} ],
startClone: [ function(e, t) {
"use strict";
cc._RF.push(t, "9141aPIAP5NiYMxJJ1to3dU", "startClone");
cc.Class({
extends: cc.Component,
properties: {},
initData: function() {
this.touchFirstPos = null;
this.rotateFirstPos = null;
this.pukeDisRatio = .1;
},
start: function() {
cc.dynamicAtlasManager.enabled = !1;
this.initData();
this.labelAngle = this.node.getChildByName("labelAngle").getComponent(cc.Label);
this._bgMaterialNode = this.node.getChildByName("cardBg");
this._zmMaterialNode = this._bgMaterialNode.getChildByName("cardNum");
this._bgMaterial = this._bgMaterialNode.getComponent(cc.Sprite).getMaterials()[0];
this._zmMaterial = this._zmMaterialNode.getComponent(cc.Sprite).getMaterials()[0];
var e = this._bgMaterialNode.width * this._bgMaterialNode.scaleX * .1;
this._zmMaterial.effect.setProperty("shadowDis", e);
this.touchLayer = this.node.getChildByName("touchLayer");
this.touchLayer.on(cc.Node.EventType.TOUCH_START, this.touchBegan, this);
this.touchLayer.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.touchLayer.on(cc.Node.EventType.TOUCH_END, this.touchEnded, this);
this.touchLayer.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
},
getRotatePos: function(e, t, n) {
var i = n / (180 / Math.PI), o = cc.v2(t.x - e.x, t.y - e.y), r = cc.v2(0, 0);
r.x = o.x * Math.cos(i) - o.y * Math.sin(i);
r.y = o.x * Math.sin(i) + o.y * Math.cos(i);
r.x = r.x + e.x;
r.y = r.y + e.y;
return r;
},
isInside: function(e, t, n, i) {
for (var o = !1, r = e - 1, s = 0; s < e; r = s++) {
var a = n[s] > i.y != n[r] > i.y, c = i.x < (t[r] - t[s]) * (i.y - n[s]) / (n[r] - n[s]) + t[s];
a && c && (o = !o);
}
return o;
},
getTouchTypeByNode: function(e, t) {
var n = t.convertToWorldSpaceAR(cc.v2(0, 0)), i = t.anchorX, o = t.anchorY, r = t.angle, s = t.width * t.scaleX, a = t.height * t.scaleY, c = Math.max(10, s * this.pukeDisRatio), l = Math.max(10, a * this.pukeDisRatio), u = cc.v2(-s * i + n.x, a * (1 - o) + n.y), f = cc.v2(-s * i + n.x, -a * o + n.y), d = cc.v2(s * (1 - i) + n.x, -a * o + n.y), h = cc.v2(s * (1 - i) + n.x, a * (1 - o) + n.y), p = cc.v2(u.x + c, u.y - l), g = cc.v2(f.x + c, f.y + l), m = cc.v2(d.x - c, d.y + l), y = cc.v2(h.x - c, h.y - l);
u = this.getRotatePos(n, u, r);
f = this.getRotatePos(n, f, r);
d = this.getRotatePos(n, d, r);
h = this.getRotatePos(n, h, r);
p = this.getRotatePos(n, p, r);
g = this.getRotatePos(n, g, r);
m = this.getRotatePos(n, m, r);
y = this.getRotatePos(n, y, r);
var v = [ u.x, f.x, d.x, h.x ], b = [ u.y, f.y, d.y, h.y ], S = [ p.x, g.x, m.x, y.x ], w = [ p.y, g.y, m.y, y.y ];
return this.isInside(4, v, b, e) && !this.isInside(4, S, w, e) ? 2 : this.isInside(4, S, w, e) ? 1 : 3;
},
resetPos: function() {
var e = cc.v2(0, 0);
this._bgMaterial.effect.setProperty("firstPos", e);
this._bgMaterial.effect.setProperty("secondPos", e);
this._zmMaterial.effect.setProperty("firstPos", e);
this._zmMaterial.effect.setProperty("secondPos", e);
},
runActionCard: function(e, t) {
this._bgMaterial.effect.setProperty("firstPos", e);
this._bgMaterial.effect.setProperty("secondPos", t);
this._zmMaterial.effect.setProperty("firstPos", e);
this._zmMaterial.effect.setProperty("secondPos", t);
},
getAngleByPos: function(e, t) {
var n = t.x - e.x, i = t.y - e.y;
if (0 == n) return i > 0 ? 90 : 180;
var o = Math.atan(i / n);
return 180 / Math.PI * o;
},
runRatationAction: function(e, t) {
var n = this._bgMaterialNode.convertToWorldSpaceAR(cc.v2(0, 0)), i = this.getAngleByPos(n, e), o = this.getAngleByPos(n, t);
this._bgMaterialNode.angle = this.backAngle + (o - i);
this.labelAngle.string = this._bgMaterialNode.angle;
},
touchBegan: function(e) {
var t = e.getLocation(), n = this.getTouchTypeByNode(t, this._bgMaterialNode);
if (1 == n) {
this.rotateFirstPos = t;
this.backAngle = this._bgMaterialNode.angle;
} else 2 == n && (this.touchFirstPos = t);
},
touchMove: function(e) {
var t = e.getLocation();
this.touchFirstPos ? this.runActionCard(this.touchFirstPos, t) : this.rotateFirstPos ? this.runRatationAction(this.rotateFirstPos, t) : 2 == this.getTouchTypeByNode(t, this._bgMaterialNode) && (this.touchFirstPos = t);
},
touchEnded: function() {
this.touchFirstPos = null;
this.rotateFirstPos = null;
this.resetPos();
},
touchCancel: function() {
this.touchFirstPos = null;
this.rotateFirstPos = null;
this.resetPos();
}
});
cc._RF.pop();
}, {} ],
textinput: [ function(e, t) {
"use strict";
cc._RF.push(t, "0043b7TOBhKiYqrFXaldTiM", "textinput");
cc.Class({
extends: cc.Component,
properties: {},
onDestroy: function() {},
onLoad: function() {
var e = this, t = this.node.getChildByName("uicontent").getChildByName("panel").getChildByName("btn_done");
UITool.addBtnClick(t, function() {
if (e.call) {
var t = e.Editbox.getComponent(cc.EditBox).string;
window.Save.set("LastHoturl", t);
e.call(t);
}
e.bClose();
});
this.Editbox = this.node.getChildByName("uicontent").getChildByName("panel").getChildByName("EditBox");
},
show: function(e) {
this.call = e;
var t = window.Save.get("LastHoturl", null);
t && (this.Editbox.getComponent(cc.EditBox).string = t);
this.Editbox.getComponent(cc.EditBox).setFocus();
},
onbackpress: function() {},
start: function() {}
});
cc._RF.pop();
}, {} ],
use_reversed_rotateBy: [ function(e, t) {
"use strict";
cc._RF.push(t, "a261fWUgbhIiYQZHN4wUmEx", "use_reversed_rotateBy");
cc.RotateBy._reverse = !0;
cc._RF.pop();
}, {} ],
xxtea: [ function(e, t) {
"use strict";
cc._RF.push(t, "639b6ohfOFGqbHyT0ZVfBTi", "xxtea");
var n = e("buffer").Buffer, i = 2654435769;
function o(e, t) {
var n = e.length, i = n << 2;
if (t) {
var o = e[n - 1];
if (o < (i -= 4) - 3 || o > i) return null;
i = o;
}
for (var r = new Uint8Array(i), s = 0; s < i; ++s) r[s] = e[s >> 2] >> ((3 & s) << 3);
return r;
}
function r(e, t) {
var n, i = e.length, o = i >> 2;
0 != (3 & i) && ++o;
t ? (n = new Uint32Array(o + 1))[o] = i : n = new Uint32Array(o);
for (var r = 0; r < i; ++r) n[r >> 2] |= e[r] << ((3 & r) << 3);
return n;
}
function s(e, t, n, i, o, r) {
return (n >>> 5 ^ t << 2) + (t >>> 3 ^ n << 4) ^ (e ^ t) + (r[3 & i ^ o] ^ n);
}
function a(e) {
if (e.length < 16) {
var t = new Uint8Array(16);
t.set(e);
e = t;
}
return e;
}
function c(e, t) {
var n, o, r, a, c, l, u = e.length, f = u - 1;
o = e[f];
r = 0;
for (l = 0 | Math.floor(6 + 52 / u); l > 0; --l) {
a = (r += i) >>> 2 & 3;
for (c = 0; c < f; ++c) {
n = e[c + 1];
o = e[c] += s(r, n, o, c, a, t);
}
n = e[0];
o = e[f] += s(r, n, o, c, a, t);
}
return e;
}
function l(e, t) {
var n, o, r, a, c, l = e.length, u = l - 1;
n = e[0];
for (r = Math.floor(6 + 52 / l) * i; 0 !== r; r -= i) {
a = r >>> 2 & 3;
for (c = u; c > 0; --c) {
o = e[c - 1];
n = e[c] -= s(r, n, o, c, a, t);
}
o = e[u];
n = e[0] -= s(r, n, o, c, a, t);
}
return e;
}
function u(e) {
for (var t = e.length, n = new Uint8Array(3 * t), i = 0, o = 0; o < t; o++) {
var r = e.charCodeAt(o);
if (r < 128) n[i++] = r; else if (r < 2048) {
n[i++] = 192 | r >> 6;
n[i++] = 128 | 63 & r;
} else {
if (!(r < 55296 || r > 57343)) {
if (o + 1 < t) {
var s = e.charCodeAt(o + 1);
if (r < 56320 && 56320 <= s && s <= 57343) {
var a = 65536 + ((1023 & r) << 10 | 1023 & s);
n[i++] = 240 | a >> 18;
n[i++] = 128 | a >> 12 & 63;
n[i++] = 128 | a >> 6 & 63;
n[i++] = 128 | 63 & a;
o++;
continue;
}
}
throw new Error("Malformed string");
}
n[i++] = 224 | r >> 12;
n[i++] = 128 | r >> 6 & 63;
n[i++] = 128 | 63 & r;
}
}
return n.subarray(0, i);
}
function f(e, t) {
for (var n = new Uint16Array(t), i = 0, o = 0, r = e.length; i < t && o < r; i++) {
var s = e[o++];
switch (s >> 4) {
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
n[i] = s;
break;

case 12:
case 13:
if (!(o < r)) throw new Error("Unfinished UTF-8 octet sequence");
n[i] = (31 & s) << 6 | 63 & e[o++];
break;

case 14:
if (!(o + 1 < r)) throw new Error("Unfinished UTF-8 octet sequence");
n[i] = (15 & s) << 12 | (63 & e[o++]) << 6 | 63 & e[o++];
break;

case 15:
if (!(o + 2 < r)) throw new Error("Unfinished UTF-8 octet sequence");
var a = ((7 & s) << 18 | (63 & e[o++]) << 12 | (63 & e[o++]) << 6 | 63 & e[o++]) - 65536;
if (!(0 <= a && a <= 1048575)) throw new Error("Character outside valid Unicode range: 0x" + a.toString(16));
n[i++] = a >> 10 & 1023 | 55296;
n[i] = 1023 & a | 56320;
break;

default:
throw new Error("Bad UTF-8 encoding 0x" + s.toString(16));
}
}
i < t && (n = n.subarray(0, i));
return String.fromCharCode.apply(String, n);
}
function d(e, t) {
for (var n = [], i = new Uint16Array(32768), o = 0, r = 0, s = e.length; o < t && r < s; o++) {
var a = e[r++];
switch (a >> 4) {
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
i[o] = a;
break;

case 12:
case 13:
if (!(r < s)) throw new Error("Unfinished UTF-8 octet sequence");
i[o] = (31 & a) << 6 | 63 & e[r++];
break;

case 14:
if (!(r + 1 < s)) throw new Error("Unfinished UTF-8 octet sequence");
i[o] = (15 & a) << 12 | (63 & e[r++]) << 6 | 63 & e[r++];
break;

case 15:
if (!(r + 2 < s)) throw new Error("Unfinished UTF-8 octet sequence");
var c = ((7 & a) << 18 | (63 & e[r++]) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) - 65536;
if (!(0 <= c && c <= 1048575)) throw new Error("Character outside valid Unicode range: 0x" + c.toString(16));
i[o++] = c >> 10 & 1023 | 55296;
i[o] = 1023 & c | 56320;
break;

default:
throw new Error("Bad UTF-8 encoding 0x" + a.toString(16));
}
if (o >= 32766) {
var l = o + 1;
n.push(String.fromCharCode.apply(String, i.subarray(0, l)));
t -= l;
o = -1;
}
}
o > 0 && n.push(String.fromCharCode.apply(String, i.subarray(0, o)));
return n.join("");
}
function h(e) {
var t = e.length;
return 0 === t ? "" : t < 32767 ? f(e, t) : d(e, t);
}
function p(e, t) {
"string" == typeof e && (e = u(e));
"string" == typeof t && (t = u(t));
return null == e || 0 === e.length ? e : o(c(r(e, !0), r(a(t), !1)), !1);
}
function g(e, t) {
"string" == typeof e && (e = new n(e, "base64"));
"string" == typeof t && (t = u(t));
return null == e || 0 === e.length ? e : o(l(r(e, !1), r(a(t), !1)), !0);
}
t.exports = Object.create(null, {
toBytes: {
value: u
},
toString: {
value: h
},
encrypt: {
value: p
},
encryptToString: {
value: function(e, t) {
return new n(p(e, t)).toString("base64");
}
},
decrypt: {
value: g
},
decryptToString: {
value: function(e, t) {
return h(g(e, t));
}
}
});
cc._RF.pop();
}, {
buffer: 6
} ],
zh: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "79c7e+nlZtJObmei4hgBrCW", "zh");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = {
2001: "你好",
2002: "中国",
2003: "666",
2004: "222",
2005: "5"
};
cc._RF.pop();
}, {} ]
}, {}, [ "Person", "Bubble", "BubbleScene", "CastTest", "VoiceNative", "ball", "Chanel", "ConstEventDefine", "ConstantItem", "PhysicsCenter", "AdaptBg", "AdaptCanvas", "AdaptUI", "Base64Tool", "BaseComponent", "EventManager", "Global", "LoadingLayer", "Save", "SubGameManager", "UITool", "VersionManager", "keypadManager", "popBaseView", "xxtea", "GameClient", "HttpHelper", "OnlineWS", "Onlinedef", "Package", "Ws", "Devices", "DevicesAndroid", "DevicesIos", "DevicesWeb", "Sound", "Alert", "bundleSceneTest", "chooseupdate", "LaunchScene", "LoginScene", "MainScene", "startClone", "popLayer", "Cell", "SlotPanel", "SlotScene", "TestScene", "textinput", "WsTest", "HttpModule", "WeChatModule", "Testts", "Lang", "en", "i18nLabel", "i18nMgr", "i18nSprite", "zh", "use_reversed_rotateBy", "myModule", "cmdDef", "gameProto", "protoTool", "protobuf" ]);