<template>
  <div class="RecompendView" >
    <div class="RecompendView-item" v-for="(item, index) in recompendview.list" :key="index" >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recompend-view",
  props: {
    recompendview: {
      defalut() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  created() {
    console.log(this.a);
  },
};
</script>

<style>
.RecompendView {
  display: flex;
  box-shadow: 0px 10rem 0px rgba(95, 74, 90, 0.048);

}
.RecompendView-item {
  flex: 1;
  text-align: center;
  padding: 10rem 0 20rem;
  font-size: 15rem;
}

.RecompendView-item img{
  width: 65rem;
  margin-bottom: 5rem;
}
</style>