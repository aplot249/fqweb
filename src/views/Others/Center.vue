<template>
  <van-nav-bar title="其他功能"/>
  <div style="display: flex;flex-direction:row;justify-content: space-between;padding: 10px">
    <div style="padding-left: 10px">
      <img :src="portrait" style="width:70px;height:70px;border-radius: 10px;">
    </div>
    <div style="display: flex;flex-direction: column;justify-content: space-around;flex:1">
      <span style="display: flex;justify-content: flex-start;padding-left: 20px">
        {{ username }}
      </span>
      <span v-if="this.$store.state.isLogined" style="display: flex;justify-content: flex-start;padding-left: 20px">
        {{ email }}
      </span>
      <div v-if="! this.$store.state.isLogined" style="display: flex;justify-content: flex-start;padding-left: 20px">
        <van-button size="small" type="primary" @click="this.$router.push('/login/')">登录</van-button>&nbsp;
        <van-button size="small" type="danger" @click="this.$router.push('/user/register')">注册</van-button>
      </div>
    </div>
  </div>
  <van-loading size="24px" vertical v-if="isupload">正在上传...</van-loading>
  <van-grid :column-num="3" style="margin-top: 10px;margin-bottom: 50px" square>
    <van-grid-item text="设置头像"  v-if="this.$store.state.isLogined">
      <van-uploader :after-read="afterRead" >
        <van-icon name="photo-o" size="30px"/>
        <div style="font-size: 12px">上传头像</div>
      </van-uploader>
    </van-grid-item>
    <van-grid-item icon="exchange" text="修改密码" url="/user/changepasswd" v-if="this.$store.state.isLogined"/>
    <van-grid-item icon="close" text="注销登录" @click="logout" v-if="this.$store.state.isLogined"/>

    <van-grid-item icon="edit" text="编写文章" url="/article"/>
    <van-grid-item icon="description" text="我的文章" url="/myarticle"/>
    <van-grid-item icon="newspaper-o" text="所有文章" url="/catagory"/>

    <van-grid-item icon="bar-chart-o" text="翻墙操作" url="/vpn" />
    <van-grid-item icon="down" text="翻墙软件" url="/vpnsoftware"/>
    <van-grid-item icon="points" text="翻墙教程" url="/list/vpn" />

    <van-grid-item icon="video-o" text="抖音视抓取" url="/others/douyin" v-if="username=='admin'"/>
    <van-grid-item icon="gift-o" text="公众号文章转pdf" url="others/wsfile" v-if="username=='admin'"/>
    <van-grid-item icon="revoke" @click="zhanwei" text="海外话费充值" v-if="username=='admin'"/>

    <van-grid-item icon="records" @click="zhanwei" text="我要投稿" />
    <van-grid-item icon="chat-o" @click="zhanwei" text="意见反馈" />
    <van-grid-item icon="good-job-o" @click="zhanwei" text="关于本站" />
  </van-grid>

</template>

<script>
import { Toast,Grid, GridItem , Col, Row ,NavBar,Button,Uploader,Icon,Loading} from 'vant';
import { ref,reactive, onMounted,onActivated,toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import {useStore} from "vuex";
import { upload } from "@/network";

export default {
    name:'Center',
    components:{
        [Loading.name]:Loading,
        [Icon.name]:Icon,
        [NavBar.name]:NavBar,
        [Toast.name]:Toast,
        [Grid.name]:Grid,
        [GridItem.name]:GridItem,
        [Col.name]:Col,
        [Row.name]:Row,
        [Button.name]:Button,
        [Uploader.name]:Uploader
    },
    setup() {
        const store = useStore()
        let router = useRouter()
        let isupload = ref(false)
        let portrait = ref(localStorage.getItem('portrait') ? localStorage.getItem('portrait'): '')
        function dataURItoBlob(base64Data) {
            let byteString;
            if(base64Data.split(',')[0].indexOf('base64') >= 0)
                byteString = atob(base64Data.split(',')[1]);
            else
                byteString = unescape(base64Data.split(',')[1]);
            let mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0];
            let ia = new Uint8Array(byteString.length);
            for(let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            return new Blob([ia], {
                type: mimeString
            })
        }
        const beforeRead = (file) => {

          // if (file.type !== 'image/jpeg') {
          if( ! /jpeg|png/.test(file.file.type)){
            Toast('请上传 jpg或png 格式图片');
            return false;
          }
          return true;
        }
        const afterRead = (file) => {
          // 此时可以自行将文件上传至服务器
          // console.log(file,file.file.name)
          isupload.value = true
          console.log(file.file.type)
          let blob = dataURItoBlob(file.content)
          let formData = new FormData()
          formData.append('img', blob, file.file.name)
          upload('/image/portrait/',formData).then(
            res=>{
              portrait.value = res.data.img
              localStorage.setItem('portrait',portrait.value)
              isupload.value = false
            },
            err=>{
              file.status = 'failed'
              file.message = '上传失败'
            }
          )
        }
        let userinfo = reactive({
          username:localStorage.getItem("username") ? localStorage.getItem("username") : "匿名用户",
          email: localStorage.getItem("email") ? localStorage.getItem("email") : "",
        })
        let zhanwei = () => Toast.fail('功能还未开发！')
        let logout = ()=>{
          localStorage.removeItem("accessToken")
          userinfo.username = '匿名用户'
          localStorage.removeItem("username")
          localStorage.removeItem("email")
          localStorage.removeItem("portrait")
          portrait.value = ''
          store.commit("changeLoginStatus",false)
          Toast.success("注销成功");
        }

      return {isupload,beforeRead,afterRead,logout,...toRefs(userinfo),zhanwei,portrait}
    }
}
</script>

<style>
</style>