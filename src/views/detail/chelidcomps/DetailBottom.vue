<template>
  <div class="DetailBottom">
    <div class="DetailBottom-box1">
      <div>
        <div class="i k"></div>
        <span>客服</span>
      </div>
      <div>
        <div class="i d"></div>
        <span>店铺</span>
      </div>
      <div>
        <div class="i s"></div>
        <span>收藏</span>
      </div>
    </div>
    <div class="DetailBottom-box2">
      <div class="Bottom-box2-1" @click="productclick"><font>加入购物车</font></div>
      <div class="Bottom-box2-2"><font>购买</font></div>
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailBottom",
  methods:{
    productclick(){
      this.$parent.rate.cRate>1&&this.$emit("productclick")
    },
  }
}
</script>

<style>
  .DetailBottom{
    height: 51rem;
    box-shadow: 0px -1px 2px #0003;
    background-color: rgb(250, 250, 250);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
  }
  .DetailBottom-box1,.DetailBottom-box2{
    flex: 1;
    display: flex;
  }
  .DetailBottom-box1 div,.DetailBottom-box2 div{
    flex: 1;
    font-size: 15rem;
    text-align: center;
    align-items: center;
  }
  .DetailBottom-box2 div{
    display: flex;
  }
  .DetailBottom-box2 font{
    flex: 1;
  }
  .Bottom-box2-1{
    background-color: rgb(252, 212, 35);
    color: #000;
  }
  .Bottom-box2-2{
    background-color: var(--color-tint);
    color: rgb(255, 255, 255);
  }

  .i{
    position: relative;
    background-size:100%;
    width: 25rem;
    height: 25rem;
    bottom: 0;
    margin: auto;
    margin-top:4rem;
    background-image: url('../../../assets/img/detail/detail_bottom.png');
  }
  .DetailBottom-box1 .k{
    background-position-y: -60rem;
  }
  .DetailBottom-box1 .d{
    background-position-y: -110rem;
  }
</style>