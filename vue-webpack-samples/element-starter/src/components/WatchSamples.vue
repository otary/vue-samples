<template>
    <el-row>
        <el-button @click="changeArr">修改数组，查看监听</el-button>
    </el-row>
</template>

<script>
    export default {
        name: "WatchSamples",
        data() {
            return {
                arr: [{
                    name: 'aaa'
                }, {
                    name: 'bbb'
                }, {
                    name: 'ccc'
                }]
            }
        },
        methods: {
            changeArr() {
               const index =  Math.floor(Math.random() * this.arr.length);
               alert(index)
            }
        },
        watch: {
            arr(item) {
                console.log(item)
            }
        }
    }
</script>

<style scoped>

</style>
