(function(){var c={id:"4b0c844bc745979ebe00fede9ce45e18",dm:["count.knowsky.com","count.2881.com"],etrk:[],js:"tongji.baidu.com/hm-web/js/",icon:'/hmt/icon/21|gif|20|20',br:false,ctrk:false,align:-1,nv:0,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,se:[]};
var l=!0,m=null,n=!1;(function(){function a(){if(!a.b){a.b=l;for(var b=0,d=e.length;b<d;b++)e[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,1);return}a()}var d=n,e=[],f;document.addEventListener?f=function(){document.removeEventListener("DOMContentLoaded",f,n);a()}:document.attachEvent&&(f=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",f),a())});(function(){if(!d)if(d=l,"complete"===document.readyState)a.b=l;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
f,n),window.addEventListener("load",a,n);else if(document.attachEvent){document.attachEvent("onreadystatechange",f);window.attachEvent("onload",a);var e=n;try{e=window.frameElement==m}catch(k){}document.documentElement.doScroll&&e&&b()}})();return function(b){a.b?b():e.push(b)}})().b=n;var q=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=d[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var d={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return a(d);case "boolean":return String(d);
default:if(d===m)return"null";if(d instanceof Array){var f=["["],h=d.length,k,g,p;for(g=0;g<h;g++)switch(p=d[g],typeof p){case "undefined":case "function":case "unknown":break;default:k&&f.push(","),f.push(q(p)),k=1}f.push("]");return f.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+b(d.getMonth()+1)+"-"+b(d.getDate())+"T"+b(d.getHours())+":"+b(d.getMinutes())+":"+b(d.getSeconds())+'"';k=["{"];for(h in d)if(Object.prototype.hasOwnProperty.call(d,h))switch(g=d[h],typeof g){case "undefined":case "unknown":case "function":break;
default:f&&k.push(","),f=1,k.push(q(h)+":"+q(g))}k.push("}");return k.join("")}}}();var aa=navigator.cookieEnabled,ba=navigator.javaEnabled(),ca=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"",da=(window.screen.width||0)+"x"+(window.screen.height||0),ia=window.screen.colorDepth||0;function t(a,b,d){var e;d.d&&(e=new Date,e.setTime(e.getTime()+d.d));document.cookie=a+"="+b+(d.domain?"; domain="+d.domain:"")+(d.path?"; path="+d.path:"")+(e?"; expires="+e.toGMTString():"")+(d.p?"; secure":"")};function u(a,b){if(window.sessionStorage)try{window.sessionStorage.setItem(a,b)}catch(d){}}function z(a){return window.sessionStorage?window.sessionStorage.getItem(a):m};function A(a,b,d){a.attachEvent?a.attachEvent("on"+b,function(b){d.call(a,b)}):a.addEventListener&&a.addEventListener(b,d,n)};function B(a,b){var d=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return d?d[3]:m}function C(a){return(a=(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):m)?a.replace(/:\d+$/,""):a};function D(a,b){return"[object "+b+"]"==={}.toString.call(a)};var E;function H(){if(!E)try{E=document.createElement("input"),E.type="hidden",E.style.display="none",E.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(E)}catch(a){return n}return l}function K(a,b,d){var e=new Date;e.setTime(e.getTime()+d||31536E6);try{window.localStorage?(b=e.getTime()+"|"+b,window.localStorage.setItem(a,b)):H()&&(E.expires=e.toUTCString(),E.load(document.location.hostname),E.setAttribute(a,b),E.save(document.location.hostname))}catch(f){}}
function L(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),d=a.substring(0,b)-0;if(d&&d>(new Date).getTime())return a.substring(b+1)}}else if(H())try{return E.load(document.location.hostname),E.getAttribute(a)}catch(e){}return m};function P(a,b){var d=new Image,e="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[e]=d;d.onload=d.onerror=d.onabort=function(){d.onload=d.onerror=d.onabort=m;d=window[e]=m;b&&b(a)};d.src=a};var Q=0,R=Math.round(+new Date/1E3),S="https:"==document.location.protocol?"https:":"http:",W="cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ");function ja(){if("undefined"==typeof window["_bdhm_loaded_"+c.id]){window["_bdhm_loaded_"+c.id]=l;var a=this;a.a={};a.o=[];a.n={push:function(){a.g.apply(a,arguments)}};a.c=0;a.f=n;ka(a)}}
ja.prototype={getData:function(a){try{var b=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie);return(b?b[2]:m)||z(a)||L(a)}catch(d){}},setData:function(a,b,d){try{t(a,b,{domain:la(),path:ma(),d:d}),d?K(a,b,d):u(a,b)}catch(e){}},g:function(a){if(D(a,"Array")){var b=function(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a},d=function(a){for(var b in a)if({}.hasOwnProperty.call(a,b)){var e=a[b];D(e,"Object")||D(e,"Array")?d(e):a[b]=String(e)}};switch(a[0]){case "_trackPageview":if(1<
a.length&&a[1].charAt&&"/"==a[1].charAt(0)){this.a.api|=4;this.a.et=0;this.a.ep="";this.f?(this.a.nv=0,this.a.st=4):this.f=l;var b=this.a.u,e=this.a.su;this.a.u=S+"//"+document.location.host+a[1];this.a.su=document.location.href;X(this);this.a.u=b;this.a.su=e}break;case "_trackEvent":2<a.length&&(this.a.api|=8,this.a.nv=0,this.a.st=4,this.a.et=4,this.a.ep=b(a[1])+"*"+b(a[2])+(a[3]?"*"+b(a[3]):"")+(a[4]?"*"+b(a[4]):""),X(this));break;case "_setCustomVar":if(4>a.length)break;var e=a[1],f=a[4]||3;if(0<
e&&6>e&&0<f&&4>f){this.c++;for(var h=(this.a.cv||"*").split("!"),k=h.length;k<e-1;k++)h.push("*");h[e-1]=f+"*"+b(a[2])+"*"+b(a[3]);this.a.cv=h.join("!");a=this.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?this.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):na()}break;case "_trackOrder":a=a[1];D(a,"Object")&&(d(a),this.a.api|=16,this.a.nv=0,this.a.st=4,this.a.et=94,this.a.ep=q(a),X(this));break;case "_trackMobConv":if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])this.a.api|=
32,this.a.et=93,this.a.ep=a,X(this);break;case "_trackRTPageview":a=a[1];D(a,"Object")&&(d(a),a=q(a),512>=encodeURIComponent(a).length&&(this.a.api|=64,this.a.rt=a));break;case "_trackRTEvent":a=a[1],D(a,"Object")&&(d(a),a=q(a),1024>=encodeURIComponent(a).length&&(b=this.a.rt,this.a.api|=128,this.a.et=90,this.a.rt=a,X(this),this.a.rt=b))}}}};
function oa(){var a=z("Hm_unsent_"+c.id);if(a)for(var a=a.split(","),b=0,d=a.length;b<d;b++)P(S+"//"+decodeURIComponent(a[b]).replace(/^https?:\/\//,""),function(a){Y(a)})}function Y(a){var b=z("Hm_unsent_"+c.id)||"";b&&((b=b.replace(RegExp(encodeURIComponent(a.replace(/^https?:\/\//,"")).replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),"").replace(/,$/,""))?u("Hm_unsent_"+c.id,b):window.sessionStorage&&window.sessionStorage.removeItem("Hm_unsent_"+c.id))}
function pa(a,b){var d=z("Hm_unsent_"+c.id)||"",e=a.a.u?"":"&u="+encodeURIComponent(document.location.href),d=encodeURIComponent(b.replace(/^https?:\/\//,"")+e)+(d?","+d:"");u("Hm_unsent_"+c.id,d)}function X(a){a.a.rnd=Math.round(2147483647*Math.random());a.a.api=a.a.api||a.c?a.a.api+"_"+a.c:"";var b=S+"//hm.baidu.com/hm.gif?"+qa(a);a.a.api=0;a.c=0;pa(a,b);P(b,function(a){Y(a)})}function ra(a){return function(){a.a.nv=0;a.a.st=4;a.a.et=3;a.a.ep=sa.m()+","+sa.l();X(a)}}
function ka(a){try{var b,d,e,f,h,k,g;Q=a.getData("Hm_lpvt_"+c.id)||0;13==Q.length&&(Q=Math.round(Q/1E3));if(document.referrer){var p=n;if(Z(document.referrer)&&Z(document.location.href))p=l;else var F=C(document.referrer),p=$(F||"",document.location.hostname);d=p?R-Q>c.vdur?1:4:3}else d=R-Q>c.vdur?1:4;b=4!=d?1:0;if(k=a.getData("Hm_lvt_"+c.id)){g=k.split(",");for(var r=g.length-1;0<=r;r--)13==g[r].length&&(g[r]=""+Math.round(g[r]/1E3));for(;2592E3<R-g[0];)g.shift();h=4>g.length?2:3;for(1===b&&g.push(R);4<
g.length;)g.shift();k=g.join(",");f=g[g.length-1]}else k=R,f="",h=1;a.setData("Hm_lvt_"+c.id,k,c.age);a.setData("Hm_lpvt_"+c.id,R);e=R==a.getData("Hm_lpvt_"+c.id)?"1":"0";if(0==c.nv&&Z(document.location.href)&&(""==document.referrer||Z(document.referrer)))b=0,d=4;a.a.nv=b;a.a.st=d;a.a.cc=e;a.a.lt=f;a.a.lv=h;a.a.si=c.id;a.a.su=document.referrer;a.a.ds=da;a.a.cl=ia+"-bit";a.a.ln=ca;a.a.ja=ba?1:0;a.a.ck=aa?1:0;a.a.lo="number"==typeof _bdhm_top?1:0;var v=a.a;b="";if(navigator.plugins&&navigator.mimeTypes.length){var s=
navigator.plugins["Shockwave Flash"];s&&s.description&&(b=s.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{var I=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");I&&(b=I.GetVariable("$version"))&&(b=b.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(xa){}v.fl=b;a.a.v="1.0.63";a.a.cv=decodeURIComponent(a.getData("Hm_cv_"+c.id)||"");1==a.a.nv&&(a.a.tt=document.title||"");a.a.api=0;var J=document.location.href;a.a.cm=B(J,"hmmd")||"";a.a.cp=B(J,"hmpl")||"";a.a.cw=B(J,
"hmkw")||"";a.a.ci=B(J,"hmci")||"";a.a.cf=B(J,"hmsr")||"";0==a.a.nv?oa():Y(".*");if(""!=c.icon){var w,x=c.icon.split("|"),T="http://tongji.baidu.com/hm-web/welcome/ico?s="+c.id,U=("http:"==S?"http://eiv":"https://bs")+".baidu.com"+x[0]+"."+x[1];switch(x[1]){case "swf":var ea=x[2],fa=x[3],v="s="+T,s="HolmesIcon"+R;w='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+s+'" width="'+ea+'" height="'+fa+'"><param name="movie" value="'+U+'" /><param name="flashvars" value="'+(v||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+
s+'" width="'+ea+'" height="'+fa+'" src="'+U+'" flashvars="'+(v||"")+'" allowscriptaccess="always" /></object>';break;case "gif":w='<a href="'+T+'" target="_blank"><img border="0" src="'+U+'" width="'+x[2]+'" height="'+x[3]+'"></a>';break;default:w='<a href="'+T+'" target="_blank">'+x[0]+"</a>"}document.write(w)}var M=document.location.hash.substring(1),ua=RegExp(c.id),va=-1<document.referrer.indexOf("baidu.com")?l:n;if(M&&ua.test(M)&&va){var N=document.createElement("script");N.setAttribute("type",
"text/javascript");N.setAttribute("charset","utf-8");N.setAttribute("src",S+"//"+c.js+B(M,"jn")+"."+B(M,"sx")+"?"+a.a.rnd);var ga=document.getElementsByTagName("script")[0];ga.parentNode.insertBefore(N,ga)}a.i&&a.i();a.h&&a.h();if(c.rec||c.trust)a.a.nv?(a.e=encodeURIComponent(document.referrer),window.sessionStorage?u("Hm_from_"+c.id,a.e):K("Hm_from_"+c.id,a.e,864E5)):a.e=(window.sessionStorage?z("Hm_from_"+c.id):L("Hm_from_"+c.id))||"";a.j&&a.j();a.k&&a.k();A(window,"unload",ra(a));var y=window._hmt;
if(y&&y.length)for(w=0;w<y.length;w++){var G=y[w];switch(G[0]){case "_setAccount":1<G.length&&/^[0-9a-z]{32}$/.test(G[1])&&(a.a.api|=1,window._bdhm_account=G[1]);break;case "_setAutoPageview":if(1<G.length){var V=G[1];if(n===V||l===V)a.a.api|=2,window._bdhm_autoPageview=V}}}if("undefined"===typeof window._bdhm_account||window._bdhm_account===c.id){window._bdhm_account=c.id;var O=window._hmt;if(O&&O.length)for(var y=0,wa=O.length;y<wa;y++)a.g(O[y]);window._hmt=a.n}if("undefined"===typeof window._bdhm_autoPageview||
window._bdhm_autoPageview===l)a.f=l,a.a.et=0,a.a.ep="",X(a)}catch(ha){a=[],a.push("si="+c.id),a.push("n="+encodeURIComponent(ha.name)),a.push("m="+encodeURIComponent(ha.message)),a.push("r="+encodeURIComponent(document.referrer)),P(S+"//hm.baidu.com/hm.gif?"+a.join("&"))}}
function qa(a){for(var b=[],d=0,e=W.length;d<e;d++){var f=W[d],h=a.a[f];"undefined"!=typeof h&&""!==h&&b.push(f+"="+encodeURIComponent(h))}d=a.a.et;(0===d||90===d)&&a.a.rt&&b.push("rt="+encodeURIComponent(a.a.rt));return b.join("&")}
function na(){var a="Hm_cv_"+c.id;try{if(t(a,"",{domain:la(),path:ma(),d:-1}),window.sessionStorage&&window.sessionStorage.removeItem(a),window.localStorage)window.localStorage.removeItem(a);else if(H())try{E.load(document.location.hostname),E.removeAttribute(a),E.save(document.location.hostname)}catch(b){}}catch(d){}}function ma(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&ta(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"}
function la(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if($(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a}function Z(a){for(var b=0;b<c.dm.length;b++)if(-1<c.dm[b].indexOf("/")){if(ta(a,c.dm[b]))return l}else{var d=C(a);if(d&&$(d,c.dm[b]))return l}return n}function ta(a,b){a=a.replace(/^https?:\/\//,"");return 0==a.indexOf(b)}function $(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length==a.length}
var sa=function(){function a(){clearTimeout(I);var b;v&&(b="visible"==document[v]);s&&(b=!document[s]);f="undefined"==typeof b?l:b;if((!e||!h)&&f&&k)r=l,p=+new Date;else if(e&&h&&(!f||!k))r=n,F+=+new Date-p;e=f;h=k;I=setTimeout(a,100)}function b(a){var b=document,d="";if(a in b)d=a;else for(var e=["webkit","ms","moz","o"],f=0;f<e.length;f++){var g=e[f]+a.charAt(0).toUpperCase()+a.slice(1);if(g in b){d=g;break}}return d}function d(b){if(!("focus"==b.type||"blur"==b.type)||!(b.target&&b.target!=window))k=
"focus"==b.type||"focusin"==b.type?l:n,a()}var e=l,f=l,h=l,k=l,g=+new Date,p=g,F=0,r=l,v=b("visibilityState"),s=b("hidden"),I;a();(function(){var b=v.replace(/[vV]isibilityState/,"visibilitychange");A(document,b,a);A(window,"pageshow",a);A(window,"pagehide",a);"object"==typeof document.onfocusin?(A(document,"focusin",d),A(document,"focusout",d)):(A(window,"focus",d),A(window,"blur",d))})();return{m:function(){return+new Date-g},l:function(){return r?+new Date-p+F:F}}}();new ja;})();
