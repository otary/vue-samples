<template>
    <div id="app">
        <editor-md></editor-md>
    </div>
</template>

<script>

    export default {
        data() {
            return {

            }
        },
        components: {
          'EditorMd': ()=> import('./components/EditorMd')
        },
        methods: {
            startHacking() {

            }
        }
    }
</script>

<style>
    #app {
        width: 100%;
        height: 100vh;
        font-family: Helvetica, sans-serif;
    }

    html,body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
</style>
