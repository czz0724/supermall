<template>
  <div class="Detailnavbar">
    <navbar class="navbar">
      <div class="lefts" slot="left" @click="backclick">《</div>
      <div slot="center" class="center">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="titles"
          :class="{ active: indexs == index }"
          @click="titleclick(index)"
        >
          {{ item }}
        </div>
      </div>
    </navbar>
  </div>
</template>

<script>
import Navbar from "../../../components/common/navbar/Navbar.vue";
export default {
  name: "Detailnavbar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      indexs: 0,
    };
  },
  components: { Navbar },
  methods: {
    titleclick(index) {
      this.indexs = index;
      this.$emit("titleclick",this.indexs)
    },
    backclick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>

.titles {
  font-size: 14rem;
  flex: 1;
}
.center {
  display: flex;
}
.active {
  color: rgb(233, 83, 83);
}
.navbar {
  background-color: darkorange;
}
.lefts {
  margin-top: 10PX;
}
</style>