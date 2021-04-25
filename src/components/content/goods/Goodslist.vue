<template>
  <div class="Goodslist">
    <goodslistitem v-for="item,index in goods" :key="index" :goodsitem="item"> </goodslistitem>
  </div>
</template>

<script>
import Goodslistitem from "./Goodslistitem"

export default {
  name:"Goodslist",
  components:{
      Goodslistitem,
    },
  props:{
    
    goods:{
      type:Array,
      defalut(){
        return []
      }
    }
  }
}
</script>

<style>
  .Goodslist{
     display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 4px 4px 4px 4px;
  }
</style>