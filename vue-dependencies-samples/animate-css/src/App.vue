<template>
    <transition name="my-fade" mode="out-in" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__slower animate__fadeOut">
        <router-view/>
    </transition>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted() {

        },
        methods: {}
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
