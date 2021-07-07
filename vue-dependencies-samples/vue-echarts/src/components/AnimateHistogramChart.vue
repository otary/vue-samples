<template>
    <div>
        <v-chart :style="{width: '1000px', height: '500px'}" :option="option"/>
    </div>
</template>

<script>
    import {merge} from 'loadsh/object'
    import ECharts from 'vue-echarts'
    import {use} from 'echarts/core'

    /* 动画echart */
    import {
        DatasetComponent,
        GraphicComponent,
        GridComponent
    } from 'echarts/components';

    import {
        BarChart
    } from 'echarts/charts';
    import {
        CanvasRenderer
    } from 'echarts/renderers';

    use([
        DatasetComponent,
        GraphicComponent,
        GridComponent,
        BarChart,
        CanvasRenderer
    ]);


    export default {
        name: "AnimateHistogramChart",
        components: {
            'VChart': ECharts
        },
        data() {
            return {

            }
        },
        props: {
            defaultOption: {
                type: Object,
                default() {
                    return {
                        title: {
                            subtext: '数据来自国家统计局'
                        },
                        grid: {
                            top: 10,
                            bottom: 30,
                            left: 150,
                            right: 80
                        },
                        xAxis: {},
                        dataset: {
                            source: []
                        },
                        yAxis: {
                            type: 'category',
                            inverse: true,
                            max: 10,
                            axisLabel: {
                                show: true,
                                rotate: 30,
                                textStyle: {
                                    fontSize: 14
                                },
                                formatter: function (value) {
                                    return value;
                                }
                            },
                            animationDuration: 300,
                            animationDurationUpdate: 300
                        },
                        series: [{
                            realtimeSort: true,
                            seriesLayoutBy: 'column',
                            type: 'bar',
                            itemStyle: {
                                color: function (param) {
                                    // 柱体颜色
                                    return '#5470c6';
                                }
                            },
                            encode: {
                                // 指定x、y轴分别使用第N列的数据
                                x: 0,
                                y: 1
                            },
                            label: {
                                show: true,
                                precision: 1,
                                position: 'right',
                                valueAnimation: true,
                                fontFamily: 'monospace'
                            }
                        }],
                        // Disable init animation.
                        animationDuration: 0,
                        animationDurationUpdate: 2000,
                        animationEasing: 'linear',
                        animationEasingUpdate: 'linear',
                        graphic: {
                            elements: [{
                                type: 'text',
                                right: 160,
                                bottom: 60,
                                style: {
                                    // 右下角文本
                                    text: '不求人导航',
                                    font: 'bolder 80px monospace',
                                    fill: 'rgba(100, 100, 100, 0.25)'
                                },
                                z: 100
                            }]
                        }
                    }
                }
            },
            animateOption: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        computed: {
            option() {
                return merge(this.defaultOption, this.animateOption);
            }
        }
    }
</script>

<style scoped>

</style>
