<template>
    <div class="form">
        <h2>新用户注册</h2>
        <ul>
            <li><span>用户名：</span><input type="text"></li>
            <li><span>邮箱：</span><input type="email"></li>
            <li><span>密码：</span><input type="password"></li>
            <li><span>确认密码：</span><input type="password"></li>
            <div>
                <span>验证码：</span>
                <input type="text" v-model="registerInfo.verify">
                <vue-img-verify ref="verifyRef"/>
            </div>
        </ul>
        <div id="action">
            <button>注册</button>
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
    // import Index from "@/Index.vue";

    export default {
        components: {
            vueImgVerify,
        },
        emits: [
            'changeOperate',
        ],
        setup(prop, {emit}) {
            // const verifyRef = ref(null)
            const store = useStore()
            let router = useRouter()
            let registerInfo = reactive({
                verify:''
            })
            let clickbtn = () => {
                emit('changeOperate')
                // router.push('/backend')
            }
            return {registerInfo,clickbtn}
        }
    }
</script>

<style>

</style>