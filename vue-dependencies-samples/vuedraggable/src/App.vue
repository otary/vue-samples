<template>
    <div id="app">
        <el-card title="简单">
            <draggable>
                <transition-group>
                    <el-button v-for="item in originItems">
                        {{ item.name }}
                    </el-button>
                </transition-group>
            </draggable>
        </el-card>


    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        components: {
            draggable,
        },
        data() {
            return {
                originItems: []
            }
        },
        mounted() {
            for (let i = 0; i < 10; i++) {
                this.originItems.push({
                    name: '元素' + i
                })
            }

        },
        methods: {

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
</style>
