<template>
    <section>
        <el-alert type="success" style="margin: 20px">
            同步 / 异步请求示例
        </el-alert>

        <el-button @click="syncRequest">
            同步请求
        </el-button>
        <el-button @click="syncRequest2">
            同步请求2
        </el-button>
        <el-button @click="asyncRequest">
            异步请求
        </el-button>

        <!-- 结果显示 -->
        <div v-html="syncResult"></div>
    </section>
</template>

<script>
    import request from '../util/request';

    export default {
        name: "AsyncSamples",
        methods: {
            getRepos: function () {
                return request.get('https://api.github.com/users/otary/repos');
            },

            /**
             * 同步调用（配合await/async使用 - 使用then()回调）
             *
             * @returns {Promise<void>}
             */
            async syncRequest() {
                this.syncResult = '';
                this.syncResult += '1.开始请求...<br>';

                // 此处使用then,也是同步阻塞执行
                await this.getRepos().then((data) => {
                    this.syncResult += '2.请求结果:' + data.statusText + '<br>';
                });

                this.syncResult += '3. 结束请求...' + '<br>';
            },

            /**
             * 同步调用2（配合await/async使用）
             **/
            async syncRequest2() {
                this.syncResult = '';
                this.syncResult += '1.开始请求...<br>';

                const data = await this.getRepos();
                this.syncResult += '2.请求结果:' + data.statusText + '<br>';

                this.syncResult += '3.结束请求...' + '<br>';
            },
            /**
             * 异步调用
             */
            asyncRequest() {
                this.syncResult = '';
                this.syncResult += '1.开始请求...<br>';

                this.getRepos().then((data) => {
                    this.syncResult += '2. 请求结果:' + data.statusText + '<br>';
                });

                this.syncResult += '3. 结束请求...' + '<br>';
            }
        },
        data() {
            return {
                syncResult: ''
            }
        }

    }
</script>

<style scoped>

</style>