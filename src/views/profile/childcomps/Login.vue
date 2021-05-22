<template>
  <div class="login">
    <div class="login-left"><img src="@/assets/img/profile/avatar.svg" /></div>
    <div class="login-center">
      <div class="login-log"><span @click="login_log">{{log}}</span></div>
      <div class="login-iphone"><img src="../../../assets/img/profile/phone.svg" />{{iPhone}}</div>
    </div>
    <span><div class="login-right" @click="login_message">》</div></span>
  </div>
</template>

<script>
export default {
  name: "login",
  methods:{
    login_log(){
      this.$route.path!=this.logPath&&this.$router.push(this.logPath)
    },
    login_message(){
      this.$route.path!=this.messagePath&&this.$router.push(this.messagePath)
    }
  },
  props: {
    imgs:String,
    log:{
      type:"",
      default(){
        return "登录/注册"
      }
    },
    logPath:{
      type:"",
      default(){
        return "/profile"
      }
    },
    iPhone:{
      tyoe:"",
      default(){
        return "暂无绑定手机号"
      }
    },
    messagePath:{
    tyoe:URL,
      default(){
        return "/profile"
      }
    }
  },
  
};
</script>

<style>
.login {
  background-color: var(--color-tint);
  display: flex;
  height: 85PX;
  color: #fff;
}

.login-center {
  flex: 1;
  margin: auto;
}
.login-log{
  font-size: 16PX;
}
.login-iphone{
  margin-top: 10PX;
  font-size: 13PX;
}
.login-iphone img {
  margin-top: -10PX;
  margin-left: -5PX;
  position: relative;
  top:10PX;
  width: 18PX;
}
.login-left {
  width: 90PX;
  text-align: center;
  display: flex;
}
.login-left img{
  width: 75PX;
  margin: auto;
}
.login-right {
  width: 70px;
  padding: 22PX;
  margin: auto;
}
.login span{
  display: flex;
  color: #fff;
}
</style>