<template>
    <!--视频列表-->
    <van-list v-model:loading="state.loading" :finished="state.finished" finished-text="没有更多了" @load="onLoad" :offset="50">
      <van-grid :column-num="2" :gutter="5" square :border=true >
        <van-grid-item v-for="(item,index) in state.list" :key="item.id" @click="send_msg(item.img,item.link)" dot>
            <van-image fit="fill" :src="item.img" height="100%" width="100%"/>
            <span v-if="item.is_hot" style="position: absolute;top:3px;right: 3px;font-weight: bolder;background-color: red">置顶</span>
            <div class="img-des">
              <van-notice-bar scrollable :text="item.title" color="white" background="#000" style="height:30px"/>
            </div>
        </van-grid-item>
      </van-grid>
    </van-list>
    <xg-video-play v-if="isshow" :prop_img="prop_img" :prop_link="prop_link" @changeshow="changeshow"></xg-video-play>
</template>

<script>
    import { List, Grid, GridItem, NoticeBar,Image as VanImage  } from 'vant';
    import XgVideoPlay from "./XgVideoPlay";
    import {reactive, ref,onMounted} from "vue";
    import { get } from "@/network";

    export default {
        name: "VideoType",
        components:{
            XgVideoPlay,
            [List.name]:List,
            [Grid.name]:Grid,
            [GridItem.name]:GridItem,
            [NoticeBar.name]:NoticeBar,
            [VanImage.name]:VanImage,
        },
        props:{
          video_type:{
              // default:'document',
              type:String
          }
        },
        setup(props){
            let pageNum = ref(1) //页码
            let endNum = ref() //数据结束总数
            let prop_link = ref() //传递的视频link
            let prop_img = ref()  // 传递的视频img
            const state = reactive({
              list: [],
              loading: false,
              finished: false,
            });
            let isshow = ref(false)
            let changeshow = val => isshow.value = val
            let send_msg = (img,share_link)=>{
              isshow.value = true
              prop_img.value = img
              prop_link.value = share_link
            }
            const onLoad = () => {
                // 一次异步更新数据
                get(`/video/?type=${props.video_type}&page=${pageNum.value}`).then(
                  res=>{
                    endNum.value = res.data['count']
                    state.list.push(...res.data.results)
                    // props.video_list.push(...res.data.results)
                    pageNum.value += 1
                    // 加载状态结束
                    state.loading = false;
                    // 数据全部加载完成
                    if (state.list.length >= endNum.value) {
                    // if (props.video_list.length >= endNum.value) {
                      state.finished = true;
                    }
                  }).catch(err=>{
                    console.log(err)
                })
            }

            return {state,send_msg,prop_link,prop_img,changeshow,isshow,onLoad}
        }
    }
</script>

<style scoped>

</style>