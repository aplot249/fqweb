<template>
  <van-nav-bar title="翻墙软件" left-text="返回" left-arrow @click-left="$router.go(-1)"/>
    <van-collapse accordion v-model="activeName">
      <van-collapse-item :title="item.name" :name="index" v-for="(item,index) in data" :key="index">
        <span style="word-break: break-all">{{item.href}}</span>
      </van-collapse-item>
    </van-collapse>
</template>

<script>
import { NavBar, Collapse, CollapseItem,Toast } from 'vant';
import {get} from "@/network";
import { onMounted,ref } from "vue";

export default {
  components:{
      [NavBar.name]:NavBar,
      [Toast.name]:Toast,
      [Collapse.name]:Collapse,
      [CollapseItem.name]:CollapseItem
  },
  setup() {
    let data = ref([])
    const activeName = ref('0');
    let handledata = (data)=>{
      let myll = [{"name":"苹果手机软件","href":"在苹果应用商店搜索 Anyconnect 自行下载"}]
      let ll = ['Windows10软件','Windows7、8软件','安卓手机软件','MacBook软件','MacBook备用软件','Linux系统软件']
      for(let item in data){
          myll.push({"name":ll[item],"href":data[item]['href']})
      }
      return myll
    }
    onMounted(
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
      }),
      get("/vpn/vpnsoftware/").then(
        res=>{
          console.log(res.data.res);
          data.value = handledata(res.data.res)
          Toast.clear()
        },
        err=> console.log(err)
      )
    )
    return {activeName,data}
  }
}
</script>

<style scoped>
</style>