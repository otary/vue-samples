<template>
    <div id="app">
        <vue-scroll
                :ops="ops"
        >
            <div v-for="(item, index) in list" :key="index">
                <span>{{item}}</span>
            </div>
        </vue-scroll>

        <hr/>

        <vue-scroll ref="vs2"
                :ops="ops2"
                @load-start="handleLoadStart"
                @handle-scroll="handleScroll"
                @handle-scroll-complete="handleComplete"
        >
            <div v-for="(item, index) in list" :key="index">
                <span>{{item}}</span>
            </div>
            <div class="slot-load" slot="load-start">加载中..</div>
        </vue-scroll>
        <el-button size="mini" @click="triggerLoad">触发加载</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ops: {
                    // rail: {
                    //     size: '20px'
                    // },
                    /*
                    * 滚动条设置
                    */
                    bar: {
                        size: '15px',
                        opacity: 0.5,
                        minSize: 0.3,
                        background: '#aaa',
                        onlyShowBarOnScroll: false
                    },
                    /*
                     * 滚动栏边块设置
                     */
                    scrollButton: {
                        enable: true,
                        opacity: 1,
                        step: 180,
                        mousedownStep: 30
                    },
                    scrollPanel: {
                        easing: 'easeInQuad',
                        speed: 800,
                        maxHeight: 500
                    },
                    vuescroll: {
                        mode: 'slide',
                        pullRefresh: {
                            enable: true
                        },
                        pushLoad: {
                            enable: true,
                            auto: true,
                            autoLoadDistance: 10
                        }
                    }
                    // vuescroll: {
                    //     wheelScrollDuration: 0,
                    //     wheelDirectionReverse: false,
                    //     locking: true,
                    //     checkShifKey: true
                    // }
                },
                ops2: {
                    vuescroll: {
                        mode: 'slide',
                        pullRefresh: {
                            enable: true
                        },
                        pushLoad: {
                            enable: true,
                            auto: true,
                            autoLoadDistance: 10
                        }
                    }
                },

                list: []
            }
        },
        mounted() {
            for (let i = 0; i < 300; i++) {
                this.list.push('数据' + i)
            }
        },
        methods: {
            handleLoadStart() {
                alert(1)
            },
            handleComplete() {
                alert('滚动完成!')
            },
            handleScroll(vertical, horizontal, nativeEvent) {
                console.log(vertical, horizontal, nativeEvent)
            },
            triggerLoad() {
                console.log(this.$refs['vs2'])
                this.$refs['vs2'].triggerRefreshOrLoad("load");
                alert(1)
            }
        }
    }
</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
        height: 300px;
    }

    html, body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }
</style>
