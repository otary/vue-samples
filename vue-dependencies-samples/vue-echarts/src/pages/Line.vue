<template>
    <div>
        <v-chart :style="{width: '800px', height: '500px'}" :option="lineOptions"/>
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
        LineChart
    } from 'echarts/charts'

    import {
        GridComponent,
        TooltipComponent,
        LegendComponent,
        TitleComponent,
        ToolboxComponent
    } from 'echarts/components'

    use([
        CanvasRenderer,
        LineChart,
        GridComponent,
        TooltipComponent,
        LegendComponent,
        TitleComponent,
        ToolboxComponent
    ]);

  /*  var waterMarkText = 'ECHARTS';

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = canvas.height = 300;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.globalAlpha = 0.08;
    ctx.font = '20px Microsoft Yahei';
    ctx.translate(50, 50);
    ctx.rotate(-Math.PI / 4);
    ctx.fillText(waterMarkText, 0, 0);*/

    export default {
        name: "Line",
        components: {
            'VChart': ECharts
        },
        data() {
            return {
                lineOptions: {
                  //  animationDuration: 10000, // 动画效果
                    title: {
                        text: '折线图堆叠'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '邮件营销',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'line',
                            stack: '总量',
                            data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '直接访问',
                            type: 'line',
                            stack: '总量',
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '搜索引擎',
                            type: 'line',
                            stack: '总量',
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
