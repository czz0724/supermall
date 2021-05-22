import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store/index"
import toast from "./components/common/toast"
import fastcilck from "fastclick"
import lazyload from "vue-lazyload"



//阻止生产日志
Vue.config.productionTip = false

//事件总线
Vue.prototype.$bus = new Vue()

//安装ui组件
Vue.use(toast)

//清除移动端的点击延迟
// fastcilck.attach(document.body)

//图片懒加载插件
Vue.use(lazyload,{
  loading:require('./assets/img/home/loading-animate.gif')
})
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
