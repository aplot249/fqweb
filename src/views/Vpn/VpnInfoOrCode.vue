<template>
    <vpn-code v-if="status=='code'" @changestatus="changestatus"/>
    <vpn-info v-else-if="status=='info'"/>
</template>

<script>
    import VpnInfo from "./VpnInfo";
    import VpnCode from "./Vpncode"
    import {ref, onMounted} from "vue"
    import {get} from "@/network";

    export default {
        name: "VpnInfoOrCode.vue",
        components: {
            VpnInfo,
            VpnCode
        },
        setup() {
            let status = ref()
            let expiredtip = () => {
                console.log('你的账号已过期，如需继续使用请填写注册码')
                status.value = 'code'
            }
            let newertip = () => {
                console.log('新用户初次使用，请填写使用码')
                status.value = 'code'
            }
            let changestatus = () => status.value = 'info'
            onMounted(() => {
                get('/vpn/check/').then(
                    // res.data.detail 结果为真，就是已经过期，转为填写注册码 isnewer.value = true
                    // res => console.log(res.data.detail),
                    res => res.data.detail ? expiredtip() : status.value = 'info',
                    // err => console.log(err.response.data.detail),
                    err => newertip() //新注册的，还没有账号，转为填注册码
                )
            })
            return {status, changestatus}
        }
    }
</script>

<style scoped>

</style>