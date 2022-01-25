<template>
    <v-chart :style="{width: '500px', height: '500px'}" :option="option"/>
</template>

<script>
    import ECharts from 'vue-echarts'
    import {use} from 'echarts/core'

    /* 动画echart */
    import {
        DatasetComponent,
        GraphicComponent,
        GridComponent,
        TimelineComponent
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
        CanvasRenderer,
        TimelineComponent
    ]);


    export default {
        components: {
            'VChart': ECharts
        },
        data() {
            return {
                option: {
                    baseOption: {
                        // 时间轴
                        timeline: {
                            axisType: 'category',
                            // realtime: false,
                            // loop: false,
                            autoPlay: true,
                            // currentIndex: 2,
                            playInterval: 3000,
                            // controlStyle: {
                            //     position: 'left'
                            // },
                            data: [
                                '2002-01-01', '2003-01-01', '2004-01-01'
                            ],
                        },
                        grid: {
                            top: 10,
                            bottom: 130,
                            left: 150,
                            right: 80
                        },
                        xAxis: {
                            /* max: 'dataMax',
                             label: {
                                 formatter: function (n) {
                                     return Math.round(n);
                                 }
                             }*/
                        },
                        dataset: {
                            source: animateData.slice(1).filter(function (d) {
                                return d[4] === startYear;
                            })
                            //  source: source
                        },
                        yAxis: {
                            type: 'category',
                            inverse: true,
                            max: 10,
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    fontSize: 14
                                },
                                formatter: function (value) {
                                    return value + '{flag|' + getFlag(value) + '}';
                                },
                                rich: {
                                    flag: {
                                        fontSize: 25,
                                        padding: 5
                                    }
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
                                    return countryColors[param.value[3]] || '#5470c6';
                                }
                            },
                            encode: {
                                x: 0,
                                y: 3
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
                        animationDurationUpdate: updateFrequency,
                        animationEasing: 'linear',
                        animationEasingUpdate: 'linear',
                        graphic: {
                            elements: [{
                                type: 'text',
                                right: 160,
                                bottom: 60,
                                style: {
                                    text: startYear,
                                    font: 'bolder 80px monospace',
                                    fill: 'rgba(100, 100, 100, 0.25)'
                                },
                                z: 100
                            }]
                        }
                    },
                    options: [
                        {
                            title: {text: '2002全国宏观经济指标'},
                            dataset: {
                                source: [
                                    [
                                        3431,
                                        38.6497603,
                                        12327466,
                                        "United Kingdom",
                                        1800
                                    ],
                                    [
                                        1639,
                                        38.37,
                                        22886919,
                                        "Germany",
                                        1800
                                    ]
                                ]
                            }
                        },
                        {
                            title: {text: '2003全国宏观经济指标'},
                            dataset: {
                                source: [
                                    [
                                        2128,
                                        39.41,
                                        6801854,
                                        "United States",
                                        1800
                                    ],
                                    [
                                        1759,
                                        38.37,
                                        23882461,
                                        "Germany",
                                        1810
                                    ]
                                ]
                            }
                        },
                        {
                            title: {text: '2004全国宏观经济指标'},
                            dataset: {
                                source: [
                                    [
                                        834,
                                        34.05,
                                        342440,
                                        "Australia",
                                        1810
                                    ],
                                    [
                                        1267,
                                        36.9473378,
                                        1070625,
                                        "Finland",
                                        1810
                                    ]
                                ]
                            }
                        },
                        {
                            title: {text: '2005全国宏观经济指标'},
                            dataset: {
                                source: [
                                    [
                                        834,
                                        34.05,
                                        342440,
                                        "Australia",
                                        1810
                                    ],
                                ]
                            }
                        }]
                }
            }
        }
    }
</script>

<style scoped>

</style>
