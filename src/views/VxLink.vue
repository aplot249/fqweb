<template>
    <div class="vxlink-content">
        <h2>微信公众号文章转pdf</h2>
        <div class="info">
            <span>输入公众号文章链接：</span>
            <input type="text" v-model="vxlink">
        </div>
        <div class="action">
            <button @click="btnSubmit" :disabled="isdisabled ? true : false">{{btnText}}</button>
            <button @click="refresh">手动刷新</button>
        </div>
        <hr>
        <table>
            <tr>
                <th>创建时间</th>
                <th>文档名</th>
                <th>下载地址</th>
            </tr>
            <tr v-for="(item,index) in vxlinkList">
                <td>{{item.create_time}}</td>
                <td>{{item.vx_name}}</td>
                <td><a :href="item.vx_down_link" target="_blank">点我下载</a></td>
            </tr>
        </table>
    </div>
</template>

<script>
    import {get, post} from "@/network";
    import {ref, onMounted} from 'vue'

    export default {
        name: "VxLink",
        components: {},
        setup() {
            let isdisabled = ref(false)
            let btnText = ref("提交")
            let vxlink = ref('')
            let vxlinkList = ref([])
            let refresh = () => {
                getAllData()
            }
            let btnSubmit = () => {
                if (!vxlink.value.length) {
                    alert("链接不能为空")
                    return false
                }
                if (!/mp.weixin.com/.test(vxlink.value)) {
                    alert("公众号文章链接错误")
                    return false
                }
                isdisabled.value = true
                post("/others/vxlink/", {'vx_share_link': vxlink.value}).then(
                    res => {
                        console.log(res.data)
                    }
                )
                let count = 30
                let sid = setInterval(() => {
                    if (count === 0) {
                        getAllData()
                        isdisabled.value = false
                        btnText.value = "提交"
                        clearInterval(sid)
                    } else {
                        btnText.value = `正在处理(${count})`
                        count -= 1
                    }
                }, 1000)
            }
            let getAllData = () => {
                get("/others/vxlink").then(
                    res => {
                        console.log(res.data)
                        let data = res.data.results
                        let newData = data.filter((val) => {
                            return val['vx_name']
                        })
                        console.log(newData)
                        vxlinkList.value = newData
                    }
                )
            }
            onMounted(() => {
                getAllData()
            })
            return {vxlink, vxlinkList, btnSubmit, refresh, isdisabled, btnText}
        }
    }
</script>

<style scoped lang="scss">
    .vxlink-content {
        width: 100%;
        height: 100%;

        h2 {
            text-align: center;
        }

        hr {
            width: 85%;
        }

        .info {
            text-align: center;
            width: inherit;

            span {
                display: inline-block;
                width: 30%;
            }

            input {
                display: inline-block;
                width: 80%;
                height: 30px;
            }
        }

        .action {
            text-align: center;

            button {
                /*padding:10px;*/
                width: 100px;
                height: 40px;
                margin: 10px 5px;
                background-color: white;
                border: 1px solid;
                border-radius: 30px;
            }
        }

        table {
            text-align: center;
            margin: auto;
            width: 80%;
            tr {
                td {
                    border: 1px solid;
                }
                td:nth-child(1){
                    width: 25%;
                }
                td:nth-child(2){
                    width: 50%;
                }
                td:nth-child(3){
                    width: 15%;
                }
            }
        }
    }
</style>