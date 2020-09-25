<template>
    <div id="app">
        <el-button type="primary" @click="clickMe">Click Me</el-button>
    </div>
</template>

<script>
    import { Util } from "@otary/element-ext"

    export default {
        data() {
            return {}
        },
        methods: {
            clickMe() {
                this.$notify.success("aaBbCc 转驼峰 => " + Util.string.toCamel("aaBbCc"))
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
