<template>
    <div id="app">
        <mavon-editor v-model="editorContent">

        </mavon-editor>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                editorContent: ''
            }
        },
        methods: {
            startHacking() {
                this.$notify({
                    title: 'It works!',
                    type: 'success',
                    message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
                    duration: 5000
                })
            }
        }
    }
</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
    }
</style>
