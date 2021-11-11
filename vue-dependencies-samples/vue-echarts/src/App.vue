<template>
    <div id="app">
        <router-view></router-view>
        <!-- <div>
             <v-chart :style="{width: '800px', height: '800px'}" :option="animateOption"/>
         </div>-->
    </div>
</template>

<script>

    export default {
        data() {
            return {}
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
    }

    html, body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }
</style>
