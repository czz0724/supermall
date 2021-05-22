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
      mouseWheel: false,
      click: true,
      pullUpLoad:this.pullUpLoad
      
      })

      this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
      })

      this.scroll.on('pullingUp',()=>{
        console.log("已到底部");
        this.$emit('pullingUp')
      })
  },
  methods:{
    //跳到指定区域
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time)
    },
    //刷新上滑触发事件
    finishPullUp(){
      this.scroll.finishPullUp();
    },
    //刷新可滑动距离
    refresh(){
     this.scroll.refresh();
    }
    
    
  }
};
</script>
<style scoped>

</style>>

