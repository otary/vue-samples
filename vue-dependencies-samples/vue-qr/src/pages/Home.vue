<template>
    <div>
      <vue-qr text="https://baidu.com"/>

      <vue-qr text="https://baidu.com"
              :margin="0"
              colorDark="red"
              colorLight="#fff"
              :logoScale="0.3"
              :size="300"></vue-qr>
    </div>
</template>

<script>
    export default {
        name: "Home",
      components: {
          VueQr: ()=> import('vue-qr')
      }
    }
</script>

<style scoped>

</style>
