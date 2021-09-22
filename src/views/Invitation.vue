<template>
    <div class="invitation">
        <h2>邀请得奖励</h2>
        <ul>
            <li>把你的邀请链接复制发送给别人，别人通过你的邀请链接打开本网站，注册并使用。你将获得翻墙账号的天数奖励。</li>
            <li>在你翻墙账号的有效期内，每邀请1个人，奖励天数15天。</li>
        </ul>
        <div>
            您的邀请链接为：
            <p style="font-weight: bolder">http://chuanyun101.com/?share={{initiator}}</p>
            <p v-if="invitee.length">你目前已邀请{{invitee.length}}人，共获取奖励天数{{15*invitee.length}}天，邀请的人员名单如下：</p>
            <p v-if="!invitee.length">你还没有邀请人哦~，快起邀请把！</p>
        </div>
        <!--        <ul v-if="invitee.length">-->
        <!--            <li v-for="(item,index) in invitee" style="font-size: large">{{item.invitee}}</li>-->
        <!--        </ul>-->
        <table>
            <tr>
                <th>邀请时间</th>
                <th>邀请的用户</th>
                <th>奖励天数</th>
            </tr>
            <tr v-for="(item,index) in invitee" :key="index">
                <td>{{item.create_time}}</td>
                <td>{{item.invitee}}</td>
                <td>15天</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import {get} from "@/network";
    import {ref, onMounted} from "vue";
    import {encode} from 'js-base64';

    export default {
        name: "Invitation",
        components: {},
        setup() {
            let initiator = encode(JSON.parse(localStorage.getItem('userinfo')).user)
            let invitee = ref([])
            let getData = () => {
                get('/vpn/share/').then(
                    res => {
                        console.log(res.data)
                        invitee.value = res.data
                    }
                )
            }
            onMounted(() => {
                getData()
            })
            return {initiator, invitee, getData}
        }
    }
</script>

<style scoped lang="scss">
    .invitation {
        height: 100%;
        width: 85%;
        margin: auto;

        h2 {
            text-align: center;
        }

        ul {
            font-size: small;
            color: red;
            margin: auto;
        }

        div {
            margin: 10px auto;
            text-align: center;
        }

        table {
            margin: auto;
            /*border: 1px solid;*/
            tr {
                text-align: center;
                td,th{
                    border: 1px solid;
                    width: 30%;
                    height: 40px;
                }
            }
        }
    }
</style>