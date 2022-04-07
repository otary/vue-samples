<template>
    <div>
        Home
    </div>
</template>

<script>
    export default {
        mounted() {
            const worker = new Worker("/static/worker/robot.js");

            // 接收消息
            worker.onmessage = function (event) {
                console.log('Received message => ', event.data);
            }

            // 异常
            worker.onerror(function (event) {
                console.log([
                    'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
                ].join(''));
            });

            // 发送消息
            worker.postMessage({method: 'echo', content: ['Work']});

            // 用完关闭
            worker.terminate();
        }
    }
</script>

<style scoped>

</style>
