<template>
  <div class="detailswiper">
    <swiper class="swiperss" v-if="isshow">
      <swiper-item v-for="item,index in swiper" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from "../../../components/common/swiper/index"
export default {
  name:"DetailSwiper",
  data(){
    return {
      isshow:false
    }
  },
  props:{
    swiper:{
      type:Array,
      defalut(){
        return {}
      }
    }
  },
  components:{
    Swiper,
    SwiperItem,
  },
  created(){
  },
  watch:{
    swiper(){
      this.isshow = true
    }
  }
}
</script>

<style>
  .detailswiper{
    height:300rem;
    overflow: hidden;
  }
  .swiperss{
    height:300rem;
  }
  
</style>