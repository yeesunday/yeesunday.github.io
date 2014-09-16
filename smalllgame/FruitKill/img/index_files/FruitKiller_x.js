var bg = "FruitKiller";
var hb = "2.0";
var eq = "468379449854705";
var fN = 0;
var fM = 1;
var fH = 2;
var gF = 3;
var gD = 4;
var gG = 5;
var gE = 6;
var fS = 7;
var gm = 8;
var gp = 9;
var fO = 10;
var fI = 11;
var gh = 12;
var gi = 13;
var gv = 14;
var gu = 15;
var gs = 16;
var fQ = 17;
var fL = 18;
var gg = 19;
var gz = 20;
var gC = 21;
var gB = 22;
var gA = 23;
var gy = 24;
var gw = 25;
var gn = 26;
var gj = 27;
var gl = 28;
var fK = 29;
var fR = 30;
var gk = 31;
var ew = dsp[fN];
var ey = dsp[fM];
var dJ = dsp[fH];
var aV = dsp[gF];
var cX = dsp[gD];
var dV = dsp[gG];
var eD = dsp[gE];
var ad = dsp[fS];
var gR = dsp[gm];
var cK = dsp[gp];
var eG = dsp[fO];
var eu = dsp[fI];
var fx = dsp[gh];
var fu = dsp[gi];
var fE = dsp[gv];
var fD = dsp[gu];
var ft = dsp[gs];
var ev = dsp[fQ];
var af = dsp[fL];
var bk = dsp[gg];
var aH = dsp[gz];
var bi = dsp[gC];
var eI = dsp[gB];
var eH = dsp[gA];
var eC = dsp[gy];
var eF = dsp[gw];
var fs = dsp[gn];
var fq = dsp[gj];
var dq = dsp[gl];
var dE = dsp[fK];
var cI = dsp[fR];
var ea = dsp[gk];
var aT = 'http://' + dJ + '/games/' + bg + '/' + bg + '.php?pid' + ew;
var d = 0;
var g = 2;
var cU = 0;
var cW = 1;
var cF = 2;
var dA = 3;
var dr = 4;
var gO = 5;
var dm = 8;
var dB = 30;
var dW = new Array();
var bI = 0.0;
for (var i = 0; i < 50; i++) {
	dW[i] = bI;
	bI += 0.02;
}
bI = 1.0;
for (var i = 50; i < 100; i++) {
	dW[i] = bI;
	bI -= 0.02;
}
var cs = 0;
var i = 0;
var ap = 50;
var ab = cU;
var gZ = "iphone";
var V = "onmousedown";
var K = "onclick";
var aj = "onmousemove";
var ah = "onmouseup";
var by = "touchmove";
var I = 0;
var dS = ev;

function R(name) {
	if (navigator.userAgent.indexOf(name) != -1) {
		return true;
	}
	return false;
};
var eg = 0;
var bG = 1;
var ae = 2;
var aw = 3;
var H = 4;
var as = 5;
var ai = 6;
var bH = 7;
var ci = 0;
if (R("iPhone") || R("iPad") || R("iPod")) d = bG;
else if (R("Android")) d = ae;
else if (R("MSIE")) {
	if (typeof document.documentElement.style.opacity != 'undefined') {
		d = aw;
		if (R("IEMobile")) ci = 1;
	} else d = ai;
} else if (R("Firefox")) d = H;
else if (R("Opera")) d = as;
else if (R("RIM") || R("BB10")) d = bH;
else d = eg; if (d == bG) {
	V = "ontouchstart";
	K = "onclick";
	ah = "ontouchend";
	aj = "ontouchmove";
	ap = 50;
}
if (d == bH) {
	V = "ontouchstart";
	K = "ontouchstart";
	ah = "ontouchend";
	aj = "ontouchmove";
	ap = 50;
}
if (d == ae) {
	if (R("Android 2.0") || R("Android 2.1")) {
		by = "touchstart";
		V = "ontouchstart";
		ah = "ontouchend";
		K = "ontouchstart";
		aj = "ontouchmove";
		ap = 50;
		I = 2;
	} else if (R("Android 1.6")) {
		by = "touchstart";
		V = "ontouchstart";
		ah = "ontouchend";
		K = "ontouchstart";
		aj = "ontouchmove";
		ap = 20;
		I = 1
	} else {
		by = "touchmove";
		V = "ontouchstart";
		K = "onclick";
		ah = "ontouchend";
		aj = "ontouchmove";
		ap = 50;
		if (R("Android 2.2") || R("Android 2.3")) I = 3;
		else I = 2;
	}
}
if ((d == aw) || (d == ai)) {
	V = "onmousedown";
	K = "onclick";
	ah = "onmouseup";
	aj = "onmousemove";
	ap = 50;
	if (d == ai) {
		ap = 50;
		g = 1;
	}
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function(searchElement) {
			"use strict";
			if (this == null) {
				throw new TypeError();
			}
			var de = Object(this);
			var cd = de.length >>> 0;
			if (cd === 0) {
				return -1;
			}
			var n = 0;
			if (arguments.length > 0) {
				n = Number(arguments[1]);
				if (n != n) {
					n = 0;
				} else if (n != 0 && n != Infinity && n != -Infinity) {
					n = (n > 0 || -1) * Math.floor(Math.abs(n));
				}
			}
			if (n >= cd) {
				return -1;
			}
			var bR = n >= 0 ? n : Math.max(cd - Math.abs(n), 0);
			for (; bR < cd; bR++) {
				if (bR in de && de[bR] === searchElement) {
					return bR;
				}
			}
			return -1;
		}
	}
}
if (d == H) {
	V = "onmousedown";
	K = "onclick";
	ah = "onmouseup";
	aj = "onmousemove";
	ap = 50;
}
if (d == as) {
	V = "onmousedown";
	K = "onclick";
	ah = "onmouseup";
	aj = "onmousemove";
	ap = 50;
}
var aD = 0;
if ((d != 3) && (d != 6)) aD = 1;

function fy(e) {
	if (aD) e.preventDefault();
};
var cw = 0;
if (R("Firefox") && R("Android")) cw = 1;
if (cw) {
	d = H;
	by = "touchmove";
	V = "ontouchstart";
	K = "onclick";
	ah = "ontouchend";
	aj = "ontouchmove";
	ap = 50;
}
if ((d == bG) || (d == ae) || ci || cw) {
	if (window.innerWidth < 600) g = 1;
}
if (dV == 1) g = 1;
else if (dV == 2) g = 2;
if (eD)
	if (top.location.href != self.location.href) top.location.href = self.location.href;
par_game = bg;
var bM = 0;
var dI = 0;
var dY = 0;
if (g == 1) {
	var dH = 384;
	var dX = 512;
	ad += "zz_";
} else {
	var dH = 768;
	var dX = 1024;
}
var m = dH - dI;
var t = dX - dY;
var T = dI + (m >> 1);
var gS = dY + (t >> 1);
var fT;
var ez;
var eJ;
var ge;
var gP;
var dM;
var dQ;
var eU;
var eS;
var dT = 1;
var dG = 0;
var eY = 'k66b';
var eW = eY.split('');
var eR = 'c5-a';
var eQ = eR.split('');
var dc = location.hostname;
var at = dc.split(".");
var bS = "";
if (at.length > 2) {
	if ((at.length == 3) && (at[at.length - 1].length < 3) && (at[at.length - 2].length < 3)) bS = dc;
	else {
		for (i = 1; i < at.length - 1; i++) bS += at[i] + ".";
		bS += at[at.length - 1];
	}
} else bS = dc;
var eT = ':/' + '/';
var eP = 'r-crrc';
var fG = eP.split('');
var bC = dG;
var gr = 'eeesf23hh3r62sray';
var gq = gr.split('');
var eN = 'r5-b6';
var eL = eN.split('');
var eK = 'v7';
var eo = '9fg7hjklz6xc.v8bn1m0';
var eO = eK.split('');
var en = 'q2se4rtyu3i5opa-wd' + eo;
var ar = en.split('');
var J = '';
var gf = 'ible';
var er = 'abcdefghijklmnopqrstuvwxyz';
var eZ = 'ank';
var aZ = dS.length;
var et = '0123456789-.';
var bz = dS.split('');
var eB = 'den';
var aI = et + er;
var gU = aI.split('');
var dP = 'hid';
var eV = 'bl';
var ga = 'vis';
var cG = '';
var dj = bS;
var ei = dj.toLowerCase();
var gX = ei.split('');
var gb = 'ow';
var eA = 'e';
var gc = 'sh';
for (i = 0; i < 5; i++) J += ar[aI.indexOf(eL[i])];
cY = 'S' + J;
J = '';
for (i = 0; i < 17; i++) J += ar[aI.indexOf(gq[i])];
dM = J;
eS = '_' + eV + eZ;
J = '-';
for (i = 0; i < 2; i++) J += ar[aI.indexOf(eO[i])];
cY += J;
J = '-D';
for (i = 0; i < 4; i++) J += ar[aI.indexOf(eQ[i])];
cY += J;
J = '-S';
for (i = 0; i < 6; i++) J += ar[aI.indexOf(fG[i])];
cY += J;
J = '';
for (i = 0; i < 4; i++) J += ar[aI.indexOf(eW[i])];
dQ = J;
J = '';
for (i = 2; i < aZ - 2; i++) {
	J += ar[aI.indexOf(bz[i])];
}
cG = dj;
eU = dQ + eT + dM;
fT = gc + gb;
ez = dP + eB;
if (cG == J) bC = dT;
if (ar[aZ >> 1] != bz[0] || ar[aZ] != bz[1] || ar[aZ] != bz[aZ - 2] || ar[aZ >> 2] != bz[aZ - 1]) bC = dG;
if (cG.length == 0) bC = dT;
eJ = dP + eA;
ge = ga + gf;
var aW = 1;
var M = 0;
var aL = "00000";
var bo = 0;
var D;
var O;
var r;
if (aD) {
	D = window.innerWidth;
	O = window.innerHeight;
} else {
	D = document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth;
	O = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
} if (D / O > m / (t)) {
	r = O / (t);
} else {
	r = D / (m);
}
var au = "position:absolute;top:0px;left:0px;z-Index:1;visibility:hidden;";
var bl = au + "white-space:nowrap;";

function gH(B, col) {
	document.getElementById(B).style.color = "#" + col;
	document.getElementById(B).style.fontWeight = "bold";
	document.getElementById(B).style.filter = "alpha(opacity=50)";
};
document.write('<div id=\'all\' style=\'position:absolute;left:0px;top:0px;clip:rect(0px,' + m + 'px,' + (t) + 'px,0px);\'>');
if ((D < O) && ((d == bG) || (d == ae) || (d == bH) || ci)) dO("all", 0, 0, D / (m), O / (t));
else dN("all", ((D - m * r) / 2), 0, r); if (cK) {
	par_adx2 = ((D - m) / 2);
	par_adx3 = ((D - m * r) / 2);
	par_adx4 = ((D - m * r) / 2) + (m * r);
	ds_RZ();
}
var cb = new Array();
var bp = 0;
var dU = ey;
cb[bp] = new Image();
cb[bp].src = dU;
bp++;
var dn = ad + "info.png";
cb[bp] = new Image();
cb[bp].src = dn;
bp++;
var fP = 40 * g;
var fJ = 40 * g;
document.write('<img id=\'lo\' style=\'display:none;position:absolute;top:0px;left:0px;visibility:visible;z-Index:1;opacity:1;-webkit-transition-property: opacity;-webkit-transition-duration: 1s;\' src=\'' + dU + '\' width=' + m + ' height=' + t + '>');
if (cI) {
	bk *= g;
	aH *= g;
	document.write('<div id=\'lob1\' style=\'position:absolute;top:' + (t - (t >> 3)) + 'px;left:' + ((m >> 1) - (bk >> 1)) + 'px;visibility:visible;z-Index:2;opacity:' + bi + ';-moz-opacity:' + bi + ';filter:alpha(opacity=' + (bi * 100) + ');background-color:#' + eC + ';border:1px solid #000;width:' + (bk) + 'px;height:' + aH + 'px;font-size:' + (aH - (aH >> 2)) + 'px;color:#' + eH + ';text-align:center;-moz-border-radius:' + (aH >> 1) + ';-webkit-border-radius:' + (aH >> 1) + 'px;\'>' + eI + '</div>');
	document.write('<div id=\'lob2\' style=\'position:absolute;top:' + (t - (t >> 3)) + 'px;left:' + ((m >> 1) - (bk >> 1)) + 'px;visibility:visible;z-Index:3;opacity:' + bi + ';-moz-opacity:' + bi + ';filter:alpha(opacity=' + (bi * 100) + ');background-color:#' + eF + ';width:0px;height:' + aH + 'px;-moz-border-radius:' + (aH >> 1) + ';-webkit-border-radius:' + (aH >> 1) + 'px;\'></div>');
}
var A = new Array();
var o = 0;
var di = bk / 31;
if (af == an) di = bk / (31 + 4);
var dz = new Array();
var bL = 0;

function ag() {
	if (cI) {
		if (A[bL].width > 0) {
			clearTimeout(dz[bL]);
			bL++;
			document.getElementById("lob2").style.border = "1px solid #000";
			document.getElementById("lob2").style.width = (bL * di) + "px";
		} else dz[bL] = setTimeout('ag()', 20);
	}
};
var an = 5;
var gT = "";
var Q = 0;
if (af == an) {
	var ds = ad + "fli.png";
	A[o] = new Image();
	A[o].src = ds;
	ag();
	o++;
	var dx = ad + "flo.png";
	A[o] = new Image();
	A[o].src = dx;
	ag();
	o++;
	var bD = ad + "fng.png";
	A[o] = new Image();
	A[o].src = bD;
	ag();
	o++;
	var bF = ad + "fhi.png";
	A[o] = new Image();
	A[o].src = bF;
	ag();
	o++;
}
var dk = ad + "t.jpg";
A[o] = new Image();
A[o].src = dk;
ag();
o++;
var bA = ad + "ng.png";
A[o] = new Image();
A[o].src = bA;
ag();
o++;
var bT = ad + "hi.png";
A[o] = new Image();
A[o].src = bT;
ag();
o++;
var bn = ad + "submit.png";
A[o] = new Image();
A[o].src = bn;
ag();
o++;
var dp = ad + "continue.png";
A[o] = new Image();
A[o].src = dp;
ag();
o++;
var cp = ".png";
if (d == ai) cp = ".gif";
var cz = ad + "l1.jpg";
A[o] = new Image();
A[o].src = cz;
ag();
o++;
var dv = ad + "l2.jpg";
A[o] = new Image();
A[o].src = dv;
ag();
o++;
var dy = ad + "l3.jpg";
A[o] = new Image();
A[o].src = dy;
ag();
o++;
var dL = ad + "sb" + cp;
A[o] = new Image();
A[o].src = dL;
ag();
o++;
var gY = 0;
var bO = new Array();
for (var i = 0; i < 22; i++) {
	bO[i] = ad + "s" + i + cp;
	A[o + i] = new Image();
	A[o + i].src = bO[i];
	ag();
}
o += 22;
if (cK) {
	document.write('<div id=\'myads\' style=\'display:none;position:absolute;top:0px;left:0px;visibility:visible;z-Index:100001;\'><a href=\'http://' + fE + '\' target=\'' + ft + '\'><img src=\'' + fD + '\' border=0 width=' + m + ' height=' + (60 * g) + '></a></div>');
	j("myads", 0, 0);
}
if ((d != ai) && (d != bH) && (d != ae)) {
	document.write('<div style=\'position:absolute;top:0px;left:' + (m) + 'px;width:' + (m * 2) + 'px;height:' + (t) + 'px;background-Color:#000000;visibility:visible;z-Index:10000;\'></div>');
	document.write('<div style=\'position:absolute;top:0px;left:' + (-m * 2) + 'px;width:' + (m * 2) + 'px;height:' + (t) + 'px;background-Color:#000000;visibility:visible;z-Index:10000;\'></div>');
}

function fa() {
	if ((af == an) && (Q == 0)) {
		var fW = "Please LOGIN with F";
		var fU = "ACEBOOK";
		var fZ = fW + fU;
		alert(fZ);
		return;
	}
	var ak = aT + "&hi=1&fb=" + Q;
	if (dq) ak = ds_urlhiscore + dE;
	if (cX == 0) window.open(ak, "_blank");
	else location.href = ak;
};
if (aV) {
	var ak = aT + "&hi=1";
	if (dq) ak = ds_urlhiscore + dE;
	document.write('<img id=\'hi\' style=\'' + au + 'display:none;opacity:0.6;-moz-opacity:0.6;filter:alpha(opacity=60);\' ' + K + '=\'fa()\' src=\'' + bT + '\' >');
}
document.write('<div id=\'hs\' style=\'' + bl + 'display:none;color:#ffffff;font-family:Arial;font-size:' + (14 * g) + 'px;\'></div>');
document.write('<img id=\'ng\' style=\'' + au + 'opacity:0.6;-moz-opacity:0.6;filter:alpha(opacity=60);\' ' + K + '=\'fz()\'  src=\'' + bA + '\' >');
document.write('<div id=\'su\' style=\'' + au + '\'><a href=\'#\' ' + V + '=\'go()\'><img  src=\'' + bn + '\' border=0></a></div>');
document.write('<img id=\'co\' style=\'' + au + '\' ' + K + '=\'bt()\' src=\'' + dp + '\' >');
document.write('<img id=\'myinf\' style=\'position:absolute;left:0px;top:0px;visibility:visible;z-Index:100000;\' ' + V + '=\'info()\'  src=\'' + dn + '\' >');
if (eG) {
	j("myinf", -10000, -10000);
} else j("myinf", m - fP, t - fJ); if (af == an) {
	document.write('<div id="fb-root" ></div>');
	(function() {
		var e = document.createElement('script');
		e.async = true;
		e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
		document.getElementById('fb-root').appendChild(e);
	}());
	window.fbAsyncInit = function() {
		FB.init({
			appId: eq,
			status: true,
			cookie: true,
			xfbml: true,
			oauth: true
		});
		FB.Event.subscribe('auth.statusChange', fh);
		FB.Event.subscribe('auth.logout', function(ca) {
			Q = 0;
			document.getElementById("ng").src = bA;
			document.getElementById("hi").src = bT;
		});
		FB.Event.subscribe('auth.login', function(ca) {
			Q = 1;
			eb();
			document.getElementById("ng").src = bD;
			document.getElementById("hi").src = bF;
		});
	};

	function fh(ca) {
		if (ca.authResponse) {
			Q = 1;
			eb();
			document.getElementById("ng").src = bD;
			document.getElementById("hi").src = bF;
		} else {
			Q = 0;
			document.getElementById("ng").src = bA;
			document.getElementById("hi").src = bT;
		}
	};

	function eb() {
		if (Q) {
			FB.api('/me', function(bV) {
				if (!bV.error) {
					cQ = bV.id;
					ac = bV.name;
					bv = ac.charAt(1) + U(9) + (am * 89) + U(9) + ac.charAt(3) + 'fc1' + U(9) + ac.charAt(0) + U(9) + ac.charAt(1) + '4z3' + (am * 7) + '3247z11';
					document.getElementById("f_n0").innerHTML = bV.name;
					document.getElementById("f_p0").src = "http://graph.facebook.com/" + bV.id + "/picture?type=small";
				}
			});
		}
	};

	function fo() {
		if ((aD) && (d != H)) window.event.preventDefault();
		FB.login(function(ca) {});
	};

	function fn() {
		if ((aD) && (d != H)) window.event.preventDefault();
		j("f_lo", -1000, -1000);
		j("su", -1000, -1000);
		j("hs", -1000, -1000);
		j("f_p0", -1000, -1000);
		j("f_n0", -1000, -1000);
		Q = 0;
		document.getElementById("ng").src = bA;
		document.getElementById("hi").src = bT;
		FB.logout();
	};
	if (Q == 1) {
		document.getElementById("ng").src = bD;
		document.getElementById("hi").src = bF;
	}
	document.write('<img id=\'f_p0\' style="' + au + '"  width=' + (50 * g) + ' height=' + (50 * g) + ' border=1>');
	document.write('<div id=\'f_n0\' style=\'' + bl + 'font-family:Arial;font-size:' + (16 * g) + 'px;color:#4fefff;\'></div>');
	document.write('<div id=\'f_ba\' style=\'position:absolute;top:0px;left:0px;width:' + (m) + 'px;height:' + (42 * g) + 'px;background-Color:#000000;visibility:hidden;z-Index:1;\'></div>');
	document.write('<img id=\'f_li\' style=\'' + au + '\' ' + K + '=\'fo()\'  src=\'' + ds + '\' >');
	document.write('<img id=\'f_lo\' style=\'' + au + '\' ' + K + '=\'fn()\'  src=\'' + dx + '\' >');
	G("f_ba", 0.7);
}
document.write('<div id=\'s1\' style=\'' + bl + 'color:#dddddd;font-family:Arial;font-size:' + (g * 16) + 'px;text-shadow: 1px 1px 2px #000000,-1px 1px 2px #000000,1px -1px 2px #000000,-1px -1px 2px #000000;\'>' + aL + '</div>');
document.write('<div id=\'p1\' style=\'' + bl + 'color:#ffff00;font-family:Arial;font-size:' + (g * 16) + 'px;text-shadow: 1px 1px 2px #000000,-1px 1px 2px #000000,1px -1px 2px #000000,-1px -1px 2px #000000;\'>5</div>');
document.write('<div id=\'m1\' style=\'' + bl + 'color:#ffffff;font-family:Arial;font-size:' + (g * 48) + 'px;text-shadow: 1px 1px 2px #000000;\'>+10</div>');
document.write('<div id=\'g1\' style=\'' + bl + 'color:#ffffff;font-family:Arial;font-size:' + (g * 42) + 'px;text-shadow: 2px 2px 6px #000000;\'>GAME OVER</div>');
document.write('<img id=\'ti\' style=\'' + au + '\' src=\'' + dk + '\' >');
document.write('<img id=\'l1\' ' + V + '=\'cj()\' ' + aj + '=\'cf()\'  ' + ah + '=\'bY()\' style=\'' + au + '\' src=\'' + cz + '\' >');
document.write('<img id=\'sb\' style=\'position:absolute;top:0px;left:0px;visibility:hidden;z-Index:220;\' src=\'' + dL + '\' wifth=250>');
var ec = new Array(0, 1, 2, 3, 4, 5, 6);
var ep = new Array(7, 8, 9, 12, 10, 11, 12);
var ee = new Array(14, 13, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 21);
for (i = 0; i < 7; i++) {
	document.write('<img id=\'sprN' + i + '\' ' + V + '=\'cj();bQ(' + i + ');\' ' + aj + '=\'cf();bQ(' + i + ');\' ' + ah + '=\'bY();bQ(' + i + ');\'   style=\'position:absolute;top:0px;left:0px;visibility:hidden;z-Index:101;\' src=\'' + bO[ec[i]] + '\' >');
	document.write('<img id=\'sprSp' + i + '\' ' + V + '=\'cj()\'  ' + aj + '=\'cf();\' ' + ah + '=\'bY()\' style=\'position:absolute;top:0px;left:0px;visibility:hidden;z-Index:101;\' src=\'' + bO[ep[i]] + '\' >');
}
for (i = 0; i < 14; i++) {
	document.write('<img id=\'sprC' + i + '\' ' + V + '=\'cj()\'  ' + aj + '=\'cf();\' ' + ah + '=\'bY()\' style=\'position:absolute;top:0px;left:0px;visibility:hidden;z-Index:101;\' src=\'' + bO[ee[i]] + '\' >');
}
document.write('</div>');

function fj(aP, bf, bu, bP) {
	if (bu < aP) {
		var db = aP;
		aP = bu;
		bu = db;
		db = bf;
		bf = bP;
		bP = db;
	}
	var line = document.getElementById("sb");
	var length = Math.sqrt((aP - bu) * (aP - bu) + (bf - bP) * (bf - bP));
	line.style.width = length + "px";
	if (d == ai) {} else {
		var dh = Math.atan((bP - bf) / (bu - aP));
		fi("sb", aP - 0.5 * length * (1 - Math.cos(dh)), bf + 0.5 * length * Math.sin(dh), dh);
	}
};

function F(B) {
	document.getElementById(B).style.visibility = 'hidden';
};

function gW(B, xx, f, l, fC) {
	G(B, fC);
	document.getElementById(B).style.left = xx + "px";
	document.getElementById(B).style.top = f + "px";
	document.getElementById(B).style.visibility = 'visible';
	document.getElementById(B).style.zIndex = l;
};

function v(B, xx, f, l) {
	document.getElementById(B).style.left = xx + "px";
	document.getElementById(B).style.top = f + "px";
	document.getElementById(B).style.visibility = 'visible';
	document.getElementById(B).style.zIndex = l;
};

function gN(B, xx, f, cP, cq, l) {
	document.getElementById(B).style.left = xx + "px";
	document.getElementById(B).style.top = f + "px";
	document.getElementById(B).style.width = (cP - xx) + "px";
	document.getElementById(B).style.height = (cq - f) + "px";
	document.getElementById(B).style.visibility = 'visible';
	document.getElementById(B).style.zIndex = l;
};

function G(B, L) {
	if (d != ai) document.getElementById(B).style.opacity = L;
	else document.getElementById(B).style.filter = "alpha(opacity=" + (L * 100 + ")");
};

function bb(B) {
	return document.getElementById(B).offsetWidth;
};

function cl(B) {
	return document.getElementById(B).offsetHeight;
};

function U(L) {
	return (Math.floor(Math.random() * L));
};

function gK(c, xx, f, l) {
	if (d == as) document.getElementById(c).style.OTransform = "translate(" + xx + "px," + f + "px) scale(" + l + ",1)";
	else if (d == H) document.getElementById(c).style.MozTransform = "translate(" + xx + "px," + f + "px) scale(" + l + ",1)";
	else if (d == aw) document.getElementById(c).style.msTransform = "translate(" + xx + "px," + f + "px) scale(" + l + ",1)";
	else if (d == ae) {
		if (I == 1) document.getElementById(c).style.webkitTransform = "translate(" + xx + "px," + f + "px) scale(" + l + ",1)";
		else if (I == 3) {
			document.getElementById(c).style.left = xx + "px";
			document.getElementById(c).style.top = f + "px";
			document.getElementById(c).style.webkitTransform = "scale(" + l + ",1)";
		} else document.getElementById(c).style.webkitTransform = "translate3d(" + xx + "px," + f + "px,0px) scale(" + l + ",1)";
	} else document.getElementById(c).style.webkitTransform = "translate3d(" + xx + "px," + f + "px,0px) scale(" + l + ",1)";
};

function gM(c, xx, f, l, C) {
	if (d == as) document.getElementById(c).style.OTransform = "translate(" + xx + "px," + f + "px) scale(" + l + ") rotate(" + C + "deg)";
	else if (d == H) document.getElementById(c).style.MozTransform = "translate(" + xx + "px," + f + "px) scale(" + l + ") rotate(" + C + "deg)";
	else if (d == aw) document.getElementById(c).style.msTransform = "translate(" + xx + "px," + f + "px) scale(" + l + ") rotate(" + C + "deg)";
	else if (d == ae) {
		if (I == 1) document.getElementById(c).style.webkitTransform = "translate(" + xx + "px," + f + "px) scale(" + l + ") rotate(" + C + "deg)";
		else if (I == 3) {
			document.getElementById(c).style.left = xx + "px";
			document.getElementById(c).style.top = f + "px";
			document.getElementById(c).style.webkitTransform = "scale(" + l + ") rotate(" + C + "deg)";
		} else document.getElementById(c).style.webkitTransform = "translate3d(" + xx + "px," + f + "px,0px) scale(" + l + ") rotate(" + C + "deg)";
	} else document.getElementById(c).style.webkitTransform = "translate3d(" + xx + "px," + f + "px,0px) scale(" + l + ") rotate(" + C + "deg)";
};

function dO(c, xx, f, aY, aO) {
	if (d == ai) {} else if (d == as) document.getElementById(c).style.OTransform = "translate(" + xx + "px," + f + "px) scale(" + aY + "," + aO + ")";
	else if (d == H) document.getElementById(c).style.MozTransform = "translate(" + xx + "px," + f + "px) scale(" + aY + "," + aO + ")";
	else if (d == aw) document.getElementById(c).style.msTransform = "translate(" + xx + "px," + f + "px) scale(" + aY + "," + aO + ")";
	else if (d == ae) {
		if (I == 1) document.getElementById(c).style.webkitTransform = "translate(" + xx + "px," + f + "px) scale(" + aY + "," + aO + ")";
		else if (I == 3) {
			document.getElementById(c).style.left = xx + "px";
			document.getElementById(c).style.top = f + "px";
			document.getElementById(c).style.webkitTransform = "scale(" + aY + "," + aO + ")";
		} else document.getElementById(c).style.webkitTransform = "translate3d(" + xx + "px," + f + "px,0px) scale(" + aY + "," + aO + ")";
	} else document.getElementById(c).style.webkitTransform = "translate3d(" + xx + "px," + f + "px,0px) scale(" + aY + "," + aO + ")";
};

function gL(c, xx, f, cP, cq, l) {
	document.getElementById(c).style.left = ((xx)) + "px";
	document.getElementById(c).style.top = ((f)) + "px";
	document.getElementById(c).style.width = (cP * l) + "px";
	document.getElementById(c).style.height = (cq * l) + "px";
};

function gI(c, xx, f, ef, l) {
	document.getElementById(c).style.left = ((xx)) + "px";
	document.getElementById(c).style.top = ((f)) + "px";
	document.getElementById(c).style.fontSize = (ef * l) + "px";
};

function bm(c, xx, f, l) {
	if (d == ai) {
		document.getElementById(c).style.left = xx + "px";
		document.getElementById(c).style.top = f + "px";
	} else if (d == as) document.getElementById(c).style.OTransform = "translate(" + xx + "px," + f + "px) scale(" + l + ")";
	else if (d == H) document.getElementById(c).style.MozTransform = "translate(" + xx + "px," + f + "px) scale(" + l + ")";
	else if (d == aw) document.getElementById(c).style.msTransform = "translate(" + xx + "px," + f + "px) scale(" + l + ")";
	else if (d == ae) {
		if (I == 1) document.getElementById(c).style.webkitTransform = "translate(" + xx + "px," + f + "px) scale(" + l + ")";
		else if (I == 3) {
			document.getElementById(c).style.left = xx + "px";
			document.getElementById(c).style.top = f + "px";
			document.getElementById(c).style.webkitTransform = "scale(" + l + ")";
		} else document.getElementById(c).style.webkitTransform = "translate3d(" + xx + "px," + f + "px,0px) scale(" + l + ")";
	} else document.getElementById(c).style.webkitTransform = "translate3d(" + xx + "px," + f + "px,0px) scale(" + l + ")";
};

function dN(c, xx, f, l) {
	if (d == ai) {
		document.getElementById(c).style.zoom = l;
		document.getElementById(c).style.left = xx + "px";
		document.getElementById(c).style.top = f + "px";
	} else if (d == as) document.getElementById(c).style.OTransform = "translate(" + xx + "px," + f + "px) scale(" + l + ")";
	else if (d == H) document.getElementById(c).style.MozTransform = "translate(" + xx + "px," + f + "px) scale(" + l + ")";
	else if (d == aw) document.getElementById(c).style.msTransform = "translate(" + xx + "px," + f + "px) scale(" + l + ")";
	else if (d == ae) {
		if (I == 1) document.getElementById(c).style.webkitTransform = "translate(" + xx + "px," + f + "px) scale(" + l + ")";
		else if (I == 3) {
			document.getElementById(c).style.left = xx + "px";
			document.getElementById(c).style.top = f + "px";
			document.getElementById(c).style.webkitTransform = "scale(" + l + ")";
		} else document.getElementById(c).style.webkitTransform = "translate3d(" + xx + "px," + f + "px,0px) scale(" + l + ")";
	} else document.getElementById(c).style.webkitTransform = "translate3d(" + xx + "px," + f + "px,0px) scale(" + l + ")";
};

function bd(c, xx, f, C) {
	if (d == ai) {
		ed = "filter";
		var bJ = Math.cos(C * Math.PI * 2 / 360);
		var bU = Math.sin(C * Math.PI * 2 / 360);
		cx = bJ;
		cC = -bU;
		cE = bU;
		cB = bJ;
		document.getElementById(c).style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11=" + cx + ",M12=" + cC + ",M21=" + cE + ",M22=" + cB + ", sizingMethod='auto expand');";
		document.getElementById(c).style.left = xx - (bb(c) >> 1) + "px";
		document.getElementById(c).style.top = f - (cl(c) >> 1) + "px";
	} else if (d == as) document.getElementById(c).style.OTransform = "translate(" + xx + "px," + f + "px) rotate(" + C + "deg)";
	else if (d == H) document.getElementById(c).style.MozTransform = "translate(" + xx + "px," + f + "px) rotate(" + C + "deg)";
	else if (d == aw) document.getElementById(c).style.msTransform = "translate(" + xx + "px," + f + "px) rotate(" + C + "deg)";
	else if (d == ae) {
		if (I == 1) document.getElementById(c).style.webkitTransform = "translate(" + xx + "px," + f + "px) rotate(" + C + "deg)";
		else if (I == 3) {
			document.getElementById(c).style.left = xx + "px";
			document.getElementById(c).style.top = f + "px";
			document.getElementById(c).style.webkitTransform = "rotate(" + C + "deg)";
		} else document.getElementById(c).style.webkitTransform = "translate3d(" + xx + "px," + f + "px,0px) rotate(" + C + "deg)";
	} else document.getElementById(c).style.webkitTransform = "translate3d(" + xx + "px," + f + "px,0px) rotate(" + C + "deg)";
};

function j(c, xx, f) {
	if (d == ai) {
		document.getElementById(c).style.left = xx + "px";
		document.getElementById(c).style.top = f + "px";
	} else if (d == as) document.getElementById(c).style.OTransform = "translate(" + xx + "px," + f + "px)";
	else if (d == H) {
		document.getElementById(c).style.MozTransform = "translate(" + xx + "px," + f + "px)";
	} else if (d == aw) {
		document.getElementById(c).style.msTransform = "translate(" + xx + "px," + f + "px)";
	} else if (d == ae) {
		if (I == 1) document.getElementById(c).style.webkitTransform = "translate(" + xx + "px," + f + "px)";
		else if (I == 3) {
			document.getElementById(c).style.left = xx + "px";
			document.getElementById(c).style.top = f + "px";
		} else document.getElementById(c).style.webkitTransform = "translate3d(" + xx + "px," + f + "px,0px)";
	} else document.getElementById(c).style.webkitTransform = "translate3d(" + xx + "px," + f + "px,0px)";
};

function fi(c, xx, f, C) {
	if (d == ai) {
		ed = "filter";
		var bJ = Math.cos(C);
		var bU = Math.sin(C);
		cx = bJ;
		cC = -bU;
		cE = bU;
		cB = bJ;
		document.getElementById(c).style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11=" + cx + ",M12=" + cC + ",M21=" + cE + ",M22=" + cB + ", sizingMethod='auto expand');";
		document.getElementById(c).style.left = xx + "px";
		document.getElementById(c).style.top = f + "px";
	} else if (d == as) document.getElementById(c).style.OTransform = "translate(" + xx + "px," + f + "px) rotate(" + C + "rad)";
	else if (d == H) document.getElementById(c).style.MozTransform = "translate(" + xx + "px," + f + "px) rotate(" + C + "rad)";
	else if (d == aw) document.getElementById(c).style.msTransform = "translate(" + xx + "px," + f + "px) rotate(" + C + "rad)";
	else if (d == ae) {
		if (I == 1) document.getElementById(c).style.webkitTransform = "translate(" + xx + "px," + f + "px) rotate(" + C + "rad)";
		else if (I == 3) {
			document.getElementById(c).style.left = xx + "px";
			document.getElementById(c).style.top = f + "px";
			document.getElementById(c).style.webkitTransform = "rotate(" + C + "rad)";
		} else document.getElementById(c).style.webkitTransform = "translate3d(" + xx + "px," + f + "px,0px) rotate(" + C + "rad)";
	} else document.getElementById(c).style.webkitTransform = "translate3d(" + xx + "px," + f + "px,0px) rotate(" + C + "rad)";
};

function cy(ej) {
	M += ej;
	if (M < 10) aL = "0000" + M;
	else if (M >= 10 && M < 100) aL = "000" + M;
	else if (M >= 100 && M < 1000) aL = "00" + M;
	else if (M >= 1000 && M < 10000) aL = "0" + M;
	else aL = "" + M;
	var es = '' + aL;
	document.getElementById("s1").innerHTML = es;
};

function dZ() {
	v("s1", 2 + eu, 2, 1001);
	v("p1", m - bb("p1") - 2, 2, 1001);
};
var be;

function fz() {
	if (af == an) {
		if ((ea > 0) && (Q == 0) && (typeof(window.localStorage) != 'undefined')) {
			be = window.localStorage.getItem("ds_" + bg + "_fbnp");
			if (be == null) be = 0;
			if (be > ea - 1) {
				alert("PLEASE LOGIN WITH FAC" + "EBOOK TO PLAY AGAIN");
				return;
			} else {
				be++;
				window.localStorage.setItem("ds_" + bg + "_fbnp", be);
			}
		}
		F("f_li");
		F("f_lo");
		F("f_ba");
	}
	mydisable();
	F("ti");
	if (aV) F("hi");
	F("ng");
	aW = 1;
	M = 0;
	bs = 5;
	document.getElementById("p1").innerHTML = "" + bs;
	aL = "00000";
	cy(0);
	dK();
	if (bC) ab = cF;
};
var gQ = 0;
var bE = 0;
var ct = new Array();
for (var i = 0; i < A.length; i++) ct[i] = false;

function fl() {
	if (ab == cU) {
		window.scroll(0, 1);
		if (bE == A.length) {
			if (cI) {
				F("lob1");
				F("lob2");
			}
			if (bC) ab = dB;
			return;
		} else if (ct[bE] == false && A[bE].complete) {
			ct[bE] = true;
			bE++;
		}
	} else if (ab == dB) {
		cs += 5;
		if (cs == 55) {
			v("ti", 0, 0, 0);
			j("ti", 0, bM);
			G("lo", 0);
		}
		if (cs == 100) {
			ab = cW;
			F("lo");
			v("ng", 0, 0, 11);
			j("ng", -1000, -1000);
			if (aV) {
				v("hi", 0, 0, 11);
				j("hi", -1000, -1000);
			}
			if (af == an) {
				if (Q == 1) {
					document.getElementById("ng").src = bD;
					document.getElementById("hi").src = bF;
				}
				v("f_li", 0, 0, 11);
				j("f_li", -1000, -1000);
				v("f_lo", 0, 0, 11);
				j("f_lo", -1000, -1000);
				v("f_ba", 0, 0, 10);
				j("f_ba", 0, t - 42 * g);
			}
		}
	} else if (ab == cW) {
		if (af == an) {
			if (Q == 0) {
				j("f_li", T - (bb("f_li") >> 1), t - 37 * g);
				j("f_lo", -1000, -1000);
			} else {
				j("f_lo", T - (bb("f_lo") >> 1), t - 37 * g);
				j("f_li", -1000, -1000);
			}
			j("ng", (m >> 1) - (64 * g), t - (38 * g) - (64 * g) - (64 * g));
			if (aV) j("hi", (m >> 1) - (64 * g), t - (38 * g) - (64 * g));
		} else {
			j("ng", (m >> 1) - (64 * g), t - (38 * g) - (64 * g) - (16 * g));
			if (aV) j("hi", (m >> 1) - (64 * g), t - (38 * g) - (16 * g));
		}
	} else if (ab == dA) {
		if (bo++ > 60) {
			bo = 0;
			dK();
			ab = cF;
		}
	} else if (ab == cF) {
		fm();
	} else if (ab == dr) {
		bd("sb", -1000, -1000, 0);
		aq -= 0.2;
		if (aq < 0) aq = 0;
		G("m1", aq);
		for (var c = 0; c < 7; c++) {
			al[c] -= 0.2;
			G("sprN" + c, al[c]);
			G("sprSp" + c, al[c]);
		}
		for (var c = 0; c < 14; c++) {
			P[c] -= 0.2;
			if (P[c] < 0) P[c] = 0;
			G("sprC" + (c), P[c]);
		}
		bm("g1", cv, cu, 2 - (bo / 60));
		G("g1", (bo / 60));
		if (bo++ > 60) {
			bo = 0;
			dR();
			if (aV) ab = dm;
			else bt();
		}
	} else if (ab == dm) {
		fg();
	}
};
var fV = 0;
var gd = 1;
var fY = 2;
var fX = 3;

function fc() {
	var bq = false;
	try {
		bq = new ActiveXObject("Msxml2.XMLHTTP")
	} catch (e) {
		try {
			bq = new ActiveXObject("Microsoft.XMLHTTP")
		} catch (ha) {
			bq = false
		}
	}
	if (!bq && typeof XMLHttpRequest != 'undefined') {
		bq = new XMLHttpRequest();
	}
	return bq;
};

function fk() {
	var gV = new Date();
	if (av) {
		av.open("POST", aT + '&hi=2&fb=' + Q, true);
		av.onreadystatechange = fe;
		av.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		var cA = "n=" + ac + "&s=" + am + "&c=" + bv;
		if (af == an) {
			cA = "n=" + dD(ac) + "&s=" + am + "&c=" + bv + '&i=' + cQ;
		}
		av.setRequestHeader("Content-length", cA.length);
		av.setRequestHeader("Connection", "close");
		av.send(cA);
	}
};

function fe() {
	if (av.readyState == 4) {
		if (av.status == 200) {
			bt();
			if (fq) {
				var ak = aT + '&hi=1&fb="+Q;';
				location.href = ak;
			}
		} else {
			alert("Error ...");
			bt();
		}
	}
};
var av;
var ek = "Submit your Score";
var gx = "Insert your name: ";
var eh = "The name must be at least 4 characters!<br>Please insert only charachers and numbers!";

function ff(L) {
	if (L.match(/^[a-zA-Z0-9]+$/)) return true;
	else return false;
};
var ac = "";
var am;
var cr = 0;
var bh = "";
var cQ;

function fd() {
	if (typeof(window.localStorage) != 'undefined') {
		bh = window.localStorage.getItem("ds_username");
		if (bh == null) bh = "";
	}
};

function fp() {
	if (typeof(window.localStorage) != 'undefined') {
		bh = ac;
		window.localStorage.setItem("ds_username", bh);
	}
};

function fg() {
	if (cr == 0) {
		cr = 1;
		F("ng");
		F("hi");
		F("ti");
		fd();
		par_score = M;
		par_level = aW;
		par_game = bg;
		//ds_HS();
		var aU = '<center><font color=\'#ff0000\'><b>' + ek + '</b></font><br>to <b>' + dJ + '</b><br><br><font color=\'#ffff00\'>' + M + '</font>';
		if (af == fV) {
			aU += '<br><br>' + gx + '<input style\'font-size:' + (14 * g) + 'px;\' type=text id=\'user\' name=\'user\' size=\'12\' value=\'' + bh + '\' style=\'font-size:' + (16 * g) + 'px;\' /><input type=\'button\'  value=\'OK\'  ' + V + '=\'go()\' style=\'background-color:#dddddd;font-size:' + (16 * g) + 'px;\' /><br><br><small><font color=\'#bfffff\'>' + eh + '</font></small></center>';
			document.getElementById("hs").innerHTML = aU;
			v("hs", 0, 0, 200);
			v('co', 0, 0, 200);
			j("hs", T - (document.getElementById('hs').offsetWidth >> 1), 48 * g);
			j('co', T - (document.getElementById('co').offsetWidth >> 1), 350 * g);
		} else if (af == gd) {
			document.getElementById('su').innerHTML = '<img ' + K + '=\'cc();\' src=\'' + bn + '\' >';
			v('su', 0, 0, 200);
			j('su', T - (document.getElementById('su').offsetWidth >> 1), 220 * g);
			document.getElementById("hs").innerHTML = aU;
			v("hs", 0, 0, 200);
			v('co', 0, 0, 200);
			j("hs", T - (document.getElementById('hs').offsetWidth >> 1), 48 * g);
			j('co', T - (document.getElementById('co').offsetWidth >> 1), 350 * g);
		} else if (af == fY) {
			bt();
		} else if (af == fX) {
			aU += ds_SHS();
			document.getElementById("hs").innerHTML = aU;
			v("hs", 0, 0, 200);
			v('co', 0, 0, 200);
			j("hs", T - (document.getElementById('hs').offsetWidth >> 1), 48 * g);
			j('co', T - (document.getElementById('co').offsetWidth >> 1), 350 * g);
		} else if (af == an) {
			if (Q == 1) {
				am = M;
				document.getElementById('su').innerHTML = '<img ' + K + '=\'cc();\' src=\'' + bn + '\' >';
				v('su', 0, 0, 200);
				j('su', T - (document.getElementById('su').offsetWidth >> 1), 220 * g);
				v('f_p0', 0, 0, 200);
				j('f_p0', T - (document.getElementById('f_p0').offsetWidth >> 1), 130 * g);
				v('f_n0', 0, 0, 200);
				j('f_n0', T - (document.getElementById('f_n0').offsetWidth >> 1), 190 * g);
				v("f_lo", 0, 0, 11);
				j("f_lo", T - (bb("f_lo") >> 1), 2 * g);
			} else aU = "<br><br><br><br><br><br><br><br><br>Please <b>LOGIN WITH FACEB" + "OOK</b> to submit your Score";
			document.getElementById("hs").innerHTML = aU;
			v("hs", 0, 0, 200);
			v('co', 0, 0, 200);
			j("hs", T - (document.getElementById('hs').offsetWidth >> 1), 48 * g);
			j('co', T - (document.getElementById('co').offsetWidth >> 1), 350 * g);
		}
	}
};

function cc() {
	if (fs) {
		av = new fc();
		fk();
	} else {
		bt();
		var ak = aT + '&hi=2&fb=' + Q + '&n=' + ac + '&s=' + am + '&c=' + bv + '&r=1';
		if (af == an) {
			ak = aT + '&hi=2&fb=' + Q + '&n=' + dD(ac) + '&s=' + am + '&c=' + bv + '&r=1&i=' + cQ;
			location.href = ak;
		} else if (cX == 0);
		else location.href = ak;
	}
};

function go() {
	var dg = document.getElementById('user').value;
	ac = dg;
	if ((dg.length > 3) && ff(dg)) {
		fp();
		am = M;
		bv = ac.charAt(1) + U(9) + (am * 89) + U(9) + ac.charAt(3) + 'fc1' + U(9) + ac.charAt(0) + U(9) + ac.charAt(1) + '4z3' + (am * 7) + '3247z11';
		if (cX == 0) {
			var ak = aT + '&hi=2&n=' + ac + '&s=' + am + '&c=' + bv + '&r=1';
			document.getElementById('su').innerHTML = '<a href="' + ak + '"><img ' + K + '=\'cc();\' src=\'' + bn + '\' border=0></a>';
		} else document.getElementById('su').innerHTML = '<img ' + K + '=\'cc();\' src=\'' + bn + '\' >';
		v('su', 0, 0, 200);
		j('su', T - (document.getElementById('su').offsetWidth >> 1), 220 * g);
	}
};

function dD(cJ) {
	cJ = (cJ + '').toString();
	return encodeURIComponent(cJ).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
};

function bt() {
	//myshow();
	bM = (60 * g);
	for (i = 0; i < 100; i++) window.scroll(0, 1);
	cr = 0;
	F("su");
	F("co");
	F("hs");
	v("ti", 0, 0, 1);
	j("ti", 0, bM);
	v("ng", 0, 0, 11);
	j("ng", -1000, -1000);
	if (aV) {
		v("hi", 0, 0, 11);
		j("hi", -1000, -1000);
	}
	if (af == an) {
		F("f_n0");
		F("f_p0");
		v("f_li", 0, 0, 11);
		j("f_li", -1000, -1000);
		v("f_lo", 0, 0, 11);
		j("f_lo", -1000, -1000);
		v("f_ba", 0, 0, 10);
		j("f_ba", 0, t - 42 * g);
	}
	ab = cW;
};

function dR() {
	F("g1");
	F("s1");
	F("l1");
	F("p1");
	F("sb");
	F("m1");
	for (i = 0; i < 7; i++) {
		document.getElementById("sprN" + i).style.visibility = 'hidden';
		document.getElementById("sprSp" + i).style.visibility = 'hidden';
	}
	for (i = 0; i < 14; i++) document.getElementById("sprC" + i).style.visibility = 'hidden';
};
var gJ = 0;

function cZ() {
	var L = U(7);
	if (aM[L] == 1)
		for (var c = 0; c < 7; c++)
			if (aM[(L + c + 1) % 7] == 0) {
				L = (L + c + 1) % 7;
			}
	aM[L] = 1;
	aA[L] = U(m - (112 * g));
	aG[L] = t + (80 * g) + U(260 * g);
	aX[L] = 0;
	bw[L] = (1 + U(11));
	bj[L] = -df;
	ck[L] = (-2 * g + U(5 * g));
};

function du() {
	bs--;
	if (bs <= 0) bs = 0;
	document.getElementById("p1").innerHTML = "" + bs;
	dZ();
};
var aK;
var bW;
var bK;
var df;

function fm() {
	if (move++ > 50) {
		move = 0;
		ao = 0;
		ay = 0;
	}
	for (var c = 0; c < 7; c++) {
		if (aM[c] == 1) {
			if ((aC[c] == 0)) {
				bj[c] += bK;
				aG[c] += bj[c];
				aA[c] += ck[c];
				if ((aA[c] < 0) || (aA[c] > m - (112 * g))) ck[c] *= -1;
				if (aG[c] < (t >> 2)) bj[c] += bK;
				aX[c] += bw[c];
				bd("sprN" + c, aA[c], aG[c], aX[c]);
				if ((aG[c] > t + 40 * g) && (bj[c] > 0)) {
					aC[c] = 0;
					aM[c] = 0;
					if (c != 6) {
						du();
					}
					cZ();
				}
			} else {
				bd("sprSp" + (c), cH[c], cV[c], aX[c]);
				al[c] -= 0.025;
				if (al[c] < 0) al[c] = 0;
				G("sprSp" + c, al[c]);
				aq -= 0.025;
				if (aq < 0) {
					aq = 0;
					bm("m1", -1000, -1000, 1);
				} else bm("m1", (m >> 1) - (bb("m1") >> 1), t - cl("m1") * 1.5, 2 - aq);
				G("m1", aq);
				P[c * 2] -= 0.025;
				if (P[c * 2] < 0) P[c * 2] = 0;
				G("sprC" + (c * 2), P[c * 2]);
				P[c * 2 + 1] -= 0.025;
				if (P[c * 2 + 1] < 0) P[c * 2 + 1] = 0;
				G("sprC" + (c * 2 + 1), P[c * 2 + 1]);
				bc[c * 2] += bK;
				bc[c * 2 + 1] += bK;
				aQ[c * 2] += bB[c * 2];
				aB[c * 2] += bc[c * 2];
				aQ[c * 2 + 1] += bB[c * 2 + 1];
				aB[c * 2 + 1] += bc[c * 2 + 1];
				ba[c * 2] += bx[c * 2];
				ba[c * 2 + 1] += bx[c * 2 + 1];
				bd("sprC" + (c * 2 + 1), aQ[c * 2], aB[c * 2], ba[c * 2]);
				bd("sprC" + (c * 2), aQ[c * 2 + 1], aB[c * 2 + 1], ba[c * 2 + 1]);
				if ((aB[c * 2] > t) && (aB[c * 2 + 1] > t)) {
					aC[c] = 0;
					aM[c] = 0;
					cZ();
				}
			}
		}
	}
	if (ao == 2) {
		fj(cR, cT, cL, cN);
		if (aK > 0) aK -= 0.2;
		else {
			aK = 0;
			ao = 0;
		}
		G("sb", aK);
	}
	if (bs <= 0) {
		cv = T - (bb("g1") >> 1);
		cu = (t >> 1) - (cl("g1") >> 1);
		v("g1", 0, 0, 100);
		bm("g1", cv, cu, 0);
		ab = dr;
	} else if (cg >= dF) {
		dR();
		aW++;
		ab = dA;
	}
};
var cv = 0;
var cu = 0;
var aA = new Array();
var aG = new Array();
var bj = new Array();
var ck = new Array();
var aX = new Array();
var bw = new Array();
var aQ = new Array();
var aB = new Array();
var ba = new Array();
var bB = new Array();
var bc = new Array();
var bx = new Array();
var P = new Array();
var cH = new Array();
var cV = new Array();
var al = new Array();
var aq;
var aC = new Array();
var aM = new Array();
var ay;

function bQ(c) {
	if (aS == 0) return;
	if ((aD) && (d != H)) window.event.preventDefault();
	if ((ao != 0) && (aC[c] == 0)) {
		ay++;
		document.getElementById("m1").style.color = "#ffffff";
		if (c == 6) {
			du();
			ay = 0;
			document.getElementById("m1").style.color = "#ff7f00";
			document.getElementById("m1").innerHTML = "OH NO!";
		} else if (ay == 1) {
			cg++;
			cy(1);
			document.getElementById("m1").innerHTML = "+1";
		} else {
			cg++;
			cy(50 * (ay - 1) - 1);
			document.getElementById("m1").innerHTML = "+" + (50 * (ay - 1));
		}
		bm("m1", -1000, -1000, 1);
		G("m1", 1);
		aq = 1;
		aC[c] = 1;
		bd("sprN" + c, -1000, -1000, 0);
		cH[c] = aA[c];
		cV[c] = aG[c];
		al[c] = 1;
		P[c * 2] = 1;
		P[c * 2 + 1] = 1;
		aQ[c * 2] = aA[c];
		aB[c * 2] = aG[c];
		aQ[c * 2 + 1] = aA[c];
		aB[c * 2 + 1] = aG[c];
		ba[c * 2] = aX[c];
		ba[c * 2 + 1] = aX[c];
		bx[c * 2] = bw[c];
		bx[c * 2 + 1] = bw[c];
		bB[c * 2] = (-4 - U(2)) * g;
		bc[c * 2] = (-8 - U(4)) * g;
		bB[c * 2 + 1] = (4 + U(2)) * g;
		bc[c * 2 + 1] = (-8 - U(4)) * g;
	}
};
var move;
var cR, cT, cL, cN;
var ao;
var aS = 0;

function cj() {
	if (d == H) return;
	if ((aD) && (d != H)) window.event.preventDefault();
	if (window.event.touches) e = window.event.touches[0];
	else e = window.event; if (e.clientX) {
		var ax = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		var az = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		var aE = ((ax - ((D - m * r) / 2)) / r);
		var aF = ((az - ((O - t * r) / 2)) / r);
	} else {
		var aE = ((e.pageX - ((D - m * r) / 2)) / r);
		var aF = ((e.pageY - ((O - t * r) / 2)) / r);
	}
	aS = 1;
	cR = aR = aE;
	cT = aN = aF - 10;
	ao = 1;
	ay = 0;
	move = 0;
};
var aR, aN;

function cf() {
	if (aS == 0) return;
	if (d == H) return;
	if ((aD) && (d != H)) window.event.preventDefault();
	if (window.event.touches) var e = window.event.touches[0];
	else var e = window.event; if (e.clientX) {
		var ax = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		var az = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		var aE = ((ax - ((D - m * r) / 2)) / r);
		var aF = ((az - ((O - t * r) / 2)) / r);
	} else {
		var ax = e.pageX;
		var az = e.pageY;
		var aE = ((ax - ((D - m * r) / 2)) / r);
		var aF = ((az - ((O - t * r) / 2)) / r);
	}
	aR = aE;
	aN = aF - 10;
	var c = document.elementFromPoint(ax, az).id;
	if (c.substring(0, 4) == "sprN") {
		var bN = c.substring(4);
		if ((ao != 0) && (aC[bN] == 0)) {
			bQ(bN);
		}
	}
	window.event.cancelBubble = true;
	window.event.returnValue = false;
};

function bY() {
	if (d == H) return;
	aS = 0;
	cL = aR;
	cN = aN;
	ao = 2;
	aK = 1;
	G("sb", aK);
	j("sb", -1000, -1000);
};

function bZ(e) {
	e.stopPropagation();
	e.preventDefault();
	var aE = ((e.pageX - ((D - m * r) / 2)) / r);
	var aF = ((e.pageY - ((O - t * r) / 2)) / r);
	aS = 1;
	cR = aR = aE;
	cT = aN = aF - 10;
	ao = 1;
	ay = 0;
	move = 0;
};
var aR, aN;

function ce(e) {
	if (aS == 0) return;
	e.stopPropagation();
	e.preventDefault();
	var ax = e.pageX;
	var az = e.pageY;
	var aE = ((ax - ((D - m * r) / 2)) / r);
	var aF = ((az - ((O - t * r) / 2)) / r);
	aR = aE;
	aN = aF - 10;
	var c = document.elementFromPoint(ax, az).id;
	if (c.substring(0, 4) == "sprN") {
		var bN = c.substring(4);
		if ((ao != 0) && (aC[bN] == 0)) {
			bQ(bN);
		}
	}
};

function bX() {
	aS = 0;
	cL = aR;
	cN = aN;
	ao = 2;
	aK = 1;
	G("sb", aK);
	j("sb", -1000, -1000);
};
if ((d == H)) {
	document.getElementById("l1").addEventListener('mousedown', function(e) {
		bZ(e)
	}, false);
	document.getElementById("l1").addEventListener('mousemove', function(e) {
		ce(e)
	}, false);
	document.getElementById("l1").addEventListener('mouseup', function(e) {
		bX(e)
	}, false);
	for (var aJ = 0; aJ < 7; aJ++) {
		document.getElementById("sprN" + aJ).addEventListener('mousedown', function(e) {
			bZ(e)
		}, false);
		document.getElementById("sprN" + aJ).addEventListener('mousemove', function(e) {
			ce(e)
		}, false);
		document.getElementById("sprN" + aJ).addEventListener('mouseup', function(e) {
			bX(e)
		}, false);
		document.getElementById("sprSp" + aJ).addEventListener('mousedown', function(e) {
			bZ(e)
		}, false);
		document.getElementById("sprSp" + aJ).addEventListener('mousemove', function(e) {
			ce(e)
		}, false);
		document.getElementById("sprSp" + aJ).addEventListener('mouseup', function(e) {
			bX(e)
		}, false);
	}
	for (i = 0; i < 14; i++) {
		document.getElementById("sprC" + i).addEventListener('mousedown', function(e) {
			bZ(e)
		}, false);
		document.getElementById("sprC" + i).addEventListener('mousemove', function(e) {
			ce(e)
		}, false);
		document.getElementById("sprC" + i).addEventListener('mouseup', function(e) {
			bX(e)
		}, false);
	}
}
var cg, dF;

function dK() {
	df = (22 + (aW)) * g;
	bK = df / 48;
	bW = 2 + aW;
	if (bW > 6) bW = 6;
	cg = 0;
	dF = 20 + aW * 4;
	for (var c = 0; c < 7; c++) {
		aA[c] = 0;
		aG[c] = 0;
		bj[c] = 0;
		ck[c] = 0;
		aX[c] = 0;
		bw[c] = 0;
		aQ[c] = 0;
		aB[c] = 0;
		ba[c] = 0;
		bB[c] = 0;
		bc[c] = 0;
		bx[c] = 0;
		P[c] = 0;
		cH[c] = 0;
		cV[c] = 0;
		al[c] = 0;
		aC[c] = 0;
		aM[c] = 0;
		v("sprN" + c, 0, 0, 10);
		v("sprSp" + c, 0, 0, 8);
		j("sprN" + c, -1000, -1000);
		j("sprSp" + c, -1000, -1000);
		aC[c] = 0;
		aM[c] = 0;
		al[c] = 1;
		G("sprN" + c, al[c]);
		G("sprSp" + c, al[c]);
	}
	for (var c = 0; c < bW; c++) cZ();
	for (var c = 0; c < 14; c++) {
		v("sprC" + c, 0, 0, 9);
		j("sprC" + c, -1000, -1000);
		P[c] = 1;
		G("sprC" + c, P[c]);
	}
	v("sb", 0, 0, 100);
	j("sb", -1000, -1000);
	G("sb", 1);
	ao = 0;
	ay = 0;
	var dC = (aW % 3);
	if (dC == 1) {
		document.getElementById("l1").src = cz;
	} else if (dC == 2) {
		document.getElementById("l1").src = dv;
	} else {
		document.getElementById("l1").src = dy;
	}
	v("l1", 0, 0, 1);
	G("m1", 0.9);
	v("m1", 0, 0, 2001);
	bm("m1", -1000, -1000, 1);
	aq = 1;
	dZ();
};

function da() {
	for (i = 0; i < 100; i++) window.scroll(0, 1);
	if (aD) {
		D = window.innerWidth;
		O = window.innerHeight;
	} else {
		D = document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth;
		O = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
	} if (D / O > m / (t)) {
		r = O / (t);
	} else {
		r = D / (m);
	}
	document.getElementById("all").style.clip = "rect(0px," + m + "px," + (t) + "px,0px)";
	if ((D < O) && ((d == bG) || (d == ae) || (d == bH) || ci)) dO("all", 0, 0, D / (m), O / (t));
	else dN("all", ((D - m * r) / 2), 0, r); if (cK) {
		if (par_ad2) bM = (60 * g) / r;
		else bM = (60 * g);
		par_adx2 = ((D - m) / 2);
		par_adx3 = ((D - m * r) / 2);
		par_adx4 = ((D - m * r) / 2) + (m * r);
		ds_RZ();
	}
};

function dw() {
	var fF = new Date();
	var fw = fF.getTime();
	fl();
	var fv = new Date();
	var eE = fv.getTime();
	cS = ap - (eE - fw);
	if (cS < 10) cS = 10;
	cD = setTimeout('dw()', cS);
};
var cD;

function test() {
	if (cD) clearTimeout(cD);
	if ((d == ae) && (fu));
	else document.body.style.overflow = 'hidden'; if ((d != 3) && (d != 6)) document.addEventListener(by, fy, false);
	for (i = 0; i < 200; i++) window.scroll(0, 1);
	da();
	ab = cU;
	document.body.style.backgroundColor = "#000000";
	dw();
};

function fA() {
	if ((d == ae) && (fx)) window.location.reload();
	da();
};
window.onorientationchange = fA;
window.onresize = da;
window.onload = test;