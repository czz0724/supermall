<template>
  <div class="CartList">
    <scroll class="scroll" :probeType="3" ref="scroll">
      <div v-for="item,index in list" :key="index">
        <cart-listitem :item="item"></cart-listitem>
      </div>
    </scroll>
  </div> 
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll.vue'
import {mapGetters} from "vuex"
import CartListitem from './CartListitem.vue'
export default {
  name:"CartList",
  components: { Scroll, CartListitem },
  computed:{
    ...mapGetters({
      list:"cartlist"
    })
  },
  activated(){
    //活跃时跳转离开时的位置
     this.$refs.scroll.refresh()
  },
  //路由离开时
  deactivated(){
    //保留离开时的滑动距离
  },
}
</script>

<style scoped>
  .scroll{
    height: calc(100vh - 50rem - 40rem - 40rem);
    position: relative;
    top: 44rem;
    overflow: hidden;
  }
  
</style>