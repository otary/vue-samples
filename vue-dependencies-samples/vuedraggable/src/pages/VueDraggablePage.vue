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

        <br/>

        <el-card header="拖拽动画">
            <draggable v-model="originItems">
                <!-- 注意：此处key不能为index -->
                <transition-group type="transition" name="flip-list">
                    <el-button v-for="(item, index) in originItems" :key="item.order">
                        {{ item.name }}
                    </el-button>
                </transition-group>
            </draggable>

            <br/>

            <draggable animation="600">
                <!-- 使用 animation 动画属性，元素不能是inline -->
                <transition-group>
                    <div v-for="(item, index) in originItems" :key="index"
                         :style="{display: 'inline-block', margin: '5px'}">
                        <el-button>
                            {{ item.name }}
                        </el-button>
                    </div>
                </transition-group>
            </draggable>
        </el-card>

        <br/>

        <el-card header="多组拖拽">
            <el-row>
                <el-col :span="4">
                    <draggable v-model="originItems" animation="600" group="group1">
                        <transition-group>
                            <div v-for="(item, index) in originItems" :key="index"
                                 :style="{ margin: '5px' }">
                                <el-button>
                                    {{ item.name }}
                                </el-button>
                            </div>
                        </transition-group>
                    </draggable>
                </el-col>
                <el-col :span="4">
                    <draggable v-model="targetItems" animation="600" group="group1">
                        <transition-group>
                            <div v-for="(item, index) in targetItems" :key="item.order"
                                 :style="{ margin: '5px'}">
                                <el-button>
                                    {{ item.name }}
                                </el-button>
                            </div>
                        </transition-group>
                    </draggable>
                </el-col>
            </el-row>

            <br/>

            预占位 与 拷贝拖拽（不移除）
            <el-row>
                <el-col :span="4">
                    <!-- 使用 pull:clone 来实现拷贝拖拽, put:false表示不能被放置 -->
                    <draggable v-model="originItems" animation="600"
                               :options="{group:{name: 'group2',pull:'clone',put: false}}" :sort="false"
                               :clone="cloneComponent"
                               @end="onEnd"
                    >
                        <transition-group>
                            <div v-for="(item, index) in originItems" :key="index"
                                 :style="{ margin: '5px' }">
                                <el-button>
                                    {{ item.name }}
                                </el-button>
                            </div>
                        </transition-group>
                    </draggable>
                </el-col>
                <el-col :span="4">
                    <draggable v-model="targetItems" animation="600" group="group2">
                        <transition-group>
                            <div v-for="(item, index) in targetItems" :key="item.order"
                                 :style="{ margin: '5px'}">
                                <el-button>
                                    {{ item.name }}
                                </el-button>
                            </div>
                        </transition-group>
                    </draggable>
                </el-col>
            </el-row>

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
                targetItems: [],
                list: message.map((name, index) => {
                    return {name, order: index + 1};
                })

            }
        },
        mounted() {
            for (let i = 0; i < 5; i++) {
                this.originItems.push({
                    name: '源元素' + i,
                    order: i
                });

                this.targetItems.push({
                    name: '目标元素' + i,
                    order: i + 10
                });
            }
        },
        methods: {
            cloneComponent(origin) {
                // 可以在此处自定义元素属性
                return origin;
            },
            onEnd(e) {
                console.log(e);

                // 拖拽结束事件
                if (e.from !== e.to) {

                }
            }
        },
        computed: {}
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
