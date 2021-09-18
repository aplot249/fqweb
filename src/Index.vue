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
                <UserRegister v-if="!login" @changeOperate="changeOperate"></UserRegister>
                <UserLogin v-else-if="login" @changeOperate="changeOperate"></UserLogin>
            </div>
        </div>
        <bottom/>
    </div>
</template>

<script>
    import Top from "@/components/Top";
    import Bottom from "@/components/Bottom";
    import UserRegister from "@/views/User/UserRegister.vue";
    import UserLogin from "@/views/User/UserLogin.vue";
    import {ref, reactive} from "vue";

    export default {
        name: "Index",
        components: {
            Top,
            Bottom,
            UserRegister,
            UserLogin
        },
        setup() {
            let login = ref(true)
            let changeOperate = () => {
                login.value = !login.value
            }
            return {login, changeOperate}
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
    .icon{
        display: none;
    }
</style>