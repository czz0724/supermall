<template>
  <div class="MainMessApp">
    <message :href="'/shopcart'">
      <img slot="img" src="../../../assets/img/profile/cart.svg" alt="">
      <span slot="text">我的购物车</span>
    </message>
    <message >
      <img slot="img" src="../../../assets/img/profile/pointer.svg" alt="">
      <span slot="text">下载购物APP</span>
    </message>
  </div>
</template>

<script>
import Message from "./Message.vue"

export default {
  components: { Message },
  name:"MainMessApp",

}
</script>

<style>
</style>