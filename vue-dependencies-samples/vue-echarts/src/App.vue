<template>
    <div id="app">
        <div>
            <v-chart :style="{width: '500px', height: '500px'}" :option="polar"/>
        </div>

        <div>
            <v-chart :style="{width: '800px', height: '800px'}" :option="animateOption"/>
        </div>
    </div>
</template>

<script>

    import ECharts from 'vue-echarts'
    import { use } from 'echarts/core'


    /* polar */
    import {
        CanvasRenderer
    } from 'echarts/renderers'

    import {
        BarChart,
        LineChart
    } from 'echarts/charts'

    import {
        GridComponent,
        TooltipComponent,
        LegendComponent,
        TitleComponent,
        PolarComponent
    } from 'echarts/components'

    use([
        CanvasRenderer,
        BarChart,
        LineChart,
        GridComponent,
        TooltipComponent,
        LegendComponent,
        TitleComponent,
        PolarComponent
    ]);
    /* end polar */


    /* 动画echart */
    import {
        DatasetComponent,
        GraphicComponent,
      /*  GridComponent*/
    } from 'echarts/components';

    import {
       /* BarChart*/
    } from 'echarts/charts';
    import {
        /*CanvasRenderer*/
    } from 'echarts/renderers';
    use([
        DatasetComponent,
        GraphicComponent,
        GridComponent,
        BarChart,
        CanvasRenderer
    ]);
    /* end 动画echart */


   // Vue.component('v-chart', ECharts)

    import animateData from './data/data.json'
    import flags from './data/life-expectancy-table.json'

    var years = [];
    for (var i = 0; i < data.length; ++i) {
        if (years.length === 0 || years[years.length - 1] !== data[i][4]) {
            years.push(data[i][4]);
        }
    }
    function getFlag(countryName) {
        if (!countryName) {
            return '';
        }
        return (flags.find(function (item) {
            return item.name === countryName;
        }) || {}).emoji;
    }


    export default {
        components: {
          'VChart': ECharts
        },
        data() {

            let polarData = []
            for (let i = 0; i <= 360; i++) {
                let t = i / 180 * Math.PI
                let r = Math.sin(2 * t) * Math.cos(2 * t)
                polarData.push([r, i])
            }

            return {
                polar: {
                    title: {
                        text: '极坐标双数值轴'
                    },
                    legend: {
                        data: ['line']
                    },
                    polar: {
                        center: ['50%', '54%']
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    angleAxis: {
                        type: 'value',
                        startAngle: 0
                    },
                    radiusAxis: {
                        min: 0
                    },
                    series: [
                        {
                            coordinateSystem: 'polar',
                            name: 'line',
                            type: 'line',
                            showSymbol: false,
                            data: polarData
                        }
                    ],
                    animationDuration: 2000
                },

                /* 动画配置 */
                animateOption : {
                    grid: {
                        top: 10,
                        bottom: 30,
                        left: 150,
                        right: 80
                    },
                    xAxis: {
                        max: 'dataMax',
                        label: {
                            formatter: function (n) {
                                return Math.round(n);
                            }
                        }
                    },
                    dataset: {
                        // source: data.slice(1).filter(function (d) {
                        //     return d[4] === startYear;
                        // })
                        source: source
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
                            x: dimension,
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
                }



            }



        },
        mounted() {

        },
        methods: {}
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
