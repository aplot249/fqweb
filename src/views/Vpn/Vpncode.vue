<template>
    <input v-model="code" type="text" placeholder="填写管理员给的注册码"/>
    <div>
        <button>
            提交
        </button>
    </div>
</template>

<script>
    import {useStore} from "vuex";
    import {ref, onMounted} from "vue";
    import {post} from "@/network";

    export default {
        components: {

        },
        props: {
            barIsshow: {
                type: Boolean,
                default: true
            }
        },
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
    input{
        height: 40px;
        width:100%;
    }
    div{

    }
</style>