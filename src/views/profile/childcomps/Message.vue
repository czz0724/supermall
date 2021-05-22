<template>
  <div class="Message" @click="Messages">
    <span class="message-1"><slot name="img"></slot></span>
    <span class="message-2"><slot name="text"></slot></span>
  </div>
</template>

<script>
export default {
  name:"Message",
  props:{
    href:{
      tyep:URL,
      default:"/profile"
    },
    text:String
  },
  methods:{
    Messages(){
      if(this.$route.path!=this.href){
        this.$router.replace(this.href)
      }
    }
  }
}
</script>

<style>
.Message{
  line-height: 40PX;
  border-top:0.5PX solid rgb(238, 238, 238);
}
.message-2{
  color: #555;
  font-size: 15PX;
  margin-left: 10PX;
}
.Message img{
  height: 22PX;
  position: relative;
  top: 5PX;
}
.message-1{
  margin-left: 10PX;
}

</style>