<template>
  <div>
    <el-button @click="handleFullScreen" value="全屏">全屏</el-button>
  </div>
</template>

<script>
import screenfull from 'screenfull';

export default {
  name: "Home",
  mounted() {

  },
  methods: {
    handleFullScreen() {
      if (screenfull.isEnabled) {
        // 全屏
        // screenfull.request();

        // 退出全屏
        //screenfull.exit();

        // 切换全屏
        screenfull.toggle();

        // 对单个元素全屏
        // screenfull.request(element);
      }
    }
  }
}
</script>


<style scoped>

</style>
