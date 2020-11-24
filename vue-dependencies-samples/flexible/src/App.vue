<template>
    <div id="app">
        <div class="left">
              left
        </div>
        <div class="right">
            right
        </div>
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
        width: 1820px;
        height: 100%;
        border: 1px solid red;
    }

    .left {
        float: left;
        width: 500px;
        box-sizing: border-box;

        border: 1px solid #00ff00;
    }

    .right {
        float: right;
        width: calc(100% - 500px);

        box-sizing: border-box;
        border: 1px solid #3a8ee6;
    }

    html, body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }

</style>
