(function(e){function n(n){for(var r,c,i=n[0],o=n[1],d=n[2],h=0,l=[];h<i.length;h++)c=i[h],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&l.push(u[c][0]),u[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);f&&f(n);while(l.length)l.shift()();return a.push.apply(a,d||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var i=t[c];0!==u[i]&&(r=!1)}r&&(a.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},c={app:0},u={app:0},a=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-22382d4c":"04de752d","chunk-108fe716":"f037065e","chunk-3e439b10":"a992c821","chunk-53988816":"237742f8","chunk-62e5d3cf":"656c666f","chunk-7ebe7631":"5849134e","chunk-7f063b08":"235c1928","chunk-9309a8b8":"21e41c1d","chunk-971aac4c":"aa7e5cf3","chunk-3c8186cc":"f1b3db51","chunk-42a9ccf5":"d66c7d18","chunk-a37ddf6c":"688f7dd3","chunk-7f56fbef":"df7796d7"}[e]+".js"}function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.e=function(e){var n=[],t={"chunk-108fe716":1,"chunk-3e439b10":1,"chunk-53988816":1,"chunk-62e5d3cf":1,"chunk-7ebe7631":1,"chunk-7f063b08":1,"chunk-9309a8b8":1,"chunk-971aac4c":1,"chunk-3c8186cc":1,"chunk-42a9ccf5":1,"chunk-a37ddf6c":1,"chunk-7f56fbef":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-22382d4c":"31d6cfe0","chunk-108fe716":"4c85d761","chunk-3e439b10":"8a707947","chunk-53988816":"3d80a10d","chunk-62e5d3cf":"59799acb","chunk-7ebe7631":"133a1e40","chunk-7f063b08":"585c7cba","chunk-9309a8b8":"0a81b45f","chunk-971aac4c":"216e2b2f","chunk-3c8186cc":"5e349b4f","chunk-42a9ccf5":"04ccb977","chunk-a37ddf6c":"f120ef1a","chunk-7f56fbef":"6a0c2865"}[e]+".css",u=o.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var d=a[i],h=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(h===r||h===u))return n()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){d=l[i],h=d.getAttribute("data-href");if(h===r||h===u)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],f.parentNode.removeChild(f),t(a)},f.href=u;var s=document.getElementsByTagName("head")[0];s.appendChild(f)})).then((function(){c[e]=0})));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=u[e]=[n,t]}));n.push(r[2]=a);var d,h=document.createElement("script");h.charset="utf-8",h.timeout=120,o.nc&&h.setAttribute("nonce",o.nc),h.src=i(e);var l=new Error;d=function(n){h.onerror=h.onload=null,clearTimeout(f);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,t[1](l)}u[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:h})}),12e4);h.onerror=h.onload=d,document.head.appendChild(h)}return Promise.all(n)},o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/",o.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],h=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var f=h;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},4360:function(e,n,t){"use strict";var r=t("5502");n["a"]=Object(r["a"])({state:{isLogined:!!localStorage.getItem("userinfo"),isShowLoading:!1},mutations:{changeLoginStatus:function(e,n){e.isLogined=n},changeLoadingShow:function(e,n){e.isShowLoading=n}},actions:{},modules:{}})},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),c=Object(r["I"])("data-v-c3aeff72"),u=c((function(e,n,t,c,u,a){var i=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["d"])(i)})),a={name:"App"};a.render=u,a.__scopeId="data-v-c3aeff72";var i=a,o=(t("d3b7"),t("3ca3"),t("ddb0"),t("caad"),t("b64b"),t("6c02")),d=t("4360"),h=function(){return Promise.all([t.e("chunk-22382d4c"),t.e("chunk-971aac4c"),t.e("chunk-3c8186cc")]).then(t.bind(null,"0cab"))},l=function(){return Promise.all([t.e("chunk-22382d4c"),t.e("chunk-971aac4c"),t.e("chunk-42a9ccf5")]).then(t.bind(null,"bee9"))},f=function(){return t.e("chunk-7f56fbef").then(t.bind(null,"dbe0"))},s=function(){return Promise.all([t.e("chunk-22382d4c"),t.e("chunk-53988816")]).then(t.bind(null,"283e"))},m=function(){return Promise.all([t.e("chunk-22382d4c"),t.e("chunk-7f063b08")]).then(t.bind(null,"db4d"))},p=function(){return Promise.all([t.e("chunk-22382d4c"),t.e("chunk-108fe716")]).then(t.bind(null,"7fbf"))},b=function(){return Promise.all([t.e("chunk-22382d4c"),t.e("chunk-7ebe7631")]).then(t.bind(null,"c720"))},k=function(){return Promise.all([t.e("chunk-22382d4c"),t.e("chunk-3e439b10")]).then(t.bind(null,"8986"))},g=function(){return Promise.all([t.e("chunk-22382d4c"),t.e("chunk-a37ddf6c")]).then(t.bind(null,"e5d8"))},v=function(){return Promise.all([t.e("chunk-22382d4c"),t.e("chunk-9309a8b8")]).then(t.bind(null,"e1c6"))},y=function(){return Promise.all([t.e("chunk-22382d4c"),t.e("chunk-62e5d3cf")]).then(t.bind(null,"1eb7"))},A=[{path:"/",name:"index",alias:"/login",component:h,meta:{title:"首页",requireAuthorized:!1,requireAdmin:!1}},{path:"/backend",name:"backend",component:l,children:[{path:"",component:f,meta:{title:"操作说明",requireAuthorized:!0,requireAdmin:!1}},{path:"vpn",component:s,meta:{title:"翻墙操作",requireAuthorized:!0,requireAdmin:!1}},{path:"article/:id",name:"article-detail",component:v,meta:{title:"操作教程",requireAuthorized:!0,requireAdmin:!1}},{path:"edit/:id([s0-9]*)",name:"article-editor",component:y,meta:{title:"编辑",requireAuthorized:!0,requireAdmin:!0}},{path:"software/:type",name:"software",component:m,meta:{title:"软件下载",requireAuthorized:!0,requireAdmin:!1}},{path:"vxlink",name:"vxlink",component:p,meta:{title:"公众号文章转pdf",requireAuthorized:!0,requireAdmin:!1}},{path:"douyin",name:"douyin",component:b,meta:{title:"抖音视频你发我评",requireAuthorized:!0,requireAdmin:!1}},{path:"changepasswd",name:"changepasswd",component:k,meta:{title:"更改密码",requireAuthorized:!0,requireAdmin:!1}},{path:"invitation",name:"invitation",component:g,meta:{title:"邀请得奖励",requireAuthorized:!0,requireAdmin:!1}}]},{path:"/:pathAll(.*)",redirect:"/"}],q=Object(o["a"])({history:Object(o["b"])("/"),routes:A});q.beforeEach((function(e,n,t){return e.meta.requireAuthorized&&!1===d["a"].state.isLogined?(alert("请先登录，没有账号请注册"),t("/")):e.meta.requireAuthorized&&!0===d["a"].state.isLogined?!0===e.meta.requireAdmin&&"admin"!=JSON.parse(localStorage.getItem("userinfo")).user?t("/backend/"):t():e.meta.requireAuthorized||!0!==d["a"].state.isLogined||["share","reset","active"].includes(Object.keys(e.query)[0])?t():t("/backend/")}));var w=q;Object(r["c"])(i).use(d["a"]).use(w).mount("#app")}});
//# sourceMappingURL=app.6603797d.js.map