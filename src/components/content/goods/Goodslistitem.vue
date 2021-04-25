<template>
  <div class="Goodslistitem">
      <img :src="goodsitem.show.img" alt="">
      <div class="box2">
        <p>{{goodsitem.title}}</p>
        <span class="price">{{goodsitem.price}}</span>
        <span class="cfav">{{goodsitem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name:"Goodslistitem",
  props:{
    goodsitem:{
      type:Object,
      defalut(){
        return {} 
      }
    }
  }
}
</script>

<style>
.Goodslistitem{
  width: 48%;
  position: relative;
  padding-bottom: 40rem;

}
.Goodslistitem img{
  width: 100%;
  height: 100%;
  border-radius:5rem 5rem 5rem 5rem;
}

.box2{

   font-size: 12px;
    position: absolute;
    bottom: 5rem;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
}

.box2 p{
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}
.price{
color: var(--color-high-text);
    margin-right: 20px; 
}
.cfav{
position: relative;
}
.cfav::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>