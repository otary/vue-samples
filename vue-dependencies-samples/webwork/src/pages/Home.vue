<template>
    <div>
        Home
    </div>
</template>

<script>
    export default {
        mounted() {
            const worker = new Worker("../worker/robot.js");

            // 接收消息
            worker.onmessage = function (event) {
                console.log('Received message ' + event.data);
            }

            // 发送消息
            worker.postMessage({method: 'echo', content: ['Work']});
        }
    }
</script>

<style scoped>

</style>
