<template>
    <div id="app">
        <highlightjs language='javascript' code="var x = 5;" />

        <highlightjs :code="codeText"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                codeText: " java.lang.RuntimeException: page status code error,\n" +
                    "                page https://www.lanmays.com/vodsearch.html?wd=爱情 , code: 512 at us.codecraft.webmagic.Spider.onDownloadSuccess(Spider.java:422)\n" +
                    "                    at us.codecraft.webmagic.Spider.processRequest(Spider.java:406)\n" +
                    "                at us.codecraft.webmagic.Spider.access$000(Spider.java:61)\n" +
                    "                at us.codecraft.webmagic.Spider$1.run(Spider.java:320)\n" +
                    "                at us.codecraft.webmagic.thread.CountableThreadPool$1.run(CountableThreadPool.java:74)\n" +
                    "                at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n" +
                    "                at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n" +
                    "                    at java.lang.Thread.run(Thread.java:748)"
            }
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
        text-align: center;
    }
</style>
