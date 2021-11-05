<template>
    <div>
        <el-card header="数字动画">
            <el-input v-model="n1"></el-input>
            {{result}}
        </el-card>


    </div>
</template>

<script>
    const TWEEN = require('@tweenjs/tween.js')

    const tweenAnimate = () => {
        if (TWEEN.update()) {
            requestAnimationFrame(tweenAnimate);
        }
    }

    export default {
        name: "Home",
        data() {
            return {
                n1: '10',
                result: ''
            }
        },
        mounted() {

        },
        watch: {
            n1(nv) {
                new TWEEN.Tween({
                    n: 0  // 起始值，变量名自定义
                }).to({
                    n: nv   // 结果值，变量名自定义
                }, 2000).onUpdate(tween => {
                    // 每次变动都会回调此函数
                    this.result = tween.n.toFixed(0)
                }).start()

                tweenAnimate();
            }
        }
    }
</script>

<style scoped>

</style>
