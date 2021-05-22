<template>
  <div class="Cartbottom" :class="{Cartbottom2:ischeked,Cartbottom1:!ischeked}">
  </div>
</template>

<script>
export default {
  name:"Cartbottom",
  props:{
    ischeked:{
      type:Boolean,
      defalut:false
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
  .Cartbottom{
    background-color: rgb(235, 235, 235);
    position:absolute;
    left: 10rem; 
    width: 18rem;
    background-image: url("../../../assets/img/cart/tick.svg");
    height: 18rem;
    border-radius: 50%;
    background-size: 100% 100%;
  }
  .Cartbottom1{
    background-color: rgb(235, 235, 235);
    position:absolute;
    left: 10rem;
    width: 18rem;
    height: 18rem;
    background-image: url("../../../assets/img/cart/tick.svg");
    border-radius: 50%;
    background-size: 100% 100%;
    border: 1rem solid rgb(207, 207, 207) ;
  }
  .Cartbottom2{
    background-color: var(--color-tint);
    position:absolute;
    left: 10rem;
    width: 18rem;
    height: 18rem;
    background-image: url("../../../assets/img/cart/tick.svg");
    border-radius: 50%;
    background-size: 100% 100%;
  }
</style>