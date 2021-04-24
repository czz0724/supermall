<template>
  <div id="app" style="font-size: 0.31vw;">
    <!-- router 路由 -->
  <router-view />
    <main-Tabbar />
   
  </div>
</template>

<script>
import MainTabbar from"./components/content/maintabbar/MainTabbar"
import router from "./router"
export default {
  name: 'App',
  router,
  components: {
    MainTabbar
  }
}
</script>

<style>
@import"assets/css/base.css"
</style>
