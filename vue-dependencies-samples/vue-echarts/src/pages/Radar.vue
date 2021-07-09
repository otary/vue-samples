<template>
    <div>
        <v-chart :style="{width: '500px', height: '500px'}" :option="option"/>
    </div>
</template>

<script>
    import ECharts from 'vue-echarts'
    import {use} from 'echarts/core'

    /* 按需引入组件 */
    import {
        CanvasRenderer
    } from 'echarts/renderers'

    import {
        BarChart,
        RadarChart
    } from 'echarts/charts'

    import {
        GridComponent,
        TooltipComponent,
        LegendComponent,
        TitleComponent,
    } from 'echarts/components'

    use([
        CanvasRenderer,
        BarChart,
        RadarChart,
        GridComponent,
        TooltipComponent,
        LegendComponent,
        TitleComponent,
    ]);


    export default {
        name: "Radar",
        components: {
            'VChart': ECharts
        },
        data() {
            return {
                option: {
                    //color: [ '#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
                    title: {
                        text: '基础雷达图'
                    },
                    legend: {
                        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
                    },
                    radar: {
                        // shape: 'circle',
                        indicator: [
                            {name: '销售（Sales）', max: 6500},
                            {name: '管理（Administration）', max: 16000},
                            {name: '信息技术（Information Technology）', max: 30000},
                            {name: '客服（Customer Support）', max: 38000},
                            {name: '研发（Development）', max: 52000},
                            {name: '市场（Marketing）', max: 25000}
                        ],
                    },
                    series: [{
                        name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        data: [
                            {
                                value: [4200, 3000, 20000, 35000, 50000, 18000],
                                name: '预算分配（Allocated Budget）',
                                areaStyle: {
                                    color: 'rgba(255, 134, 67, 0.6)'
                                }
                            },
                            {
                                value: [5000, 14000, 28000, 26000, 42000, 21000],
                                name: '实际开销（Actual Spending）',
                                areaStyle: {
                                    color: 'rgba(255, 228, 52, 0.6)'
                                }
                            }
                        ]
                    }]
                }
            }
        }
    }
</script>

<style scoped>

</style>
