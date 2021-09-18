<template>
    <div>
        <div class="title">
            {{title}}
        </div>
        <div class="content" v-html="content"></div>
    </div>
</template>

<script>
    import {useRoute, onBeforeRouteUpdate} from "vue-router";
    import {onMounted, reactive, toRefs} from "vue";
    import {get} from "@/network";

    export default {
        name: "ArticleDetail",
        components: {},
        setup() {
            let route = useRoute()
            let article = reactive({
                title: '',
                content: ''
            })
            onMounted(() => {
                get(`/article/article/${route.params.id}`).then(
                    res => {
                        console.log(res.data)
                        article.title = res.data.title
                        article.content = res.data.content
                    }
                )
            })
            onBeforeRouteUpdate((next, pre) => {
                console.log(next.params.id, pre.params.id)
                get(`/article/article/${next.params.id}`).then(
                    res => {
                        console.log(res.data)
                        article.title = res.data.title
                        article.content = res.data.content
                    }
                )
            })

            return {...toRefs(article)}
        }
    }

</script>

<style lang="scss" scoped>
    div {
        display: flex;
        margin: 0;
        flex-direction: column;
        width: inherit;
        height: calc(100vh - 135px);

        .title {
            height: 40px;
            margin: 0;
            padding: 0;
            line-height: 40px;
            font-weight: bolder;
            text-align: center;
        }

        .content {
            overflow-y: scroll;
            /*margin: 0 10px;*/
            width: inherit;

            scrollbar-width: none; /* firefox */
            -ms-overflow-style: none; /* IE 10+ */

            word-wrap: break-word;
            word-break: break-all;
        }

        .content::-webkit-scrollbar {
            display: none; /* Chrome Safari */
        }
    }
</style>
<style lang="css">
    /*img{*/
    /*    width: 100px !important;*/
    /*}*/
</style>