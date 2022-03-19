<template>
    <div>
        Home
    </div>
</template>

<script>
    export default {
        name: "Home",
        mounted() {
            // 判断是否支持indexedDB
            const indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
            if (!indexedDB) {
                throw Error('当前不支持 indexed 数据库');
            }


        }
    }
</script>

<style scoped>

</style>
