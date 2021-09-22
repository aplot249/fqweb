<template>
    <div class="index-container">
        <top/>
        <div class="middle">
            <div class="left">
                <img src="@/assets/images/slogo.png" alt="slogo图片">
                <ul>
                    <li>主要为交换生、留学生提供外网服务</li>
                    <li>提供多种穿透方式和多个节点可以选择</li>
                    <li>支持手机、电脑（Windows、Mabook）同时使用</li>
                </ul>
<!--                <ul>-->
<!--                    <li>3个月30元</li>-->
<!--                    <li>半年60元</li>-->
<!--                    <li>一年100元</li>-->
<!--                </ul>-->
            </div>
            <div class="right">
                <UserRegister v-if="status == 'register'" @changeStatus="changeStatus" :initiator="initiator"></UserRegister>
                <UserLogin v-else-if="status == 'login'" @changeStatus="changeStatus" @changeModalShow="changeModalShow"></UserLogin>
                <UserPasswdReset v-else-if="status == 'reset'" @changeStatus="changeStatus" :code="this.$route.query.reset"></UserPasswdReset>
            </div>
            <div class="modalDiv" v-if="ModalShow">
                <p>输入邮箱：</p>
                <close-one theme="outline" size="30" fill="#333" @click="ModalShow = false"/>
                <input type="email" placeholder="输入注册时预留的邮箱号，尝试重置密码" v-model="reservedEmail">
                <button @click="tryFindEmail">提交</button>
            </div>
        </div>
        <bottom/>
    </div>
</template>

<script>
    import {CloseOne} from '@icon-park/vue-next';
    import Top from "@/components/Top";
    import Bottom from "@/components/Bottom";
    import UserRegister from "@/views/User/UserRegister";
    import UserLogin from "@/views/User/UserLogin";
    import UserPasswdReset from "@/views/User/UserPasswdReset";

    import {ref, onMounted} from "vue";
    import {useRoute} from "vue-router";
    import { decode } from 'js-base64';
    import {get,post} from "@/network";


    export default {
        name: "Index",
        components: {
            CloseOne,
            Top,
            Bottom,
            UserRegister,
            UserLogin,
            UserPasswdReset
        },
        setup() {
            let route = useRoute()
            let initiator = ref('')
            let ModalShow = ref(false)
            let reservedEmail = ref('')
            let status = ref('login')
            let tryFindEmail = ()=>{
                if(!/\w+@(qq|163).com/.test(reservedEmail.value)){
                    alert("邮箱格式不符")
                    return;
                }
                post('/user/forgetpasswd/',{'email':reservedEmail.value}).then(
                    res=>{
                        ModalShow.value = false
                        alert("已向你邮箱发送重置密码的确认链接，请登录邮箱点击链接，进行重置密码")
                    },
                    err=>{
                        ModalShow.value = false
                        alert("该邮箱号不存在")
                    }
                )
            }
            let changeModalShow = ()=>{
                ModalShow.value = !ModalShow.value
            }
            let changeStatus = (val) => {
                status.value = val
            }
            onMounted(() => {
                switch (Object.keys(route.query)[0]) {
                    case 'active': //用户激活链接
                        get(`/user/active/${route.query.active}`).then(
                            res => {
                                if (res.data.detail != "邮箱已激活，可以登录。") {
                                    alert("激活失败")
                                } else {
                                    alert("激活成功，可以登录")
                                }
                            }
                        )
                        break;
                    case 'share': //邀请注册链接
                        // console.log(decode(route.query.share))
                        initiator.value = decode(route.query.share)
                        status.value = 'register'
                        break;
                    case 'reset': // 重置密码
                        status.value = 'reset'
                        break;
                    default:
                        // console.log('没有参数')
                }
                // console.log('进入index组件，形参：',route.query)
                // //用户激活链接
                // if (/active/.test(route.fullPath)) {
                //     get(`/user/active/${route.query.active}`).then(
                //         res => {
                //             if (res.data.detail != "邮箱已激活，可以登录。") {
                //                 alert("激活失败")
                //             } else {
                //                 alert("激活成功，可以登录")
                //             }
                //         }
                //     )
                // }
                // //邀请注册链接
                // if (/share/.test(route.fullPath)) {
                //     console.log(decode(route.query.share))
                //     initiator.value = decode(route.query.share)
                //     status.value = 'register'
                // }
                // // 重置密码
                // if(/reset/.test(route.fullPath)){
                //     status.value = 'reset'
                // }
            })
            return {status, changeStatus, initiator,ModalShow,changeModalShow,reservedEmail,tryFindEmail}
        }
    }
</script>

<style lang="scss">
    @media screen and (min-width: 1080px) {
        @import "assets/css/pc/index_pc";
    }

    @media screen and (max-width: 1080px) {
        @import "assets/css/mini/index_mini";
    }

    button:nth-child(1) {
        background-color: white;
    }

    button:nth-child(2) {
        background-color: cornflowerblue;
    }

    .icon {
        display: none;
    }

</style>
<style lang="scss">
    .modalDiv{
        position: fixed;
        background-color: white;
        height: 150px;
        width: 320px;
        top:calc((100vh - 150px)/2);
        left:calc((100vw - 320px)/2);
        p{
            margin: 2px auto;
            text-align: center;
            height: 40px;
            line-height: 40px;
        }
        span{
            position: absolute;
            top: 4px;
            right: 4px;
        }
        button{
            display: block;
            width: 100px;
            height: 40px;
            border-radius: 30px;
            margin: 10px auto;
        }
        input{
            display: block;
            margin: auto;
            height: 40px;
            width: 90%;
        }
    }
</style>