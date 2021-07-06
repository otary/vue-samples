<template>
    <div>
        <el-button @click="hanldePlay">开始播放</el-button>
        <el-button @click="hanldePause">暂停</el-button>
    </div>
</template>

<script>
    /* 百度语音播报 */
    export default {
        name: "BaiduAudio",
        data() {
           return {
               audio: null
           }
        },
        mounted() {
            const text = "你好，欢迎光临";
            this.audio = new Audio('http://tts.baidu.com/text2audio?cuid=baiduid&lan=zh&ctp=1&pdt=311&tex=' + text);

            this.audio.onended = function() {
                this.$message.success('播放结束')
            }
        },
        methods: {
            hanldePlay() {
                console.log(this.audio)
                this.audio.play();
            },
            hanldePause() {
                this.audio.pause();
            }
        }
    }
</script>

<style scoped>

</style>
