<template>
    <el-row>
        <el-button @click="showLocalhost">显示localhost变量值</el-button>
    </el-row>
</template>

<script>
    import api from '@/api'

    export default {
        name: "StaticSamples",
        data() {
            return {
                localhost: ''
            }
        },
        mounted() {
            // 加载本地文件
            api.getStaticJsonFile("lib/config.json").then((resp) => {
                this.localhost = resp.data.localhost;
            });
        },
        methods: {
            showLocalhost() {
                this.$message.success(this.localhost);
            }

        }
    }
</script>

<style scoped>

</style>
