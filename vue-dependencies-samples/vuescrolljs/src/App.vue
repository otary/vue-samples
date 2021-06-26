<template>
    <div id="app">
        <vue-scroll :ops="ops">
            <div v-for="item in list">
                <span>{{item}}</span>
            </div>
        </vue-scroll>
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
                    bar: {
                        size: '15px',
                        opacity: 0.5,
                        background: '#aaa',
                        onlyShowBarOnScroll: false
                    },
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
                    // vuescroll: {
                    //     wheelScrollDuration: 0,
                    //     wheelDirectionReverse: false,
                    //     locking: true,
                    //     checkShifKey: true
                    // }
                },
                list: []
            }
        },
        mounted() {
            for (let i = 0; i < 300; i++) {
                this.list.push('数据' + i)
            }
        },
        methods: {}
    }
</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
        height: 500px;
    }

    html, body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }
</style>
