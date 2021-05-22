<template>
  <div class="DetailRate" v-if="Object.keys(rate).length!=0&&rate.list!=null">
    <div class="Rate-box0">
      <span>用户评价</span>
      <font>更多》</font>
    </div>
    <div class="Rate-box1">
      <img :src="rate.list[0].user.avatar" alt="">
      <div>{{rate.list[0].user.uname}}</div>
    </div>
    <div class="Rate-box2">
      <div>{{rate.list[0].content}}</div>
      <div class="Rate-box2-style">{{rate.list[0].style}}</div>
      <div class="Rate-box2-img">
        <img 
          v-for="item,index in rate.list[0].images" 
          :key="index"
          :src="item">
      </div>
    </div>
      <div class="rate-bottom">热门推荐</div>
  </div>
</template>

<script>
export default {
  name:"DetailRate",
  props:{
    rate:{
      type:"",
      defalut(){
        return {}
      }
    }
  },
  computed:{
    
  }

}
</script>

<style>
  .DetailRate{
    padding: 15px 15px 10px 15px;
    font-size: 15rem;
    color: rgba(0, 0, 0, 0.952);
  }

  .Rate-box0{
    display: flex;
    border-bottom: 1px solid #0001;
    padding: 0px 12px 12px 12px;
  }
  .Rate-box0 span{
    flex:1;
  }

  .Rate-box1 img{
    border-radius: 50%;
    width: 50rem;
  }
  .Rate-box1{
    display: flex;
    margin-top: 10px;
  }

  .Rate-box1 div{
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 10rem;
  }

  .Rate-box2{
    margin-top: 10px;
    font-size: 13rem;
    color: rgba(0, 0, 0, 0.7);
  }
  .Rate-box2-style{
    margin-top: 10px;
    font-size: 12rem;
    color: rgba(0, 0, 0, 0.5);  
  }

  .Rate-box2-img{
    margin-bottom: 30rem;
  }
  .Rate-box2-img img{
    width: 60rem;
    margin-right: 2rem;
    margin-top: 5rem;
  }

  .rate-bottom{
    border-top:5px solid #0001;
    padding-top: 10rem;
  }
</style>