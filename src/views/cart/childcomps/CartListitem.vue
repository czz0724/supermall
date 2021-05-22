<template>
  <div class="box">
    <div class="box-item-1">
      <cartbottom :ischeked="item.cheked" @click.native="ischeked" ></cartbottom>
      <div class="item-i"><img :src="item.image" alt="" /></div>
    </div>
    <div class="box-item-2">
      <div class="item-title">{{ item.title }}</div>
      <div class="item-desc">{{ item.desc }}</div>
      <div class="item-realPrice">￥{{ item.price }}
        <span>{{item.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Cartbottom from './Cartbottom.vue';
export default {
  components: { Cartbottom },
  naem:"cartListitem",
  props:{
    item:{
      type:"",
      defalut(){
        return {} 
      }
    }
  },
  methods:{
    ischeked(){
      this.$store.commit('ischeked',this.item.iid)
    },
  },
};
</script>
  
<style scoped>
  .box{
    background-color: #fff;
    height: 120rem;
    border-bottom:1px solid #0003 ;
    display: flex;
  }

  .box-item-1 img{
    height: 100%;
    width: 100%;
  }
  .box-item-1{
    flex: 0.45;
    align-items: center;
    display: flex;
    position: relative;
  }
  .item-i{
    height: 110rem;
    width:75rem;
    overflow: hidden;
    border-radius: 10rem;
    margin-left: 35rem;
    margin-right: 10rem;
  }
  .box-item-2{
    flex: 1;
    position: relative;
    font-size: 16rem;
    color: #333;
    overflow: hidden;

  }
  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 16rem;
  }
  .item-desc{
    color: #888;
    font-size: 14rem;
  }

  .item-realPrice{
    color: rgb(255, 53, 53);
    margin-top: 16rem;
    font-size: 18rem;
    position: relative;
  }
  .item-realPrice span{
    color: rgb(46, 46, 46);
    font-size: 18rem;
    position:absolute;
    right: 20rem;
  }
</style>