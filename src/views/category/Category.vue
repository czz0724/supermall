<template>
  <div class="category">
    <navbar class="cate-navbar"><div slot="center">商品分类</div></navbar>
    <div class="cate-main">
      <cate-title
        :title="title"
        class="main-title"
        @titleIndex="titleIndex"
      ></cate-title>
      <cateitem
        class="main-item"
        :cateitem="cateitem"
        :miniWallkey="miniWallkey"
        @tabclick="tabclick"
      ></cateitem>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
import Scroll from "../../components/common/scroll/Scroll";

import {
  GetCataTitle,
  GetCataItem,
  GetCataItemGood,
} from "../../network/category";
import Cateitem from "./childcomps/Cateitem.vue";
import CateTitle from "./childcomps/CateTitle.vue";
export default {
  data() {
    return {
      title: [],
      cateitem: [],
      miniWallkey: [],
    };
  },

  components: {
    Scroll,
    Navbar,
    CateTitle,
    Cateitem,
  },

  methods: {
    //切换数据
    tabclick(index){
      if(index==0){
        this.miniWallkey.sort((a,b)=>b.price-a.price)
      }else if(index==1){
        this.miniWallkey.sort((a,b)=>a.sale-b.sale)
      }else if(index==2){
        this.miniWallkey.sort((a,b)=>b.cfav-a.cfav)
      }
    },
    //监听子组件title的index
    titleIndex(index) {
      this.GetCataItem(this.title[index].maitKey);

      this.GetCataItemGood(this.title[index].miniWallkey);
    },
    //请求item数据
    GetCataItem(i) {
      GetCataItem(i).then((res) => {
        this.cateitem = res.data.data.list;
        // console.log(res);
      });
    },
    //请求item内goods数据
    GetCataItemGood(o) {
      GetCataItemGood(o).then((res) => {
        this.miniWallkey = res.data;
        this.miniWallkey.sort((a,b)=>b.price-a.price)
      });
    },
    //请求title数据
    GetCataTitle() {
      GetCataTitle().then((res) => {
        let cate = res.data.data.category;
        this.title = cate.list;

        //请求完毕后请求一次默认item数据
        this.$nextTick(() => {
          this.GetCataItem(this.title[0].maitKey);
          this.GetCataItemGood(this.title[0].miniWallkey);
        });
      });
    },
  },
  created() {
    this.GetCataTitle();
  },
};
</script>

<style >
.category {
  overflow: hidden;
}
.cate-navbar {
  position: relative;
  background-color: var(--color-tint);
}

.cate-main {
  display: flex;
}

.main-title {
  width: 25%;
}
.main-item {
  width: 75%;
}
</style>