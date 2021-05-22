<template>
  <div class="cateTitle">
    <scroll class="cateTitle-scroll">
      <div class="title-s">
        <div
          class="title-item"
          v-for="(item, index) in title"
          :key="index"
          :class="{activetitle:indexs == index}"
          @click="itemIndex(index)"
        >
          {{ item.title }}
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "../../../components/common/scroll/Scroll.vue";
export default {
  components: {
    Scroll,
  },
  name: "CateTitle",

  data() {
    return {
      indexs:0

    };
  },
  methods: {
    itemIndex(index){
      this.indexs = index
      this.$emit("titleIndex",index)
    }
  },
  props: {
    title: {
      type: "",
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.title-s {
  color: rgb(94, 94, 94);
  font-size: 32px;
}

.title-item {
  line-height: 80px;
  text-align: center;
  margin: 0 auto;
}

.cateTitle-scroll {
  height: calc(100vh - 190px);
  background-color: rgb(245, 245, 245);

}

.activetitle {
  background-color: #fff;
  color: var(--color-tint);
  border-left:3px solid rgb(247, 45, 105);
  font-weight: 600;
}
</style>