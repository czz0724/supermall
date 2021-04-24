<template>
     <!-- 轮播图 -->
    <swiper>
      <swiper-item v-for="(item, index) in banner.list" :key="index">
        <a :href="item.link">
          <img :src="item.image923" alt="" />
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper";
export default {
  name:"HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props:{
    banner:{
      defalut(){
        return []
      }
    }
  },
  data() {
    return {
    };
  },
}
</script>

<style>

</style>