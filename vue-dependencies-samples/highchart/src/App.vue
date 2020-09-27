<template>
    <div id="app">
        <img src="./assets/logo.png">


        <!-- 最少配置 -->
        <highcharts :options="chartOptions"/>

        <!-- 旭日图 -->
        <highcharts :options="sunburstChartOptions"/>
    </div>
</template>

<script>
    import Highcharts from 'highcharts'
    import sunburst from 'highcharts/modules/sunburst'
    sunburst(Highcharts)

    export default{
        data() {
            return {
                chartOptions: {
                    series: [{
                        data: [1, 2, 3] // sample data
                    }]
                },
                sunburstChartOptions: {
                    title: {
                        text: '2017 世界人口分布'
                    },
                    subtitle: {
                        text: '数据来源： <href="https://en.wikipedia.org/wiki/List_of_countries_by_population_(United_Nations)">Wikipedia</a>'
                    },
                    series: [{
                        type: "sunburst",
                        tooltip: {},
                        data: [{
                            'id': '0.0',
                            'parent': '',
                            'name': 'The World'
                        }, {
                            'id': '1.3',
                            'parent': '0.0',
                            'name': '亚洲'
                        }, {
                            'id': '1.1',
                            'parent': '0.0',
                            'name': '非洲'
                        }, {
                            'id': '1.2',
                            'parent': '0.0',
                            'name': '美洲'
                        }, {
                            'id': '1.4',
                            'parent': '0.0',
                            'name': '欧洲'
                        }, {
                            'id': '1.5',
                            'parent': '0.0',
                            'name': '大洋洲'
                        },

                            /* Africa */
                            {
                                'id': '2.1',
                                'parent': '1.1',
                                'name': '东非'
                            },
                            {
                                'id': '2.7',
                                'parent': '1.2',
                                'name': '中美洲'
                            },

                            {
                                'id': '3.85',
                                'parent': '2.7',
                                'name': '墨西哥',
                                'value': 129163276
                            }, {
                                'id': '3.86',
                                'parent': '2.7',
                                'name': '危地马拉',
                                'value': 16913503
                            }, {
                                'id': '3.87',
                                'parent': '2.7',
                                'name': 'Honduras',
                                'value': 9265067
                            }, {
                                'id': '3.88',
                                'parent': '2.7',
                                'name': 'El Salvador',
                                'value': 6377853
                            }, {
                                'id': '3.89',
                                'parent': '2.7',
                                'name': 'Nicaragua',
                                'value': 6217581
                            }, {
                                'id': '3.90',
                                'parent': '2.7',
                                'name': 'Costa Rica',
                                'value': 4905769
                            },{
                                'id': '2.6',
                                'parent': '1.2',
                                'name': 'Caribbean'
                            }],
                        allowDrillToNode: true,
                        cursor: 'pointer',
                        dataLabels: {
                            /**
                             * A custom formatter that returns the name only if the inner arc
                             * is longer than a certain pixel size, so the shape has place for
                             * the label.
                             */

                            formatter: function () {
                                var shape = this.point.node.shapeArgs;

                                var innerArcFraction = (shape.end - shape.start) / (2 * Math.PI);
                                var perimeter = 2 * Math.PI * shape.innerR;

                                var innerArcPixels = innerArcFraction * perimeter;

                                if (innerArcPixels > 16) {
                                    return this.point.name;
                                }
                            }
                        },
                        levels: [{
                            level: 2,
                            colorByPoint: true,
                            dataLabels: {
                                rotationMode: 'parallel'
                            }
                        },
                            {
                                level: 3,
                                colorVariation: {
                                    key: 'brightness',
                                    to: -0.5
                                }
                            }, {
                                level: 4,
                                colorVariation: {
                                    key: 'brightness',
                                    to: 0.5
                                }
                            }]

                    }],
                    tooltipOptions: {},
                    tooltip: {
                        headerFormat: "xxx",
                        pointFormat: '<b>{point.name}</b>的人口数量是：<b>{point.value}</b>'
                    }


                }
            }
        },
        mounted() {



        },
        methods: {

        }
    }
</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
    }
</style>
