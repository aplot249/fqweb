<template>
    <div>
        <div class="title">
            <input type="text" v-model="title">
        </div>
        <TEditor :value="content" @contentModify="contentModify"/>
        <button @click="ContentSubmit">提交</button>
    </div>
</template>

<script>
    import TEditor from "@/components/TEditor";
    import {get, post, put} from "@/network";
    import {htmlScape, htmlUnscape} from "itfenfen/src/htmlScape";
    import {onMounted, reactive, toRefs} from "vue";
    import {useRoute, useRouter} from "vue-router"

    export default {
        name: "ArticleEditor",
        components: {
            TEditor
        },
        setup() {
            let route = useRoute()
            let router = useRouter()
            let article = reactive({
                title: '',
                type: '',
                content: ''
            })
            let ContentSubmit = () => {
                //有id就是更新
                if (route.params.id) {
                    put(`/article/article/${route.params.id}/`, {
                        'title': article.title,
                        'type': article.type,
                        'content': htmlScape(article.content)
                    }).then(
                        res => {
                            alert("提交成功")
                            router.push(`/backend/article/${route.params.id}`)
                        }
                    )
                } else {
                    //没有id就是创建
                    post("/article/article/", {
                            'title': article.title,
                            'type': article.type,
                            'content': htmlScape(article.content)
                        }
                    ).then(
                        res => {
                            alert("提交成功")
                            let id = res.data.id
                            router.push(`/backend/article/${id}`)
                        }
                    )
                }
            }
            let contentModify = (val) => {
                article.content = val
            }
            let getData = () => {
                get(`/article/article/${route.params.id}/`).then(
                    res => {
                        // console.log(res.data)
                        article.title = res.data.title
                        article.type = res.data.type
                        article.content = htmlUnscape(res.data.content)
                    }
                )
            }
            onMounted(() => {
                console.log(route.params.id)
                if (route.params.id) {
                    getData()
                } else {
                    article.title = ''
                    article.type = ''
                    article.content = ''
                }
            })
            return {...toRefs(article), contentModify, ContentSubmit}
        }
    }
</script>

<style scoped lang="scss">
    div {
        display: flex;
        flex-direction: column;

        .title {
            input {
                height: 30px;
                line-height: 30px;
                text-align: center;
            }
        }

        button {
            /*margin: 10px auto;*/
            width: 100%;
            height: 40px;
            border-radius: 30px;
        }
    }
</style>