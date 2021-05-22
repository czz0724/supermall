<template>
  <div class="Shopcart">
    <!-- navbat -->
    <navbar class=''>
      <div slot="center">购物车<span v-if="length">({{length}})</span></div>
    </navbar>

    <!-- 商品 -->
    <cart-list></cart-list>

    <!-- 底部结算 -->
    <cartbottombar></cartbottombar>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
import { mapGetters } from 'vuex'
import CartList from './childcomps/CartList'
import Cartbottombar from './childcomps/Cartbottombar.vue';

export default {
  name: "Shopcart",
  components: { 
    Navbar,
    CartList,
    Cartbottombar
   },

  computed:{
    ...mapGetters({
      length:"cartlength"
    })
  },
  
};
</script>

<style scoped>
  .navbar{
    background-color: var(--color-tint);
  }
</style>
