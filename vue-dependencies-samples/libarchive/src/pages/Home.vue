<template>
    <div>
        <input type="file" id="file"/>

        <button @click="parse">解析</button>
    </div>
</template>

<script>
    import {Archive} from '../utils/libarchive';


    export default {
        name: "Home",
        mounted() {
            Archive.init({
                workerUrl: '/static/webworker/dist/worker-bundle.js'
            });
        },
        methods: {
            async parse() {
                const file = document.getElementById("file").files[0];
                const archive = await Archive.open(file);
                let obj = await archive.extractFiles();

                console.log(obj);

                await archive.getFilesObject();

                await archive.getFilesArray();
            }
        }
    }
</script>

<style scoped>

</style>
