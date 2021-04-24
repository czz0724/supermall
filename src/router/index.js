import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const Home = () => import("@/views/home/Home")
const Cart = ()=>import("@/views/cart/Shopcart")
const Category = ()=>import("@/views/category/Category")
const Profile = ()=>import("@/views/profile/Profile")
const routes = [
  {
    path: '',
    redirect:Home,
    meta:{
      title:"标题"
    }
  },
  {
    path: '/home',
    component:Home,
    meta:{
      title:"首页"
    }
    
  },
  {
    path: '/shopcart',
    component:Cart,
    meta:{
      title:"购物车"
    }
  },
  {
    path: '/category',
    component:Category,
    meta:{
      title:"分类"
    }
  },
  {
    path: '/profile',
    component:Profile,
    meta:{
      title:"我的"
    }

  },
]


const router = new Router({
  routes,
  mode:"history"
  
})

router.beforeEach((to,from,next)=>{
  // document.title=to.matched[0].meta.title
  document.title=to.meta.title
  next()
})

export default router