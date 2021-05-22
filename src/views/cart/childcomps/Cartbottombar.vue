<template>
  <div class="Cartbottombar">
    <div class="bottom-bt">
      <cartbottom :ischeked="ischekeds" @click.native="_ischeked"></cartbottom>
      <span>全选</span>
    </div>
    <div class="Price">合计: ￥{{ totalPrice }}</div>
    <div class="ri" @click="riclick">
      <span>去结算({{ length.length }})</span>
    </div>
  </div>
</template>

<script>
import Cartbottom from "./Cartbottom.vue";
import { CARTBOTTOMBARNUM } from "../../../store/mutations_types";
import { mapGetters } from 'vuex'

export default {
  components: { Cartbottom },
  nameL: "Cartbottombar",
  data() {
    return {
      ischeked: false,
    };
  },
  methods: {
    _ischeked() {
      this.ischeked = !this.ischeked;
      this.$store.commit(CARTBOTTOMBARNUM);
    },
    riclick(){
      !this.ischekeds?this.$toast.show("请选择商品",1000):""
    }
  },
  computed: {
    ...mapGetters({
      cartlist:'cartlist'
    }),
    totalPrice() {
      return this.$store.state.carList
        .filter((item) => {
          return item.cheked;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0).toFixed(2);
    },
    length() {
      return this.$store.state.carList.filter((item) => {
        return item.cheked;
      });
    },
    ischekeds(){
      return this.cartlist.filter(item => item.cheked).length==this.cartlist.length&&this.cartlist.length>=1?true:false 
    }
  },
  mounted(){
    
  }
};
</script>

<style>
.Cartbottombar {
  position: relative;
  height: 40rem;
  background-color: rgb(248, 248, 248);
  display: flex;
  box-shadow: 0px -3rem 4rem rgba(59, 59, 59, 0.199);
  font-size: 15rem;
  bottom: -42rem;
}
.bottom-bt {
  align-items: center;
  display: flex;
}
.bottom-bt span {
  margin-left: 35rem;
}

.Price {
  display: flex;
  align-items: center;
  margin-left: 20rem;
  color: #333;
}

.ri {
  position: absolute;
  align-items: center;
  display: flex;
  right: 0;
  width: 100rem;
  height: 100%;
  background: red;
  color: #fff;
}
.ri span {
  margin: auto;
}
</style>