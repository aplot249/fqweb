<template>
    <div class="form">
        <h2>用户登录</h2>
        <ul>
            <li><span>用户名：</span><input type="text" v-model="loginInfo.username" placeholder="输入用户名或邮箱号"></li>
            <li><span>密码：</span><input type="password" v-model="loginInfo.password" placeholder="输入密码"></li>
            <div>
                <span>验证码：</span>
                <input type="text" v-model="loginInfo.verify" placeholder="输入验证码">
                <vue-img-verify ref="verifyRef"/>
            </div>
            <div id="fpwd">
                <a @click="changeModalShow" href="javascript:void(0)">忘记密码？</a>
            </div>
        </ul>
        <div id="action">
            <button @click="btnClick">登录</button>
            <button @click="this.$emit('changeStatus','register')">新用户注册</button>
        </div>
    </div>
</template>

<script>
    import {ref, reactive, onMounted} from "vue";
    import {useRoute, useRouter} from "vue-router";
    import {useStore} from "vuex";
    import vueImgVerify from "@/components/Captcha.vue"
    import {get, post} from "@/network";

    export default {
        components: {
            vueImgVerify,
        },
        emits: [
            'changeStatus',
            'changeModalShow'
        ],
        setup(prop, {emit}) {
            const verifyRef = ref(null)
            const store = useStore()
            let router = useRouter()
            let route = useRoute()
            let loginInfo = reactive({
                username: '',
                password: '',
                verify: ''
            })
            let changeModalShow = ()=>{
                emit('changeModalShow')
            }
            let btnClick = () => {
                if (verifyRef.value.imgCode.toLowerCase() !== loginInfo.verify.toLowerCase()) {
                    alert("验证码错误")
                    return;
                }
                if (!/[0-9a-zA-Z_]{3,15}/.test(loginInfo.username)) {
                    alert("用户名格式不符")
                    return;
                }
                if (!/[0-9a-zA-Z]{3,15}/.test(loginInfo.password)) {
                    alert("密码格式不符")
                    return;
                }
                post('/user/token/', {'username': loginInfo.username, 'password': loginInfo.password}).then(
                    res => {
                        console.log(res.data)
                        if (res.data.is_active) {
                            router.push('/backend')
                            localStorage.setItem('userinfo', JSON.stringify(res.data))
                            store.commit('changeLoginStatus', true)
                        }else {
                            alert("邮箱没有激活，请先激活再登录")
                        }
                    },
                    err=>{
                        if(err.response.status == '400'){
                            alert("用户名或密码错误，请重试")
                        }
                    }
                )
            }
            return {loginInfo, btnClick,changeModalShow,verifyRef}
        }
    }
</script>

<style>

</style>