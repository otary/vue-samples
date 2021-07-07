<template>
    <div>
        <animate-histogram-chart :animate-option="animateOption"></animate-histogram-chart>
    </div>
</template>

<script>
    const data = [
        [
            3431,
            38.6497603,
            12327466,
            "United Kingdom",
            1800
        ],
        [
            2128,
            39.41,
            6801854,
            "United States",
            1800
        ],
        [
            834,
            34.05,
            342440,
            "Australia",
            1810
        ]
    ]
    export default {
        name: "AnimateHistogramChartPage",
        components: {
            'AnimateHistogramChart': () => import('../components/AnimateHistogramChart')
        },
        data() {
            return {
                animateOption: {
                    dataset: {
                        source: data
                    },
                    graphic: {
                        elements: [{
                            style: {
                                // 右下角文本
                                text: '测试222'
                            }
                        }]
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
