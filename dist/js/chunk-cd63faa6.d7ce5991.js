(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd63faa6"],{5568:function(e,t,r){},d212:function(e,t,r){"use strict";r("5568")},e5d8:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),c=Object(n["J"])("data-v-36339b1a");Object(n["v"])("data-v-36339b1a");var a={class:"invitation"},o=Object(n["g"])("h2",null,"邀请得奖励",-1),i=Object(n["g"])("ul",null,[Object(n["g"])("li",null,"把你的邀请链接复制发送给别人，别人通过你的邀请链接打开本网站，注册并使用。你将获得 账号的天数奖励。"),Object(n["g"])("li",null,"在你 账号的有效期内，每邀请1个人，奖励天数15天。")],-1),l=Object(n["f"])(" 您的邀请链接为： "),u={style:{"font-weight":"bolder"}},b={key:0},f={key:1},d=Object(n["g"])("tr",null,[Object(n["g"])("th",null,"邀请时间"),Object(n["g"])("th",null,"邀请的用户"),Object(n["g"])("th",null,"奖励天数")],-1),h=Object(n["g"])("td",null,"15天",-1);Object(n["t"])();var s=c((function(e,t,r,c,s,g){return Object(n["s"])(),Object(n["d"])("div",a,[o,i,Object(n["g"])("div",null,[l,Object(n["g"])("p",u,"http://chuanyun101.com/?share="+Object(n["B"])(c.initiator),1),c.invitee.length?(Object(n["s"])(),Object(n["d"])("p",b,"你目前已邀请"+Object(n["B"])(c.invitee.length)+"人，共获得奖励天数"+Object(n["B"])(15*c.invitee.length)+"天，邀请名单如下：",1)):Object(n["e"])("",!0),c.invitee.length?Object(n["e"])("",!0):(Object(n["s"])(),Object(n["d"])("p",f,"你还没有邀请人哦~，快起邀请把！"))]),Object(n["g"])("table",null,[d,(Object(n["s"])(!0),Object(n["d"])(n["a"],null,Object(n["y"])(c.invitee,(function(e,t){return Object(n["s"])(),Object(n["d"])("tr",{key:t},[Object(n["g"])("td",null,Object(n["B"])(e.create_time),1),Object(n["g"])("td",null,Object(n["B"])(e.invitee),1),h])})),128))])])})),g=r("1ae0"),j=r("e762"),O={name:"Invitation",components:{},setup:function(){var e=Object(j["b"])(JSON.parse(localStorage.getItem("userinfo")).user),t=Object(n["x"])([]),r=function(){Object(g["a"])("/vpn/share/").then((function(e){console.log(e.data),t.value=e.data}))};return Object(n["q"])((function(){r()})),{initiator:e,invitee:t,getData:r}}};r("d212");O.render=s,O.__scopeId="data-v-36339b1a";t["default"]=O},e762:function(e,t,r){"use strict";r.d(t,"b",(function(){return x})),r.d(t,"a",(function(){return T}));const n="function"===typeof atob,c="function"===typeof btoa,a="function"===typeof Buffer,o="function"===typeof TextDecoder?new TextDecoder:void 0,i="function"===typeof TextEncoder?new TextEncoder:void 0,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",u=Array.prototype.slice.call(l),b=(e=>{let t={};return e.forEach((e,r)=>t[e]=r),t})(u),f=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,d=String.fromCharCode.bind(String),h="function"===typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(e,t=(e=>e))=>new Uint8Array(Array.prototype.slice.call(e,0).map(t)),s=e=>e.replace(/=/g,"").replace(/[+\/]/g,e=>"+"==e?"-":"_"),g=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),j=e=>{let t,r,n,c,a="";const o=e.length%3;for(let i=0;i<e.length;){if((r=e.charCodeAt(i++))>255||(n=e.charCodeAt(i++))>255||(c=e.charCodeAt(i++))>255)throw new TypeError("invalid character found");t=r<<16|n<<8|c,a+=u[t>>18&63]+u[t>>12&63]+u[t>>6&63]+u[63&t]}return o?a.slice(0,o-3)+"===".substring(o):a},O=c?e=>btoa(e):a?e=>Buffer.from(e,"binary").toString("base64"):j,p=a?e=>Buffer.from(e).toString("base64"):e=>{const t=4096;let r=[];for(let n=0,c=e.length;n<c;n+=t)r.push(d.apply(null,e.subarray(n,n+t)));return O(r.join(""))},A=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?d(192|t>>>6)+d(128|63&t):d(224|t>>>12&15)+d(128|t>>>6&63)+d(128|63&t)}t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return d(240|t>>>18&7)+d(128|t>>>12&63)+d(128|t>>>6&63)+d(128|63&t)},v=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,y=e=>e.replace(v,A),C=a?e=>Buffer.from(e,"utf8").toString("base64"):i?e=>p(i.encode(e)):e=>O(y(e)),x=(e,t=!1)=>t?s(C(e)):C(e),m=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,B=e=>{switch(e.length){case 4:var t=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),r=t-65536;return d(55296+(r>>>10))+d(56320+(1023&r));case 3:return d((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return d((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},w=e=>e.replace(m,B),F=e=>{if(e=e.replace(/\s+/g,""),!f.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,r,n,c="";for(let a=0;a<e.length;)t=b[e.charAt(a++)]<<18|b[e.charAt(a++)]<<12|(r=b[e.charAt(a++)])<<6|(n=b[e.charAt(a++)]),c+=64===r?d(t>>16&255):64===n?d(t>>16&255,t>>8&255):d(t>>16&255,t>>8&255,255&t);return c},S=n?e=>atob(g(e)):a?e=>Buffer.from(e,"base64").toString("binary"):F,D=a?e=>h(Buffer.from(e,"base64")):e=>h(S(e),e=>e.charCodeAt(0)),E=a?e=>Buffer.from(e,"base64").toString("utf8"):o?e=>o.decode(D(e)):e=>w(S(e)),k=e=>g(e.replace(/[-_]/g,e=>"-"==e?"+":"/")),T=e=>E(k(e))}}]);
//# sourceMappingURL=chunk-cd63faa6.d7ce5991.js.map