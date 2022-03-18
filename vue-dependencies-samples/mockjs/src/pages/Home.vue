<template>
    <div>

    </div>
</template>

<script>
    import Mock from 'mockjs'
    export default {
        mounted() {
            let data = Mock.mock({
                'regexp1': /^[a-z][A-Z][0-9]$/
            });
            console.log(data);
        }
    }
</script>

<style scoped>

</style>
