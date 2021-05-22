<template>
  <div>
    <login 
      :log="'登录/注册'"
      :iPhone="'暂无绑定手机号'"
      :logPath="'/home'"
      :messagePath="'/home'"
      >
    </login>
  </div>
</template>

<script>
import Login from "./Login";
export default {
  naem: "MainLogin",
  components: {
    Login,
  },
};
</script>

<style>
</style>