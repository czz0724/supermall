<template>
<!-- tabbar组件为区块专门定位位置 -->
  <div id="tab-bar"> 
    <!-- 插槽放按钮内部元素 -->
    <slot></slot>
    <div class="ar"></div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
#tab-bar {
  /* flex 布局 */
  display: flex;
  background-color: rgb(243, 243, 243);
  /*  固定页面布局即使滚动也不会动  */
  position: fixed;
  /* 让左右下坐标锁住 文档 */
  left: 0;
  bottom: 0%;
  right: 0;
  /* box-shadow 阴影 */
  box-shadow: 0rem -2rem 1rem rgba(0, 0, 0, 0.089);
  
  z-index: 990;
}
.ar{
  position: absolute;
  flex: 0;
  top: 90%;
  background-color:  rgb(243, 243, 243);
  width: 100%;
}
</style>