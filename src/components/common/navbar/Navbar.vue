<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot>购物车</div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar{
  display: flex;
  /* 需要有内容才能撑起 */
  line-height: 44rem;  
  height: 44rem;
  
  box-shadow: 0 2rem 1rem rgba(32, 32, 32, 0.36);
  left: 0;
  top: 0;
  right: 0;
  font-size: 18rem;
  color: aliceblue;
}
.left,.right{
  width: 60rem;
  text-align: center;
}
.center{
  flex: 1;
  text-align: center;
} 
</style>  