<template>
    <van-overlay :show=true @click="$emit('changeshow',false)">
      <div class="wrapper" >
          <div class="block" @click.stop>
              <Xgplayer :config="config" />
          </div>
      </div>
    </van-overlay>
</template>

<script>
    import { Overlay } from 'vant';
    import {reactive,toRefs,onMounted,ref} from "vue";
    import { useWindowSize } from '@vant/use';
    import Xgplayer from 'xgplayer-vue';
    
    export default {
        props:{
            isshow:{
                default:false,
                type:Boolean
            },
            prop_link:{
                type:String
            },
            prop_img:{
                type:String
            }
        },
        components:{
            Xgplayer,
            [Overlay.name]:Overlay
        },
        name: "XgVideoPlay",
        setup(props){
            let config = reactive({
                id:"video",
                poster:props.prop_img,
                url:props.prop_link,
                autoplay: true,
                playbackRate: [0.5, 0.75, 1, 1.5, 2],
                defaultPlaybackRate: 1,
            })
            return {config}
        }
    }
</script>

<style>
 .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .block {
    width: 280px;
    height: 320px;
  }
  #video{
    width:auto !important;
    height: 400px;
  }
</style>