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
    <!-- tabcontrol -->
    <tabcontrol :titles="['流行','新款','精选']" class="tabcontrol_actve" @tabclick="tabclick"></tabcontrol>
    <goodslist :goods="showgoods"></goodslist>
    
  </div>
</template>

<script>
//公共组件
import navbar from "components/common/navbar/Navbar";
//功能组件
import HomeSwiper from "./childcomps/HomeSwiper"
import RecompendView from "./childcomps/RecompendView"
import RecomendView from './childcomps/RecomendView';
import Tabcontrol from "components/content/tabcontrol/Tabcontrol"
import Goodslist  from "components/content/goods/Goodslist"
//外部导入
import { getHomeMultidata,getHomegoods } from "../../network/home";

export default {
  name: "home",
  components: {
    navbar,
    HomeSwiper,
    RecompendView,
    RecomendView,
    Tabcontrol,
    Goodslist,
  },
  //计算属性
  computed:{
    showgoods(){
      return this.goods[this.goodsIndex].list
    }
  },
  data() {
    return {
      goodsIndex:"pop",
      banners: [],
      recommends: [],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      }
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

  methods:{
    tabclick(index){
      switch (index) {
        case 0:
          this.goodsIndex="pop"
        break;
        case 1:
          this.goodsIndex="new"
        break;
        case 2:
          this.goodsIndex="sell"
          
        break;
      }
    },

    //数据请求
    getHomeMultidata(){
      getHomeMultidata().then((res) => {
        // this.result= res.data.data
        this.banners = res.data.data.banner;
        // console.log(res.data.data);
        this.recommends = res.data.data.recommend;
       });
    },
    getHomegoods(type){
      const page = this.goods[type].page+1    //请求的数据
       getHomegoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page+=1;             //goods的页码+1
        // console.log(this.goods[type].list);
        // console.log(res.data.data.list);
      })
    }
  }
};
</script>

<style>
.navbar {
  background-color: var(--color-tint);
 
}
#home{
  height: 100%;
  width: 100%;
}

.tabcontrol_actve{
  position: sticky;
  top: 44rem;
  z-index: 2;
  }
</style>