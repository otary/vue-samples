<template>
    <div id="app">
        <el-card header="测试" id="myNode">
            <div class="logo"></div>
        </el-card>

        <br/>

        <el-button type="primary" @click="generatePng">生成</el-button>

        <br/>
        <el-card header="结果" id="resultBox">

        </el-card>
    </div>
</template>

<script>
    import domtoimage from 'dom-to-image';

    export default {
        data() {
            return {}
        },
        mounted() {

        },
        methods: {
            generatePng() {
                const node = document.getElementById('myNode');
                domtoimage.toPng(node)
                    .then(function (dataUrl) {
                        const img = new Image();
                        img.src = dataUrl;

                        resultBox.appendChild(img);
                    })
                    .catch(function (error) {
                        console.error('oops, something went wrong!', error);
                    });
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

    .logo {
        width: 100px;
        height: 100px;
        background-image: url("assets/logo.png");
        background-size: cover;
    }
</style>
