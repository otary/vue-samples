<template>
    <div>
        <!-- 边框拖拽 -->
        <div class="box" ref="box">
            <div class="box-border__left" ref="boxBorderLeft"></div>
            <div class="box-border__right" ref="boxBorderRight"></div>
        </div>
    </div>
</template>

<script>

    function registerBorderDragHandler(boxEl, borderEl, isLeftResize, isRightResize) {
        borderEl.onmousedown = function (ev) {
            ev = ev || window.event;

            // 按键点距离左边框的距离
            const x = ev.clientX - borderEl.offsetLeft;
            const boxOffsetLeft = boxEl.offsetLeft;

            document.onmousemove = function (ev) {
                ev = ev || window.event;
                // 左边框相对于浏览器窗口的距离
                const dragX = ev.clientX - x;

                if (isRightResize) {
                    boxEl.style.width = (borderEl.offsetWidth + dragX) + 'px'
                }

                boxEl.style.left = boxOffsetLeft + 'px';


                if (isLeftResize) {

                }



            }

            document.onmouseup = function (ev) {
                document.onmousemove = null;
                document.onmouseup = null;
            }

        }
    }

    export default {
        name: "NativeDrag",
        mounted() {
            const boxEl = this.$refs["box"];
            const boxBorderLeftEl = this.$refs["boxBorderLeft"];
            const boxBorderRightEl = this.$refs["boxBorderRight"];

            registerBorderDragHandler(boxEl, boxBorderLeftEl, true);

            registerBorderDragHandler(boxEl, boxBorderRightEl, true, true);

        },
        methods: {}
    }
</script>

<style scoped>
    .box {
        position: absolute;
        top: 20%;
        left: 50%;
       /* transform: translate(-50%, -50%);*/

        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
    }

    .box-border__left {
        position: absolute;
        left: 0;
        height: 100%;
        cursor: e-resize;
        border: 5px solid transparent;
    }

    .box-border__right {
        position: absolute;
        right: 0;
        height: 100%;
        cursor: e-resize;
        border: 5px solid transparent;

       /* border: 50px solid #ccc;*/
    }
</style>
