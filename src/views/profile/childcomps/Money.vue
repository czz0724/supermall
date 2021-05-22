<template>
  <div class="Money">
    <div class="Money-box1">
      <div>
        <span>{{ money }}</span
        ><font>元</font>
      </div>
      <div>我的盈余</div>
    </div>
    <div class="Money-box2">
      <div>
        <span>{{ num }}</span
        ><font>个</font>
      </div>
      <div>我的优惠</div>
    </div>
    <div class="Money-box3">
      <div>
        <span>{{ point }}</span
        ><font>分</font>
      </div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Money",

  props: {
    money: {
      type: Number,
      default() {
        return 0.0;
      },
    },
    num: {
      type: Number,
      default() {
        return 0;
      },
    },
    point: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
};
</script>

<style>
.Money {
  box-shadow: 0px 13PX rgb(241, 241, 241);
  display: flex;
  color: rgb(78, 78, 78);
  font-size: 14PX;
}
.Money-box1,.Money-box2,.Money-box3{
  height: 80PX;
  text-align: center;
  margin: auto;
  flex: 1;
  padding-top: 10PX;
}

.Money div div {
  margin: 5PX;
}
.Money div div span {
  position: relative;
  color: rgb(253, 72, 72);
  font-size: 20PX;
  font-weight: 600;
  top: 2PX;
}
.Money-box2{
  border-left:1PX solid rgb(238, 238, 238);
  border-right:1PX solid rgb(238, 238, 238);
}
</style>