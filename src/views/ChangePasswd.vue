<template>
    <div class="changepasswd">
        <h2>更改密码</h2>
        <ul>
            <li v-if="vpnchangeShow">网站登录密码和更改翻墙软件密码不同</li>
            <li>网站登录密码只关系到本网站的登录</li>
            <li v-if="vpnchangeShow">翻墙账号密码只关系到翻墙软件里登录的密码，该密码为账号初始化时创建，默认为123</li>
        </ul>
        <div>
            <span>更改网站登录密码：</span>
            <input type="text" v-model="webpasswd" placeholder="仅限字母、数字（3-15位）">
            <button @click="webpasswdSubmit">提交</button>
        </div>
        <div v-if="vpnchangeShow">
            <span>更改翻墙账号密码：</span>
            <input type="text" v-model="vpnpasswd" placeholder="仅限字母、数字（3-15位）">
            <button @click="vpnpasswdSubmit">提交</button>
        </div>
    </div>
</template>

<script>
    import {ref, onMounted} from "vue";
    import {patch, post, get} from "@/network";
    import {useRouter} from "vue-router";

    export default {
        name: "ChangePasswd",
        components: {},
        setup() {
            let webpasswd = ref('')
            let vpnpasswd = ref('123')
            let vpnchangeShow = ref(false)
            let route = useRouter()
            let webpasswdSubmit = () => {
                if (/[0-9a-zA-Z]{3,15}/.test(webpasswd.value)) {
                    patch('/user/resetpasswd/', {'password': webpasswd.value, 'code': ''}).then(
                        res => {
                            alert("网站密码更改成功,跳转去重新登录")
                            localStorage.clear()
                            route.push('/')
                        },
                        err => {
                            if (err.response.status == '429') {
                                console.log("你操作的太频繁，请稍后再试")
                            }
                        }
                    )
                } else {
                    webpasswd.value = ''
                    alert("密码格式不符")
                }
            }
            let vpnpasswdSubmit = () => {
                if (/[0-9a-zA-Z]{3,15}/.test(vpnpasswd.value)) {
                    post('/vpn/noderesetpasswd/', {'nodepasswd': vpnpasswd.value}).then(
                        res => {
                            console.log(res.data)
                            vpnpasswd.value = res.data
                            alert("翻墙账号密码更改成功")
                        }
                    )
                } else {
                    vpnpasswd.value = ''
                    alert("密码格式不符")
                }
            }
            onMounted(() => {
                get('/vpn/check/').then(
                    // res.data.detail 结果为真，就是已经过期，转为填写注册码 isnewer.value = true
                    // res => console.log(res.data.detail),
                    res => res.data.detail ? vpnchangeShow.value = false : vpnchangeShow.value = true,
                    // err => console.log(err.response.data.detail),
                    err => vpnchangeShow.value = false //新注册的，还没有账号，转为填注册码
                )
            })
            return {webpasswd, vpnpasswd, webpasswdSubmit, vpnpasswdSubmit, vpnchangeShow}
        }
    }
</script>

<style scoped lang="scss">
    .changepasswd {
        width: 100%;
        height: 100%;

        h2 {
            text-align: center;
        }

        ul {
            width: 80%;
            padding-left: 10%;
            font-size: small;
            color: red;
        }

        div {
            width: 80%;
            margin: 30px auto;
            text-align: center;
            display: flex;
            flex-direction: column;

            * {
                display: block;
                height: 40px;
                line-height: 40px;
                margin-bottom: 5px;
                /*margin: 10px auto;*/
            }

            button {
                border-radius: 30px;
            }
        }
    }
</style>