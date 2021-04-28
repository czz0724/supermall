<template>
  <div class="category">
    <scroll class="end">
        <div class="aa">
          <li v-for="(item, index) in 20" :key="index">
            {{
              item +
              "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
            }}
          </li>
        </div>
       
    </scroll>
  </div>
</template>

<script>
//只装这个
import Scroll from "../../components/common/scroll/Scroll";
import home from "../home/Home"
export default {
  data() {
    return {
      BStter: null,
    };
  },
  mounted() {},
  components: {
    Scroll,
    home,
  },
};
</script>

<style >
.aa {
  font-size: 30rem;
  background-color: aqua;
}
.end{
  height: 500rem;

}
.category{
  overflow: hidden;
}
</style>