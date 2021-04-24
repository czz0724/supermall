<template>
  <div id="home">
    <!-- navbar 顶栏 -->
    <navbar class="navbar"> </navbar>
    <!-- 轮播图 -->
    <home-swiper :banner="banners"></home-swiper>
    <!-- 每日推送 -->
    <recompend-view :recompendview="recommends"> </recompend-view>
    <!-- 推荐 -->
    <recomend-view></recomend-view>
  </div>
</template>

<script>
import navbar from "components/common/navbar/Navbar";
import { getHomeMultidata } from "../../network/home";
import HomeSwiper from "./childcomps/HomeSwiper"
import RecompendView from "./childcomps/RecompendView"
import RecomendView from './childcomps/RecomendView';


export default {
  name: "home",
  components: {
    navbar,
   HomeSwiper,
   RecompendView,
    RecomendView
  },

  data() {
    return {
      banners: [],
      recommends: [],
    };
  },

  created() {
    //1.请求多个数据
    getHomeMultidata().then((res) => {
      // this.result= res.data.data
      this.banners = res.data.data.banner;
      console.log(res.data.data.recommend);
      this.recommends = res.data.data.recommend;
    });
  },
};
</script>

<style>
.navbar {
  background-color: var(--color-tint);
 
}
#home{
  overflow-x: scroll;
  overflow-y: scroll;
}
</style>