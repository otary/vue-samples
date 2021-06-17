<template>
    <div id="app">
        <va-icon name="beer" pulse="true"></va-icon>
        <va-icon name="bath" spin="true"></va-icon>

        <!--
            name: string  => 图标的名称。
            scale: number|string => 用于调整图标的大小。默认为1.
            spin: boolean => 用于指定图标是否旋转。默认为false. （不能与 一起使用pulse。）
            pulse: boolean => 将脉冲效果设置为图标。默认为false. （不能与 一起使用spin。）
            inverse: boolean => 如果设置为true，图标的颜色将变为#fff。默认为false.
            flip: 'vertical'|'horizontal'|'both'  => 用于翻转图标。
            label: string  => 设置aria-label如果规定的图标。
            title: string  => 设置图标的标题。
        -->
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {

        },
        methods: {
            startHacking() {
                this.$notify({
                    title: 'It works!',
                    type: 'success',
                    message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
                    duration: 5000
                })
            }
        }
    }
</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
    }

    html, body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }
</style>
