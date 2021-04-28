<template>
  <div class="wapper" ref="contant">
    <div class="contant">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BStter from 'better-scroll';
export default {
  name: "sctoll",
  props:{
    probeType:{
      type:Number,
      defalut:4
    },
    pullUpLoad:{
      type:Boolean,
      defalut:false
    }
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BStter(this.$refs.contant, {
      probeType: this.probeType,
      mouseWheel: true,
      click: true,
      pullUpLoad:this.pullUpLoad
      
      })

      this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
      })

      this.scroll.on('pullingUp',()=>{
        console.log("ok");
        this.$emit('pullingUp')
      })
  },
  methods:{
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time=300)
    },
    finishPullUp(){
      this.scroll.finishPullUp();
    },
    refresh(){
     this.scroll.refresh();
    }
    
    
  }
};
</script>
<style scoped>

</style>>

