(function(e){function n(n){for(var r,c,a=n[0],o=n[1],d=n[2],h=0,f=[];h<a.length;h++)c=a[h],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&f.push(u[c][0]),u[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(n);while(f.length)f.shift()();return i.push.apply(i,d||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,c=1;c<t.length;c++){var a=t[c];0!==u[a]&&(r=!1)}r&&(i.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},c={app:0},u={app:0},i=[];function a(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-22382d4c":"04de752d","chunk-108fe716":"f037065e","chunk-1fed7fc4":"b8d0b167","chunk-167ed2cc":"ffb8ff50","chunk-4f4c8e6b":"83dc812c","chunk-3e439b10":"a992c821","chunk-40c01c32":"5496f545","chunk-53988816":"237742f8","chunk-62e5d3cf":"656c666f","chunk-7ebe7631":"5849134e","chunk-7f063b08":"235c1928","chunk-a37ddf6c":"688f7dd3","chunk-7f56fbef":"df7796d7"}[e]+".js"}function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.e=function(e){var n=[],t={"chunk-108fe716":1,"chunk-1fed7fc4":1,"chunk-167ed2cc":1,"chunk-4f4c8e6b":1,"chunk-3e439b10":1,"chunk-40c01c32":1,"chunk-53988816":1,"chunk-62e5d3cf":1,"chunk-7ebe7631":1,"chunk-7f063b08":1,"chunk-a37ddf6c":1,"chunk-7f56fbef":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-22382d4c":"31d6cfe0","chunk-108fe716":"4c85d761","chunk-1fed7fc4":"57189d24","chunk-167ed2cc":"cc5a63de","chunk-4f4c8e6b":"5e349b4f","chunk-3e439b10":"8a707947","chunk-40c01c32":"429532f7","chunk-53988816":"3d80a10d","chunk-62e5d3cf":"59799acb","chunk-7ebe7631":"133a1e40","chunk-7f063b08":"585c7cba","chunk-a37ddf6c":"f120ef1a","chunk-7f56fbef":"6a0c2865"}[e]+".css",u=o.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var d=i[a],h=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(h===r||h===u))return n()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){d=f[a],h=d.getAttribute("data-href");if(h===r||h===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||u,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete c[e],l.parentNode.removeChild(l),t(i)},l.href=u;var s=document.getElementsByTagName("head")[0];s.appendChild(l)})).then((function(){c[e]=0})));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,t){r=u[e]=[n,t]}));n.push(r[2]=i);var d,h=document.createElement("script");h.charset="utf-8",h.timeout=120,o.nc&&h.setAttribute("nonce",o.nc),h.src=a(e);var f=new Error;d=function(n){h.onerror=h.onload=null,clearTimeout(l);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,t[1](f)}u[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:h})}),12e4);h.onerror=h.onload=d,document.head.appendChild(h)}return Promise.all(n)},o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/",o.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],h=d.push.bind(d);d.push=n,d=d.slice();for(var f=0;f<d.length;f++)n(d[f]);var l=h;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},4360:function(e,n,t){"use strict";var r=t("5502");n["a"]=Object(r["a"])({state:{isLogined:!!localStorage.getItem("userinfo"),isShowLoading:!1},mutations:{changeLoginStatus:function(e,n){e.isLogined=n},changeLoadingShow:function(e,n){e.isShowLoading=n}},actions:{},modules:{}})},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),c=Object(r["I"])("data-v-c3aeff72"),u=c((function(e,n,t,c,u,i){var a=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["d"])(a)})),i={name:"App"};i.render=u,i.__scopeId="data-v-c3aeff72";var a=i,o=(t("d3b7"),t("3ca3"),t("ddb0"),t("caad"),t("b64b"),t("6c02")),d=t("4360"),h=function(){return Promise.all([t.e("chunk-22382d4c"),t.e("chunk-1fed7fc4"),t.e("chunk-4f4c8e6b")]).then(t.bind(null,"0cab"))},f=function(){return Promise.all([t.e("chunk-22382d4c"),t.e("chunk-1fed7fc4"),t.e("chunk-167ed2cc")]).then(t.bind(null,"bee9"))},l=function(){return t.e("chunk-7f56fbef").then(t.bind(null,"dbe0"))},s=function(){return Promise.all([t.e("chunk-22382d4c"),t.e("chunk-53988816")]).then(t.bind(null,"283e"))},m=function(){return Promise.all([t.e("chunk-22382d4c"),t.e("chunk-7f063b08")]).then(t.bind(null,"db4d"))},p=function(){return Promise.all([t.e("chunk-22382d4c"),t.e("chunk-108fe716")]).then(t.bind(null,"7fbf"))},b=function(){return Promise.all([t.e("chunk-22382d4c"),t.e("chunk-7ebe7631")]).then(t.bind(null,"c720"))},k=function(){return Promise.all([t.e("chunk-22382d4c"),t.e("chunk-3e439b10")]).then(t.bind(null,"8986"))},g=function(){return Promise.all([t.e("chunk-22382d4c"),t.e("chunk-a37ddf6c")]).then(t.bind(null,"e5d8"))},v=function(){return Promise.all([t.e("chunk-22382d4c"),t.e("chunk-40c01c32")]).then(t.bind(null,"e1c6"))},y=function(){return Promise.all([t.e("chunk-22382d4c"),t.e("chunk-62e5d3cf")]).then(t.bind(null,"1eb7"))},A=[{path:"/",name:"index",alias:"/login",component:h,meta:{title:"首页",requireAuthorized:!1,requireAdmin:!1}},{path:"/backend",name:"backend",component:f,children:[{path:"",component:l,meta:{title:"操作说明",requireAuthorized:!0,requireAdmin:!1}},{path:"vpn",component:s,meta:{title:"翻墙操作",requireAuthorized:!0,requireAdmin:!1}},{path:"article/:id",name:"article-detail",component:v,meta:{title:"操作教程",requireAuthorized:!0,requireAdmin:!1}},{path:"edit/:id([s0-9]*)",name:"article-editor",component:y,meta:{title:"编辑",requireAuthorized:!0,requireAdmin:!0}},{path:"software/:type",name:"software",component:m,meta:{title:"软件下载",requireAuthorized:!0,requireAdmin:!1}},{path:"vxlink",name:"vxlink",component:p,meta:{title:"公众号文章转pdf",requireAuthorized:!0,requireAdmin:!1}},{path:"douyin",name:"douyin",component:b,meta:{title:"抖音视频你发我评",requireAuthorized:!0,requireAdmin:!1}},{path:"changepasswd",name:"changepasswd",component:k,meta:{title:"更改密码",requireAuthorized:!0,requireAdmin:!1}},{path:"invitation",name:"invitation",component:g,meta:{title:"邀请得奖励",requireAuthorized:!0,requireAdmin:!1}}]},{path:"/:pathAll(.*)",redirect:"/"}],q=Object(o["a"])({history:Object(o["b"])("/"),routes:A});q.beforeEach((function(e,n,t){return e.meta.requireAuthorized&&!1===d["a"].state.isLogined?(alert("请先登录，没有账号请注册"),t("/")):e.meta.requireAuthorized&&!0===d["a"].state.isLogined?!0===e.meta.requireAdmin&&"admin"!=JSON.parse(localStorage.getItem("userinfo")).user?t("/backend/"):t():e.meta.requireAuthorized||!0!==d["a"].state.isLogined||["share","reset","active"].includes(Object.keys(e.query)[0])?t():t("/backend/")}));var w=q;Object(r["c"])(a).use(d["a"]).use(w).mount("#app")}});
//# sourceMappingURL=app.32efda62.js.map