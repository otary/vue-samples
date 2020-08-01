<template>
    <div>
        <el-button @click="getParentData">获取父级Data值</el-button>
        <el-button @click="getParentProps">获取父级Props值</el-button>
        <el-button @click="callParentMethod">调用父级方法</el-button>
    </div>
</template>

<script>
    export default {
        name: "InjectSamples",
        inject: ['parentForm'],
        methods: {
            getParentData(){
                this.$message.success('this.parentForm.myName =>' + this.parentForm.myName);
            },
            getParentProps(){
                this.$message.info('this.parentForm.day=>' + this.parentForm.day)
            },
            callParentMethod() {
               this.$message.success('this.parentForm.callMe() => ' + this.parentForm.callMe())
            }
        }
    }
</script>

<style scoped>

</style>