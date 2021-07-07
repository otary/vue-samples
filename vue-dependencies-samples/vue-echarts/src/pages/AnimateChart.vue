<template>
    <div>
        <el-button type="primary" @click="handleAnimate">开始动态</el-button>
        <v-chart :style="{width: '1000px', height: '500px'}" :option="animateOption"/>
    </div>
</template>

<script>
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
    /* end 动画echart */

    // Vue.component('v-chart', ECharts)

    var updateFrequency = 2000;

    var countryColors = {
        "Australia": "#00008b",
        "Canada": "#f00",
        "China": "#ffde00",
        "Cuba": "#002a8f",
        "Finland": "#003580",
        "France": "#ed2939",
        "Germany": "#000",
        "Iceland": "#003897",
        "India": "#f93",
        "Japan": "#bc002d",
        "North Korea": "#024fa2",
        "South Korea": "#000",
        "New Zealand": "#00247d",
        "Norway": "#ef2b2d",
        "Poland": "#dc143c",
        "Russia": "#d52b1e",
        "Turkey": "#e30a17",
        "United Kingdom": "#00247d",
        "United States": "#b22234"
    };


    import flags from '../data/data.json'
    import animateData from '../data/life-expectancy-table.json'


    var years = [];
    for (var i = 0; i < animateData.length; ++i) {
        if (years.length === 0 || years[years.length - 1] !== animateData[i][4]) {
            years.push(animateData[i][4]);
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


    var startIndex = 10;
    var startYear = years[startIndex];

    export default {
        name: "AnimateChart",
        components: {
            'VChart': ECharts
        },
        data() {
            return {
                animateOption: {
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
                }
            }
        },
        methods: {
            updateYear(year) {
                var source = animateData.slice(1).filter(function (d) {
                    return d[4] === year;
                });
                /*  option.series[0].data = source;
                  option.graphic.elements[0].style.text = year;*/

                this.animateOption.series[0].data = source;
                this.animateOption.graphic.elements[0].style.text = year;
            },
            handleAnimate() {
                this.updateYear(1980);

              /*  for (var i = startIndex; i < years.length - 1; ++i) {
                    (function (i) {
                        setTimeout(function () {
                            updateYear(years[i + 1]);
                        }, (i - startIndex) * updateFrequency);
                    })(i);
                }*/
            },


        }
    }
</script>

<style scoped>

</style>
