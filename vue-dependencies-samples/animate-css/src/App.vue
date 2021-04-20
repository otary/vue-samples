<template>
    <div id="app">
        <!-- 方式一 -->
        <div class="box">
            <span style="display: inline-block;" class="animate__animated animate__fadeInRight">土</span>
            <span style="display: inline-block;" class="animate__animated animate__fadeInRight">地</span>
            <span style="display: inline-block;" class=" animate__animated animate__fadeInRight">是</span>
            <span style="display: inline-block;" class=" animate__animated animate__fadeInRight">以</span>
            <span style="display: inline-block;" class=" animate__animated animate__fadeInRight">它</span>
            <span style="display: inline-block;" class=" animate__animated animate__fadeInRight">的</span>
            <span style="display: inline-block;" class=" animate__animated animate__fadeInRight">肥</span>
            <span style="display: inline-block;" class=" animate__animated animate__fadeInRight">沃</span>
            <span style="display: inline-block;" class=" animate__animated animate__fadeInRight">和</span>
            <span style="display: inline-block;" class=" animate__animated animate__fadeInRight">收</span>
            <span style="display: inline-block;" class=" animate__animated animate__fadeInRight">获</span>
            <span style="display: inline-block;" class=" animate__animated animate__fadeInRight">而</span>
            <span style="display: inline-block;" class=" animate__animated animate__fadeInRight">被</span>
            <span style="display: inline-block;" class=" animate__animated animate__fadeInRight">估</span>
            <span style="display: inline-block;" class=" animate__animated animate__fadeInRight">价</span>
            <span style="display: inline-block;" class=" animate__animated animate__fadeInRight">的</span>
            <span style="display: inline-block;" class=" animate__animated animate__fadeInRight">。</span>
            <span style="display: inline-block;" class=" animate__animated animate__fadeInRight">才</span>
            <span style="display: inline-block;" class=" animate__animated animate__fadeInRight">能</span>
            <span style="display: inline-block;" class=" animate__animated animate__fadeInRight">也</span>
            <span style="display: inline-block;" class=" animate__animated animate__fadeInRight">是</span>
            <span style="display: inline-block;" class="animate__animated animate__fadeInRight">。</span>
        </div>

        <!-- 方式二 -->
        <div class="box">
            <span class="text-fade-in-right-big animate__animated animate__slower" >土</span>
            <span class="text-fade-in-right-big" >地</span>
            <span class="text-fade-in-right-big" >是</span>
            <span class="text-fade-in-right-big" >以</span>
            <span class="text-fade-in-right-big" >它</span>
            <span class="text-fade-in-right-big" >的</span>
            <span class="text-fade-in-right-big" >肥</span>
            <span class="text-fade-in-right-big" >沃</span>
            <span class="text-fade-in-right-big" >和</span>
            <span class="text-fade-in-right-big" >收</span>
            <span class="text-fade-in-right-big" >获</span>
            <span class="text-fade-in-right-big" >而</span>
            <span class="text-fade-in-right-big" >被</span>
            <span class="text-fade-in-right-big" >估</span>
            <span class="text-fade-in-right-big" >价</span>
            <span class="text-fade-in-right-big" >的</span>
            <span class="text-fade-in-right-big" >。</span>
            <span class="text-fade-in-right-big" >才</span>
            <span class="text-fade-in-right-big" >能</span>
            <span class="text-fade-in-right-big" >也</span>
            <span class="text-fade-in-right-big" >是</span>
            <span class="text-fade-in-right-big" >。</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
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

    .box {
        width: 500px;
        margin: 0 auto;
        padding: 50px;
        border: 1px solid #ccc;
    }

    .text-fade-in-right-big {
        display: inline-block;
        animation: fadeInRightBig 1s linear;
    }

    html, body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }
</style>
