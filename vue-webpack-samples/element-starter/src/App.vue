<template>
    <div id="app">
        <img src="./assets/logo.png">

        <el-tabs type="card" activeName="await-async">
            <el-tab-pane label="await/async示例" name="await-async">
                <async-samples></async-samples>
            </el-tab-pane>

            <el-tab-pane label="$emit示例">
                <emit-samples></emit-samples>
            </el-tab-pane>

            <el-tab-pane label="vuex示例">
                <vuex-samples></vuex-samples>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

    export default {
        components: {
            "AsyncSamples": () => import('./components/AsyncSamples.vue'),
            "EmitSamples": () => import('./components/EmitSamples.vue'),
            "VuexSamples": () => import('./components/VuexSamples.vue')
        }
    }
</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
    }
</style>
