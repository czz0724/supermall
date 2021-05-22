<template>
  <div class="tabcontrol">
      <div v-for="(item,index) in titles" :key="index" @click="spanclick(index)">
        <span :class="{tabcontrolspan:index==isclass}" >{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name:"Tabcontrol",
  props:{
    titles:{
      type:Array,
      defalut(){
        return ["标题","标题"]
      }
    }
  },
  data(){
    return {
      isclass:0
    }
  },
  methods:{
    spanclick(index){
      //获取点击的index
      this.isclass=index;
      this.$emit('tabclick',this.isclass)
    }
  }
}
</script>

<style>
.tabcontrol{
  /* color: rgb(255, 255, 255,1); */
  display: flex;
  background-color: rgb(255, 255, 255);
  
}
.tabcontrol div{
  flex:1;
  text-align: center;
  font-size: 16rem;
  height: 40rem;
  line-height: 40rem;
}
.tabcontrolspan{
  padding: 3rem;
  color:rgba(255, 120, 120, 0.877);
 /* box-shadow: 0px 2.5rem 0rem rgba(255, 120, 120, 0.877); */
  border-bottom: 2.5px solid rgb(228, 3, 40);
}

</style>