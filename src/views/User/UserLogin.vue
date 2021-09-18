<template>
    <div class="form">
        <h2>用户登录</h2>
        <ul>
            <li><span>用户名：</span><input type="text"   v-model="loginInfo.username" placeholder="输入用户名或邮箱号"></li>
            <li><span>密码：</span><input type="password" v-model="loginInfo.password" placeholder="输入密码"></li>
            <div>
                <span>验证码：</span>
                <input type="text" v-model="loginInfo.verify" placeholder="输入验证码">
                <vue-img-verify ref="verifyRef"/>
            </div>
            <div id="fpwd">
                <a href="javascript:void(0)">忘记密码？</a>
            </div>
        </ul>
        <div id="action">
            <button @click="clickbtn">登录</button>
            <button @click="this.$emit('changeOperate')">新用户注册</button>
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
            'changeOperate',
        ],
        setup(prop, {emit}) {
            const verifyRef = ref(null)
            const store = useStore()
            let router = useRouter()
            let route = useRoute()
            let loginInfo = reactive({
                username:'',
                password:'',
                verify: ''
            })
            let clickbtn = () => {
                post('/user/token/',{'username':loginInfo.username,'password':loginInfo.password}).then(
                    res=>{
                        router.push('/backend')
                        // console.log(res.data)
                        localStorage.setItem('userinfo',JSON.stringify(res.data))
                        store.commit('changeLoginStatus',true)
                    }
                ).catch(err=>console.log(err))
            }
            return {loginInfo, clickbtn}
        }
    }
</script>

<style>

</style>