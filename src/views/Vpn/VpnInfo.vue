<template>
    <div>
        <h2>账号信息</h2>
        <ul>
            <li>
                <span>服务器地址：</span><input v-model="node" type="text" name="服务器地址" disabled/>
            </li>
            <li>
                <span>服务器用户名：</span><input v-model="user" type="text" name="服务器用户名" disabled/>
            </li>
            <li>
                <span>服务器密码：</span><input v-model="vpn_passwd" type="text" name="服务器密码" disabled/>
            </li>
            <li>
                <span>创建时间：</span><input v-model="create_time" type="text" name="创建时间" disabled/>
            </li>
            <li>
                <span>到期时间：</span><input v-model="end_time" type="text" name="到期时间" disabled/>
            </li>
            <li>
                <span>剩余天数：</span><input v-model="time_remaining" type="text" name="剩余天数" disabled/>
            </li>
            <li>
                <span>其他服务器：</span>
                <ul>
                    <li v-for="(tmp,index) in select_tmp" :key="index">
                        <label>
                            <span>{{tmp['proxy'] ? tmp['proxy'] : tmp['tmp_domain']}}</span>
                            <input type="radio" :value="tmp['tmp_domain']" v-model="checked"/>
                        </label>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import {onMounted, reactive, ref, toRefs, watch} from "vue";
    import {get, patch} from "@/network";

    export default {
        components: {},
        setup() {
            let checked = ref(-1)
            const info = reactive({
                // domain: "",
                // proxy:"",
                node: "",
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
                        // info.domain = res.data['domain']
                        // info.proxy = res.data['proxy']
                        info.node = res.data['proxy'] ? res.data['proxy'] : res.data['domain']
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
                // console.log(checked.value,next,pre)
                console.log(next)
                if (next != -1) {
                    console.log(next)
                    // let new_domain = info.select_tmp[next]['tmp_domain']
                    // console.log(new_domain)
                    patch("/vpn/item/", {'domain': next}).then(
                        res => {
                            alert("更换成功！请在软件里重新配置新的服务器地址")
                            // console.log(res.data);
                            info.node = res.data['proxy'] ? res.data['proxy'] : res.data['domain']
                            info.create_time = res.data['create_time']
                            info.select_tmp = res.data['select_tmp']
                            checked.value = -1
                        },
                        err => {
                            if (err.response.status == '429') {
                                alert("更换失败！操作太频繁，等1分钟再试")
                            } else {
                                alert(err.response.data)
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

<style scoped lang="scss">
    div {
        /*height:calc(100vh - 100px);*/
        height: inherit;
        width: 100%;

        h2 {
            text-align: center;
        }

        ul {
            padding-left: 0;

            li {
                width: 100%;
                list-style: none;
                margin: 10px 0;

                span {
                    width: 35%;
                    display: inline-block;
                    line-height: 40px;
                    text-align: center;
                }

                input {
                    width: 55%;
                    height: 40px;
                }
            }

            li:nth-last-child(1) {

                span {
                    display: inline-block;
                }

                ul {
                    display: inline-block;
                    width: 55%;

                    li {
                        border: 1px solid rgba(118, 118, 118, 0.3);
                        height: 40px;
                        background-color: #F8F8F8;

                        span {
                            display: inline-block;
                        }

                        input {
                            margin: 12.5px 3px;
                            display: inline-block;
                            float: left;
                            width: 15px;
                            height: 15px;
                        }
                    }
                }
            }
        }
    }
</style>