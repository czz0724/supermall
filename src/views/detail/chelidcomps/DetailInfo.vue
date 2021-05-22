<template>
  <div class="DetailInfo" v-if="Object.keys(detailInfo).length != 0">
    <div class="Info-item">
      <div class="xian1"></div>
      <div class="Info-center">{{ detailInfo.desc }}</div>
      <div class="xian2"></div>
      <div class="text3">{{ detailInfo.detailImage[0].key }}</div>
    </div>

    <div class="info-imgs">
      <div v-for="(item, index) in detailInfo.detailImage[0].list" :key="index">
        <img :src="item" @load="imgload" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    detailInfo: {
      type: "",
      defalut() {
        return {};
      },
    },
  },
  data() {
    return {
      isimg: 0,
      isimglength: 0,
    };
  },
  methods: {
    imgload() {
      this.isimg++;
      if( this.isimg == this.isimglength){
        this.$emit("imgload");
      }
    },
  },
  watch: {
    isimg() {
      this.isimglength = this.detailInfo.detailImage[0].list.length
      // console.log(this.isimglength);
    },
  },
};
</script>

<style>
.DetailInfo {
  padding: 15px 15px 30px 15px;
  border-bottom:5px solid #0001;
}
.xian1 {
  position: relative;
  width: 70px;
  border-bottom: 1px solid #0009;
}

.xian1::before {
  position: absolute;
  bottom: 0;
  content: "";
  width: 5px;
  height: 5px;
  background-color: rgb(0, 0, 0);
}
.xian2 {
  position: relative;
  left: 78%;
  top: 0;
  width: 70px;
  border-top: 1px solid #0009;
}
.xian2::before {
  position: absolute;
  top: 0;
  right: 0;
  content: "";
  width: 5px;
  height: 5px;
  background-color: rgb(0, 0, 0);
}
.Info-item {
  width: 100%;
  position: relative;
  margin-bottom: 10px;
}
.Info-center {
  margin: 20px;
  font-size: 13rem;
  color: rgba(0, 0, 0, 0.856);
}

.text3 {
  font-size: 15rem;
  color: rgba(0, 0, 0, 0.925);
}

.info-imgs img {
  width: 100%;
}
</style>