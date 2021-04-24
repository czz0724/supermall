<template>
  <!-- 包裹div，写入css样式，监听click事件 -->
  <div class="tab-bar-item"  @click="tabbarClick">
    <!-- 插槽用于 未选取的icon图片 -->
    <div v-if="!isAcitve"><slot name="item-icon"/></div>
    <!-- 插槽用于 已选取的icon图片 -->
    <div v-else><slot name="item-icon-active"/></div>
    <!-- 插槽用于按钮文本 -->
    <div :style="AcitveStyle"><slot name="item-text"/></div>
  </div>
</template>

<script>
export default {  
  name: "TabbarItem", 
  props:{
    //path用于记录单个组件的path地址
    path:String,
    //定义标签对象，外部传入颜色属性 自定义字体颜色
    colortext:{   
      //type 指定类型为String
      type:String,
      //default 默认值
      default:"red"
    }
  },
  data(){
    return {
    }
  },
  computed:{
      //用判断选中时
      isAcitve(){
        //判断全局的path地址是否与当前组件内的path所相等
        return !this.$route.path.indexOf(this.path)
        // return this.$route.path==this.path
      },
      //计算外部传入的数据
      AcitveStyle(){
        //判断isActive是否为 true ，是则为第一个对象，否则为空对象
        return this.isAcitve?{color:this.colortext}:{}
      }

  },
  methods:{
    //点击后当前全局path替换为所点击组件的path地址
    tabbarClick(){
      //替换path为当前组件path地址
      if(this.$route.path!=this.path){
        this.$router.replace(this.path)
      }
    }
  }
};
</script>

<style>
.tab-bar-item {
  /* 让自身宽均匀分布 */
  flex: 1;
  /* 标签内容里的元素居中 */
  text-align: center;
  /* 撑开高度 */
  height: 49rem;
  /* 字体大小 */
  font-size: 12rem;
}
.tab-bar-item img{
  /* 图片大小 */
  width: 26rem;
  /* 图片上外边距 */
  margin-top: 3rem;
  /* 图片下外边距 */
  margin-bottom: 2rem;
  /* 删除图片自带3rem下边距 */
  vertical-align: middle;
}

</style>