<template>
  <div>
    Home

    <el-button @click="handleConvert">点击</el-button>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';

export default {
  name: "Home",
  methods: {
    handleConvert() {
      const imgBase64 = html2canvas(document.body).then(function (canvas) {
        document.body.appendChild(canvas);
        return canvas.toDataURL("image/png");
      });

      console.log(imgBase64);
    }
  }
}
</script>

<style scoped>

</style>
