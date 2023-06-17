import{S as dt,i as mt,s as vt,k as T,a as $,q as H,w as ge,Q as gt,l as I,h as y,c as L,m as O,r as V,x as ye,n as _,p as yt,J as o,b as R,y as _e,f as U,d as Xe,t as K,z as be,O as ke,o as _t,W as bt,I as kt,K as Ct,M as wt,N as Ze,g as Se,X as Et,B as he,H as ht}from"../../chunks/index-34c891a2.js";import{I as Ce}from"../../chunks/Icon-30b433a3.js";/* empty css                           */import{c as et,f as tt}from"../../chunks/index-8054be71.js";import{c as Tt,g as It}from"../../chunks/_commonjsHelpers-e864563f.js";var ft={exports:{}};/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */(function(f,a){(function(s,h){f.exports=h()})(Tt,function(){return function(r){var s={};function h(m){if(s[m])return s[m].exports;var p=s[m]={exports:{},id:m,loaded:!1};return r[m].call(p.exports,p,p.exports,h),p.loaded=!0,p.exports}return h.m=r,h.c=s,h.p="",h(0)}([function(r,s,h){Object.defineProperty(s,"__esModule",{value:!0});var m=function(){function b(l,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(l,n.key,n)}}return function(l,t,i){return t&&b(l.prototype,t),i&&b(l,i),l}}();function p(b,l){if(!(b instanceof l))throw new TypeError("Cannot call a class as a function")}var k=h(1),w=h(3),A=function(){function b(l,t){p(this,b),k.initializer.load(this,t,l),this.begin()}return m(b,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||!this.pause.status||(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||arguments[0]===void 0?!0:arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){!t.currentElContent||t.currentElContent.length===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.currentElContent,t.currentElContent.length)},this.startDelay)}},{key:"typewrite",value:function(t,i){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var e=this.humanizer(this.typeSpeed),v=1;if(this.pause.status===!0){this.setPauseStatus(t,i,!0);return}this.timeout=setTimeout(function(){i=w.htmlParser.typeHtmlChars(t,i,n);var c=0,E=t.substr(i);if(E.charAt(0)==="^"&&/^\^\d+/.test(E)){var D=1;E=/\d+/.exec(E)[0],D+=E.length,c=parseInt(E),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,i)+t.substring(i+D),n.toggleBlinking(!0)}if(E.charAt(0)==="`"){for(;t.substr(i+v).charAt(0)!=="`"&&(v++,!(i+v>t.length)););var d=t.substring(0,i),B=t.substring(d.length+1,i+v),g=t.substring(i+v+1);t=d+B+g,v--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),i>=t.length?n.doneTyping(t,i):n.keepTyping(t,i,v),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},c)},e)}},{key:"keepTyping",value:function(t,i,n){i===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),i+=n;var e=t.substr(0,i);this.replaceText(e),this.typewrite(t,i)}},{key:"doneTyping",value:function(t,i){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),!(this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount))&&(this.timeout=setTimeout(function(){n.backspace(t,i)},this.backDelay))}},{key:"backspace",value:function(t,i){var n=this;if(this.pause.status===!0){this.setPauseStatus(t,i,!1);return}if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var e=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){i=w.htmlParser.backSpaceHtmlChars(t,i,n);var v=t.substr(0,i);if(n.replaceText(v),n.smartBackspace){var c=n.strings[n.arrayPos+1];c&&v===c.substr(0,i)?n.stopNum=i:n.stopNum=0}i>n.stopNum?(i--,n.backspace(t,i)):i<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],i))},e)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,i,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=i}},{key:"toggleBlinking",value:function(t){!this.cursor||this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink"))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){!this.shuffle||(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;!this.isInput||(this.el.addEventListener("focus",function(i){t.stop()}),this.el.addEventListener("blur",function(i){t.el.value&&t.el.value.length!==0||t.start()}))}},{key:"insertCursor",value:function(){!this.showCursor||this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling))}}]),b}();s.default=A,r.exports=s.default},function(r,s,h){Object.defineProperty(s,"__esModule",{value:!0});var m=Object.assign||function(i){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var v in e)Object.prototype.hasOwnProperty.call(e,v)&&(i[v]=e[v])}return i},p=function(){function i(n,e){for(var v=0;v<e.length;v++){var c=e[v];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}return function(n,e,v){return e&&i(n.prototype,e),v&&i(n,v),n}}();function k(i){return i&&i.__esModule?i:{default:i}}function w(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}var A=h(2),b=k(A),l=function(){function i(){w(this,i)}return p(i,[{key:"load",value:function(e,v,c){if(typeof c=="string"?e.el=document.querySelector(c):e.el=c,e.options=m({},b.default,v),e.isInput=e.el.tagName.toLowerCase()==="input",e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=e.isInput?!1:e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map(function(g){return g.trim()}),typeof e.options.stringsElement=="string"?e.stringsElement=document.querySelector(e.options.stringsElement):e.stringsElement=e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.display="none";var E=Array.prototype.slice.apply(e.stringsElement.children),D=E.length;if(D)for(var d=0;d<D;d+=1){var B=E[d];e.strings.push(B.innerHTML.trim())}}e.strPos=0,e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.sequence=[],e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1;for(var d in e.strings)e.sequence[d]=d;e.currentElContent=this.getCurrentElContent(e),e.autoInsertCss=e.options.autoInsertCss,this.appendAnimationCss(e)}},{key:"getCurrentElContent",value:function(e){var v="";return e.attr?v=e.el.getAttribute(e.attr):e.isInput?v=e.el.value:e.contentType==="html"?v=e.el.innerHTML:v=e.el.textContent,v}},{key:"appendAnimationCss",value:function(e){var v="data-typed-js-css";if(!!e.autoInsertCss&&!(!e.showCursor&&!e.fadeOut)&&!document.querySelector("["+v+"]")){var c=document.createElement("style");c.type="text/css",c.setAttribute(v,!0);var E="";e.showCursor&&(E+=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `),e.fadeOut&&(E+=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `),c.length!==0&&(c.innerHTML=E,document.body.appendChild(c))}}}]),i}();s.default=l;var t=new l;s.initializer=t},function(r,s){Object.defineProperty(s,"__esModule",{value:!0});var h={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(p){},onComplete:function(p){},preStringTyped:function(p,k){},onStringTyped:function(p,k){},onLastStringBackspaced:function(p){},onTypingPaused:function(p,k){},onTypingResumed:function(p,k){},onReset:function(p){},onStop:function(p,k){},onStart:function(p,k){},onDestroy:function(p){}};s.default=h,r.exports=s.default},function(r,s){Object.defineProperty(s,"__esModule",{value:!0});var h=function(){function w(A,b){for(var l=0;l<b.length;l++){var t=b[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(A,t.key,t)}}return function(A,b,l){return b&&w(A.prototype,b),l&&w(A,l),A}}();function m(w,A){if(!(w instanceof A))throw new TypeError("Cannot call a class as a function")}var p=function(){function w(){m(this,w)}return h(w,[{key:"typeHtmlChars",value:function(b,l,t){if(t.contentType!=="html")return l;var i=b.substr(l).charAt(0);if(i==="<"||i==="&"){var n="";for(i==="<"?n=">":n=";";b.substr(l+1).charAt(0)!==n&&(l++,!(l+1>b.length)););l++}return l}},{key:"backSpaceHtmlChars",value:function(b,l,t){if(t.contentType!=="html")return l;var i=b.substr(l).charAt(0);if(i===">"||i===";"){var n="";for(i===">"?n="<":n="&";b.substr(l-1).charAt(0)!==n&&(l--,!(l<0)););l--}return l}}]),w}();s.default=p;var k=new p;s.htmlParser=k}])})})(ft);const Dt=It(ft.exports);const{document:fe}=bt;function nt(f,a,r){const s=f.slice();return s[9]=a[r],s[11]=r,s}function st(f,a,r){const s=f.slice();return s[12]=a[r],s}function it(f,a,r){const s=f.slice();return s[15]=a[r],s}function at(f,a,r){const s=f.slice();return s[18]=a[r],s}function Ot(f){let a,r;return a=new Ce({props:{icon:f[18].icon,width:"70",height:"70"}}),{c(){ge(a.$$.fragment)},l(s){ye(a.$$.fragment,s)},m(s,h){_e(a,s,h),r=!0},p:he,i(s){r||(U(a.$$.fragment,s),r=!0)},o(s){K(a.$$.fragment,s),r=!1},d(s){be(a,s)}}}function At(f){let a,r;return{c(){a=T("img"),this.h()},l(s){a=I(s,"IMG",{src:!0,alt:!0,width:!0}),this.h()},h(){ht(a.src,r=f[18].icon)||_(a,"src",r),_(a,"alt","screenshot"),_(a,"width","70")},m(s,h){R(s,a,h)},p:he,i:he,o:he,d(s){s&&y(a)}}}function rt(f){let a,r,s,h,m,p,k=f[18].title+"",w,A,b=f[18].content+"",l,t,i;const n=[At,Ot],e=[];function v(c,E){return c[18].icon.includes(".")?0:1}return s=v(f),h=e[s]=n[s](f),{c(){a=T("div"),r=T("div"),h.c(),m=$(),p=T("div"),w=H(k),A=$(),l=H(b),t=$(),this.h()},l(c){a=I(c,"DIV",{class:!0});var E=O(a);r=I(E,"DIV",{class:!0});var D=O(r);h.l(D),D.forEach(y),m=L(E),p=I(E,"DIV",{class:!0});var d=O(p);w=V(d,k),d.forEach(y),A=L(E),l=V(E,b),t=L(E),E.forEach(y),this.h()},h(){_(r,"class","large-icon"),_(p,"class","card-title"),_(a,"class","card")},m(c,E){R(c,a,E),o(a,r),e[s].m(r,null),o(a,m),o(a,p),o(p,w),o(a,A),o(a,l),o(a,t),i=!0},p(c,E){h.p(c,E)},i(c){i||(U(h),i=!0)},o(c){K(h),i=!1},d(c){c&&y(a),e[s].d()}}}function lt(f){let a,r=f[15]+"",s;return{c(){a=T("li"),s=H(r),this.h()},l(h){a=I(h,"LI",{class:!0});var m=O(a);s=V(m,r),m.forEach(y),this.h()},h(){_(a,"class","mb-3")},m(h,m){R(h,a,m),o(a,s)},p:he,d(h){h&&y(a)}}}function ot(f){let a,r,s,h;return{c(){a=T("div"),r=T("img"),h=$(),this.h()},l(m){a=I(m,"DIV",{});var p=O(a);r=I(p,"IMG",{src:!0,alt:!0}),h=L(p),p.forEach(y),this.h()},h(){ht(r.src,s=f[12])||_(r,"src",s),_(r,"alt","screenshot")},m(m,p){R(m,a,p),o(a,r),o(a,h)},p:he,d(m){m&&y(a)}}}function ut(f){let a,r,s,h,m=f[11]+1+"",p,k,w,A=f[9].title+"",b,l,t,i,n,e,v=f[9].uls,c=[];for(let d=0;d<v.length;d+=1)c[d]=lt(it(f,v,d));let E=f[9].images,D=[];for(let d=0;d<E.length;d+=1)D[d]=ot(st(f,E,d));return{c(){a=T("div"),r=T("div"),s=T("div"),h=H("#"),p=H(m),k=$(),w=T("div"),b=H(A),l=$(),t=T("ul");for(let d=0;d<c.length;d+=1)c[d].c();i=$(),n=T("div");for(let d=0;d<D.length;d+=1)D[d].c();e=$(),this.h()},l(d){a=I(d,"DIV",{class:!0});var B=O(a);r=I(B,"DIV",{class:!0});var g=O(r);s=I(g,"DIV",{class:!0});var j=O(s);h=V(j,"#"),p=V(j,m),j.forEach(y),k=L(g),w=I(g,"DIV",{class:!0});var J=O(w);b=V(J,A),J.forEach(y),l=L(g),t=I(g,"UL",{class:!0});var W=O(t);for(let q=0;q<c.length;q+=1)c[q].l(W);W.forEach(y),g.forEach(y),i=L(B),n=I(B,"DIV",{class:!0});var se=O(n);for(let q=0;q<D.length;q+=1)D[q].l(se);se.forEach(y),e=L(B),B.forEach(y),this.h()},h(){_(s,"class","splitter-rank"),_(w,"class","splitter-title"),_(t,"class","list-greek pl-[15px] mb-4"),_(r,"class","splitter-content"),_(n,"class","splitter-images"),_(a,"class","splitter"),kt(a,"splitter-reverse",f[11]%2===1)},m(d,B){R(d,a,B),o(a,r),o(r,s),o(s,h),o(s,p),o(r,k),o(r,w),o(w,b),o(r,l),o(r,t);for(let g=0;g<c.length;g+=1)c[g].m(t,null);o(a,i),o(a,n);for(let g=0;g<D.length;g+=1)D[g].m(n,null);o(a,e)},p(d,B){if(B&16){v=d[9].uls;let g;for(g=0;g<v.length;g+=1){const j=it(d,v,g);c[g]?c[g].p(j,B):(c[g]=lt(j),c[g].c(),c[g].m(t,null))}for(;g<c.length;g+=1)c[g].d(1);c.length=v.length}if(B&16){E=d[9].images;let g;for(g=0;g<E.length;g+=1){const j=st(d,E,g);D[g]?D[g].p(j,B):(D[g]=ot(j),D[g].c(),D[g].m(n,null))}for(;g<D.length;g+=1)D[g].d(1);D.length=E.length}},d(d){d&&y(a),ke(c,d),ke(D,d)}}}function ct(f){let a,r,s,h,m,p;return r=new Ce({props:{icon:"fluent:chevron-up-24-regular",width:"25",height:"25"}}),{c(){a=T("button"),ge(r.$$.fragment),this.h()},l(k){a=I(k,"BUTTON",{class:!0});var w=O(a);ye(r.$$.fragment,w),w.forEach(y),this.h()},h(){_(a,"class","w-11 h-11 rounded-1/2 bg-main text-black fixed bottom-4 right-4 flex items-center justify-center font-weight-bold")},m(k,w){R(k,a,w),_e(r,a,null),h=!0,m||(p=Ct(a,"click",f[7]),m=!0)},p(k,w){f=k},i(k){h||(U(r.$$.fragment,k),wt(()=>{s||(s=Ze(a,tt,{delay:0,duration:333,easing:et},!0)),s.run(1)}),h=!0)},o(k){K(r.$$.fragment,k),s||(s=Ze(a,tt,{delay:0,duration:333,easing:et},!1)),s.run(0),h=!1},d(k){k&&y(a),be(r),k&&s&&s.end(),m=!1,p()}}}function xt(f){let a,r,s,h,m,p,k,w,A,b,l,t,i,n,e,v,c,E,D,d,B,g,j,J,W,se,q,z,G,ie,Ve=f[3].download.name+"",we,Ee,Q,ae,je=f[3].download.description+"",Te,Ie,Z,re,qe=f[3].download.versionName+"",De,Oe,S,Ae,Y,X,ze=f[4].name+"",xe,Be,le,Fe=f[4].description+"",Pe,$e,Le,ee;fe.title=a=f[0].head.title,B=new Ce({props:{icon:f[3].download.file?"logos:android-vertical":"line-md:loading-loop",width:"35",height:"35",class:"mr-1"}}),W=new Ce({props:{icon:f[5],width:"35",height:"35",class:"mr-1"}});let te=f[3].cards,P=[];for(let u=0;u<te.length;u+=1)P[u]=rt(at(f,te,u));const pt=u=>K(P[u],1,1,()=>{P[u]=null});let oe=f[4].items,M=[];for(let u=0;u<oe.length;u+=1)M[u]=ut(nt(f,oe,u));let N=f[2]&&ct(f);return{c(){r=T("meta"),h=T("meta"),p=$(),k=T("div"),w=$(),A=T("div"),b=T("div"),l=T("h1"),t=H("Anime"),i=T("span"),n=H("Vsub"),e=$(),v=T("h3"),c=T("span"),E=$(),D=T("div"),d=T("a"),ge(B.$$.fragment),g=H(" H\u01B0\u1EDBng d\u1EABn c\xE0i \u0111\u1EB7t PWA"),j=$(),J=T("a"),ge(W.$$.fragment),se=H(` Phi\xEAn b\u1EA3n
        Web`),q=$(),z=T("main"),G=T("div"),ie=T("h4"),we=H(Ve),Ee=$(),Q=T("div"),ae=T("div"),Te=H(je),Ie=$(),Z=T("a"),re=T("button"),De=H(qe),Oe=$(),S=T("div");for(let u=0;u<P.length;u+=1)P[u].c();Ae=$(),Y=T("div"),X=T("h4"),xe=H(ze),Be=$(),le=T("p"),Pe=H(Fe),$e=$();for(let u=0;u<M.length;u+=1)M[u].c();Le=$(),N&&N.c(),this.h()},l(u){const x=gt("svelte-fp0yvv",fe.head);r=I(x,"META",{property:!0,content:!0}),h=I(x,"META",{property:!0,content:!0}),x.forEach(y),p=L(u),k=I(u,"DIV",{class:!0}),O(k).forEach(y),w=L(u),A=I(u,"DIV",{class:!0});var C=O(A);b=I(C,"DIV",{class:!0});var F=O(b);l=I(F,"H1",{class:!0,style:!0});var Ne=O(l);t=V(Ne,"Anime"),i=I(Ne,"SPAN",{class:!0});var Re=O(i);n=V(Re,"Vsub"),Re.forEach(y),Ne.forEach(y),e=L(F),v=I(F,"H3",{class:!0});var Je=O(v);c=I(Je,"SPAN",{}),O(c).forEach(y),Je.forEach(y),E=L(F),D=I(F,"DIV",{class:!0});var pe=O(D);d=I(pe,"A",{class:!0,href:!0});var Me=O(d);ye(B.$$.fragment,Me),g=V(Me," H\u01B0\u1EDBng d\u1EABn c\xE0i \u0111\u1EB7t PWA"),Me.forEach(y),j=L(pe),J=I(pe,"A",{class:!0,href:!0});var He=O(J);ye(W.$$.fragment,He),se=V(He,` Phi\xEAn b\u1EA3n
        Web`),He.forEach(y),pe.forEach(y),F.forEach(y),C.forEach(y),q=L(u),z=I(u,"MAIN",{class:!0});var ue=O(z);G=I(ue,"DIV",{class:!0});var ce=O(G);ie=I(ce,"H4",{class:!0});var Ue=O(ie);we=V(Ue,Ve),Ue.forEach(y),Ee=L(ce),Q=I(ce,"DIV",{class:!0});var de=O(Q);ae=I(de,"DIV",{class:!0});var We=O(ae);Te=V(We,je),We.forEach(y),Ie=L(de),Z=I(de,"A",{target:!0,href:!0});var Ge=O(Z);re=I(Ge,"BUTTON",{class:!0});var Ye=O(re);De=V(Ye,qe),Ye.forEach(y),Ge.forEach(y),de.forEach(y),Oe=L(ce),S=I(ce,"DIV",{class:!0});var Ke=O(S);for(let ne=0;ne<P.length;ne+=1)P[ne].l(Ke);Ke.forEach(y),ce.forEach(y),Ae=L(ue),Y=I(ue,"DIV",{class:!0});var me=O(Y);X=I(me,"H4",{class:!0});var ve=O(X);xe=V(ve,ze),Be=L(ve),le=I(ve,"P",{class:!0});var Qe=O(le);Pe=V(Qe,Fe),Qe.forEach(y),ve.forEach(y),$e=L(me);for(let ne=0;ne<M.length;ne+=1)M[ne].l(me);me.forEach(y),Le=L(ue),N&&N.l(ue),ue.forEach(y),this.h()},h(){_(r,"property","og:title"),_(r,"content",s=f[0].head.title),_(h,"property","og:description"),_(h,"content",m=f[0].head.description),_(k,"class","bg-image svelte-9jmsd5"),_(i,"class","text-main px-0"),_(l,"class","text-[4.5rem] font-weight-bold text-center mb-6"),yt(l,"font-family","Caveat"),_(v,"class","text-[1.5rem] sm:text-[32px] md:text-[3.5rem] text-center mb-2"),_(d,"class","inline-block py-2 px-4 bg-dark-600 inline-flex items-center rounded-[30px] mr-2"),_(d,"href","https://github.com/anime-vsub/app/install-pwa.md"),_(J,"class","inline-block py-2 px-4 bg-blue-600 inline-flex items-center rounded-[30px] ml-2"),_(J,"href","https://animevsub.eu.org"),_(D,"class","text-center text-weight-bold mt-8"),_(b,"class","w-full w-response text-white"),_(A,"class","h-[100vh] w-full flex items-center justify-center"),_(ie,"class","title"),_(ae,"class","mb-4 whitespace-pre-wrap"),_(re,"class","btn svelte-9jmsd5"),_(Z,"target","_blank"),_(Z,"href","https://github.com/anime-vsub/app/install-pwa.md"),_(Q,"class","box"),_(S,"class","flex flex-wrap md:flex-nowrap"),_(G,"class","mt-[64px] section"),_(le,"class","subtitle"),_(X,"class","title"),_(Y,"class","section"),_(z,"class","w-response mx-4 sm:mx-auto")},m(u,x){o(fe.head,r),o(fe.head,h),R(u,p,x),R(u,k,x),R(u,w,x),R(u,A,x),o(A,b),o(b,l),o(l,t),o(l,i),o(i,n),o(b,e),o(b,v),o(v,c),f[6](c),o(b,E),o(b,D),o(D,d),_e(B,d,null),o(d,g),o(D,j),o(D,J),_e(W,J,null),o(J,se),R(u,q,x),R(u,z,x),o(z,G),o(G,ie),o(ie,we),o(G,Ee),o(G,Q),o(Q,ae),o(ae,Te),o(Q,Ie),o(Q,Z),o(Z,re),o(re,De),o(G,Oe),o(G,S);for(let C=0;C<P.length;C+=1)P[C].m(S,null);o(z,Ae),o(z,Y),o(Y,X),o(X,xe),o(X,Be),o(X,le),o(le,Pe),o(Y,$e);for(let C=0;C<M.length;C+=1)M[C].m(Y,null);o(z,Le),N&&N.m(z,null),ee=!0},p(u,[x]){if((!ee||x&1)&&a!==(a=u[0].head.title)&&(fe.title=a),(!ee||x&1&&s!==(s=u[0].head.title))&&_(r,"content",s),(!ee||x&1&&m!==(m=u[0].head.description))&&_(h,"content",m),x&8){te=u[3].cards;let C;for(C=0;C<te.length;C+=1){const F=at(u,te,C);P[C]?(P[C].p(F,x),U(P[C],1)):(P[C]=rt(F),P[C].c(),U(P[C],1),P[C].m(S,null))}for(Se(),C=te.length;C<P.length;C+=1)pt(C);Xe()}if(x&16){oe=u[4].items;let C;for(C=0;C<oe.length;C+=1){const F=nt(u,oe,C);M[C]?M[C].p(F,x):(M[C]=ut(F),M[C].c(),M[C].m(Y,null))}for(;C<M.length;C+=1)M[C].d(1);M.length=oe.length}u[2]?N?(N.p(u,x),x&4&&U(N,1)):(N=ct(u),N.c(),U(N,1),N.m(z,null)):N&&(Se(),K(N,1,1,()=>{N=null}),Xe())},i(u){if(!ee){U(B.$$.fragment,u),U(W.$$.fragment,u);for(let x=0;x<te.length;x+=1)U(P[x]);U(N),ee=!0}},o(u){K(B.$$.fragment,u),K(W.$$.fragment,u),P=P.filter(Boolean);for(let x=0;x<P.length;x+=1)K(P[x]);K(N),ee=!1},d(u){y(r),y(h),u&&y(p),u&&y(k),u&&y(w),u&&y(A),f[6](null),be(B),be(W),u&&y(q),u&&y(z),ke(P,u),ke(M,u),N&&N.d()}}}function Bt(f,a,r){var t,i,n;let{data:s}=a;const{meta:h,features:m}=s;let p;_t(()=>{new Dt(p,{strings:h.strings,typeSpeed:80,loop:!0,backDelay:1100,backSpeed:30})});let k=!1;document.addEventListener("scroll",()=>{r(2,k=window.pageYOffset>300)});const w=typeof navigator<"u"?(t=navigator.userAgent)==null?void 0:t.toLowerCase():void 0,A=(n=w?(i=[["chrome","logos:chrome"],["firefox","logos:firefox"],["opera","logos:opera"],["safari","logos:safari"],["brave","logos:brave"],["vivaldi","logos:vivaldi-icon"],["edge","logos:microsoft-edge"],["fuchsia","logos:fuchsia"],["yandex","logos:yandex-ru"],["tor","logos:tor"]].find(e=>w.includes(e[0])))==null?void 0:i[1]:void 0)!=null?n:"logos:webkit";function b(e){Et[e?"unshift":"push"](()=>{p=e,r(1,p)})}const l=()=>{window.scrollTo({top:0,behavior:"smooth"})};return f.$$set=e=>{"data"in e&&r(0,s=e.data)},[s,p,k,h,m,A,b,l]}class Ht extends dt{constructor(a){super(),mt(this,a,Bt,xt,vt,{data:0})}}export{Ht as default};