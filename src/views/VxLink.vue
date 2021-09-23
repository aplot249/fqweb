<template>
    <div class="vxlink-content">
        <h2>微信公众号文章转pdf</h2>
        <ul>
            <li>提交你微信公众号文章分享链接，本站将解析对应文章成pdf格式</li>
            <li>解析后的pdf可以在线浏览和下载</li>
        </ul>
        <div class="info">
            <span>输入公众号文章链接：</span>
            <input type="text" v-model="vxlink">
        </div>
        <div class="action">
            <button @click="btnSubmit" :disabled="isdisabled ? true : false">{{btnText}}</button>
            <button @click="refresh">获取最新</button>
        </div>
        <hr>
        <table>
            <tr>
                <th>创建时间</th>
                <th>文档名</th>
                <th>浏览或下载</th>
            </tr>
            <tr v-for="(item,index) in vxlinkList">
                <td>{{item.create_time}}</td>
                <td>{{item.vx_name}}</td>
                <td><a :href="item.vx_down_link" target="_blank">点我</a></td>
            </tr>
        </table>
        <div class="action">
            <button @click="pageBefore">上一页</button>
            <button @click="pageNext">下一页</button>
        </div>
    </div>
</template>

<script>
    import {get, post} from "@/network";
    import {ref, onMounted,watch} from 'vue'

    export default {
        name: "VxLink",
        components: {},
        setup() {
            let isdisabled = ref(false)
            let btnText = ref("提交")
            let vxlink = ref('')
            let vxlinkList = ref([])
            let currentPage = ref(1)
            let pageMaxNum = ref()
            let refresh = () => {
                currentPage.value = 1
                // getAllData()
            }
            let pageBefore = ()=>{
                if(currentPage.value > 1){
                    // console.log('变化之前：',currentPage.value)
                    currentPage.value -= 1
                }
            }
            let pageNext = ()=>{
                // console.log('变化之前：',currentPage.value)
                if(currentPage.value < Math.ceil(pageMaxNum.value/6)){
                    currentPage.value += 1
                }
            }
            let btnSubmit = () => {
                if (!vxlink.value.length) {
                    alert("链接不能为空")
                    return false
                }
                if (!/https:\/\/mp.weixin.qq.com\/s\/\w+/.test(vxlink.value)) {
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
                        vxlink.value = ''
                        btnText.value = "提交"
                        clearInterval(sid)
                    } else {
                        btnText.value = `正在处理(${count})`
                        count -= 1
                    }
                }, 1000)
            }
            let getAllData = () => {
                get(`/others/vxlink?page=${currentPage.value}`).then(
                    res => {
                        console.log(res.data)
                        let data = res.data.results
                        pageMaxNum.value = res.data.count
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
            watch(currentPage,(next,pre)=>{
                getAllData(currentPage)
            })
            return {vxlink, vxlinkList, btnSubmit, refresh, isdisabled, btnText,pageBefore,pageNext}
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
        ul{
            /*text-align: center;*/
            padding-left: 10%;
            font-size: small;
            color: red;
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
            margin: 0 auto;
            width: 80%;
            tr {
                height: 40px;
                th,td{
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