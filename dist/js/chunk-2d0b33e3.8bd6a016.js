(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b33e3"],{2818:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a={class:"form"},c=Object(o["g"])("h2",null,"用户登录",-1),l=Object(o["g"])("span",null,"用户名：",-1),r=Object(o["g"])("span",null,"密码：",-1),i=Object(o["g"])("span",null,"验证码：",-1),u={id:"fpwd"},s={id:"action"};function d(e,t,n,d,g,b){var f=this,p=Object(o["z"])("vue-img-verify");return Object(o["s"])(),Object(o["d"])("div",a,[c,Object(o["g"])("ul",null,[Object(o["g"])("li",null,[l,Object(o["I"])(Object(o["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return d.loginInfo.username=e}),placeholder:"输入用户名或邮箱号"},null,512),[[o["F"],d.loginInfo.username]])]),Object(o["g"])("li",null,[r,Object(o["I"])(Object(o["g"])("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return d.loginInfo.password=e}),placeholder:"密码（5-15位）"},null,512),[[o["F"],d.loginInfo.password]])]),Object(o["g"])("div",null,[i,Object(o["I"])(Object(o["g"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return d.loginInfo.verify=e}),placeholder:"输入验证码"},null,512),[[o["F"],d.loginInfo.verify]]),Object(o["g"])(p,{ref:"verifyRef"},null,512)]),Object(o["g"])("div",u,[Object(o["g"])("a",{onClick:t[4]||(t[4]=function(){return d.changeModalShow&&d.changeModalShow.apply(d,arguments)}),href:"javascript:void(0)"},"忘记密码？")])]),Object(o["g"])("div",s,[Object(o["g"])("button",{onClick:t[5]||(t[5]=function(){return d.btnClick&&d.btnClick.apply(d,arguments)})},"登录"),Object(o["g"])("button",{onClick:t[6]||(t[6]=function(e){return f.$emit("changeStatus","register")})},"新用户注册")])])}var g=n("6c02"),b=n("5502"),f=n("e7f8"),p=n("1ae0"),j={components:{vueImgVerify:f["a"]},emits:["changeStatus","changeModalShow"],setup:function(e,t){var n=t.emit,a=Object(o["x"])(null),c=Object(b["b"])(),l=Object(g["e"])(),r=(Object(g["d"])(),Object(o["w"])({username:"",password:"",verify:""})),i=function(){n("changeModalShow")},u=function(){a.value.imgCode.toLowerCase()===r.verify.toLowerCase()?/[0-9a-zA-Z_]{5,15}/.test(r.username)?/[0-9a-zA-Z]{5,15}/.test(r.password)?Object(p["c"])("/user/token/",{username:r.username,password:r.password}).then((function(e){console.log(e.data),e.data.is_active?(l.push("/backend"),localStorage.setItem("userinfo",JSON.stringify(e.data)),c.commit("changeLoginStatus",!0)):alert("邮箱没有激活，请先激活再登录")}),(function(e){"400"==e.response.status&&alert("用户名或密码错误，请重试")})):alert("密码格式不符"):alert("用户名格式不符"):alert("验证码错误")};return{loginInfo:r,btnClick:u,changeModalShow:i,verifyRef:a}}};j.render=d;t["default"]=j}}]);
//# sourceMappingURL=chunk-2d0b33e3.8bd6a016.js.map