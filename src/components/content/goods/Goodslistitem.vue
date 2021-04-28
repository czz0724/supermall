<template>
  <div class="Goodslistitem">
      <img :src="goodsitem.show.img" alt="" @load="isimgload">
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
  },
  methods:{
    isimgload(){
      //事件总线
      this.$bus.$emit("isimgload")
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

   font-size: 12rem;
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
    margin-bottom: 3rem;
}
.price{
color: var(--color-high-text);
    margin-right: 20rem; 
}
.cfav{
position: relative;
}
.cfav::before {
    content: '';
    position: absolute;
    left: -15rem;
    top: -1rem;
    width: 14rem;
    height: 14rem;
    background: url("../../../assets/img/common/collect.svg") 0 0/14rem 14rem;
  }
</style>