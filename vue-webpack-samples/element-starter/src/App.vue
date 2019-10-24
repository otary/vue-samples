<template>
    <div id="app">
        <img src="./assets/logo.png">

        <el-tabs type="card" activeName="await-async">
            <el-tab-pane label="await/async" name="await-async">
                <el-alert>
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
            </el-tab-pane>

            <el-tab-pane label="$emit">
                <my-component></my-component>
            </el-tab-pane>
        </el-tabs>


    </div>
</template>

<script>
    import request from './util/request';

    import axios from 'axios';


    const MyComponent = {
        template: "<div>This is MyComponent!</div>"
    }

    export default {
        components: {
            "my-component": MyComponent
        },
        methods: {
            startHacking() {
                this.$notify({
                    title: 'It works!',
                    type: 'success',
                    message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
                    duration: 5000
                })
            },
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

<style>
    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
    }
</style>
