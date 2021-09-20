<template>
    <div class="index-container">
        <top/>
        <div class="middle">
            <div class="left">
                <div>
                    <img src="@/assets/images/slogo.png" alt="slogo图片">
                </div>
                <ul>
                    <li>主要为交换生、留学生提供外网服务</li>
                    <li>提供多种穿透方式和多个节点可以选择</li>
                    <li>支持手机、电脑（Windows、Mabook）同时使用</li>
                </ul>
            </div>
            <div class="right">
                <UserRegister v-if="!login" @changeOperate="changeOperate" :initiator="initiator"></UserRegister>
                <UserLogin v-else-if="login" @changeOperate="changeOperate"></UserLogin>
            </div>
        </div>
        <bottom/>
    </div>
</template>

<script>
    import Top from "@/components/Top";
    import Bottom from "@/components/Bottom";
    import UserRegister from "@/views/User/UserRegister";
    import UserLogin from "@/views/User/UserLogin";
    import {ref, onMounted} from "vue";
    import {useRoute} from "vue-router";
    import {get} from "@/network";

    export default {
        name: "Index",
        components: {
            Top,
            Bottom,
            UserRegister,
            UserLogin
        },
        setup() {
            let route = useRoute()
            let initiator = ref(null)
            let login = ref(true)
            let changeOperate = () => {
                login.value = !login.value
            }
            onMounted(() => {
                console.log(route.query)
                //用户激活链接
                if (new RegExp('login').test(route.fullPath)) {
                    get(`/user/active/${route.query.login}`).then(
                        res => {
                            if (res.data.detail != "邮箱已激活，可以登录。") {
                                alert("激活失败")
                            } else {
                                alert("激活成功，可以登录")
                            }
                        }
                    )
                }
                //邀请注册链接
                if (new RegExp('share').test(route.fullPath)) {
                    initiator.value = route.query.share
                }
            })
            return {login, changeOperate, initiator}
        }
    }
</script>

<style lang="scss">
    @media screen and (min-width: 769px) {
        @import "assets/css/pc/index_pc";
    }

    @media screen and (max-width: 768px) {
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