<template>
    <div class="instruction-content">
        <h2>操作指引（需要先阅读）：</h2>
        <p>手机端本网站“菜单”的出现，需要点击屏幕右上角折叠按钮</p>
        <ol>
            <li>初次使用或账号过期，打开菜单“ 操作->账号信息”选项，填写“使用码”以完成 账号的创建或更新</li>
            <li>填写的“使用码”会和 账号的有效期限相绑定，不同的“使用码”对应不同的期限。联系客服获取“使用码”。</li>
            <li>填写完“使用码”，在菜单“操作教程”选项下查看对应设备的操作教程，和下载安装对应设备的 软件</li>
            <li> 软件的下载地址在操作教程中有呈现，也可在菜单“软件下载-> 软件”选项下找到</li>
            <li>打开 软件，根据教程，把本网站提供的 账号配置到 软件里面， 账号在菜单“ 操作->账号信息”选项下呈现</li>
<!--            <li>网站目前提供2种 方式，使用Anyconnect软件和Shadowsocks系列软件，不同的软件操作教程不同，配置的 账号也不同</li>-->
<!--            <li>在菜单“ 操作-> 方式”选项下切换不同的 方式，和查看不同 方式的说明</li>-->
            <li>网站提供邀请注册功能，你邀请别人前来使用，你会得到延长账号天数作为奖励。具体说明在菜单“用户中心->邀请奖励”选项下查看</li>
            <li> 账号在即将到期和到期当天，网站会发送邮件到你注册留下的邮箱里通知你。账号到期后，登录本网站，重新填写“使用码”， 就能恢复</li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "Instruction"
    }
</script>

<style scoped lang="scss">
.instruction-content{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    h2{
        text-align: center;
    }
    p{
        font-size: 10px;
        text-decoration-line: underline;
        margin: 0;
        text-align: center;
        color: red;
    }
    ol{
        li{
            margin: 10px;
        }
    }
}
</style>