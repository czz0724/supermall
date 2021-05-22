<template>
  <div class="cataitem">
    <scroll class="cataitem-scroll" ref="cataitemScroll">
      <div class="C-item">
        <div class="item-items" v-for="item,index in cateitem" :key="index">
          <img :src="item.image" @load="imgload">
          <div><font>{{item.title}}</font></div>
        </div>
      </div>
      <tabcontrol class="cataitem-tabcontrol" 
        :titles="['综合','新品','销量']" 
        @tabclick="tabclick"
        ref="tab1"></tabcontrol>
      <div v-if="Object.keys(miniWallkey).length!=0" class="dategood">
        <goodslistitem class="dategoodlist"
          v-for="item,index in miniWallkey" 
          :key="index" 
          :goodsitem="item"
        ></goodslistitem>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "../../../components/common/scroll/Scroll.vue";

import {backTopMixin} from "@/common/mixin"
import Tabcontrol from '../../../components/content/tabcontrol/Tabcontrol';
import Goodslistitem from '../../../components/content/goods/Goodslistitem.vue';

export default {
  mixins:[backTopMixin],
  name: "cataitem",

  components: {
    Scroll,
    Tabcontrol,
    Goodslistitem
  },
  data(){
    return{
    }
  },
    
  props: {
    cateitem: {
      type: "",
      defalut() {
        return {};
      },
    },
    miniWallkey:{
      type: "",
      defalut() {
        return {};
      },
    },
  },
  methods:{
    imgload(){
      this.refresh()
    },
    refresh(){
      return this.debounce(this.$refs.cataitemScroll.refresh,10)
    },
    tabclick(index){
      this.$emit("tabclick",index)
      
    }
  },
  mounted(){
    this.a = this.miniWallkey
    this.refresh()

    const re = this.debounce(this.$refs.cataitemScroll.refresh,10)
    
    this.$bus.$on('isimgload',()=>{
      re()
    })
  },
  watch:{
    cateitem(){
       this.refresh()
    }
  },
  activated(){
    this.$refs.cataitemScroll.refresh()
  }
};
</script>

<style>
.cataitem-scroll{
  height: calc(100vh - 190px);
}

.item-items img{
  width: 135px;
}
.item-items{
  margin: 25px;
  text-align: center;
}
.C-item{
  display: flex;
  /* 超过距离居中 */
  flex-wrap: wrap;
  /* 自动居中 */
  /* justify-content: space-around; */
}
.item-items div{
  width: 135px;
}

.cataitem-tabcontrol{
  position: relative;
  z-index: 99;
}

.dategood{
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
}
</style>