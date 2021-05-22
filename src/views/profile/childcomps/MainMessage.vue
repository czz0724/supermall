<template>
  <div class="MainMessage">
    <message :href="'/profile'">
      <img slot="img" src="../../../assets/img/profile/message.svg" alt="">
      <span slot="text">我的信息</span>
    </message>
    <message :href="'/profile'">
      <img slot="img" src="../../../assets/img/profile/shopping.svg" alt="">
      <span slot="text">积分商城</span>
    </message>
    <message :href="'/profile'">
      <img slot="img" src="../../../assets/img/profile/vip.svg" alt="">
      <span slot="text">会员卡</span>
    </message>
  </div>
</template>

<script>
import Message from "./Message.vue"

export default {
  components: { Message },
  name:"MainMessage",
}
</script>

<style>
  .MainMessage{
    margin-top: 13PX;
    margin-bottom: 13PX;
    box-shadow: 0px 13PX rgb(241, 241, 241);

  }
</style>