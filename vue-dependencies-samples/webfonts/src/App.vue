<template>
    <div id="app">
        <div style="font-size: 30px; font-family: myFirstFont;">
            1、生活是一面镜子。你对它笑，它就对你笑；你对它哭，它也对你哭。
            2、活着一天，就是有福气，就该珍惜。当我哭泣我没有鞋子穿的时候，我发现有人却没有脚。
            3、人生是个圆，有的人走了一辈子也没有走出命运画出的圆圈，其实，圆上的每一个点都有一条腾飞的切线。
            4、千万别迷恋网络游戏，要玩就玩好人生这场大游戏。
            5、命运负责洗牌，但是玩牌的是我们自己！
            6、我们心中的恐惧，永远比真正的危险巨大的多。
            7、命运掌握在自己手中。要么你驾驭生命，要么生命驾驭你，你的心态决定你是坐骑还是骑手。
            8、宁愿做过了后悔，也不要错过了后悔。
            9、不要拿小人的错误来惩罚自己，不要在这些微不足道的事情上折磨浪费自己的宝贵时间。
            10、如果我们都去做自己能力做得到的事，我们会让自己大吃一惊。
            11、出路出路，走出去了，总是会有路的。困难苦难，困在家里就是难。
            12、学的到东西的事情是锻炼，学不到的是磨练。

        </div>
        <br/>
        <div style="font-size: 30px; font-family: myWebFont;">
            13、过错是暂时的遗憾，而错过则是永远的遗憾！
            14、环境不会改变，解决之道在于改变自己。
            15、勇气是控制恐惧心理，而不是心里毫无恐惧。
            16、还能冲动，表示你还对生活有激情，总是冲动，表示你还不懂生活。
            17、在实现理想的路途中，必须排除一切干扰，特别是要看清那些美丽的诱惑。
            18、人一生下就会哭，笑是后来才学会的。所以忧伤是一种低级的本能，而快乐是一种更高级的能力。
            19、两个人共尝一个痛苦只有半个痛苦，两个人共享一个欢乐却有两个欢乐。
            20、放弃该放弃的是无奈，放弃不该放弃的是无能，不放弃该放弃的是无知，不放弃不该放弃的是执著！
            21、行动是治愈恐惧的良药，而犹豫、拖延将不断滋养恐惧。
            22、你把周围的人看作魔鬼，你就生活在地狱；你把周围的人看作天使，你就生活在天堂。
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted() {

        },
        methods: {
            startHacking() {
                this.$notify({
                    title: 'It works!',
                    type: 'success',
                    message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
                    duration: 5000
                })
            }
        }
    }
</script>

<style>
    #app {
       /* font-family: Helvetica, sans-serif;*/
    }

    html, body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }

    /* 本地引用 */
    @font-face
    {
        font-family: myFirstFont;
        src: url('assets/fonts/博洋楷体.ttf'); /* IE9 */
    }


    /**
     * iconfont 在线字体
     */
    @font-face {
        font-family: 'myWebFont';
        font-display: swap;
        src: url('//at.alicdn.com/t/webfont_dl9ce68wlcu.eot'); /* IE9*/
        src: url('//at.alicdn.com/t/webfont_dl9ce68wlcu.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('//at.alicdn.com/t/webfont_dl9ce68wlcu.woff2') format('woff2'),
        url('//at.alicdn.com/t/webfont_dl9ce68wlcu.woff') format('woff'), /* chrome、firefox */
        url('//at.alicdn.com/t/webfont_dl9ce68wlcu.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
        url('//at.alicdn.com/t/webfont_dl9ce68wlcu.svg#杨任东竹石体-Bold') format('svg'); /* iOS 4.1- */
    }
</style>
