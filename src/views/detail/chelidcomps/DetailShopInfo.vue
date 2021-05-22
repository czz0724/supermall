<template>
  <div class="DetailShopInfo" v-if="Object.keys(shop).length!=0">
    <div class="topShop">
      <span><img :src="shop.shopLogo" alt=""></span>
      <span>{{shop.name}}</span>
    </div>

    <div class="centerShop">
      <div class="left">
        <div class="left-item1">
          <div class="test1"> {{shop.cSells}}</div>
          <div>总销量</div>
        </div>
        <div  class="left-item2">
          <div class="test2"> {{shop.cGoods}}</div>
          <div>总宝贝</div>
        </div>
      </div>
      <div class="ridth">
        <div v-for="item,index in shop.score" :key="index" class="ridth-item">
          <span class="span1">{{item.name}}</span>
          <span :class="{actve:item.isBetter}">{{item.score}}</span>
          <span v-if="item.isBetter"><font>高</font> </span>
          <span v-else ><font class='font'>低</font></span>
        </div>        
      </div>
      
    </div>
    <div class="bottom">
        <span>进店逛逛</span>
      </div>
  </div>
</template>

<script>
export default {
  name:"DetailShopInfo",
  props:{
    shop:{
      type:"",
      defalut(){
        return {}
      }
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
  .DetailShopInfo{
    padding:15px 15px 30px 10px;
    color: rgba(0, 0, 0, 0.808);
    border-bottom:5px solid #0001;
  }

  .topShop img{
    width: 50px;
  }
  .topShop{
    display: flex;
    text-align: center;
    /* 垂直居中 */
    align-items: center;
  }

  .topShop span{
    margin-left: 10px;
    font-size: 15rem;
  }

  .centerShop{
    display: flex;
    margin: 20px 0 0px 0;
  }
  
  .centerShop .left{
    flex: 1;
    display: flex;
    border-right:1px solid #0002 ;
  }
  .centerShop .left-item1,.left-item2{
    flex: 1;
  }
  .centerShop .left-item1 .test1,.test2{
    margin: 0px 0 5px 0;
    font-size: 18rem;
  }
  .left{
    padding-top: 14px;
    
  }

  .centerShop .ridth{
    flex: 1;
  }

  .actve{
    color: red;
  }


  .ridth-item{
    display: flex;
    margin-top: 10px;
    font-size: 13rem;

  }
  .ridth-item span{
    flex: 1;
    
  }
  .ridth-item .span1{
    flex: 1.5;
    margin-left: 20px;

  }
  .ridth-item font{
    background-color: red;
  }
  .ridth-item .font{
    background-color: rgb(0, 224, 37);
  }

  .bottom{
    text-align: center;
    margin-top: 25px;
  }
  .bottom span{
    background-color: rgb(238, 238, 238);
    padding: 8px 40px 8px 40px;
    border-radius: 10px;
    
  }
</style>