<template>
  <div class="toast" v-if="shows">
    <div class="toast-div">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "toast",
  data() {
    return {
      message: "111",
      shows: false,
    };
  },
  methods: {
    show(message = "请添加文字", timeout = 1500) {
      this.message = message;
      this.shows = true

      setTimeout(() => {
        this.shows = false
      }, timeout);
    },
  },
};
</script>

<style>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform: 500ms;
  color: #fff;
  padding: 8px 10px;
  background-color: rgba(0, 0, 0, 0.76);
  z-index: 999;
}
</style>