<template>
  <van-nav-bar left-text="返回" left-arrow title="公众号文章转pdf" @click-left="this.$router.go(-1)"/>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="myvalue"
        name="公众号文章"
        label="公众号文章"
        placeholder="输入公众号文章分享链接"
        :rules="[{ required: true, message: '请填写公众号文章分享链接' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script>
import { Field,Form,CellGroup,Toast,NavBar,Button } from 'vant';
import { ref } from "vue";

export default {
    components:{
        [Button.name]:Button,
        [NavBar.name]:NavBar,
        [Form.name]:Form,
        [Field.name]:Field,
        [Toast.name]:Toast,
        [CellGroup.name]:CellGroup
    },
    setup() {
        const myvalue = ref('');
        let onSubmit = ()=>{
            let ws = new WebSocket("ws://sanic.chuanyun101.com/api/vxlink/feed?vx="+myvalue.value)
            // let ws = new WebSocket("ws://127.0.0.1:8008/api/vxlink/feed?vx="+myvalue.value)
            // ws.onopen = ()=>{
            //     ws.send(myvalue.value)
            // }
            ws.onmessage = (event)=>{
                // alert("收到服务器回复："+event.data)
                // ws.send("客户端再次发送数据！")
                //  tip.value = event.data
                  Toast.success(event.data);
                  myvalue.value = '';
                // isshow.value=true
            }
      }
        return { onSubmit,myvalue};
    }
}
</script>
