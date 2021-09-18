<template>
  <van-tabs active="1" sticky @click="Change">
    <van-tab v-for="(video_type,index) in video_type_list" :title="video_type.name" :key="index">
      <template v-for="(v,ind) in video_type_type_list.length" :key="ind">
        <video-type v-if="video_type_checked == video_type_type_list[ind]" :video_type="video_type.type"></video-type>
      </template>
    </van-tab>
  </van-tabs>
</template>

<script>
    import { Tab,Tabs } from 'vant'
    import VideoType from "@/components/VideoType"
    import { ref,reactive,onMounted,computed,watch } from 'vue'
    import {get} from "@/network"

    export default {
        name: "VideoShow",
        components:{
          VideoType,
          [Tab.name]:Tab,
          [Tabs.name]:Tabs,
        },
        setup(){
          let video_type_checked = localStorage.getItem('video_type_checked') ? ref(localStorage.getItem('video_type_checked')) : ref('')
          let video_type_type_list = localStorage.getItem('video_type_type_list') ? ref(JSON.parse(localStorage.getItem('video_type_type_list'))) : ref([])
          let video_type_list = localStorage.getItem('video_type_list') ? ref(JSON.parse(localStorage.getItem('video_type_list'))) : ref([])
          let video_list = ref([])

          let Change = (index)=>{
            // let video_type_type_list = ['document','celebrity','ordinary','Tictok']
            video_type_checked.value = video_type_type_list.value[index]
            // console.log(index,'类型为：'+video_type.value)
            return true
          }
          onMounted(()=>{
            get('/video/type/').then(
              res=>{
                video_type_list.value = res.data
                let ll = []
                for(let i of res.data ){
                  ll.push(i.type)
                }
                video_type_type_list.value = ll
                video_type_checked.value = video_type_list.value[0].type
                localStorage.setItem('video_type_checked',video_type_checked.value)
                localStorage.setItem('video_type_type_list',JSON.stringify(video_type_type_list.value))
                localStorage.setItem('video_type_list',JSON.stringify(video_type_list.value))
              }
            )
          })
          return {Change,video_type_checked,video_type_list,video_type_type_list,video_list}
        }
    }
</script>

<style scoped>

</style>