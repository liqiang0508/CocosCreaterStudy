var StringTools = {
Compress: function(r) {
console.log("压缩前长度：" + r.length);
var o = "", e = new Array();
for (a = 0; a < 128; a++) e[a] = a;
for (var n = 128, t = 0, f = 0, i = 0, l = 0, s = 0, a = 0; a < r.length; a++) if (null != e[s = i << 8 | (l = r.charCodeAt(a))]) i = e[s]; else {
f <<= 12;
f |= i;
i = l;
if ((t += 12) >= 16) {
o += String.fromCharCode(f >> t - 16);
f &= Math.pow(2, t - 16) - 1;
t -= 16;
}
if (n < 4096) {
n++;
e[s] = n - 1;
}
}
if (0 != i) {
t += 12;
f <<= 12;
f |= i;
}
if (t >= 16) {
o += String.fromCharCode(f >> t - 16);
f &= Math.pow(2, t - 16) - 1;
t -= 16;
}
if (t > 0) {
f <<= 16 - t;
o += String.fromCharCode(f);
}
console.log("压缩后长度：" + o.length);
return o;
},
Decompress: function(r) {
var o = "", e = new Array();
for (a = 0; a < 128; a++) e[a] = String.fromCharCode(a);
for (var n = 128, t = 0, f = 0, i = 0, l = 0, s = 0, a = 0; a < r.length; a++) {
t += 16;
f <<= 16;
f |= r.charCodeAt(a);
for (;t >= 12; ) {
if ("undefined" != typeof (s = e[i = f >> t - 12])) {
o += s;
n > 128 && (e[e.length] = e[l] + s.substr(0, 1));
l = i;
} else {
o += s = e[l] + e[l].substr(0, 1);
e[e.length] = e[l] + s.substr(0, 1);
l = e.length - 1;
}
n++;
t -= 12;
f &= Math.pow(2, t) - 1;
}
}
return o;
}
};

window.StringTools = StringTools;