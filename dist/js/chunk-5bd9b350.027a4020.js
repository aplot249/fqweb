(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bd9b350"],{"606e":function(e,t,r){},"85be":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),c=Object(n["I"])("data-v-4e9ec26b");Object(n["u"])("data-v-4e9ec26b");var o={class:"invitation"},a=Object(n["h"])("h2",null,"邀请得奖励",-1),i=Object(n["h"])("ul",null,[Object(n["h"])("li",null,"把你的邀请链接复制发送给别人，别人通过你的邀请链接打开本网站，注册并使用。你将获得翻墙账号的天数奖励。"),Object(n["h"])("li",null,"在你翻墙账号的有效期内，每邀请1个人，奖励天数15天。")],-1),u=Object(n["g"])(" 您的邀请链接为： "),l={style:{"background-color":"#0d95e8","font-weight":"bolder"}},b={key:0},f={key:1},d={key:0},h={style:{"font-size":"large"}};Object(n["s"])();var s=c((function(e,t,r,c,s,p){return Object(n["r"])(),Object(n["d"])("div",o,[a,i,Object(n["h"])("div",null,[u,Object(n["h"])("p",l,"http://chuanyun101.com/?share="+Object(n["A"])(c.initiator),1),c.invitee.length?(Object(n["r"])(),Object(n["d"])("p",b,"你目前已邀请"+Object(n["A"])(c.invitee.length)+"人，共获取奖励天数"+Object(n["A"])(15*c.invitee.length)+"天，邀请的人员名单如下：",1)):Object(n["e"])("",!0),c.invitee.length?Object(n["e"])("",!0):(Object(n["r"])(),Object(n["d"])("p",f,"你还没有邀请人哦~，快起邀请把！"))]),c.invitee.length?(Object(n["r"])(),Object(n["d"])("ul",d,[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(c.invitee,(function(e,t){return Object(n["r"])(),Object(n["d"])("li",h,Object(n["A"])(e.invitee),1)})),256))])):Object(n["e"])("",!0)])})),p=r("1ae0"),j=r("e762"),O={name:"Invitation",components:{},setup:function(){var e=Object(j["b"])(JSON.parse(localStorage.getItem("userinfo")).user),t=Object(n["w"])([]),r=function(){Object(p["a"])("/vpn/share/").then((function(e){console.log(e.data),t.value=e.data}))};return Object(n["p"])((function(){r()})),{initiator:e,invitee:t,getData:r}}};r("db4a");O.render=s,O.__scopeId="data-v-4e9ec26b";t["default"]=O},db4a:function(e,t,r){"use strict";r("606e")},e762:function(e,t,r){"use strict";r.d(t,"b",(function(){return x})),r.d(t,"a",(function(){return T}));const n="function"===typeof atob,c="function"===typeof btoa,o="function"===typeof Buffer,a="function"===typeof TextDecoder?new TextDecoder:void 0,i="function"===typeof TextEncoder?new TextEncoder:void 0,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l=[...u],b=(e=>{let t={};return e.forEach((e,r)=>t[e]=r),t})(l),f=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,d=String.fromCharCode.bind(String),h="function"===typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(e,t=(e=>e))=>new Uint8Array(Array.prototype.slice.call(e,0).map(t)),s=e=>e.replace(/[+\/]/g,e=>"+"==e?"-":"_").replace(/=+$/m,""),p=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),j=e=>{let t,r,n,c,o="";const a=e.length%3;for(let i=0;i<e.length;){if((r=e.charCodeAt(i++))>255||(n=e.charCodeAt(i++))>255||(c=e.charCodeAt(i++))>255)throw new TypeError("invalid character found");t=r<<16|n<<8|c,o+=l[t>>18&63]+l[t>>12&63]+l[t>>6&63]+l[63&t]}return a?o.slice(0,a-3)+"===".substring(a):o},O=c?e=>btoa(e):o?e=>Buffer.from(e,"binary").toString("base64"):j,g=o?e=>Buffer.from(e).toString("base64"):e=>{const t=4096;let r=[];for(let n=0,c=e.length;n<c;n+=t)r.push(d.apply(null,e.subarray(n,n+t)));return O(r.join(""))},A=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?d(192|t>>>6)+d(128|63&t):d(224|t>>>12&15)+d(128|t>>>6&63)+d(128|63&t)}t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return d(240|t>>>18&7)+d(128|t>>>12&63)+d(128|t>>>6&63)+d(128|63&t)},v=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,y=e=>e.replace(v,A),C=o?e=>Buffer.from(e,"utf8").toString("base64"):i?e=>g(i.encode(e)):e=>O(y(e)),x=(e,t=!1)=>t?s(C(e)):C(e),m=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,w=e=>{switch(e.length){case 4:var t=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),r=t-65536;return d(55296+(r>>>10))+d(56320+(1023&r));case 3:return d((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return d((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},F=e=>e.replace(m,w),B=e=>{if(e=e.replace(/\s+/g,""),!f.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,r,n,c="";for(let o=0;o<e.length;)t=b[e.charAt(o++)]<<18|b[e.charAt(o++)]<<12|(r=b[e.charAt(o++)])<<6|(n=b[e.charAt(o++)]),c+=64===r?d(t>>16&255):64===n?d(t>>16&255,t>>8&255):d(t>>16&255,t>>8&255,255&t);return c},S=n?e=>atob(p(e)):o?e=>Buffer.from(e,"base64").toString("binary"):B,D=o?e=>h(Buffer.from(e,"base64")):e=>h(S(e),e=>e.charCodeAt(0)),k=o?e=>Buffer.from(e,"base64").toString("utf8"):a?e=>a.decode(D(e)):e=>F(S(e)),E=e=>p(e.replace(/[-_]/g,e=>"-"==e?"+":"/")),T=e=>k(E(e))}}]);
//# sourceMappingURL=chunk-5bd9b350.027a4020.js.map