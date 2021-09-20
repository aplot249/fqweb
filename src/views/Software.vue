<template>
    <div class="content">
        <h2>软件下载</h2>
        <ul>
            <li v-for="(item,index) in softwares" :key="index">
                <span>{{ item.content}}</span><input type="text" :value="item.href" disabled/>
            </li>
        </ul>
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
                let names = ['Anconnect Windows10','Anconnect Windows7、8','Anconnect 安卓','Anconnect Macbook','Anconnect Macbook备用','Anconnect Linux']
                get("/vpn/vpnsoftware/").then(
                    res => {
                        let results = res.data.res
                        for(let i=0;i<results.length;i++){
                            // console.log(results[i])
                            results[i]['content'] = names[i]
                        }
                        softwares.value = res.data.res
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
        }

    }
</style>