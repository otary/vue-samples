<template>
    <div>
        <input id="imageUpload" type="file" value="图片上传"></input>

        <input type="button" value="提交" @click="hanldeCompress"></input>
    </div>
</template>

<script>
    import { compress } from 'squoosh-compress';

    export default {
        methods: {
            hanldeCompress() {
                const file = document.getElementById("imageUpload").files[0]
                const data = compress(
                    file,
                    {
                        type: "browser-png",
                    },
                    'xxx.png'
                ).then((data)=> {
                    console.log('介绍', data)
                });
            }
        }
    }
</script>

<style scoped>

</style>
