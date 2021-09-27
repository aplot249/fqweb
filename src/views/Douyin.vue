<template>
    <div class="douyin-content">
        <h2>抖音视频互动</h2>
        <ul>
            <li>提交你抖音视频的分享链接，本站将解析对应视频</li>
            <li>视频是无水印版的，支持下载</li>
            <li>视频可以供本站所有用户观看和评论</li>
        </ul>
        <div class="info">
            <span>输入抖音视频分享链接：</span>
            <input type="text" v-model="douyin">
        </div>
        <div class="action">
            <button @click="btnSubmit" :disabled="isdisabled ? true : false">{{btnText}}</button>
            <button @click="refresh">获取最新</button>
        </div>
        <hr>
        <div class="list">
            <div class="item" v-for="(item,index) in douyinList">
                <img :src="item.img" alt="{{item.title}}">
                <span>{{item.title}}</span>
            </div>
        </div>
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
        name: "Douyin",
        components: {},
        setup() {
            let isdisabled = ref(false)
            let btnText = ref("提交")
            let douyin = ref('')
            let douyinList = ref([])
            let currentPage = ref(1)
            let pageMaxNum = ref()
            let refresh = () => {
                getAllData()
                currentPage.value = 1
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
                if (!douyin.value.length) {
                    alert("链接不能为空")
                    return false
                }
                if (!/https:\/\/mp.weixin.qq.com\/s\/\w+/.test(douyin.value)) {
                    alert("公众号文章链接错误")
                    return false
                }
                isdisabled.value = true
                post("/others/douyin/", {'vx_share_link': douyin.value}).then(
                    res => {
                        console.log(res.data)
                        douyin.value = ''
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
                get(`/video/?page=${currentPage.value}`).then(
                    res => {
                        console.log(res.data)
                        let data = res.data.results
                        pageMaxNum.value = res.data.count
                        // let newData = data.filter((val) => {
                        //     return val['vx_name']
                        // })
                        // console.log(newData)
                        douyinList.value = data
                    }
                )
            }
            onMounted(() => {
                getAllData()
            })
            watch(currentPage,(next,pre)=>{
                getAllData(currentPage.value)
            })
            return {douyin, douyinList, btnSubmit, refresh, isdisabled, btnText,pageBefore,pageNext}
        }
    }
</script>

<style scoped lang="scss">
    .douyin-content {
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

        .list{
            width: 85%;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-content: space-between;
            flex-flow: row wrap;
            .item{
                margin: 5px 0;
                /*border: 1px solid;*/
                background-color: pink;
                width: 150px;
                img{
                    width: 150px;
                    height: 150px;
                }
                span{
                    display: block;
                    text-align: center;
                    font-size: small;
                }
            }
        }
    }
</style>