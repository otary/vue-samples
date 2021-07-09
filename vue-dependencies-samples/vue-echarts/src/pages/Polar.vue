<template>
    <div>
        <v-chart :style="{width: '500px', height: '500px'}" :option="polar"/>
    </div>
</template>

<script>
    import ECharts from 'vue-echarts'
    import { use } from 'echarts/core'

    /* 按需引入组件 */
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

    export default {
        name: "Polar",
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
                }
            }
        }
    }
</script>

<style scoped>

</style>
