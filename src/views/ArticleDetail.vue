<template>
    <div>
        <div class="title">
            {{title}}
        </div>
        <div class="article-content" v-html="content" ref="divScroll"></div>
        <div class="goTop" v-if="goTopShow" @click="doScrollTop">
            <span>返回顶部</span>
        </div>
    </div>
</template>

<script>
    import {useRoute, onBeforeRouteUpdate} from "vue-router";
    import {ref, onMounted, reactive, toRefs} from "vue";
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
            let goTopShow = ref(false)
            let divScroll = ref(null);
            let doScrollTop = () => {
                divScroll.value.scrollTop = 0
            }
            onMounted(() => {
                divScroll.value.addEventListener('scroll', function () {
                    if (this.scrollTop > 1000) {
                        goTopShow.value = true
                    } else {
                        goTopShow.value = false
                    }
                })
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
            return {...toRefs(article), divScroll, goTopShow, doScrollTop}
        }
    }

</script>

<style lang="scss" scoped>
    div {
        display: flex;
        margin: 0;
        flex-direction: column;
        width: calc(100% - 20px); //占据父元素所有宽度 - 20px
        height: calc(100vh - 135px);

        .title {
            height: 40px;
            margin: 0;
            padding: 0;
            line-height: 40px;
            font-weight: bolder;
            text-align: center;
        }

        .article-content {
            overflow-y: scroll;
            width: inherit;
            scrollbar-width: none; /* firefox */
            -ms-overflow-style: none; /* IE 10+ */

            word-wrap: break-word;
            word-break: break-all;

        }

        .article-content::-webkit-scrollbar {
            display: none; /* Chrome Safari */
        }

        .goTop {
            height: 50px;
            width: 50px;
            background: red;
            border-radius: 50px;
            position: fixed;
            top: 84%;
            right: 3%;
            display: block;

            span {
                font-size: 15px;
                color: #fff;
                position: absolute;
                top: 3px;
                left: 10px;
            }
        }
    }
</style>
<style lang="css">
    @media screen and (max-width: 768px) {
        .article-content img {
            /*width: calc(100vw - 200px) !important;*/
            width: calc(100%) !important;
        }
    }

    @media screen and (min-width: 769px) {
        .article-content {
            text-align: center;
        }
    }

</style>