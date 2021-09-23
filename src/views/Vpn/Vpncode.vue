<template>
    <div>
        <h2>新用户或账号到期</h2>
        <ul>
            <li>3个月40元，半年60元，一年100元</li>
            <li>注册码联系客服获取</li>
        </ul>
        <input v-model="code" type="text" placeholder="填写管理员给的注册码"/>
        <button @click="onSubmit">提交</button>
    </div>
</template>

<script>
    import {useStore} from "vuex";
    import {ref, onMounted} from "vue";
    import {post} from "@/network";

    export default {
        components: {},
        emits: ['changestatus'],
        setup(props, {emit}) {
            const store = useStore()
            let code = ref('')
            let onSubmit = () => {
                post("/vpn/code/", {"code": code.value}).then(
                    res => {
                        if (res.data['detail'] == "处理成功") {
                            console.log("处理成功！")
                            setTimeout(() => {
                                emit('changestatus')
                            }, 1000)
                        }
                    },
                    err => {
                        if (err.response.status == '429') {
                            console.log("请求太频繁，稍等1分钟再试")
                        } else {
                            console.log("注册码错误")
                        }
                    }
                )
            }
            return {code, onSubmit};
        }
    }
</script>

<style lang="scss" scoped>
    div {
        width: 60%;
        display: flex;
        height: inherit;
        flex-direction: column;
        h2{
            text-align: center;
        }
        ul{
            color: red;
            font-size: small;
        }
        input {
            height: 40px;
            width: 100%;
        }

        button {
            margin: 10px;
            height: 40px;
            border-radius: 30px;
            background-color: white;
        }
    }
</style>