<template>
    <p>配置账号</p>
    <input v-model="domain" type="text" name="服务器地址"/>
    <input v-model="user" type="text" name="服务器用户名"/>
    <input v-model="vpn_passwd" type="text" name="服务器密码"/>
    <!--    <van-field v-model="vpn_type" type="text" name="VPN类型"   />-->
    <input v-model="create_time" type="text" name="创建时间"/>
    <input v-model="end_time" type="text" name="到期时间"/>
    <input v-model="time_remaining" type="text" name="剩余天数"/>
<!--    <radio v-model="checked" direction="horizontal">-->
    <radio :name="index" v-for="(tmp,index) in select_tmp" :key="index">{{tmp['tmp_domain']}}</radio>
<!--    </radio>-->
</template>

<script>
    import {ref, reactive, toRefs, onActivated, onMounted, watch} from "vue";
    import {get, patch} from "@/network";

    export default {
        components: {},
        setup() {
            let checked = ref(-1)
            const info = reactive({
                domain: "",
                user: '',
                passwd: "",
                vpn_passwd: '',
                create_time: '',
                expired: '',
                valid_days: '',
                end_time: '',
                time_remaining: '',
                vpn_type: '',
                select_tmp: [],
            })
            onMounted(() => {
                get("/vpn/item/").then(
                    res => {
                        console.log(res.data)
                        info.domain = res.data['domain']
                        info.user = res.data['user']
                        info.vpn_passwd = res.data['vpn_passwd']
                        info.create_time = res.data['create_time']
                        info.expired = res.data['expired']
                        info.valid_days = res.data['valid_days']
                        info.end_time = res.data['end_time']
                        info.time_remaining = res.data['time_remaining']
                        info.vpn_type = res.data['vpn_type']
                        info.select_tmp = res.data['select_tmp']
                    },
                    err => console.log(err)
                )
            })
            watch(checked, (next, pre) => {
                if (next != -1) {
                    console.log(next, pre)
                    let new_domain = info.select_tmp[next]['tmp_domain']
                    console.log(new_domain)
                    patch("/vpn/item/", {'domain': new_domain}).then(
                        res => {
                            console.log("更换成功！请在软件里重新配置新的服务器地址")
                            console.log(res.data);
                            info.domain = res.data['domain']
                            info.create_time = res.data['create_time']
                            info.select_tmp = res.data['select_tmp']
                            checked.value = -1
                        },
                        err => {
                            if (err.response.status == '429') {
                                console.log("更换失败！操作太频繁，等1分钟再试")
                            } else {
                                console.log(err.response.data)
                            }
                        }
                    )
                }
            })

            return {
                checked,
                ...toRefs(info)
            };
        }
    }
</script>

<style scoped>

</style>