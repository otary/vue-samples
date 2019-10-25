<template>
    <div id="app">
        <img src="./assets/logo.png">

        <el-tabs type="card" activeName="await-async示例">
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

            <el-tab-pane label="$emit示例">
                <child-component></child-component>

                <div>父组件接收到: <span></span></div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import request from './util/request';

    /**
     *
     * @type {{template: string}}
     */
    const ChildComponent = {
        template: `<div style="border: 1px solid red; margin: 0 auto; width: 50%;">
                        <h3>This is ChildComponent!</h3>
                        <el-row>
                            <el-col :span="5">
                                <el-input v-model="emitData"></el-input>
                            </el-col>
                           <el-col :span="5">
                                <el-button @click="doEmit()">使用$emit传递参数</el-button>
                            </el-col>
                        </el-row>
                   </div>`,
        data() {
            return {
                emitData: ''
            }
        },
        method: {
            doEmit() {
                this.$emit()
            }
        }
    }

    export default {
        components: {
            "ChildComponent": ChildComponent
        },
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

<style>
    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
    }
</style>
