<template>
    <div>
        <div id="test1"></div>
    </div>
</template>

<script>
    // demo: https://dmitrybaranovskiy.github.io/raphael/

    import Raphael from 'raphael2';

    export default {
        mounted() {
            // 创建一个画布
            const paper = new Raphael('test1', 400, 400);

            //绘制普通矩形 -- 在坐标（x=20, y=10）绘制一个宽度为100，高度为70的矩形
            const rect1 = paper.rect(20, 10, 100, 70);
            rect1.hover(function () {
                rect1.stop().animate({
                    transform: 'r90'
                }, 1000);
            });

            //绘制带有圆角的矩形 -- 在坐标（x=20, y=100）绘制一个宽度为100，高度为70，圆角20的矩形
           const rect2 = paper.rect(20, 100, 100, 70, 20);

            //绘制圆形 -- 在坐标（x=200, y=40）绘制半径为10的圆
            paper.circle(200, 50, 40);

            //绘制椭圆形（）
            paper.ellipse(330, 50, 50, 30);
            paper.ellipse(330, 140, 30, 50);

            // 指定参数属性
            const circle1 = paper.circle(250, 150, 30).attr({
                gradient: '90-#000-#FF0000', // 渐变
                fill: "red",  // 背景色
                stroke: "#000",  // 边框颜色
                "stroke-width": 1, // 边框宽度
                'stroke-linejoin': 'round',  //
                rotation: -120   // 旋转
            });

            // hover动效
            circle1.hover(function () {
                circle1.attr({
                    fill: 'blue'
                });
            }, function () {
                circle1.attr({
                    fill: 'orange'
                })
            });



        }
    }
</script>

<style scoped>

</style>
