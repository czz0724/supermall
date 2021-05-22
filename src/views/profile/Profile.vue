<template>
  <div class="profile">
    <navbar class="profileNavbar"><div slot="center">我的</div></navbar>
    <main-login></main-login>
    <money></money>
    <main-message></main-message>
    <main-mess-app></main-mess-app>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
import MainLogin from "./childcomps/MainLogin"
import MainMessage from './childcomps/MainMessage.vue';
import MainMessApp from './childcomps/MainMessApp.vue';
import Money from './childcomps/Money.vue';
export default {
  naem: "profile",
  components: {
    Navbar,
    MainLogin,
    Money,
    MainMessage,
    MainMessApp,
  },
}
</script>

<style>
.profileNavbar {
  position: relative;
  height: 44PX;
  font-size: 16PX;
  margin-bottom: -1px;
  box-shadow: 0px 0px 0px var(--color-tint);
  background-color: var(--color-tint);
  color: rgb(255, 255, 255);
}
</style>