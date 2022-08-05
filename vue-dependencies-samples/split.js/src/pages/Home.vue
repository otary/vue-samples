<template>
    <div>
        <div>
            <div id="block1">
                内容块1
            </div>
            <div id="block2">
                内容块2
            </div>
        </div>
    </div>
</template>

<script>
    import Split from 'split.js'

    export default {
        name: "Home",
        mounted() {
            Split(['#block1', '#block2'], {
                sizes: [25, 75],
            })
        }
    }
</script>

<style scoped>
    #block1 {
        width: 200px;
        border: 1px solid;
    }

    #block2 {
        width: 200px;
        border: 1px solid;
    }
</style>
