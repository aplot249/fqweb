<template>
    <div class="content">
        <h2>软件下载</h2>
        <table>
            <tr>
                <th>名称</th>
                <th>下载地址</th>
            </tr>
            <tr v-for="(item,index) in softwares" :key="index">
                <td>{{ item.content}}</td>
                <template v-if="item.href === '苹果手机'">
                    <td><a href="https://apps.apple.com/cn/app/cisco-anyconnect/id1135064690#?platform=iphone" target="_blank">去应用商店下载</a></td>
                </template>
                <template v-if="item.href != '苹果手机'">
                    <td><a :href="item.href" target="_blank">点我下载</a></td>
                </template>
            </tr>
        </table>
    </div>
</template>

<script>
    import {ref, onMounted} from "vue";
    import {useRoute, onBeforeRouteUpdate} from "vue-router";
    import {get} from "@/network";

    export default {
        name: "Software",
        components: {},
        setup() {
            let route = useRoute()
            let softwares = ref([])
            let getVpnSoftwares = () => {
                // let names = ['Anconnect Windows10', 'Anconnect Windows7、8', 'Anconnect 安卓', 'Anconnect Macbook', 'Anconnect Macbook备用', 'Anconnect Linux']
                let names = ['Anconnect Windows', 'Anconnect 安卓手机', 'Anconnect Macbook']
                get("/vpn/vpnsoftware/").then(
                    res => {
                        let results = [res.data.res[0],res.data.res[2],res.data.res[3]]
                        console.log(results)
                        for (let i = 0; i < results.length; i++) {
                            // console.log(results[i])
                            results[i]['content'] = names[i]
                        }
                        results.push({content:"Anyconnect 苹果手机",href:"苹果手机"})
                        // console.log('******',results)
                        softwares.value = results
                    }
                )
            }
            onMounted(() => {
                console.log(route.params)
                getVpnSoftwares()
            })
            onBeforeRouteUpdate((next, pre) => {
                console.log(next.params)
                getVpnSoftwares()
            })
            return {softwares}
        }

    }
</script>

<style scoped lang="scss">
    .content {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;

        h2 {
            text-align: center;
        }

        table {
            width: 80%;
            margin: 0 auto;

            tr {
                height: 40px;

                th, td {
                    border: 1px solid;
                    text-align: center;
                }
            }
        }

    }
</style>