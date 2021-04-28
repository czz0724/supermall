<template>
  <div id="home">
    <!-- navbar 顶栏 -->
    <navbar class="navbar"> </navbar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentscroll">               
      <home-swiper :banner="banners"></home-swiper>                                             <!-- 轮播图 -->
      <recompend-view :recompendview="recommends"> </recompend-view>                            <!-- 每日推送 -->
      <recomend-view></recomend-view>                                                           <!-- 推荐 --> 
      <tabcontrol :titles="['流行', '新款', '精选']" class="tabcontrol_actve" @tabclick="tabclick"></tabcontrol><!-- tabcontrol -->
      <goodslist :goods="showgoods"></goodslist>
    </scroll>
    <backtop @click.native="backclick" v-show="isbackshow"></backtop>
  </div>
</template>

<script>
//公共组件
import navbar from "components/common/navbar/Navbar";
import Scroll from "components/common/scroll/Scroll";
import Tabcontrol from "components/content/tabcontrol/Tabcontrol";
import Goodslist from "components/content/goods/Goodslist";
import Backtop from "components/content/backtop/Backtop";
//功能组件
import HomeSwiper from "./childcomps/HomeSwiper";
import RecompendView from "./childcomps/RecompendView";
import RecomendView from "./childcomps/RecomendView";
//外部导入
import { getHomeMultidata, getHomegoods } from "../../network/home";

export default {
  name: "home",
  components: {
    navbar,
    Scroll,
    Tabcontrol,
    Goodslist,
    Backtop,

    HomeSwiper,
    RecompendView,
    RecomendView,
  },
  //计算属性
  computed: {
    showgoods() {
      return this.goods[this.goodsIndex].list;
    },
  },
  data() {
    return {
      goodsIndex: "pop",
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      isbackshow:false,
    };
  },
  //生命周期
  created() {
    //1.请求多个数据
    this.getHomeMultidata();

    //2.请求商品数据
    this.getHomegoods("pop");

    this.getHomegoods("new");

    this.getHomegoods("sell");
  },

  methods: {
    //事件监听
    backclick(){
      this.$refs.scroll.scrollTo(0,0)
      console.log(this.$refs.scroll.y);
    },
    
    //
    tabclick(index) {
      switch (index) {
        case 0:
          this.goodsIndex = "pop";
          break;
        case 1:
          this.goodsIndex = "new";
          break;
        case 2:
          this.goodsIndex = "sell";

          break;
      }
    },
    //监听按钮的显示 （返回顶部）
    contentscroll(position){
      console.log(position);
      if(position.y<-600){
        this.isbackshow=true
      }
      else{
        this.isbackshow=false
      }
    },


    //数据请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // this.result= res.data.data
        this.banners = res.data.data.banner;
        // console.log(res.data.data);
        this.recommends = res.data.data.recommend;
      });
    },
    getHomegoods(type) {
      const page = this.goods[type].page + 1; //请求的数据
      getHomegoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1; //goods的页码+1
        // console.log(this.goods[type].list);
        // console.log(res.data.data.list);
      });
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
}
#home {
  overflow: hidden;
}

/* .tabcontrol_actve {
  position: sticky;
  top: 44rem;
  z-index: 99;
} */
.content {
  margin-top: 44rem;
  height: 547rem;
  overflow: hidden;
}
</style>