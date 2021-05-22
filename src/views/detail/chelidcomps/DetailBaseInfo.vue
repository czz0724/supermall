<template>
  <div class="DetailBaseInfo" v-if="Object.keys(goods).length != 0">
    <div>
      <div class='title'>{{goods.title}}</div>
    </div>
    <div>
      <div class="realPrice">￥{{goods.realPrice}} 
        <span class="realPrice-span1">￥{{goods.realPrice}}</span>
        <span class="realPrice-span2">{{goods.discountDesc}}</span>
        </div>
    </div>
    <div>
      <div class="columns">
        <span>{{goods.columns[0]}}</span>
        <span class="columns-1">{{goods.columns[1]}}</span>
        <span>{{goods.services[goods.services.length-1].name}}</span>
        <!-- <span v-for="item,index in goods.columns" :key="index">{{item}}</span> -->
      </div>
    </div>
    <div>
      <div class="services">
        <div v-for="item,index in goods.services.length-1" 
        :key="index"
        class="services-item">
        <span v-if="goods.services[index].icon"><img :src="goods.services[index].icon" alt=""></span>
        <span v-else><div></div></span>
        <span class="item-div">{{goods.services[index].name}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props:{
    goods:{
      type:0,
      defalut(){
        return {}
      }
    }
  }

}
</script>

<style>

  .DetailBaseInfo{
    padding: 0px 10px;
    border-bottom:5px solid #0001;
    overflow: hidden;
  }

  .title{
    font-size: 18rem;
    margin-top: 10rem;
    margin-bottom: 10rem;
    color: rgb(48, 48, 48);
  }

  .realPrice{
    color: var(--color-tint);
    font-size: 25rem;
    position: relative;
  }

  .realPrice-span1{
    color: rgb(156, 156, 156);
    font-size: 13rem;
    /* 中划线  删除线 */
    text-decoration: line-through;
  }
  .realPrice-span2{
    position: relative;
    color: rgb(255, 255, 255);
    font-size: 14rem;
    top: -5rem;
    left: 4rem;
    border-radius: 10rem;
    background-color: var(--color-tint);
    padding:1rem;
    padding-left: 5rem;
    padding-right: 5rem;
  }


  .columns{
    margin-top: 18rem;
    display: flex;
    border-bottom: 1px solid rgba(219, 219, 219, 0.6);
    padding-bottom: 13px;
    color: rgb(145, 145, 145);
    font-size: 14rem;
  }

  .columns-1{
    flex: 1;
    text-align: center;
  }

  .services{
    display: flex;
    line-height: 60px;
  }
  .services-item{
    margin: auto;
  }
  .item-div{
    position: relative;
    top: 1px;
  }
  .services img{
    width: 15rem;
    vertical-align: middle;
  }
  .services-item div{
    position: relative;
    float: left;
    border:1px solid #0008;
    width: 15rem;
    height: 15rem;
    top: 22rem;
  }
</style>