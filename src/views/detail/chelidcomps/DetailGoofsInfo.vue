<template>
  <div class="DetailGoofsInfo"  v-if="Object.keys(goodsinfo).length != 0"> 
    <div class="GoofsInfo-box1">
      <div v-for="item,index in goodsinfo.tables[0]" :key="index" class="goodsinfo-item1">
        <div v-for="f,i in item" :key="i">
          {{f}}
        </div>
      </div>
    </div>
    <div class="GoofsInfo-box2">
      <div v-for="item,index in goodsinfo.set" :key="index" class="goodsinfo-item2">
        <div class="goodsinfo-item2-key"><font>{{item.key}}</font></div>
        <div class="goodsinfo-item2-value"><font>{{item.value}}</font></div>
      </div>
    </div>
    <div class="GoofsInfo-box3">
      <img :src="goodsinfo.images" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailGoofsInfo",
  props:{
    goodsinfo:{
      type:"",
      defalut(){
        return {}
      }
    }
  },
  data(){
    return {

    }
  },
  methods:{

  }
}
</script>

<style>
  .DetailGoofsInfo{
    padding: 10rem 10rem 10rem 10rem;
    font-size: 15rem;
    border-bottom: 5rem solid #0001;

  }

  .GoofsInfo-box1{
    border-bottom: 1rem solid #0001;
  }
  .goodsinfo-item1{
    display: flex;
    line-height: 43rem;
    border-bottom: 1rem solid #0001;
  }
  .goodsinfo-item1 div{
    flex: 1;
  }

  .goodsinfo-item2-key{
    flex: 0.33;
    align-items: center;
    display: flex;
  }
  .goodsinfo-item2{
    display: flex;
    height: 43rem;
    border-bottom: 1rem solid #0001;
  }
  .goodsinfo-item2-value{
    flex: 1;
    align-items: center;
    display: flex;
    color: rgb(219, 14, 93);
  }

  .GoofsInfo-box3 img{
    width: 100%;
    margin-top: 8rem;
  }
  
</style>