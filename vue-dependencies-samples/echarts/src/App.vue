<template>
    <div id="app">
        <!-- 最简化折线图 -->
        <div id="myLineChart" style="width: 100%; height: 300px;"></div>

        <!-- 多条线的折线图 -->
        <div id="multiLineChart" style="width: 100%; height: 300px;"></div>
    </div>
</template>

<script>
    let echarts = require('echarts/lib/echarts')
    require("echarts/lib/chart/line");

    // 引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    // 工具栏
    require('echarts/lib/component/toolbox')
    require("echarts/lib/component/legend");


    export default {
        mounted() {
            echarts.init(document.getElementById('myLineChart')).setOption({
                title: {text: 'Line Chart'},
                tooltip: {},
                toolbox: {
                    feature: {
                        dataView: {},
                        saveAsImage: {
                            pixelRatio: 2
                        },
                        restore: {}
                    }
                },
                xAxis: {},
                yAxis: {},
                series: [{
                    type: 'line',
                    smooth: true,
                    data: [[12, 5], [24, 20], [36, 36], [48, 10], [60, 10], [72, 20]]
                }]
            });


            /* 多条线的折线图 */
            echarts.init(document.getElementById("multiLineChart")).setOption({
                legend: {
                    y: 'bottom',
                    data: [{
                        name: 'Gigabt_x'
                    }, {
                        name: 'Gigabt_y'
                    }],
                    textStyle: {
                        color: '#fff'
                    }
                },
                xAxis: {
                    name: '时',
                    nameTextStyle: {
                        color: '#6BAFCC'
                    },
                    axisLabel: {
                        color: '#6BAFCC'
                    },
                    type: 'category',
                    data: ['16:32:11', '16:32:19', '16:32:27', '16:32:34']
                },
                yAxis: {
                    name: 'Mbps',
                    nameTextStyle: {
                        color: '#6BAFCC'
                    },
                    axisLabel: {
                        color: '#6BAFCC'
                    },
                    min: 0,
                },
                series: [{
                    name: 'Gigabt_x',
                    lineStyle: {
                        color: '#0E294B'
                    },
                    type: 'line',
                    data: [['16:32:11', 15], ['16:32:19', 20], ['16:32:27', 36], ['16:32:34', 10]]
                }, {
                    name: 'Gigabt_y',
                    type: 'line',
                    lineStyle: {
                        color: '#159941'
                    },
                    data: [['16:32:11', 20], ['16:32:19', 11], ['16:32:27', 34], ['16:32:34', 10]]
                }]
            });
        },
        methods: {}
    }

</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
    }
</style>
