<template>
  <van-nav-bar title="抖音短视频" left-text="返回" left-arrow @click-left="this.$router.go(-1)"/>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="myvalue"
        name="抖音链接"
        label="抖音链接"
        placeholder="输入抖音分享链接"
        :rules="[{ required: true, message: '请填写抖音分享链接' }]"
      />
      <van-field name="switch" label="加精">
        <template #input>
          <van-switch v-model="jiajing" size="20" />
        </template>
      </van-field>
      <van-field name="radio" label="视频类型">
        <template #input>
          <van-radio-group v-model="checked">
            <van-cell v-for="(type,index) in videotype_list" :title="type.name" :key="index" clickable @click="checked = type.type">
              <template #right-icon>
                <van-radio :name="type.type" />
              </template>
            </van-cell>
          </van-radio-group>
        </template>
      </van-field>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<script>
import { NavBar, Form,Field,Button,Toast ,RadioGroup,Radio,Cell,CellGroup,Switch} from 'vant';
import { ref, onMounted } from "vue";
import {useRouter} from "vue-router";
import {get} from "@/network";

export default {
    name:"Douyin",
    components:{
        [NavBar.name]:NavBar,
        [Switch.name]:Switch,
        [Form.name]:Form,
        [Field.name]:Field,
        [Button.name]:Button,
        [Cell.name]:Cell,
        [CellGroup.name]:CellGroup,
        [Radio.name]:Radio,
        [RadioGroup.name]:RadioGroup,
        [Toast.name]:Toast
    },
    setup() {
        const myvalue = ref('');
        let videotype_list = ref([])
        let jiajing = ref(false)
        let checked = ref('')
        let router = useRouter()
        onMounted(()=>{
          get('/video/type/').then(
            res=>{
              // console.log(res.data)
              videotype_list.value = res.data
            }
          )
        })
        let onSubmit = ()=>{
            let douyinlink = /https:\/\/(.*)\//.exec(myvalue.value)
            console.log(douyinlink[0])
            get(`/video/title/?link=${douyinlink[0]}&type=${checked.value}&hot=${jiajing.value}`).then(
                res=>{
                    console.log(res.data)
                    Toast.success(res.data)
                    router.push('/')
                }
            )
        }
        return { myvalue,jiajing,checked,videotype_list,onSubmit};
    }
}
</script>
