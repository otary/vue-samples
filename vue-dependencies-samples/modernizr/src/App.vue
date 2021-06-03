<template>
    <div id="app">
        <el-button type="primary" @click="handleCheckBoxSizing">检测boxSizing是否支持</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {

        },
        methods: {
            /**
             * 检测CSS前缀支持性
             */
            handleCheckBoxSizing() {
               this.$message.success(Modernizr.prefixed('boxSizing'));
            },
            handle() {
                //Modernizr.addTest()
            }
        },
        computed: {

        }
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
