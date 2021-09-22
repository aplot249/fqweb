<template>
    <div class="form">
        <h2>新用户注册</h2>
        <ul>
            <li><span>用户名：</span><input type="text" placeholder="5-15位字母、数字" v-model="registerInfo.username"></li>
            <li><span>邮箱：</span><input type="email" placeholder="推荐QQ邮箱" v-model="registerInfo.email"></li>
            <li><span>密码：</span><input type="password" placeholder="5-15位字母、数字" v-model="registerInfo.password1"></li>
            <li><span>确认密码：</span><input type="password" placeholder="再次确认密码" v-model="registerInfo.password2"></li>
            <div>
                <span>验证码：</span>
                <input type="text" v-model="registerInfo.verify">
                <vue-img-verify ref="verifyRef"/>
            </div>
        </ul>
        <div id="action">
            <button @click="btnSubmit">注册</button>
            <button @click="btnClick">前去登录</button>
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
            'changeStatus',
        ],
        setup(props, {emit}) {
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
                console.log('props是：',props)
                if (verifyRef.value.imgCode.toLowerCase() !== registerInfo.verify.toLowerCase()) {
                    alert("验证码错误")
                    return;
                }
                if (!/[0-9a-zA-Z]{5,15}/.test(registerInfo.username)) {
                    alert("用户名格式不符")
                    return;
                }
                if (!/\w+@(qq|163).com/.test(registerInfo.email)) {
                    alert("邮箱格式不符，仅支持QQ和163邮箱")
                    return;
                }
                if (!/[0-9a-zA-Z]{5,15}/.test(registerInfo.password1)) {
                    alert("密码格式不符")
                    return;
                }
                if (!/[0-9a-zA-Z]{5,15}/.test(registerInfo.password2)) {
                    alert("确认密码格式不符")
                    return;
                }
                post("/user/create/", {
                    'username': registerInfo.username,
                    'email': registerInfo.email,
                    'password': registerInfo.password1,
                    'initiator': props.initiator // 注册邀请发起人
                }).then(
                    res => {
                        emit('changeStatus','login')
                        alert('注册成功，已向你填写的邮箱发送账号激活邮件，请先打开邮箱激活账号，再登录')
                    },
                    err=>{
                        alert(err.response.data['non_field_errors'][0])
                    }
                )
            }
            let btnClick = () => {
                emit('changeStatus','login')
            }
            return {registerInfo, btnSubmit, btnClick, verifyRef}
        }
    }
</script>

<style>

</style>