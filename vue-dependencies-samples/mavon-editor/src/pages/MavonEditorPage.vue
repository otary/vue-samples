<template>
  <div>
    <mavon-editor v-model="editorContent"/>
  </div>
</template>

<script>
export default {
  name: "MavonEditorPage",
  data() {
    return {
      editorContent: ''
    }
  },
}
</script>

<style scoped>

</style>