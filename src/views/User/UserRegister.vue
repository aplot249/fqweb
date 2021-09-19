<template>
    <div class="form">
        <h2>新用户注册</h2>
        <ul>
            <li><span>用户名：</span><input type="text" placeholder="3-15位字母数字组合" v-model="registerInfo.username"></li>
            <li><span>邮箱：</span><input type="email" placeholder="推荐QQ邮箱" v-model="registerInfo.email"></li>
            <li><span>密码：</span><input type="password" placeholder="2-15位字母数字组合" v-model="registerInfo.password1"></li>
            <li><span>确认密码：</span><input type="password" placeholder="再次确认密码" v-model="registerInfo.password2"></li>
            <div>
                <span>验证码：</span>
                <input type="text" v-model="registerInfo.verify">
                <vue-img-verify ref="verifyRef"/>
            </div>
        </ul>
        <div id="action">
            <button @click="btnSubmit">注册</button>
            <button @click="clickbtn">前去登录</button>
        </div>
    </div>
</template>

<script>
    import {ref, reactive, onActivated} from "vue";
    import {useStore} from "vuex";
    import vueImgVerify from "@/components/Captcha.vue"
    import {useRouter} from "vue-router";
    import {post} from "@/network";

    export default {
        components: {
            vueImgVerify,
        },
        props: {
            initiator: {
                default: '',
                type: String
            }
        },
        emits: [
            'changeOperate',
        ],
        setup(prop, {emit}) {
            const verifyRef = ref(null)
            const store = useStore()
            let router = useRouter()
            let registerInfo = reactive({
                username: '',
                email: '',
                password1: '',
                password2: '',
                verify: ''
            })
            let btnSubmit = () => {
                console.log(verifyRef.value.imgCode)
                if (verifyRef.value.imgCode.toLowerCase() !== registerInfo.verify.toLowerCase()) {
                    console.log("验证码不相等")
                    return false
                }
                post("/user/create/", {
                    'username': registerInfo.username,
                    'email': registerInfo.email,
                    'password': registerInfo.password1,
                    'initiator': prop.initiator // 邀请发起人
                }).then(
                    res=>{
                        console.log(res.data,'注册成功，已发送邮件')
                    }
                )
            }
            let clickbtn = () => {
                emit('changeOperate')
            }
            return {registerInfo,btnSubmit, clickbtn,verifyRef}
        }
    }
</script>

<style>

</style>