<template>
    <div class="top">
        <div id="logo">
            <img src="@/assets/images/logo.png" alt="logo">
        </div>
        <div class="icon" @click="changeIconShow">
            <!--            <menu-fold-one theme="outline" size="38" fill="#333" v-if="!iconShow"/>-->
            <!--            <menu-unfold-one theme="outline" size="38" fill="#333" v-if="iconShow"/>-->
            <application-menu theme="outline" size="38" fill="#333" strokeLinejoin="miter" strokeLinecap="butt"
                              v-if="!iconShow"/>
            <close theme="outline" size="38" fill="#333" strokeLinejoin="miter" strokeLinecap="butt" v-if="iconShow"/>
        </div>
        <ul>
            <!--            <li>-->
            <!--                <a href="javascript:void(0)" @click="changeLeftInfo('price')">产品价格</a>-->
            <!--            </li>-->
            <li>
                <router-link to="/backend">操作指引</router-link>
            </li>
            <li>
                <router-link to="/backend/invitation">邀请奖励</router-link>
            </li>
        </ul>
        <div id="portrait">
            <img :src="portrait ? portrait : require('@/assets/images/portrait.jpg')" alt="头像">
            <button @click="logout">{{ $store.state.isLogined ? '注销登录' : '未登录'}}</button>
        </div>
    </div>
</template>

<script>
    // import {Home, MenuFoldOne, MenuUnfoldOne,Logout,ApplicationMenu,Close} from '@icon-park/vue-next';
    import {ApplicationMenu, Close} from '@icon-park/vue-next';
    import {ref} from "vue";
    import {useRouter} from "vue-router";
    import {useStore} from "vuex";

    export default {
        name: "Top",
        components: {
            // Home,
            // MenuFoldOne,
            // MenuUnfoldOne,
            // Logout,
            ApplicationMenu,
            Close
        },
        emits: [
            'changeMenu',
            'changeLeftInfo'
        ],
        setup(prop, {emit}) {
            let router = useRouter()
            let store = useStore()
            let portrait = store.isLogined ? JSON.parse(localStorage.getItem('userinfo')).portrait : require('@/assets/images/portrait.jpg')
            let iconShow = ref(false)
            let changeIconShow = () => {
                iconShow.value = !iconShow.value
                emit('changeMenu')
            }
            let logout = () => {
                localStorage.clear()
                store.commit('changeLoginStatus', false)
                router.push('/')
            }
            let changeLeftInfo = (val) => {
                emit('changeLeftInfo', val)
            }
            return {iconShow, changeIconShow, logout, portrait, changeLeftInfo}
        }
    }
</script>

<style lang="scss" scoped>
    .top {
        display: flex;
        height: 50px;
        line-height: 50px;
        width: 100%;
        justify-content: space-between;

        #logo {
            img {
                height: 100%;
                width: 134px;
            }
        }

        .icon {
            position: relative;
            top: 6px;
            right: 5px;
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
                        text-decoration-line: none;
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
                    margin-top: 2.5px; //头像img垂直居中
                    width: 45px;
                    height: 45px;
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
                    color: white;
                    text-decoration-line: underline;
                }
            }
        }
    }
</style>