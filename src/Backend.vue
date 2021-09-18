<template>
    <div class="backend-container">
        <top @changeMenu="changeMenu"/>
        <div class="middle">
            <div class="left" :style="showMenu ? 'display:block;': 'none'">
                <div class="title">翻墙操作</div>
                <ul style="display: block">
                    <li><router-link to="/backend/vpn">账号信息</router-link><span><arrow-down theme="outline" size="24" fill="#333"/></span></li>
                    <li><router-link to="">更换翻墙方式</router-link><span><arrow-down theme="outline" size="24" fill="#333"/></span></li>
                </ul>
                <div class="title">操作教程</div>
                <ul>
                    <li><router-link to="">Any 安卓教程</router-link><span><arrow-down theme="outline" size="24" fill="#333"/></span></li>
                    <li><router-link to="">Any 苹果教程</router-link><span><arrow-down theme="outline" size="24" fill="#333"/></span></li>
                    <li><router-link to="">Any Windows教程</router-link><span><arrow-down theme="outline" size="24" fill="#333"/></span></li>
                    <li><router-link to="">Any Mabook教程</router-link><span><arrow-down theme="outline" size="24" fill="#333"/></span></li>
                </ul>
                <div class="title">软件下载</div>
                <ul>
                    <li><router-link to="">翻墙软件</router-link><span><arrow-down theme="outline" size="24" fill="#333"/></span></li>
                    <li><router-link to="">国外安卓软件</router-link><span><arrow-down theme="outline" size="24" fill="#333"/></span></li>
                    <li><router-link to="">Windows软件</router-link><span><arrow-down theme="outline" size="24" fill="#333"/></span></li>
                </ul>
                <div class="title">用户中心</div>
                <ul>
                    <li><router-link to="">账号续费</router-link><span><arrow-down theme="outline" size="24" fill="#333"/></span></li>
                    <li><router-link to="">更改网站登录密码</router-link><span><arrow-down theme="outline" size="24" fill="#333"/></span></li>
                    <li><router-link to="">我要退款</router-link><span><arrow-down theme="outline" size="24" fill="#333"/></span></li>
                </ul>
                <div class="title">其他工具</div>
                <ul>
                    <li><router-link to="">抖音视频抓取</router-link><span><arrow-down theme="outline" size="24" fill="#333"/></span></li>
                    <li><router-link to="">音乐突破版权限制</router-link><span><arrow-down theme="outline" size="24" fill="#333"/></span></li>
                    <li><router-link to="">微信公众号文章转pdf</router-link><span><arrow-down theme="outline" size="24" fill="#333"/></span></li>
                </ul>
            </div>
            <div class="right">
                <router-view/>
            </div>
        </div>
        <bottom/>
    </div>
</template>

<script>
    import Top from "@/components/Top";
    import Bottom from "@/components/Bottom";
    import {ArrowDown} from '@icon-park/vue-next';
    import {PullDown} from "@/assets/js/PullDown";
    import {ref,onMounted} from "vue";

    export default {
        components: {
            Top,
            Bottom,
            ArrowDown
        },
        setup() {
            //移动端点击右上角按钮显示菜单的设计思路是：
            // pc端左侧菜单会自动显示；移动端显示菜单点击按钮，不显示菜单；这是写在css样式文件里控制的
            // 既然菜单点击按钮只在移动端才显示，pc不显示，那么下面给他绑定的事件就只在移动端起作用
            let showMenu = ref(false)
            let changeMenu = ()=>{
                showMenu.value = !showMenu.value
            }
            onMounted(()=>{
                new PullDown("left")
            })
            return {showMenu,changeMenu}
        }
    }
</script>

<style lang="scss" >
    @media screen and (min-width: 769px) {
        @import "assets/css/pc/backend_pc";
    }

    @media screen and (max-width: 768px) {
        @import "assets/css/mini/backend_mini";
    }

    .icon {
        //在backend  pc端隐藏
        @media screen and (min-width: 769px) {
            display: none;
        }
        //在backend mini端显示出来
        @media screen and (max-width: 768px) {
            display: block;
            position: relative;
            float: right;
        }
    }
</style>