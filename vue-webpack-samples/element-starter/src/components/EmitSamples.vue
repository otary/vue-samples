<template>
    <div>
        <child-component v-on:update="receive"></child-component>

        <div style="width: 500px; margin: 20px auto;">
            <el-card>
                <div slot="header">父组件</div>
                <el-alert type="success">{{recivedData}}</el-alert>
            </el-card>
        </div>
    </div>
</template>

<script>

    /**
     * 子组件
     * @type {{template: string}}
     */
    const ChildComponent = {
        template:
            `<div style="width: 500px; margin: 0 auto;">
                <el-card>
                    <div slot="header" class="clearfix">
                     子组件
                    </div>
                    <el-row>
                        <el-col :span="12">
                            <el-input v-model="emitData"></el-input>
                        </el-col>
                       <el-col :span="12">
                            <el-button @click="doEmit()">使用$emit传递参数</el-button>
                        </el-col>
                    </el-row>
               </el-card>
            </div>`,
        data() {
            return {
                emitData: ''
            }
        },
        methods: {
            doEmit() {
                this.$emit('update', this.emitData);
            }
        }
    }
    /* 子组件end */


    export default {
        name: "EmitSamples",
        components: {
            "ChildComponent": ChildComponent
        },
        methods: {
            /**
             * emit接收数据
             * @param data
             */
            receive(data) {
                this.recivedData = data;
            }
        },
        data() {
            return {
                recivedData: ''
            }
        }
    }
</script>

<style scoped>

</style>