<template>
  <div id="app" style="font-size: 0.31vw;">
    <!-- router 路由 --> 
  <keep-alive exclude="Detail">
    <router-view />
  </keep-alive>
    <main-Tabbar />
  </div>
</template>

<script>
import MainTabbar from"./components/content/maintabbar/MainTabbar"
export default {
  name: 'App',
  components: {
    MainTabbar
  },
}
</script>

<style>
@import"assets/css/base.css";
#app{
  min-width: 320rem;
}

</style>
