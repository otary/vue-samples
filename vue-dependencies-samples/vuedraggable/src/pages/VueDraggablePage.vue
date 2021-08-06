<template>
    <div id="app">
        <el-card header="简单">
            <draggable>
                <transition-group>
                    <el-button v-for="(item, index) in originItems" :key="index">
                        {{ item.name }}
                    </el-button>
                </transition-group>
            </draggable>
        </el-card>


        <el-card header="多组拖拽">
            <draggable v-model="originItems">
                <transition-group type="transition" name="flip-list">
                  <el-button v-for="(item, index) in originItems" :key="item.name">
                        {{ item.name }}
                    </el-button>
                </transition-group>
            </draggable>


            <draggable>
                <transition-group>
                    <el-button v-for="(item, index) in originItems" :key="index">
                        {{ item.name }}
                    </el-button>
                </transition-group>
            </draggable>
        </el-card>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    const message = [
        "vue.draggable",
        "draggable",
        "component",
        "for",
        "vue.js 2.0",
        "based",
        "on",
        "Sortablejs"
    ];


    export default {
        components: {
            draggable,
        },
        data() {
            return {
                originItems: [],
                list: message.map((name, index) => {
                    return { name, order: index + 1 };
                })

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

        },
        computed: {

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


    .flip-list-move {
        transition: transform 0.5s;
    }
</style>
