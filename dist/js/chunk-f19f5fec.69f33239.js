(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f19f5fec"],{"3feb":function(t,e,n){},"96e6":function(t,e,n){"use strict";n.r(e);var c=n("7a23"),u=Object(c["I"])("data-v-30d7a7df");Object(c["u"])("data-v-30d7a7df");var a={class:"douyin-content"},l=Object(c["h"])("h2",null,"抖音视频互动",-1),i=Object(c["h"])("ul",null,[Object(c["h"])("li",null,"提交你抖音视频的分享链接，本站将解析对应视频"),Object(c["h"])("li",null,"视频是无水印版的，支持下载"),Object(c["h"])("li",null,"视频可以供本站所有用户观看和评论")],-1),o={class:"info"},b=Object(c["h"])("span",null,"输入抖音视频分享链接：",-1),r={class:"action"},d=Object(c["h"])("hr",null,null,-1),s={class:"list"},j={class:"item"},O={class:"action"};Object(c["s"])();var f=u((function(t,e,n,u,f,v){return Object(c["r"])(),Object(c["d"])("div",a,[l,i,Object(c["h"])("div",o,[b,Object(c["H"])(Object(c["h"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return u.douyin=t})},null,512),[[c["E"],u.douyin]])]),Object(c["h"])("div",r,[Object(c["h"])("button",{onClick:e[2]||(e[2]=function(){return u.btnSubmit&&u.btnSubmit.apply(u,arguments)}),disabled:!!u.isdisabled},Object(c["A"])(u.btnText),9,["disabled"]),Object(c["h"])("button",{onClick:e[3]||(e[3]=function(){return u.refresh&&u.refresh.apply(u,arguments)})},"获取最新")]),d,Object(c["h"])("div",s,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["x"])(u.douyinList,(function(t,e){return Object(c["r"])(),Object(c["d"])("div",j,[Object(c["h"])("img",{src:t.img,alt:"{{item.title}}"},null,8,["src"]),Object(c["h"])("span",null,Object(c["A"])(t.title),1)])})),256))]),Object(c["h"])("div",O,[Object(c["h"])("button",{onClick:e[4]||(e[4]=function(){return u.pageBefore&&u.pageBefore.apply(u,arguments)})},"上一页"),Object(c["h"])("button",{onClick:e[5]||(e[5]=function(){return u.pageNext&&u.pageNext.apply(u,arguments)})},"下一页")])])})),v=n("1ae0"),h={name:"Douyin",components:{},setup:function(){var t=Object(c["w"])(!1),e=Object(c["w"])("提交"),n=Object(c["w"])(""),u=Object(c["w"])([]),a=Object(c["w"])(1),l=Object(c["w"])(),i=function(){a.value=1},o=function(){a.value>1&&(a.value-=1)},b=function(){a.value<Math.ceil(l.value/6)&&(a.value+=1)},r=function(){if(!n.value.length)return alert("链接不能为空"),!1;if(!/https:\/\/mp.weixin.qq.com\/s\/\w+/.test(n.value))return alert("公众号文章链接错误"),!1;t.value=!0,Object(v["c"])("/others/douyin/",{vx_share_link:n.value}).then((function(t){console.log(t.data)}));var c=30,u=setInterval((function(){0===c?(d(),t.value=!1,e.value="提交",clearInterval(u)):(e.value="正在处理(".concat(c,")"),c-=1)}),1e3)},d=function(){Object(v["a"])("/video/?page=".concat(a.value)).then((function(t){console.log(t.data);var e=t.data.results;l.value=t.data.count,u.value=e}))};return Object(c["p"])((function(){d()})),Object(c["F"])(a,(function(t,e){d(a)})),{douyin:n,douyinList:u,btnSubmit:r,refresh:i,isdisabled:t,btnText:e,pageBefore:o,pageNext:b}}};n("dd85");h.render=f,h.__scopeId="data-v-30d7a7df";e["default"]=h},dd85:function(t,e,n){"use strict";n("3feb")}}]);
//# sourceMappingURL=chunk-f19f5fec.69f33239.js.map