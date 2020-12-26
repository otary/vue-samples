<template>
  <div id="app">
     <HlsLive></HlsLive>
  </div>
</template>

<script>

import HlsLive from "@/components/HlsLive.vue";

export default {
  name: "home",
  components: {
    HlsLive
  }
}
</script>

<style lang="less">
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
</style>
