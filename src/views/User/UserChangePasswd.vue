<template>
  <van-nav-bar title="更改密码" left-text="返回" left-arrow @click-left="$router.go(-1)" />

  <van-form @submit="onSubmit">
    <van-field v-model="state.username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]"/>
    <van-field v-model="state.password1" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]"/>
    <van-field v-model="state.password2" type="password" name="再次确认密码" label="再次确认密码" placeholder="再次确认密码" :rules="[{ required: true, message: '请填写密码' }]"/>
    <van-row>
      <van-col span="14">
        <van-field center clearable label="验证码" placeholder="输入验证码" v-model="state.verify" />
      </van-col>
      <van-col span="10">
        <vueImgVerify ref="verifyRef" />
      </van-col>
    </van-row>
    <div style="margin: 16px;" >
      <van-button round block type="primary" @click="onSubmit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script>

import { Toast,Grid, GridItem ,Form, Field,Button,NavBar, Col, Row } from 'vant';
import { ref,reactive } from "vue";
import {useStore} from "vuex";
import vueImgVerify from "@/components/Captcha.vue"
import { useRoute, useRouter } from "vue-router";
import { patch } from "@/network";

export default {
    name:"UserChangePasswd",
    components:{
        vueImgVerify,
        [NavBar.name]:NavBar,
        [Form.name]:Form,
        [Field.name]:Field,
        [Button.name]:Button,
        [Toast.name]:Toast,
        [Grid.name]:Grid,
        [GridItem.name]:GridItem,
        [Col.name]:Col,
        [Row.name]:Row
    },
    setup() {
        let router = useRouter()
        let store = useStore()
        const verifyRef = ref(null)
        const state = reactive({
          username: '',
          password1: '',
          password2: '',
          verify: "",
        });

        const onSubmit = () => {

          if (verifyRef.value.imgCode.toLowerCase() !== state.verify.toLowerCase()) {
            // Toast.success("验证码输入正确");
            Toast.fail("验证码输入错误");
            return false
          }

          if(state.password1 != state.password2){
            Toast.fail("两次密码不一致")
            return false
          }
          patch('/user/resetpasswd/',{"username":state.username,"password":state.password1}).then(
            res => {
                  Toast.success("更改成功，跳转前去登录");
                  localStorage.removeItem("accessToken")
                  localStorage.removeItem("username")
                  store.commit("changeLoginStatus",false)
                  router.push("/user")
              }
            ).catch(err=>{
              if(err.response.data['username']){
                Toast.fail(err.response.data['username'])
              }
              if(err.response.data['password']){
                Toast.fail(err.response.data['password'])
              }
              if(err.response.data['non_field_errors'][0]){
                Toast.fail(err.response.data['non_field_errors'][0])
              }
              if(err.response.status == '429'){
                Toast.fail("请求太频繁，稍等1分钟再试")
              }
            }
          )
        };

        return {state, onSubmit,verifyRef}
      }
}
</script>

<style>
</style>