<template>
  <div id="home">
    <!-- navbar 顶栏 -->
    <navbar class="navbar"> </navbar>
    <!-- 轮播图 -->
    <home-swiper :banner="banners"></home-swiper>

    <recompend-view :recompendview="recommends"> </recompend-view>
  </div>
</template>

<script>
import navbar from "components/common/navbar/Navbar";
import { getHomeMultidata } from "../../network/home";
import HomeSwiper from "./childcomps/HomeSwiper"
import RecompendView from "./childcomps/RecompendView"

export default {
  name: "home",
  components: {
    navbar,
   HomeSwiper,
   RecompendView
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
</style>