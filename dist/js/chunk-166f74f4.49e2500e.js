(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-166f74f4"],{"225c":function(e,t,n){"use strict";n("a837")},a837:function(e,t,n){},f7cf:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a=Object(c["I"])("data-v-cf70ec8a");Object(c["u"])("data-v-cf70ec8a");var u={class:"changepasswd"},s=Object(c["h"])("h2",null,"更改密码",-1),l={key:0},p=Object(c["h"])("li",null,"网站登录密码只关系到本网站的登录",-1),b={key:1},o=Object(c["h"])("span",null,"更改网站登录密码：",-1),d={key:0},r=Object(c["h"])("span",null,"更改翻墙账号密码：",-1);Object(c["s"])();var i=a((function(e,t,n,a,i,w){return Object(c["r"])(),Object(c["d"])("div",u,[s,Object(c["h"])("ul",null,[a.vpnchangeShow?(Object(c["r"])(),Object(c["d"])("li",l,"网站登录密码和更改翻墙软件密码不同")):Object(c["e"])("",!0),p,a.vpnchangeShow?(Object(c["r"])(),Object(c["d"])("li",b,"翻墙账号密码只关系到翻墙软件里登录的密码，该密码为账号初始化时创建，默认为123")):Object(c["e"])("",!0)]),Object(c["h"])("div",null,[o,Object(c["H"])(Object(c["h"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.webpasswd=e}),placeholder:"仅限字母、数字（3-15位）"},null,512),[[c["E"],a.webpasswd]]),Object(c["h"])("button",{onClick:t[2]||(t[2]=function(){return a.webpasswdSubmit&&a.webpasswdSubmit.apply(a,arguments)})},"提交")]),a.vpnchangeShow?(Object(c["r"])(),Object(c["d"])("div",d,[r,Object(c["H"])(Object(c["h"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.vpnpasswd=e}),placeholder:"仅限字母、数字（3-15位）"},null,512),[[c["E"],a.vpnpasswd]]),Object(c["h"])("button",{onClick:t[4]||(t[4]=function(){return a.vpnpasswdSubmit&&a.vpnpasswdSubmit.apply(a,arguments)})},"提交")])):Object(c["e"])("",!0)])})),w=n("1ae0"),j=n("6c02"),O={name:"ChangePasswd",components:{},setup:function(){var e=Object(c["w"])(""),t=Object(c["w"])("123"),n=Object(c["w"])(!1),a=Object(j["e"])(),u=function(){/[0-9a-zA-Z]{3,15}/.test(e.value)?Object(w["b"])("/user/resetpasswd/",{password:e.value,code:""}).then((function(e){alert("网站密码更改成功,跳转去重新登录"),localStorage.clear(),a.push("/")}),(function(e){"429"==e.response.status&&console.log("你操作的太频繁，请稍后再试")})):(e.value="",alert("密码格式不符"))},s=function(){/[0-9a-zA-Z]{3,15}/.test(t.value)?Object(w["c"])("/vpn/noderesetpasswd/",{nodepasswd:t.value}).then((function(e){console.log(e.data),t.value=e.data,alert("翻墙账号密码更改成功")})):(t.value="",alert("密码格式不符"))};return Object(c["p"])((function(){Object(w["a"])("/vpn/check/").then((function(e){return e.data.detail?n.value=!1:n.value=!0}),(function(e){return n.value=!1}))})),{webpasswd:e,vpnpasswd:t,webpasswdSubmit:u,vpnpasswdSubmit:s,vpnchangeShow:n}}};n("225c");O.render=i,O.__scopeId="data-v-cf70ec8a";t["default"]=O}}]);
//# sourceMappingURL=chunk-166f74f4.49e2500e.js.map