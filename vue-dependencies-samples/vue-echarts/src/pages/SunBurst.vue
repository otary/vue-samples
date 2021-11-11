<template>
    <v-chart :style="{width: '500px', height: '500px'}" :option="option"/>
</template>

<script>
    import ECharts from 'vue-echarts'
    import {use} from 'echarts/core'

    import {
        CanvasRenderer
    } from 'echarts/renderers'

    import {
        SunburstChart
    } from 'echarts/charts'

    import {
        GridComponent,
        TooltipComponent,
        LegendComponent,
        TitleComponent,
    } from 'echarts/components'

    use([
        CanvasRenderer,
        SunburstChart,
        GridComponent,
        TooltipComponent,
        LegendComponent,
        TitleComponent,
    ]);


    var data = [
        {
            name: '人才培养',
            value: 53.90,
            children: [
                {
                    name: '教学质量',
                    value: 30.03,
                    children: [
                        {
                            name: '杰出校友',
                            value: 19.25
                        },
                        {
                            name: '教学水平',
                            value: 6.16
                        },
                        {
                            name: '创新创业',
                            value: 3.08
                        },
                        {
                            name: '德育教育',
                            value: 1.54
                        }
                    ]
                },
                {
                    name: '高层次人才',
                    value: 13.09,
                    children: [
                        {
                            name: '高端人才',
                            value: 13.09
                        }
                    ]
                }, {
                    name: '学科专业',
                    value: 10.78,
                    children: [
                        {
                            name: '优势学科',
                            value: 6.93
                        }, {
                            name: '优势专业',
                            value: 3.85
                        }
                    ]
                }
            ]
        },
        {
            name: '科学研究',
            value: 32.34,
            children: [
                {
                    name: '高端科研成果',
                    value: 19.25,
                    children: [
                        {
                            name: '高端成果',
                            value: 19.25
                        }
                    ]
                },
                {
                    name: '科研基地',
                    value: 5.39,
                    children: [
                        {
                            name: '科研基地',
                            value: 5.39
                        }
                    ]
                },
                {
                    name: '科研项目',
                    value: 7.70,
                    children: [
                        {
                            name: '科研项目',
                            value: 2.85
                        },
                        {
                            name: '科研经费',
                            value: 4.85
                        }
                    ]
                }
            ]
        },
        {
            name: '社会影响',
            value: 13.76,
            children: [
                {
                    name: '办学层次',
                    value: 1.54,
                    children: [
                        {
                            name: '国家定位',
                            value: 1.54
                        }
                    ]
                },
                {
                    name: '社会声誉',
                    value: 7.69,
                    children: [
                        {
                            name: '生源竞争力',
                            value: 2.31
                        },
                        {
                            name: '媒体影响',
                            value: 1.54
                        },
                        {
                            name: '社会捐赠',
                            value: 3.84
                        }
                    ]
                },
                {
                    name: '国际影响',
                    value: 4.53,
                    children: [
                        {
                            name: '国际化办学',
                            value: 2.61
                        },
                        {
                            name: '国际声望',
                            value: 1.92
                        }
                    ]
                }
            ]
        }
    ];

    export default {
        name: "SunBurst",
        components: {
            'VChart': ECharts
        },
        data() {
            return {
                option: {
                    tooltip: {
                        trigger: 'item',
                        formatter:  function (params) {
                            return "<div> - <b>指标</b>：" + params.data.name + "</div>"
                                + "<div> - <b>权重占比</b>：" + params.data.value + "%</div>";
                        }
                    },
                    series: {
                        type: 'sunburst',
                        data: data,
                        radius: [60, '90%'],
                        itemStyle: {
                            borderRadius: 7,
                            borderWidth: 2
                        },

                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
