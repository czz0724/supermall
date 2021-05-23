<template>
  <div id="home">
    <!-- navbar 顶栏 -->
    <navbar class="navbar"><div slot="center">购物节</div></navbar>
    <tabcontrol 
        :titles="['流行', '新款', '精选']" 
        :class="{tabcontrol_actve:1}" 
        @tabclick="tabclick" 
        ref="tabcontrol1" 
        v-show="this.isclasstab"
        ></tabcontrol>
    <scroll 
        class="content" 
        ref="scroll" 
        :probeType="0"
        @scroll="contentscroll" 
        :pullUpLoad="true" 
        @pullingUp="loadMore">     

      <home-swiper :banner="banners" @HomeSwiperload="HomeSwiperload"></home-swiper>                                             <!-- 轮播图 -->
      <recompend-view :recompendview="recommends"> </recompend-view>                            <!-- 每日推送 -->
      <recomend-view></recomend-view>                                                           <!-- 推荐 --> 
      <tabcontrol 
        :titles="['流行', '新款', '精选']" 
        @tabclick="tabclick" 
        ref="tabcontrol2" 
        
        ></tabcontrol>                 <!-- tabcontrol -->
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
import {backTopMixin} from "@/common/mixin"
export default {
  name: "home",
  mixins:[backTopMixin],
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
          
      isclasstab:false,
      saveY:0,
      tabindex:0
    };
  },

  created() {
    //1.请求多个数据
    this.getHomeMultidata();

    //2.请求商品数据
    this.getHomegoods("pop");

    this.getHomegoods("new");

    this.getHomegoods("sell");

    
  },
  //路由活跃时
  activated(){
    //活跃时跳转离开时的位置
     this.$refs.scroll.scrollTo(0,this.saveY,0)
     this.$refs.scroll.refresh()
  },
  //路由离开时
  deactivated(){
    //保留离开时的滑动距离
    this.saveY= this.$refs.scroll.scroll.y
    // console.log(this.saveY);
  },
  //el挂载后
  mounted(){
    const refresh =this.debounce(this.$refs.scroll.refresh,100)

    //重置scroll的计算高度 事件总线
    this.$bus.$on("isimgload",()=>{
      refresh()
    })

  },
  methods: {
    //监听navtop是否悬浮
    _isclasstab(position){
      if(position<this.tabOffsetTop*-1){
        this.isclasstab=true
      }
      else{
        this.isclasstab=false
      }
    },
    //监听按钮的显示 （返回顶部）
    contentscroll(position){
      this._isclasstab(position.y)
      this.is_isbackshow(position.y)
    },
    //下拉加载
    loadMore(){
      if(this.tabindex==0){
        this.getHomegoods("pop");
      }
      if(this.tabindex==1){
        this.getHomegoods("new");
      }
      if(this.tabindex==2){
        this.getHomegoods("sell");
      }
    },
    //判断渲染
    tabclick(index) {
      this.tabindex=index
      if(index==0){
        this.goodsIndex = "pop";
      }
      if(index==1){
        this.goodsIndex = "new";
      }
      if(index==2){
        this.goodsIndex = "sell";
      }
      this.$refs.tabcontrol1.isclass = index
      this.$refs.tabcontrol2.isclass = index
    },
    
    //监听轮播图的加载
    HomeSwiperload(){
      this.tabOffsetTop = this.$refs.tabcontrol2.$el.offsetTop
      // console.log(this.tabOffsetTop);
    },
    //浮动
    srtletab(){
      if(this.xy.y=-tabOffsetTop){
        console.log();
        }
      if(this.xy.y>tabOffsetTop){return {top:0}}
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
        
        this.$refs.scroll&&this.$refs.scroll.finishPullUp()
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

.tabcontrol_actve {
  position: fixed;
  top: 44rem;
  left: 0;
  right: 0;
  z-index: 99;
}
.content {
  height: calc(100vh - 49rem);
  overflow: hidden;
  margin-top :44rem;
}
</style>