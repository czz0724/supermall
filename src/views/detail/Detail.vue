<template>
  <div class="detail">
    <detailnavbat class="detailnavbat" @titleclick="titleclick" ref="navbat"></detailnavbat>
    <scroll class="detail-scroll" 
      ref="scroll"
      @scroll="contentscroll"
      :pullUpLoad="true"
      :probeType="3" >
      <detail-swiper :swiper="swipers"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-info :detailInfo="detailInfo" @imgload="imgload"></detail-info>
      <detail-goofs-info :goodsinfo="goodsinfo" ref="goofsinfo"></detail-goofs-info>
      <detail-rate :rate="rate" ref="rates"></detail-rate>
      <goodslist :goods="recommends"  ref="goodslist"></goodslist>
      <!-- <div v-for="item,i in 100" :key="i">{{item}}</div> -->
    </scroll>
    <backtop @click.native="backclick" v-show="isbackshow"></backtop>
    <detail-bottom @productclick="addToCart"></detail-bottom>
  </div>
</template>

<script>
import Detailnavbat from "./chelidcomps/Detailnavbat.vue";
import DetailSwiper from "./chelidcomps/DetailSwiper.vue";
import DetailBaseInfo from "./chelidcomps/DetailBaseInfo.vue";
import DetailShopInfo from './chelidcomps/DetailShopInfo.vue';
import DetailInfo from './chelidcomps/DetailInfo.vue';
import DetailGoofsInfo from './chelidcomps/DetailGoofsInfo.vue';
import DetailRate from './chelidcomps/DetailRate.vue';

import { getDetail,recommend, Goods, ShopInfo, Goodsinfo } from "../../network/detail";

import Scroll from "../../components/common/scroll/Scroll";
import Goodslist from '../../components/content/goods/Goodslist.vue';
import {backTopMixin} from "@/common/mixin"
import Backtop from "components/content/backtop/Backtop";
import DetailBottom from './chelidcomps/DetailBottom.vue';
import {mapActions} from "vuex"
export default {
  name: "Detail",
  mixins:[backTopMixin],
  data() {
    return {
      id: 0,
      swipers: null,
      goods: {},
      shopInfo:{},
      detailInfo:{},
      goodsinfo:{},
      rate:{},
      recommends:[],
      scrollTop:[0],

    };
  },
  components: {
    Scroll,

    Detailnavbat,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailInfo,
    DetailGoofsInfo,
    DetailRate,
    Goodslist,
    Backtop,
    DetailBottom,
  },
  methods: {
    ...mapActions(['carList']),
    refresh(){
      this.$refs.scroll.scroll.refresh()
    },
    imgload(){
      this.refresh()
    },
    titleclick(index){
      if(this.scrollTop.length>=3){
        this.$refs.scroll.scrollTo(0,this.scrollTop[index]-5,200)
      }
    },
    //将商品 数据 传入vuex 
    addToCart(){
      const product = {
        image: this.swipers[0],
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.realPrice,
        iid: this.id
      }
      // this.$store.dispatch('carList',product).then(res=>{
      //   console.log(res);
      // })
      //使用mapActions映射
      this.carList(product).then(res=>{
        this.$toast.show(res,1500)
      })
      
    },
    contentscroll(position){
      if (position.y<=this.scrollTop[0]&&position.y>=this.scrollTop[1]) {
        this.$refs.navbat.indexs = 0
      } else if (position.y<=this.scrollTop[1]&&position.y>=this.scrollTop[2]) {
        this.$refs.navbat.indexs = 1
      } else if (position.y<=this.scrollTop[2]&&position.y>=this.scrollTop[3]) {
        this.$refs.navbat.indexs = 2
      } else if (position.y<=this.scrollTop[3]) {
        this.$refs.navbat.indexs = 3
      }
      
      this.is_isbackshow(position.y)
    },
   //获取商品、参数、评论、推荐的offsetTop
   _scrollTop(){
    this.scrollTop.push(-this.$refs.goofsinfo.$el.offsetTop)
    this.scrollTop.push(-this.$refs.rates.$el.offsetTop)
    this.scrollTop.push(-this.$refs.goodslist.$el.offsetTop)
   }
    
  },
  created() {
    //保存路由传过来的数据
    this.id = this.$route.params.id;
    //根据id请求详情数据
    getDetail(this.id).then((res) => {
      //获取顶部的图片轮播数据
      const data = res.data.result;
      this.swipers = data.itemInfo.topImages;

      //获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);

      //获取店铺信息的对象
      this.shopInfo= new ShopInfo(data.shopInfo)
      
      //保存商品的详情数据
      this.detailInfo = data.detailInfo

      //获取详情信息
      this.goodsinfo = new Goodsinfo(data.itemParams.info,data.itemParams.rule)

      //获取评论信息
      this.rate = data.rate

      //当数据请求完毕后执行
      this.$nextTick(()=>{
        // console.log("请求数据完毕");
      })

    });

    //请求 推荐 更多数据
    recommend().then(res=>{
      // console.log(res.data.data.list);
      this.recommends = res.data.data.list
    })
  },

    
  mounted(){
    //使用防抖
    const refresh =this.debounce(this.refresh,100)
    const scrollTop =this.debounce(this._scrollTop,100)
    
    this.$bus.$on('isimgload',()=>{
      this.$refs.scroll&&refresh()
      Object.keys(this.goodsinfo)!=0&&this.$refs.scroll&&this.$refs.rates&&scrollTop()
    })
  }
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 999;
  background-color: rgb(255, 255, 255);
}

.detail-scroll {
  position: relative;
  height: calc(100vh);
  overflow: hidden;
  top: 88px;
}

.detailnavbat{
  position: absolute;
}
</style>