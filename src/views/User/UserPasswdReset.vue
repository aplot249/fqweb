<template>
    <div class="form">
        <h2>用户重置密码</h2>
        <ul>
            <li><span>密码：</span><input type="password" v-model="Info.password1" placeholder="仅限字母、数字（5-15位）"></li>
            <li><span>确认密码：</span><input type="password" v-model="Info.password2" placeholder="再次确认密码"></li>
            <div>
                <span>验证码：</span>
                <input type="text" v-model="Info.verify" placeholder="输入验证码">
                <vue-img-verify ref="verifyRef"/>
            </div>
        </ul>
        <div id="action">
            <button @click="btnClick">提交</button>
            <button @click="this.$emit('changeStatus','login')">返回</button>
        </div>
    </div>
</template>

<script>
    import {ref, reactive, onMounted} from "vue";
    import {useRoute, useRouter} from "vue-router";
    import {useStore} from "vuex";
    import vueImgVerify from "@/components/Captcha.vue"
    import {patch} from "@/network";

    export default {
        components: {
            vueImgVerify,
        },
        props: ['code'],
        emits: [
            'changeStatus',
        ],
        setup(prop, {emit}) {
            const verifyRef = ref(null)
            let router = useRouter()
            let route = useRoute()
            let Info = reactive({
                password1: '',
                password2: '',
                verify: ''
            })
            let btnClick = () => {
                if (verifyRef.value.imgCode.toLowerCase() !== Info.verify.toLowerCase()) {
                    alert("验证码错误")
                    return;
                }
                if (!/[0-9a-zA-Z_]{5,15}/.test(Info.password1)) {
                    alert("密码格式不符")
                    return;
                }
                if (!/[0-9a-zA-Z]{5,15}/.test(Info.password2)) {
                    alert("确认密码格式不符")
                    return;
                }
                if (Info.password1 != Info.password2) {
                    alert("两次密码不一致")
                    return;
                }
                patch('/user/resetpasswd/', {'code': prop.code, 'password': Info.password1}).then(
                    res => {
                        console.log(res.data)
                        alert("重置成功，可以用新密码登录")
                        emit('changeStatus', 'login')
                    },
                    err => {
                        console.log(err)
                    }
                )
            }
            return {Info, btnClick,verifyRef}
        }
    }
</script>

<style>

</style>