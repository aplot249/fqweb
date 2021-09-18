<template>
    <div class="top">
        <div id="logo">
            <img src="@/assets/images/logo.png" alt="logo">
        </div>
        <div class="icon" @click="changeIconShow">
            <menu-fold-one theme="outline" size="45" fill="#333" v-if="iconShow"/>
            <menu-unfold-one theme="outline" size="45" fill="#333" v-if="!iconShow"/>
        </div>
        <ul>
            <li>
                <router-link to="/backend">操作指导</router-link>
            </li>
            <li>
                <router-link to="">软件下载</router-link>
            </li>
            <li>
                <router-link to="">产品价格</router-link>
            </li>
            <li>
                <router-link to="">联系客服</router-link>
            </li>
        </ul>
        <div id="portrait">
            <img :src="portrait" alt="头像">
            <button @click="logout">{{ isLogined ? '注销登录' : '游客身份'}}</button>
        </div>
    </div>
</template>

<script>
    import {Home, MenuFoldOne, MenuUnfoldOne} from '@icon-park/vue-next';
    import {ref} from "vue";
    import {useRouter} from "vue-router";

    export default {
        name: "Top",
        components: {
            Home,
            MenuFoldOne,
            MenuUnfoldOne
        },
        emits: [
            'changeMenu'
        ],
        setup(prop, {emit}) {
            let router = useRouter()
            let isLogined = localStorage.getItem('userinfo') ? true : false
            let portrait = isLogined ? JSON.parse(localStorage.getItem('userinfo')).portrait : require('@/assets/images/portrait.jpg')
            let iconShow = ref(false)
            let changeIconShow = () => {
                iconShow.value = !iconShow.value
                emit('changeMenu')
            }
            let logout = () => {
                localStorage.clear()
                router.push('/')
            }
            return {iconShow, changeIconShow, logout, isLogined, portrait}
        }
    }
</script>

<style lang="scss" scoped>
    .top {
        margin-top: 5px;
        display: flex;
        height: 50px;
        line-height: 50px;
        width: 100%;
        justify-content: space-between;

        #logo {
            img {
                height: 100%;
            }
        }

        ul {
            @media screen and (max-width: 768px) {
                display: none;
            }
            @media screen and (min-width: 769px) {
                flex: 1;
                margin: 0;

                li {
                    display: inline-block;
                    width: 150px;
                    height: 100%;

                    a {
                        display: block;
                        color: white;
                        text-align: center;
                        text-decoration-line: none;
                    }

                    a:hover {
                        background-color: #a1afc9;
                        text-decoration-line: underline;
                    }
                }
            }
        }

        #portrait {
            @media screen and (max-width: 768px) {
                display: none;
            }
            @media screen and (min-width: 769px) {
                display: block;
                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
                button {
                    margin-right: 10px;
                    border: none;
                    height: 100%;
                    background: none;
                    vertical-align: top;
                }
                button:hover {
                    color: red;
                    text-decoration-line: underline;
                }
            }
        }
    }
</style>