<template>
<div>
  
  <!-- babbar组件 -->
    <tab-bar>
      <!-- 内容组件 -->
      <tab-bar-item path="/home" >
        <!-- 3个插槽的使用，选取时icon，未选取时icon，还有按钮text文字 -->
        <img src="@/assets/img/tabbar/home.svg" slot="item-icon">
        <img src="@/assets/img/tabbar/home_active.svg" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-item >

      <tab-bar-item path="/category" >
        <img src="@/assets/img/tabbar/category.svg" slot="item-icon">
        <img src="@/assets/img/tabbar/category_active.svg" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart"  >
        <img src="@/assets/img/tabbar/shopcart.svg" slot="item-icon">
        <img src="@/assets/img/tabbar/shopcart_active.svg" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" colortext="red">
        <img src="@/assets/img/tabbar/profile.svg" slot="item-icon">
        <img src="@/assets/img/tabbar/profile_active.svg" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</div>
    
</template>

<script>
//导入组件TabBar  低框
import TabBar from "../../common/tabbar/Tabbar"
//导入组件TabBarItem  icon按钮
import TabBarItem from "../../common/tabbar/TabbarItem"
export default {
  name:"MainTabbar",
  //注册组件 components
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>