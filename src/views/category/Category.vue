<template>
  <div class="aa" ref="aaaa">
    <div class="bb">
      <li v-for="item,index in 100" :key="index">{{item+'000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'}}</li>
    </div>
  </div>
</template>

<script>
import BS from "better-scroll"
export default {
  data(){
    return {
      BStter:null
    }
  },
  mounted(){
    this.BStter = new BS(this.$refs.aaaa),{

    }
  }
}
</script>

<style>
.aa{
  height: 200rem;
  background-color: red;
  
  font-size: 16rem;
}
</style>