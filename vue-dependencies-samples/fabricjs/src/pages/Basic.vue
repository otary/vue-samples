<template>
    <div>
        <canvas id="canvas"/>

        <button @click="create">创建7个基础形状（可拖拽）</button>
        <button @click="createStatic">创建静态Canvas（不可拖拽）</button>
        <button @click="basic">修改基础属性</button>
        <button @click="size">调整尺寸</button>
        <button @click="pos">调整位置</button>
        <button @click="rotate">旋转缩放</button>
        <button @click="flip">翻转</button>
        <button @click="skew">歪斜</button>
        <button @click="render2">渲染属性</button>
        <button @click="getAttrs">获取属性值</button>
        <button @click="manageCanvas">canvas对象管理</button>
        <button @click="selectable">可拖拽</button>
        <button @click="lock">锁定</button>
        <button @click="addImage">添加图片</button>
        <button @click="setCanvasBg">设置画布背景图片</button>
        <button @click="createPath">创建Path</button>
        <button @click="animate">动画</button>
        <button @click="addText">添加文本</button>
        <button @click="addEvent">添加事件</button>
        <button @click="createGroup">创建组合</button>
        <button @click="toJson">转JSON</button>
        <button @click="toSvg">转SVG</button>
        <button @click="draw">自由绘图</button>
        <button @click="toggleBorderControl">隐藏/显示边角控制器</button>
        <button @click="borderControlStyle">自定义边角控制器样式</button>
        <button @click="zoom">滚轮缩放</button>
        <div>
            {{attrs}}
        </div>
        <div>
            {{json}}
        </div>
        <div>
            {{svg}}
        </div>
    </div>
</template>

<script>
    import {fabric} from "fabric";

    export default {
        name: "Basic",
        data() {
            return {
                canvas: null,
                rect: null,
                circle: null,
                line: null,
                ellipse: null,
                polygon: null,
                polyline: null,
                triangle: null,
                attrs: null,
                image: null,
                json: '',
                svg: ''
            }
        },
        mounted() {
            this.canvas = new fabric.Canvas("canvas", {
                width: 800,
                height: 500,
                backgroundColor: "#ddd",
            });

            // 扩展方法（可以被所有形状对象调用）
            fabric.Object.prototype.getAngleInRadians = function () {
                return this.get('angle') / 180 * Math.PI;
            };

            // 颜色值
            new fabric.Color('#f55');
            new fabric.Color('#123123');
            new fabric.Color('356735');
            new fabric.Color('rgb(100,0,100)');
            new fabric.Color('rgba(10, 20, 30, 0.5)');

            // 渐变
            /*const gradient = new fabric.Gradient({
                type: 'linear',
                gradientUnits: 'pixels', // or 'percentage'
                coords: {x1: 0, y1: 0, x2: 0, y2: 800},
                colorStops: [
                    {offset: 0, color: '#000'},
                    {offset: 1, color: '#fff'}
                ]
            });
            this.canvas.setBackgroundColor(gradient);*/

        },
        methods: {
            create() {
                // 创建一个矩形
                this.rect = new fabric.Rect({
                    left: 10,
                    top: 10,
                    fill: 'red',
                    width: 20,
                    height: 20,
                });
                this.canvas.add(this.rect);

                // 创建一个圆形
                // http://fabricjs.com/docs/fabric.Circle.html
                this.circle = new fabric.Circle({
                    radius: 20,
                    fill: 'green',
                    left: 50,
                    top: 10
                });
                this.canvas.add(this.circle);

                // 创建一个三角形
                this.triangle = new fabric.Triangle({
                    width: 20,
                    height: 30,
                    fill: 'blue',
                    left: 100,
                    top: 10
                });
                this.canvas.add(this.triangle);

                // 创建一个椭圆形
                // http://fabricjs.com/docs/fabric.Ellipse.html
                this.ellipse = new fabric.Ellipse({
                    rx: 30, // 宽度
                    ry: 10, // 高度
                    left: 150,
                    top: 10
                });
                this.canvas.add(this.ellipse);

                // 创建一条线
                // http://fabricjs.com/docs/fabric.Line.html
                this.line = new fabric.Line([
                    250,  // 起始点x
                    10,  // 起始点y
                    250, // 终止点x
                    100  // 终止点y
                ], {
                    fill: 'green',
                    stroke: 'green'
                });
                this.canvas.add(this.line);

                // 多边形
                // http://fabricjs.com/docs/fabric.Polygon.html
                /*this.polygon = new fabric.Polygon([
                    {x: 200, y: 0},
                    {x: 250, y: 50},
                ], {
                    fill: 'green',
                    stroke: 'green'
                });
                this.canvas.add(this.polygon);*/

                // 交叉线/折线
                // http://fabricjs.com/docs/fabric.Polyline.html
                this.polyline = new fabric.Polyline();
                this.canvas.add(this.polyline);
            },
            createStatic() {
                // 静态canvas
                const staticCanvas = new fabric.StaticCanvas('canvas');
                staticCanvas.add(
                    new fabric.Rect({
                        width: 50, height: 50,
                        left: 100, top: 100,
                        fill: 'yellow',
                        angle: 30
                    }));
            },
            basic() {
                this.rect.set({
                    stroke: 'red',  // 边框颜色
                    strokeDashArray: [5, 5], // 虚线点
                });
                this.canvas.renderAll();
            },
            rotate() {
                // 旋转/缩放
                this.rect.set({
                    angle: 45,
                    scaleX: 2,
                    scaleY: 2
                });
                this.canvas.renderAll();
            },
            flip() {
                // 翻转
                this.rect.set({
                    flipX: true, // x轴翻转
                    flipY: true  // y轴翻转
                });
                this.canvas.renderAll();
            },
            skew() {
                // 歪斜
                this.rect.set({
                    skewX: 45, // x轴歪斜角度
                    skewY: 45  // y轴歪斜角度
                });
                this.canvas.renderAll();
            },
            render2() {
                // 渲染属性
                this.rect.set({
                    fill: 'blue', //  背景色
                    opacity: 0.8,  //
                    stroke: 'rgba(100,200,200,0.5)',  // 边框颜色
                    strokeWidth: 5  // 边框宽度
                });
                this.canvas.renderAll();
            },
            size() {
                // 调整尺寸
                this.rect.set({
                    width: 200,
                    height: 200
                });
                this.canvas.renderAll();
            },
            pos() {
                // 调整位置
                this.rect.set({
                    top: 100,
                    left: 100
                });
                this.canvas.renderAll();
            },
            getAttrs() {
                this.attrs = {
                    top: this.rect.get('top'),
                    left: this.rect.get('left')
                }
            },
            manageCanvas() {
                const rect2 = new fabric.Rect({
                    left: 10,
                    top: 50,
                    fill: 'green',
                    width: 20,
                    height: 20
                });
                // 添加形状
                this.canvas.add(rect2);

                console.log('获取形状 => ', this.canvas.item(0));
                console.log('获取所有形状 => ', this.canvas.getObjects());

                setTimeout(() => {
                    // 移除形状
                    this.canvas.remove(rect2);
                }, 2000)
            },
            selectable() {
                this.canvas.selection = !this.canvas.selection;
                this.rect.set('selectable', !this.rect.get('selectable'));
                this.canvas.renderAll();
            },
            addImage() {
                // 添加图片实例
                /*
                 const imageInst = new Image();
                 imageInst.src = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.daimg.com%2Fuploads%2Fallimg%2F151217%2F3-15121GHI7.jpg&refer=http%3A%2F%2Fimg.daimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652151021&t=fa04d831d83b94bab4e7e7a9c30cf9da";
                 this.image = new fabric.Image(imageInst, {
                     width: 200,
                     height: 200,
                     left: 100,
                     top: 100,
                     angle: 30,
                     opacity: 0.85
                 });
                 this.canvas.add(this.image);
                 */

                const self = this;
                // 添加图片URL
                fabric.Image.fromURL('data:image/jpeg;base64,/9j/4RxXRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAITAAMAAAABAAEAAIdpAAQAAAABAAAAZgAAAMAAAABIAAAAAQAAAEgAAAABAAeQAAAHAAAABDAyMjGRAQAHAAAABAECAwCgAAAHAAAABDAxMDCgAQADAAAAAQABAACgAgAEAAAAAQAABICgAwAEAAAAAQAABICkBgADAAAAAQAAAAAAAAAAAAYBAwADAAAAAQAGAAABGgAFAAAAAQAAAQ4BGwAFAAAAAQAAARYBKAADAAAAAQACAAACAQAEAAAAAQAAAR4CAgAEAAAAAQAAGy8AAAAAAAAASAAAAAEAAABIAAAAAf/Y/9sAhAABAQEBAQECAQECAwICAgMEAwMDAwQFBAQEBAQFBgUFBQUFBQYGBgYGBgYGBwcHBwcHCAgICAgJCQkJCQkJCQkJAQEBAQICAgQCAgQJBgUGCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQn/3QAEAAr/wAARCACgAKADASIAAhEBAxEB/8QBogAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoLEAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+foBAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKCxEAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+9C5ufFq+Lbe0tbe3bRmt3aaZnImWYH5FVOhUjqf8nfxeeqfkf8aB/wAfh/3B/M1ZqtgK2Lz1T8j/AI0YvPVPyP8AjVmijmArYvPVPyP+NGLz1T8j/jVmijmArYvPVPyP+NGLz1T8j/jVmijmArYvPVPyP+NGLz1T8j/jVmijmArYvPVPyP8AjRi89U/I/wCNWaKOYCti89U/I/40YvPVPyP+NWaKOYCti89U/I/40YvPVPyP+NWaKOYCti89U/I/40YvPVPyP+NWaKOYCti89U/I/wCNYFtc+LT4tuLS6t7ddGW3RoZlcmZps/OrJ0CgdD/kdRVY/wDH4P8AcP8AMUID/9D++8f8fh/3B/M1ZqsP+Pw/7g/mas1UgCiiipAKKKKACiiigAorh9U+IOgW3h/X9b8PFvEM/hwTLd2GktHc3n2iGITfZBGHUC5dGTZG7KTvUnAYGsXxP8ST4b8V+DvDk1tAkfiu5ntt11dx208UkVpLdKkVuwLXMjCJgyRkFFDOcqpoA9Sorxzwh8TfFHiP4h+OvBureEdS0rT/AAlNZRWGqz7TBra3NnHdSvZKMHbbyObd9x5kVscCuq0r4g6DdeHNB1/xFu8Oy+IvJS1sdWaO2u/tM8RmFo0ZdgblVV90aMx+RsZAJoA7miiigAooooAKKKKACqx/4/B/uH+YqzVY/wDH4P8AcP8AMVUQP//R/vvH/H4f9wfzNWarD/j8P+4P5mrNVIAoooqQCiiigAr81/iL/wAFHP2atM8eN4f0HxJ4gubjw1e6nbSW2k6Fcz6fr+pafaXDTaFZ6pPaiyn1GNkZktba7Sd54vJySHjr6o+IieNPiNq2n2vwJ8e2uiXvg7XrZvEdiLS31Fb228gSy6XchnWSzkmhmjmjmRg8Z2MUkjYo34VeEfgfrGm/Fu+/Zz0TxPZXmv8Aw4aD4jaf8MLm0m07WtQlgvpdfsNNg8S3En9n3ul2msXjB7210/zgdkFzIFBLgH61R/Gf9l/4QeNPBnibSdEuNDn/AGmdSiKawlm1qlzqq6QJbNNS8wpJBdT2Vr5UIaPcXh8tsPtB474QfFOx/Y5/Z8+HHwm/aU8bn4ieKP8AhKbb4fPrlmTeTNqd/LK2nDUWdzJFP9kMC3DOSxkcNgq4Nes6zof7UHjV9c8ZWS6Fa2N94UtLzwvoWu2QnvdD8XRpcMXvJ7eZoZ7cGSBW8p1dGjk8uQq4I/OofD39p2x0y9+J/gP4MyaV45+Imp/Djx54ph1O407UtNttbgvbTStftbG1kY/Z7qy0u0W4W8WRy+VaMrKm0gHvX7Tnw7uvhz8Ivif4a8MeLn+F3jH4/eNbDRtF10Xt7qMhvL63srGN7WOGFHsJmtLSYJGhaKJ1895QGbb9NaxeNq/xquPiZqHiK7i8C/C3R7yG9sFt7W9tL3U5BHK12ZonnvRdaZBBJEYPKjYm5JBfOK8S8CeLP2gotftNX8f/AAv8T2tnpV54w8QSRWur2epLcSR6q1lpFosN65kL3tnI1/bxxT28NmEERbBCDsIP2V9Nf4y23gPRPB0Hhn4X6FqifEKO/wBL1We2u9X8ZXV7cz3C3tpCQZrWMstzJ58hWScxKqFIiKAOI8Bft1fCnwZ8cfFfw0+LvxHk159W8UW9jpEtp4dvrbQ9A+221sLHQ7zWVgez/tKZ281lubhJDJOkQjT5EP6cV/Ph+0v+zHH4G/aE0n4F2/iTUtb8JfGDxfca3L4d0Xw3PfaxaRz6nZaxrKy619th06x0lr6GC4llurd7xEdoLRmLKE/chdUsPB3i2WHxd4oRz4nvo4NG066NvD5UkdoXe2tdqpLMzrBNcsHLuBvwQigAA9HooooAKKKKACqx/wCPwf7h/mKs1WP/AB+D/cP8xVRA/9L++8f8fh/3B/M1ZqsP+Pw/7g/mas1UgCiiipAKZIzrGzRruYAkDOMn0zT65bxzbfbPBerWn9sy+HfNs5l/tSEwiSyyhH2hDcJJCGi++PNRkyPmUjIoA8wj+LV34XsdOuPiF4S1PSb3UbCK91A6dA2q21tdPPb2gtGmtEMs0u6YEOsOwQxySMyKhr468R/tA6V+038bbfwV+z2fBfxR8G+HLr+zfGqadr0tl4r8N31vd+asgggUmS3aS0VXt2kgeUoQDLHla9F+Kn7UPwF/Za8cQW/7RP7Qnh3w2lzFdXsej+IbnSrKeS3uVhjtHQ7oZjFA8M7Btp81pWDNiNQPiXx98f8Awaf2FNU+MXiH4meAPibpnju01Hw1J4j07wtq8llrN5JcOtvBNH4fuL288iC1W5hl8sktMVkR4xlHAPMv2yP2wvj/APCP4qeAfgz4S1+//tDxx4HW/lu9agj0y/0yQXbl7+e3hjNv58SMsL2yxDaQGY4Bryn9mf4s/tc/tV+GPEfwB8L/ABlGr63NbC0n12PZYXGjaVL+9h1GOGCLbc6hKCIWO9UQjeB1FdX/AMFBPgT4Q8U/A74L/Eew0OK/1hfA2oaDaww/arSOO2k0pLr9w2qlL2LYYdyrcsLgqNsnz7q80/4IPfBnx58LP2A7344S6RFqOvap5klm+Z5L6W2iODHL9oZPMEeC8SLIiNnaNuM1M5cqbZth8O6tSNJbt210P2w+C3hn4nfCfwxeeHvFfxBi8d6xpemx/Z4rmKO1u3WJTvnnZXd5GlwPn2quR92vH/2Tf24PiD8YJfiI/wAQvAeraXL4IikmitreI3F1qEcYLAWkPBld8FUAPzN8ua/FH4G/tSfDzxD/AMFH7X4wfFq2u4Y9LaTSL7xT4hvGjKTNE7xWVnYaeXtYURMl0kaQouWdw2M/0ZfHfwl4Iv8A4O+OfiXp9vaXX2rwdqFrFORfzRS2csLTEGPSz9seNyAT9kH2hgB5R37a+WynNXmFT2tKdowbTXfs3dXXy08z968RPDxcG4RZfmOG9pVxFOnONR3Xs3duUY8smpXVr81pJPWKufKs/wAZ/wBmn9iTwh8QvDfx0vND+AegeNdb1K80C+TXvtfiHXbu/iVr/VFtJoZZku45XRY4UF0YwiBlRAkdR+EPjefh/wCD/Bl7+x98HPHHxovPFGj2rt4t1x4NIkkgsJJ7aGTWb/Xntb37QA8roq2bs0cgZF2MK8o/4JVeIvhX41+Da/C34NXXgWw1/wADatHevb+H/Cmv6fDZ6ZfTI9zFjxE0V6by8MUoe63nDbGeJyuG+yfC/wC1h+z18QtC1rxR4a/aJ8L3Wl6F4mRb26sbzSVisoZkeOHR7qSWSRVd5Ed1lOyZypVeFbP1Z/P598xNI0StKuxiASuc4PcZ71JXI+AYFtvA+j26a3J4lVLOADVpjA0l8AgxcsbZI4CZfvkxIqHPygDArrqACiiigAqsf+Pwf7h/mKs1WP8Ax+D/AHD/ADFVED//0/77x/x+H/cH8zVmqw/4/D/uD+ZqzVSAKKKKkArJ17R9H8Q6JeaD4hsotRsL2F4Lm1njWWKeKRSrxvG4KurqSCrDBBweK1qKAPiP4P6x4n/aD0rXvG3jf4In4b6rpqmx8OTeLU0u8u7mJEYxyyQ6dcXDW1ukuMQtOrlSSAhNfL3j3xN4y8dWXhX9lf4g+L/FviHxJ4wtI4dR1L4Q6fLoujaVJp19cLd3M2t7520+JyFs5rcXkl0DETFErM1e8/tO+Ofhl+zno/jX4o/tl/EKXUPh/wCKzYaVoXhBbCMSrdIhJtNPWyRtR1K+vpQXWNWJVVCoiqrufg9v2nPAn7UnxN8M6XrHjrVvhdD4ba61e8+DWgi3t/FGsa1Z3El4ltqGoWNwyGQ26pcz6LbSrcF3YXbsqtHQBxX/AAVa+HPhCw+Anwt0r9ou0lk8O+HbexE+my6pPqq2uoW0DxiQSME1LVZnJEAkcZkBMjJvYiuY/YU8Q/tWa/8AsC2Xwy+DPh/T4dN8TPc2+i6rcK0VnpmnTTOJvtMMjNO1xFvzGmCj9DswRX68fEPxX8A/Hf7S1t4AtND0jxf488C6bHrGrxSI76ho+l3q3DWb2+IJImuLm6tgqW7zQuY90oJAAf5L+GP7a1r4chuPg98PfgTrVjrOiaP4P13XfD1nNHLPpF1441aW2azuFjRgJrG3SS/u2HyrENp29axxFH2kHTbtfTQ9HKMxeDxVPFRipODTtJXTtrquq8j8Pvhz/wAEx/jhYfC3TPieZLzXPDei61q8Ot6PZwG2142qXssN39kV3WGY3kSKXztcxnYhIxn+iTwN8d/hX8cf2S/Gd98PtO1LQbbTtDutOFj4glu/CPkBbby4ov7SC+ZZLyqi6hLND99eVrgvhz/wUC/4XH4vg8AeCPhlf3Gp6gvji20/z9QWK0k1TwRraaRcWM1wImW3a6jcXcLuCNgZMFlyfv34jal8H73StW+E3xU0+O+0a80S5vNTttQsnuNNl05SIZ455Hja2ctvwYGYuy5IUqCR81k/DlDLLzpStG3vX8lvdvRd9z9o8VPHbMeNKMKecU06sJNwlG0bKTvJSio2k9rSXK15n4r/ALH+lfteP8Rm8BaV8Svib8Ob/wAOLDqOseFfitpdl4x0a701ZlSZtH8XWv2eSdCpwjy3rzrkNLb4Br9IPHfh3xHeG68J/FP4H+HvHPhG/wBOvtV1S501rO6M95aTSnT7NdLv4YvtM01sVInaZUSZnXhMOfgz4AfGb4Y/Bv4T+J/gn8EPBt3rnwqsJblhpXiTV5L1odPvI236dYxXKTFbJIopWjtZJHWNCyghdqD9NfAeqah8c7rwJ8Zvgp4zn0LwfpcV3bar4ZFhaSQ34aMRxRSSsvn2ktnIoZDDJsdCVZGDKy+fwv4l5LnNZ0Murc0km9mrpOzcbpcyT0bVz8rznhDMcvpqpi6fKtt07Nq6Ts9HbufSnhrQ9D8M+HrHw74YsIdK06xt44LWyt40hit4Y1CpFHHGAiKigKFUYAGBxW3RRX3Z80FFFFABVY/8fg/3D/MVZqsf+Pwf7h/mKqIH/9T++8f8fh/3B/M1ZqsP+Pw/7g/mas1UgCiiipAKKKKAMfUvD2gazeWWo6xY293caZKZ7OWaJJHt5SjRmSJmBMblGZSy4O1iOhNfhF4j/YJ/ac+HC6f8O/C2t+FNT8N+HPFM/jLwpDeXt9aavq+p2eoXviGy0yWB91jbzPeXDRX2qwCS5nsEKNCvLD99ay77Q9F1O8s9R1KzguLjT5GltZZY1d4JGRo2eJmBKMUZkJXBKsR0JoA+YvCngl9E8S6dDHaweF/H/ihbPxD4z1Pw9pqPYapcadBb2ctrcXdzHIyrIpVLbewuPJhby2Gx68rfxp4W8eaZovxR8O/BjW2vfF3j+30nVZJbddL1CGPQLq5gtdevyjCWaxiNmjW6yEl4Zo/l2MVPXap+zb4v+GY+Ovxs+CGqSat8UPibZiTSn1iRUs7KfTdMNrpFjHsRhHaRXBknclHYvPKx3cCvRfCdn8aPBfhz4U+BfFOp3OvapBaRWvinV0s4ZYrua101hLNM/nQG2+0Xah1aKCXLfuyiK29QD5103RPgN+zD4R8R+JPg6/iPxgNP+Jlxq2u6V4cuzeXFprPiq6jW9ju7W3aPfZ2o1MXsltKHMUYE4DMimvY/ib8Pvi14/wDh38TPhZfyz3cWpJ5+h39w9qisJ13mxSK3RHSO3aNU8yfc8nmk7iFrd8L/AA/ubPxB8WtH0Cxl8Ot4ku0u4tU0+ytbGWe5uNLgt2uo7rfc/ariJolHn3FumwqkflyIm5ta5+G3jzx9ZfDXxbrmvap4S1fwrcR6jqmm2F3Hc22omSxltZ7C+fyY0uYVkmEqyLFEfNiR1C9K4M1y2njMLUwlb4ZxcX6NWf4M6sFi54etCvT+KLTXqndH4g3/AIl0Xw54itNM1TVbjRrnSTZhNMSxuIbq2mhhSO5RUjVI5ZZWDhZHYgBj1Br9cv2Fvhz4o8BfCG71DxbaNptx4i1O41WOxcbWt4ZtojQr/CSFzjHGRnnivr+fRNGub5NTubSGS5j+7K0al1x6MRkfnWnX4z4feCyyXMnmNWvz2UlFKLjbmtdyvKV3ZWVrJLpsl99xR4gPMMIsJCly3s2209r7Wirb31u/xuUUUV+6n5uFFFFABVY/8fg/3D/MVZqsf+Pwf7h/mKqIH//V/vvH/H4f9wfzNWarD/j8P+4P5mrNVIAoooqQCiiigAooooAKKKKACiiigAooooAKKKKACiiigAqsf+Pwf7h/mKs1WP8Ax+D/AHD/ADFVED//1v77x/x+H/cH8zVmqw/4/D/uD+ZqzVSAKKKKkAooooA+R/2i/hBpp07xL8edD1LU7PxPpvh29gsfJuiLZHW1ukjcW8jpB5gM7YdmUBgpJABr8dv2UNT+NNr+3r4W/wCEnudTlsY9BtYbx/IuFt0EFiLYpNDkbYxMyx2rbTGGMrSM8hV6/pBprIjZDAHIwc9x6UAch4V8beGfiD4DsfiB4VujLpGrWaXtrcOjwEwSpvVykqq8Z2nJDqCvcV+E37Ldp8ffEWseCNOj8U6zqGp6fqkz/wBnXAYS6fp8kwmn1K8nEKxS2moAO9qkm2SWCWNEAcSNF/QNFDFbxLbwKEjQBVVRgADgAAdAKfgDp3oA/HDVvgJ4/wBQ/apn8Rp4Y0+GFtJudQsvDUuoXmJkh1K3Wa5nu4pxCt9cI5aBNjwwKvlkkyyOnDftE/Drxhpvj7xjrHi/SJ9G8P3+rra6TdterbG8nuJ9OaFbLyb/AO2yTSu96JUMCpsX5OBX7k4700qrYLAHHIoA/nm/bP8AGer+D/2lPEF74c17XbPTfBIiaaOLXZ4Gh8+yhurlbOBrtHKvBIgCxrt3DaoyK/bDwj8APhh4N+JF58X9DtJf+Eg1G1FpcXk08kskkXl2sWHMjEsxSygy7EsSuSck59rwKKACiiigAooooAKrH/j8H+4f5irNVj/x+D/cP8xVRA//1/6ltJ/by+I9q4bV9J0+7OApKeZEcf8AfTjP4V6bpn/BQPSmUDWfDMyHuYLhX/RkX+dfmZRX+NeWfSe44wtlHHOS/vRhL8XG/wCJ/W+J8N8mq6ujb0bX62P11039uv4P3QA1C21G0Y9cwo4H4o5P6V3WnftffALUMbtZa2z/AM9oJl/9kNfihRX3mA+mhxdS/iwpT9YNf+kyR4lfwgyqXwuS9Gv1TP3ksv2hfgjqGPs/iewGegeURn8nxXX2fxJ+HmoAGx13T5c9NtzEf/Zq/nspuxDyQK+uwf05s2iv9owFOXpKUfz5jy6vgthW/cryXqk/8j+ji31rR7sZtbuGT/ckU/yNXklik+4wb6HNfzeAlfunH0rQh1rWLfi2vJ4/9yVh/I19Hh/p1/8AP3Lfuqf/AGh51TwUd/dxH/kv/BP6N6K/naj8ZeMIf9Vq98uPS5lH/s1W1+IPj0fd1zUP/AqX/wCKr0ofTqwf2sul/wCDF/8AImD8FK3TEL/wF/5n9DVFfzyt8QfHrD5tc1D/AMCpf/iqpyeM/F8v+t1e9b63Mp/9mon9OrB/Zy6X/gxf/IhHwUrdcQv/AAF/5n9ETyxR/fYL9TiqFxrWj2gzdXcMYH9+RV/ma/nbm1rV7ji4vJ5P96Vj/M1nkljljmvNxH06/wDnzlv31P8AKBvT8FH9rEf+S/8ABP6Erz4k/DzTwTe67p8WOu65iH/s1che/tC/BDT8/afE+n8ddkokP/jma/BnYuc4FOr5zGfTmzaS/wBnwFOPrKUvy5T0aXgthU/fryfokv8AM/a/Uf2vvgFp+QustcY/54wTN/7IK4XUv26/g/aAjT7bUbth6QogP4s4P6V+RVFfI4/6aHF1X+FClD0g3/6VJnqUPCDKo/E5P1a/RI/TPU/+CgelKpGjeGZnPYz3Cp+io3868y1b9vL4j3TltH0jT7TggF/MlOP++kGfwr4Zor4PM/pPccYq6ljnFf3Ywj+Kjf8AE9vDeG+TUtVRv6tv9bH/0P2wooor/nvP7wCiiigAooooAchCurNnAIzjr+Ga9+8ZeIfCGraNb2Oj3FussdyMmVN2yAMxBIEYV8kjKAZHXnccfP8ARXv5RxBUwdGrQhFNVEk736drHBi8vjWnGbdnHY9U1fV7E6zZXEU1vOIwUNxbFLSRyQBvk2xnYqqNqggnrk5NX7TxP4Yu/ia+t6koWwjEkamXEqlVyiEARf3fVWOeSc8145RXcuL8QqiqKK+OM7NXV47edu+t3375f2TT5eW72a+/8D6D0Hxv4Zsr46jOlrGJ7WSKVfLTKqCiooCockBSVyC2Mbj3rVsPiD4cXxDqer3xsxFc/ZygRSMsEw5+VN3BwPugck4B6/M9Ferh/EfG04xioxtF326tNa2tpq36/ccs+HqMm3d66fK9/wBD6K0Xxb4OhtYbe+nCzGe4Ehj+RNjSbg+AuzBUABRk9R3r51wBwvT3oor57O+I6uPhCFWKXJtZeSWvfY78Hl8KDk4t6hRRRXzx3hRRRQAUUUUAf//ZAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/9sAQwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgEBAgEBAQICAgICAgICAgECAgICAgICAgIC/9sAQwEBAQEBAQEBAQEBAgEBAQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC/8AAEQgAlgCWAwERAAIRAQMRAf/EAB4AAQABBQADAQAAAAAAAAAAAAAEBQYHCAkCAwoB/8QAOhAAAQQCAgEBAwsBCAIDAAAABAIDBQYBBwAIERITIXQJFBUxMzRTlLO01BYiIzJBUWFxgRdSJXKR/8QAHQEBAAEFAQEBAAAAAAAAAAAAAAUBAwQGBwgCCf/EAD4RAAICAQIEAwMJBQcFAAAAAAECAAMEBREGEhMhBzFBCBSRFSIyUWFxgaGxIzNCUlMWJHKCkqLCF2Kys9H/2gAMAwEAAhEDEQA/APvUxi1ZtT399A4p+IFHsmvQcqxpsajVeXXc+rA+YbICVYxjGcO5dT/knGc5r83l9eff7NttvjvvKd9/slc9Jf4w/wCWc/l8pKx6S/xh/wAs5/L4iPSX+MP+Wc/l8RHpL/GH/LOfy+Ij0l/jD/lnP5fER6S/xh/yzn8viI9Jf4w/5Zz+XxEekv8AGH/LOfy+Ij0l/jD/AJZz+XxEekv8Yf8ALOfy+Ij0l/jD/lnP5fER6S/xh/yzn8viI9Jf4w/5Zz+XxEekv8Yf8s5/L4iPSX+MP+Wc/l8RHpL/ABh/yzn8viJ+4ST5x6nmMp8484wO5jOceffjGclZ8Z8f5+M/8Z4iUSv/ANUYcncWZ2CdbxOmf09iESalbVdyhlUe3MfPM+MzHhTmXfZf3XhScoz4z7qnl7cu/kN99vP1229JQb+srSfvb3w4v6hfKSskcRHERxEcRHERxEcRHERxEcRHERxEcRHERxEcRHESOz9oX8Qn9oLxEJ+9vfDi/qF8RJHERxEcRHERxEcRHERxEcRHERxEcRHERxEcRHERxEjs/aF/EJ/aC8RCfvb3w4v6hfESRxEcRHERxEcRHETGGztqw+rYOvWGRr11tkdYNk6+1lnGva0TcTYOU2Nd4rX0bYJ+PjHPbBU6PsMyHmbPQh5MSGh84ttAopLrSJ+s3Rr/AMo2HWp921+zOmUiOutKpAJWcbMYrosgTX7TcZuGMk1YkasixGwAwhI4rTLT7rg5TrjjrOEomAJ/aGxK5joZTrDeobXWy9yX4OB2RUNi1IOYuOyGat1m23sfYVHgHNVHy1bpV6YsVSjZkk9Eu5XmgqvIx0bIHPmxjBiJl8XcEFgLcNuxdNeWyla5sBFTbFps3F/1BC3WugiC2rXtxlZqysxQl6VaTQhBAnXo32C5MYc1SXV+14iZbjJLEgDFkkBlQxsnGsSWYOVUEmYj8LZGcKDOaAMIZUWM6WyyRlh99hLqsYQ84lSFqRKnxEcRHERxEcRHESOz9oX8Qn9oLxEJ+9vfDi/qF8RJHERxEcRHERxE0k7adrJLTtZ17HaaCpGwNl7X3o/1+glTUvMSVNolvh9VbM3TaHLvHa/BkJqWnh6TqmeFiqxHMIlp2xT0HCtOBfSXz1hExf0f3HuLYdh3EPaqf151hqvUdstWtL7Ca1jLbXyzuzkrMQ27rXs2DIn44Fl6o2qn7zgXrHFSwIVmrOxICyRkidZHSnzxESix1nmtWyHTnffdLU6Uds5fY2w+gq9i6klsYoIdV3TfSZOpbJmq6PanWmaLdpbr3pIoQA3B0tV5bZLUf7Mf/wCUXlEy/pnaNsnqBrq8dq5aG1btqmndrbBYq5WDIhvVL1M1Bsm064Va7RZ3SJkOuNC6/Kp8o4h6wAFDkTZySmvSFIhBomu+vKtTYXUet9c7p0IHQKNLwV1+Ur7cybYR+8uuIe0ZLZ5O/JWlh7olrJ86n74LvOdGu0YqOBmgGoLTao5LAkZIwmHUTH2xuxF7sXZGg7C0lo3T2d0L6qBXuE2Tu6U7EgODdYd67afd17Q00GK1wybpuwycprWNlNpWCXicBa9VFVwSZVPsPC4AROnPXfftU7EaX0Xt6HZVVyN66P17vaG1/OSMeq4QtWv9ZgbC0iQBHd9RLYbtgDDfLZRkVRGU4Qv+8RjKJnbiI4iOIjiI4iR2ftC/iE/tBeIhP3t74cX9QviJI4iOIjiI4iW/aybQHWp0ukw0FYbePFmvVqCs9iOqNdlppDC1R4E1aIyszREBGukYQl4tiJkXWUKytAb+cYbyiah9lOmGv9r0DbrOvtd6Hj9kbLw5ZpsTaWr2LXpzbGyosauj1K09gafWTok/YEtFiVeMHh5n6SRLV9eGz45xx0VoZaJr/VdKde69re16p7BVeuaP19N9XJKn7c6Q12djCOp0kHVmmdo7d27oJt2kQNgs8rGG7NcEsFqiG4t14syOflw8ToUdINolE21aunCuwWzJeO7p2XQW6th6M0zr+01an3CCjZw6I1ptYq6aqvMPX7LDGEy12cTcLLX3MDIJzKwF2+bmiPpRGvsomM6BSeqrezt46c1B3r3nr+9wF07NhXii120Q1PGqd/7wdj6d2ssh1ZjrBWmA5m5xxkbLV+vHMJkDImKvk4PlxMkQpxD039J8CxTuBufTynTq2a1jL8qpwdx2xsgp2qbwhdzRAVUnwqAs5Faly5um6xtv9GAiO2nWQEk9FuEAkrU7L5gBG5ok8RZY5Vs2oHFe/wA4y+tNr0m8Vt0l822O3x22/Oaw93dBh9wzj9GBde9cnXqn06EtFO7TdktD07cukqANe7cxA3enUmuyFzBlbzstVSr5kk7DPiYp61hQ2LMSU24xGv3Jbmb9c7YCtwIkVpWnS+2pzWxs3pS4bfvdYVoyoj2DVdk1jBbBhW5EyijnWFw4CwWWThnqRVpWiGy+s5SCKna682IriJtxxEcRHERxEcRI7P2hfxCf2gvEQn7298OL+oXxEkcRHERxEcRMP7Ltmu63P0R+8TdwhTYF+dvcAuBVswetGYDZjtXyA12VS2voqxA/ONwxCgoOw5IaeOSzPxwDhdazIxSJp1uzZFvgqHVKjrHtT1Rvlo3PbTNPUCk901RNejt4ylMN2XXt2a8r8vqhyFcm72RJLhI9TYFVlxowWkGtPQkg9KKLHRMK/wBDU6p6g3X1V6tR0y9rmV6Jbe2HTY2K3frbsFosi5bkhwg6zVajXdg3eY2VD1cMEVgmrixsZG6uLhb6e2hjMmmOGHRPmo0/snYIO5epnXqH1nFP7pt9JqOzRrddznZ7DrlziC8XEQS5ZtgshHPMVj6cFAHHAeaYWltgcRSAmCuIn0u7b2do3o5TazF6i68xeztlV9+CNdo0AMMRdYqNLdSLMbA2BtKwMGprRqRyX1tmTsky/JOvqaQQvKlOY1rW+IF0mgmjGbPy+b90n8Kn+J3b5lY89i5UHyHfedl8KPB/I8RtSYanrmPwZw907GXUMoFuvcuwFGJiJ/ec6wtsti4ldrVAgvtuN7psXW692jsbo3t5UbZfoSCdkKUib0e1PB/Q2Yu0vx6JmSk31S6g8fRbBRZbyRFkNlpEUwIh1b7LiY75CszdcweITn3UCtVPu/NunzgNwQu6k9/Mbj1HYzaqfFnT+FvC3izwabhLTtVzL8m5RrJoAyeVHZQ1T3It9f1qpCsB2ZQRtLUc2Xsi5bo7BydCCqkbvzrc1sKE1vdO2Pb6hj6rc1NO7QMP2LapPrD1Ju0imv1Cs1keCChJ69QkRdTAmAQbDLRZSzyXN2nnCZDOo2zNjaomIHs38onIh2KDzWt42k7oRWAOvQo+l79HTddo9eyXKTWx7gZQT5+r24oCww09DykkRDPJZIbGEWxhE6A6kbrAOva7XqdJ3aZr9HbkNbiy2xpC/Td3kStZyx9AlTLJZtnqXO3ORXLVw5Sp458vM7jKZdg88Y1kx9EyPxEcRHERxEjs/aF/EJ/aC8RCfvb3w4v6hfESRxEcRHERxEtSZzeMzQLVebqiK65WbZmSPmXpd2aEuSX64mjJBiQmUMSFZUMu2qllOGjFNuDRzYaXEvkuDonM3N37ha03Np2D7Xd1OhcWm2PXa1Vrrxqfp5uJ3dG34DWNXKsmwR9Wy9k7fT0mbKRkC8y88/FUuRfTkocVIjj5rDDqJC0xG2undy+y+z7RVNvka5itHyH9DXCT6x9VdZ1zNICIpVpg9Z6umqUQvdm1H4SvusA5Gm4sGAHLCcEcHXM4jUNonETpfRKuV8prqu570o1WoBUZUNra51rGT1/idizFzsNXtcZKwNqRWCIlzNFkyK6Y27gGGecHAIrZ2HX1pw4llH3ShfKybV17ee1Mvras2OwTGraVHGXC6hhX6yPaxnNppdDExVSxV+iErwTc3YYY6wOufPFstNODiqYPMyOrzvx9qWLm6++BVdZdgYymyzldzS1y9hWSE5U7new7uNu3Ykz9mvY84K1/hvwmxeL87TtPwOL9byFwsH3jEx6tVq0y4gtnKr5JtyiUQpg1iuhmI6h6qbEfQR8mPtXbm1ustEsG1YEFsZT0fH6yNbrItNOkdexMJDRolhkasA44LCsPS7M19FoHynDkUyE+tKXHFeercE52fqOg4mTmoEVgBV+zFRasDYMUDOqhjuUAJJXbcDyn55e1NwlwnwT4u8QaBwxltk3Y9lj6gvvT5tdOZZYzvQuVZTj2W2VKwTILVKBeHCF1AY6PwezM9Tu6m6NsbZiuxWrNLWHaO10WezRfycGg9mav2BAyszO/Rj5vafo9FTturMAzYVRR7r2zo8OaUuJ+bWNaTlkE43Kecp0yhLj2V2PYdg3bRPYHpvsDSth1pDTOiKUTqbZId5q9vtlKqNsohu0tkQm/ix7DSJGDkjJhIwlLgJPMbYY32Di0MOEGom0Gol7ec15XVb5G1uJtf0SKbYzqI6zyOvMOJlj0xLldKuUeLJZQuCxGLIQSzjLRbj7TTjzKG3lomSOIjiI4iOIkdn7Qv4hP7QXiIT97e+HF/UL4iSOIjiI4iOImsHbzTuj9xaYnBuwevb1tfXVAyXssvXGviNqGztxMrMHMttwSaFqWYGO2zggSQNbYrRTEiCeY4K4oB0ocV1lE9s5Y7a9S4WxCuRuhdU41vWrC+5NQMhMbwiBTajdy7frkLXYQqgaXcISPYoBkcYOVblknRUzEPVZTbAZ5SJrR0cqQlo0RbLHGab3vXSZJew4XUu0e91wntgdjNv1C+x1ZkZ28XWIsEg5P6R15P2yvxC2qRhcDloGqx5iq1X3VDgjommWjfk467A7Zgt07K7C6w2Xr6RpWxUFa7rdiChtXa/Q/aY1kM/UTjMo8UMyDfT55o6VKkXCGZJbLbSxX3lMJRN9Aes/WGrXuMt0YVrgBiva+2Hq8umLnKempS8XO7GqjlxMtEXI+1XI2AbYQMQAWS+5l3EhM4EN9ZTrKOQvyFp4yBcuOgrKWI1ZRCj9Rg7Myle7Fhvufr7zov/VTjX5Ks09taybMtcnEyaM33nIXMxjhUtj0149y2qa6lqIQIBsoUcvLud6pofpzR9UbNl9h6r21tCIqLZ8lElaShNmYsmkoSVEeyNKxMbUJIUv+lHhTGnMKCEJGSI7lbLbTDePZYxsDh2nTs18rEyb6aH3/ALt1ObHBPqisCybHYhVYKD5KB2k3xd4yazxzwxjaFxLoGk6jrGNyD5bGH0dXsVGB2vvpeurIZwNrLr6LL7Nyz2M5LTU+hdfRtO919k7S3BGUbrK/O3Sb2vXN+dZN4s6Z1F2sgp2dLHVrLtx1NvtpNFm95ABHDvG3eOAkVzqQnJFix1gx1UAq5rXFXDHDfR/tDxDhaGcn9373lU45fbz5Ba6c23rtvt6zmOn6Nq+rdT5L0vI1Ho/T6FNlvL9XNyK22/pvtv6TdzZ0XqoyI0zsndGj4DsDZI3sFBy2ubpprThG0iNY2CbmZmva33IjI65CWr4sZTP6ej7BYwFvtBqIfKW2LBpcyHL4uXi52PVl4WTXl4t6hq7anWyt1PkyOpKsp9CCQZg3U3Y9tlGRU1F1RKsjqVZSPMMrAEEeoIBm1VUrMXS6xXqhBrl1w1XhY2Ailz9isNvnFR0SGyCHmXtVtlDpSxyPzdhv2xsiYUaS56niSHXlrWrIluXBxEcRHERxEjs/aF/EJ/aC8RCfvb3w4v6hfESRxEcRHERxEcROFvyhvWezVW8UnttNbR3bf5EPe48WzZgooSZh+jeiz9TbKwiW0Trytawso9Tss/t+P1lWbhtU6qW+412pbHmz45+JjY3LgaJ6euNo2B2a192B66RPZza2vd83Fyqn0LfM/S7iPvGY6Fw9uhIh29B4IqdRh6LeD71O9oKRr68P16CnLFF0eN2B9BTn0a4SlE3H7A9O9Udpo0UWwwhGl71M2zWNEnTrI3XbBcdodeetHaGJ3pK66gQ4PYBIsVRr6XVWjDTm8pnMw9tGzZIxo8REWCiag3T5Oql79vdZnqYBQJ3r9tnTfyqVG3ZaNQ7YkHEm3rtX2i0RvCg22qW6acnSBbqPe9TWYo8gIcuMrVgAdZj41AA4kfxE6djSlRKa1VTZSHDohW0ZV6/kT+qNn12EqMjvChTNf2HYtZj2GHmq/YNrTcyqGvZ5zY1cej52ua1tKba3HMvNxp4+Rice7Tm2Te2Lztuxxs7Z7t/5E2pTo+LkoA2ZqFUFqowEcIHJMiRR7xDrMVPPtxwSWGE5IAZfUQpeVJc/L/WTrWoca8Q8bariZOscQHVNZwaqbcazIwcKvDWuqtLQlOS7MlOQy4tC11q1taWG3ckN7F08adicO6Vw7hZFOBpZwtPyXsS5KsnJfILuzVlrKVUG2kG60u7BGKBAACu63yfZsxD3Dc2vQUTLFDio+gWsSDmCElPUm122F+kZ6r5caFYSwS2Sskd9n2LS23IDw62h/wBvlfoD2ZMjOwtc494Zx1vq4cwq9MzUx72DnT83OoNuThbhKwrIxauyvkQo+Ps6izqb8w8YKsbJ07hnWLWqfVsh8zHa2ocoysfGt5KcjYsxKsuzo3MwYW/NYpy7dQuewJwmOIjiI4iOIkdn7Qv4hP7QXiIT97e+HF/UL4iSOIjiI4iOIjiI4iasb5rHYJjTh1S0dLxl62Rd9n1+HlrhtkWpNR1H01eNvNyOyHswdah4ce2D1XTkxY4msx6kfSUi5Fxa5qSkTnJOUKRLVrjuuLB24L1+nRZMe7006+UYjXW8pMiQFrkO12NkbbBW3VlIjihkDlmx9P6/UUuVk8EEuDDWkMBPzX2pfzpEi14CDjYzo3N6kGndFapm7LYJArStTf0axUJQDZ2jtoXqPg709B7EfBlGg7f7KRYc1+Za3DJxxgpDZNbVKT8ciV6sQ+NX6031rXrjqPWgdz05LbJtumNbP2+wM1awX3akHL7djzbTOydURnWiZ7aV9ugxg8W5MjRkaX7cchpon6IBRPDYPUDVm8CY29XCGtOur1MxsWZbB6TaRBluymQB8Ex8u8kEkGXLGXhQ2TmGW3CEDJV7VTeG8J4xxv4EcCcdao+tZwzNI1XI5evdp+T7ucnlAVTfWyW1O4UBeqEWwqFDOwUbdA4c8SuJeGsNdOxmx87Cr36deVT1eluSSK2DI6qSd+QsUB3IA3MzlqfT9A0pV01LXsImJjFEKNOfdedMk5eRcQhtyQlpF/OXDCsoQhOPPhttCcNtIbbxhON54L4G4a8P9IGicMYAwsMt1LGZjZdfaQAbb7WJaxyAAN9lVQFRVUADW+IOI9X4nzzqOs5RybwoRQAFStASQlaLsqqCSe3ckksSSTMnc26QccRHERxEcRI7P2hfxCf2gvEQn7298OL+oXxEkcRHERxEcRHERxEcRPFaUrSpC0pWhacpWheMKSpKsZwpKk5x4UnOM5xnGfdnzxEpLddr7IsECzBQ7QNXUMushtxgSBa6sKOIiA1QQ6WMIiFMxJRQrWR8N5bHJcYR4aWpOUSscRHERxEcRHERxEcRHESOz9oX8Qn9oLxEJ+9vfDi/qF8RJHERxEcRHERxEcRHERxEcRHERxEcRHERxEcRHERxEjs/aF/EJ/aC8RCfvb3w4v6hfESRxEcRHERxEhyAz5gBwYxxEYSUGSMPJCIGcLjn32VtNHCtmsOsuEMuKS4hLrTjWVN4w42tHlOUTjB3K2T2D6xxMBrqk7kPusrJaV2+QmfudljYG7z1ttt6o9fpAAK0ks5EOBQaoeLmAWJQqLDDl3jwXSjRpcFE3G6Fb3kttdetRSGyriPJbZvELfrazETeY2Fu0tVYC3gNrmiKgM5lyKjhIq9a+9CMrKcYjrXBuGGkkn4IfRMddv8AcW4td9iNE1+ibFpdFo9houx39hqvyho+qh1oEyBk7Hei7Q7MtsVWyw8dChjweZQbAUg9bDRmSE4Qe+CiYutdq7QzHWHT023I7brV9kF11m0bIelYahxUDr+f2pC1gKTm6yUHIF2Tah9Zk0Yg2ViYYbHymctSY83P9Nnol97MP7GQ4GnYaERveuTpMfsdN6GHKd2iATK1S90KKjhUbDr1dYFhoGZhbfZZKFnpwcBTUVVW25GAEOScKGiYB3huralH0z18zF9q9mVq17BL2XNPl5pdTuZlljNX7Kh1Nn5kYrVpCwBmkzdYAKHU+0JIgGZYUK+lZzi0Te7r5CSe36doTfEjvnaVwLjoiROkhmH00aoXiRfYuNbkhbZQIOCiQiwo+SlXvmKHY5D6XoAUgp851gJ8ZE3Q4iOIjiI4iOIkdn7Qv4hP7QXiIT97e+HF/UL4iSOIjiI4iOIjiJENjwJIUsGRCEPCPFcCPDNGZKFNCeQ428IWO+hSCRVtuupU2vCkKS6rGcZwrPlEijwUII/HFCw8WMTDxb8HEEDx4jL8XCkrj3CYeOdbZwoGLcciIpSx2spaXmMHypGcst+lEGwUJJPoJkYaKPJaejSGyDY4Qp9siGJIMiH0OvsqUh4Ussp0ZWM+phwlxbWUqWrOUSYWGIewoU4UYwZS2XFDlsNEMKcHebIHWpl5OU5WghppaM+PKVtpUnwpOM4RPw4EKUCMjZIMWRjpEUgGQjzh2Swjgi2VjlBmCkIU2SK6w44hxtaVIWheUqxlOc44iUZFOqLYsQCiq1tAVfj1RMCGiDjEiwkUtIaVxkQPgX0RsflMdH4yyzhDecAs4yn+6R6USrgR4EUI0BGAhxoLGXMshgDMhiM5edW+9locdCUN5U+64tXjGPUtxSs+c5zniJM4iOIjiI4iOIkdn7Qv4hP7QXiJyliO+eyBV+qZqdOlcZQ22tQiJiKeWlpTisZUtUiSjC85dV5zhvGPdj+zz8w9L9t/xBxwq6vwtpOpqPM1DKxXP4m/IQH7q9vsno/J8GdCs3OJqeVjk+j9K0D4JWdv834zJsX8oHGL9OJrWZ431YW5F2Uc7z/qpLJcQP6f8/dlzP8A9udC0726dMflGr+Hd+OfVsbUK7vxCW41HwL/AIyByPBXJXc4mv12fULKGT4lbLPjt+EyDG97NPl4Sk6IvMUvPj1qeiYkpjGc/XlKw51a1Y/5axn/AG5ven+2r4UZXKubpms6Y58y+LjWIPxpzHYj7emPukJf4P8AFFXerIxMkf8AbbYp+D0qP90voDuBoA7GMOXIiPWr6mz63ZEZxn/TLo8W62n/ALX493183XB9qzwNzdg/Fz4Dn0vwM9fiyY1iD7y20h7vDHjSncjSRcB6pfQfyNgb8peQXYrR5+E5Y2bVUer6vnp/0bnHn/2+kW2vT/3zbcPx78G87boeIumJzf1rxj/Hrivb8ZFW8EcXUkh+H8ltv5KzZ/4c0usTamsD/HzLY1EL8/Vge2wDys+fq/sokM55s2L4meHOdt7nx7o2ST6JqeEx+AvJkdbw7r9P77Q8yv8AxY1w/VJcQ9lrhnjIk/CFYz9WR5UF/wA+fq8eyfz55sGPxBoGXscXXMPJB8unk0vv/pczBswc2r97h21/4q3H6gSrodadxhTTjbic/UpC0rxn/jKc55JJdTYN0uVx9jA/oZjFWHmpH3iezlzcfXKR5x/rjlY3H1+ccpuPrESO8WKPj1EEjsYx785eebaxjH+vlascsWZWLSCbcmuoDz5nVf1In2tbv9FC33An9JRSbfUgsZyZaK6JjHnzkmbjGMY8fX59qTjxyIyOKuF8Pf3viTAxdvPqZmOm3+qwTKr03Ubdulp99m/8tVh/RTLaM3DqaPwr55s2gsqT9aFW6BU7/wAYaQflWc/7Yx55r2V4r+GGESMrxD0Skr5g6phEj/KLi35TPq4Y4ku26WgZjg+oxrtvjybS0juzGiY/Gcv7KgXPT584BwfJ593+mI4J31f9ef8Abmr5vtEeCuBv1vEPBs2/o9bI+Hu9Vu/4bySp4C4wv+hoF67/AM4Sv/2MssuQ7maFC9Xzexy0rlPn3R9amkerx/65kxRsf/ucY5qGd7W/gjh83R4gydSI/oafljf7jkVUD8xJanws4zt259Prxwf58in9Edz+UsST76auH9SYusXiRXjz4UQLCR468+Pd6XPpp5eMfV58tYz/ALc0nUPbd8NqNxpvDus6gw8i9WJQh/zHLscfjX2kxj+DfEVmxvz8OgH0DXOw/DoqP90x3KfKCLz6kQmsUJ+v0vyloyr/AI9QgkJj/b6nuaFqXt1N85dH8OQD6Pk6kT8a6sQflb/9k5j+CnkcviD7xXj/APJrv+MxpId69skOuKjYOkxjS3PaZT9Hy5r2fDaGsJU69N4TlPpbTn3Npz5/z8e7nPtQ9tnxRyH30/RNG06oHyNGVcx+ws+Yq/BFk9R4OcN1qevm5mQx9Q9SD4Ckn4sZpTzx1OtRxEcRHERxEcRPNttx1XoabW4v0rV6W0qWr0oQpxavSnGc+nDaFKzn/LCc5z7sZ5cqquvbkpqa5wCdlUsdgCSdgCdgASfQAEnsJ8syIAXYKPLckDue3r9Z7Tybw+lK3WsOpS36cOON4XhLfrzlKMLWn/B5zjOMec+/OPdy4hy1V3rNipVtzFeYBd+w5iOy7+m+2/pKMKiVDBSW32B23O3nt9f27SqpcsTAuDUrmmQc4x6S0qObFzhSvQnw/jOEZxlfux7/AH59318kBZxBTjDLV8yrDO21oN61dzsNn7L3Pbz7ntMYrp72GkrS9w/g2Qt5b/R8/Lv5eU8fpGf9KVfP5j0Ky2lCvnRvpUp72nskpz7TxnK/ZO+nGP8AF7NXjz4z4odR1/lVjnZnI5UA9W7Yl9+QA82xLcrcv83Kdt9jAxtP5iBj08w3J+Ym/bbf09Nxv9W4384JxPpynBmJhOVuPNIwTg3GVusZ8Ptpw7/icRnH9vGPenx/axjlchdfQquWuYjOzqosF4Javs6gN5sh+mo7r6gRWcBgTUaSEAJ5eTsG+iTt5A+h9fSRkxko684ymPPcIaUjDzSRCFvNqc8+zw43hvKkKV4z6fOPf493Mf3DVbbbKfcsi26ogMvTsZlLbheZeUkFtjy7jv6S57xiIqt161Rt9jzKAQPPY77HbfvtIjrTrDi2Xm3GXmlqbcadQptxtac5wpC0LxjKF4zjOM4zjzjOOYVldtNj03VtVbWSGRgVZWHYhlIBBB8wRuDLyMjqrowZGG4IIIIPqCOxH2z18+J9RxEcRHERxEcRHERxEcRHERxEcRMja5uQdONkCDGSnEGMCoSsTLynk5GKSR6ENYkWGvXnxhSHHUvYbcZT6mnmFPjv9C8PeL8PhHNzsnMpssTKWoA1czN+ytFhUJ16at27FHtW5UdF5q7Kmupu1/iDSLdXoorpZQ1Rf6ewHzlK779N22HcFVKFgTsyuEdKl/W0fg2ymsTVrCXNmluDjDDtYiGAy0JbxgmJRPoSUa002yhpS3XG0/N0Lyha0IymRHGWnjL4izKdX1LDt1m61q60qQYldNoC/tcVc1BbdWoVKi7vUvIrlGZUK4w0a/o6dS+JjWrhooZi56zOpJ+baaDyo5JLAKrHmIDAE72y9YgMVMeDGjBmzHi3nZMlKphv2jbDIbcc5leZ5bZT/tUHOKQoZLDSiPLTflWcp12/iPD/ALK06Fj6fWmTdcz5Dg5a7pWtS47bnNeux+YXWFGoFNbPvWnMSRIpp9x1R82zIY1IgFYPSJ3YsbB+4DKu3Iu4fnYDZjt2N4E7HEdj4oAfMoMmMq8BG4ylC/ZuzMWlTLpDzX0ypL4baFNujqUnC23BcJYZFw++te3ZPiJh24OmYOOMjGr07T8OjyOz5eP8xndRlMr1ICLaCyhq7K9qasfrXM0TXw7ct+TfZ07DkZF9nn3FVh5gqnpbqzEFXAOzK27tYUQCvyu4mpOUhjUky7TERJzEglp0Bl/DijgVNiqdaVOZ+cY+efeGsOMpIbczhbvnGMpndT8XKdR1PR81cnJoq0rIyr+VqFbnN1JWssvvrFx1duvWLKRdWSGs32K4OLwk+NjZVLV1WPlV1ISLGG3I4LbHojl+b9B9nKEdlPrCP2lDSJU0WbHmnKkx64yO0thoVIbUQZK4ICZWiRd+aMLCkG3cutoU48W2tzwP7VWcYmZ4n6Pm5esZWZg3Zp1GvAWtWRaukMW3J6lSsL7OmjVXLYbEV3tyFZwKOo212nhnMppxKqb66fd2yGY7l+fqpXysQa15iHQqFYhUrIH7TbviizSAUtPScnHsusDHEZJw295w5l51CFFOZSp932aVlZeWlHtFYQlzCMZ8YxjnKuJNQw9V13U9Rwampxs2w2BW335mANjbFn5Q9nMyrzEKrBRsBsNq07HtxcHGxr2D2Urykjy2BPKPJd9l2BOw3I3lC5BzNjiI4iOIjiI4iOIjiI4iOIjiI4iOIjiI4iOIjiI4iOIjiI4iOIjiI4iOIn//2Q==', function (oImg) {
                    // 图片缩放、翻转
                    oImg.scale(0.5).set('flipX', true);

                    // 添加滤镜（灰度）
                    oImg.filters.push(new fabric.Image.filters.Grayscale());
                    // 图片加载完成之后，应用滤镜效果
                    oImg.applyFilters();

                    self.canvas.add(oImg);
                });
            },
            setCanvasBg() {
                this.canvas.setBackgroundImage(
                    'data:image/jpeg;base64,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',
                    this.canvas.renderAll.bind(this.canvas), {
                        width: 500,
                        height: 500,
                        repeat: 'no-repeat',
                        originX: 'left',
                        originY: 'top',
                    }
                );

                this.canvas.setOverlayImage('https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF', this.canvas.renderAll.bind(this.canvas), {
                    opacity: .5
                });

            },
            createPath() {
                // M: 移动到某个位置
                // L: 连线
                // z: 闭环
                // C: 贝塞尔曲线
                const path = new fabric.Path('M 0 0 L 200 100 L 170 200 z');
                path.set({left: 120, top: 120});
                this.canvas.add(path);
            },
            animate() {
                // 参数1：动画属性
                // 参数2：动画最终位置
                this.rect.animate('angle', 360, {
                    onChange: this.canvas.renderAll.bind(this.canvas)
                });

                this.rect.animate('left', '+=100', {
                    onChange: this.canvas.renderAll.bind(this.canvas)
                });

                // 完整属性
                this.rect.animate('top', '+=100', {
                    // from: 100, // 动画起始值
                    duration: 1000, // 持续时间，默认: 500ms
                    easing: fabric.util.ease.easeOutBounce,  // 动效函数
                    // easeInCubic，easeOutCubic，easeInElastic，easeOutElastic，easeInBounce和easeOutExpo
                    onChange: this.canvas.renderAll.bind(this.canvas)
                });
            },
            addText() {
                const text = new fabric.Text('hello world',
                    {
                        left: 100, top: 100,
                        fontFamily: 'Comic Sans',
                        fontSize: 40,
                        fontWeight: 'normal',
                        underline: true, // 下划线
                        linethrough: true, // 贯穿线
                        overline: true,   // 下划线
                        shadow: 'rgba(0,0,0,0.3) 5px 5px 5px', // 阴影（颜色，水平偏移，垂直偏移和模糊大小）
                        fontStyle: 'italic',
                        stroke: '#ff1318', // 边框颜色
                        strokeWidth: 1,  // 边框宽度
                        textAlign: 'right',  //
                        lineHeight: 1,  // 行高
                        textBackgroundColor: 'rgb(0,200,0)',  // 文本背景颜色
                    }
                );
                this.canvas.add(text);
            },
            addEvent() {
                this.canvas.on('mouse:down', function (options) {
                    console.log("事件属性 => ", options, options.e.clientX, options.e.clientY);
                });

                // 鼠标事件：“mouse:down”，“mouse:move”和“mouse:up”
                // 选择事件：“before:selection:cleared”, “selection:created”, “selection:cleared”
                // 对象事件：“object:modified”，“object:selected”，“object:moving”，“object:scaling”，“object:rotate”，“object:added”和“object:removed”

                this.rect.on("selected", () => {
                    console.log("选择了矩形!");
                });
            },
            createGroup() {
                const circle = new fabric.Circle({
                    radius: 100,
                    fill: '#eef',
                    scaleY: 0.5,
                    originX: 'center',  // 放在组合的中心
                    originY: 'center'   // 放在组合的中心
                });

                const text = new fabric.Text('hello world', {
                    fontSize: 30,
                    originX: 'center',
                    originY: 'center'
                });

                const group = new fabric.Group([circle, text], {
                    left: 150,
                    top: 100,
                    angle: -10
                });

                this.canvas.add(group);
            },
            toJson() {
                // 导出JSON
                this.json = this.canvas.toJSON();

                // 导出JSON（减少体积）
                // this.json = this.canvas.toDatalessJSON();

                // 从JSON导入
                // this.canvas.loadFromJSON(this.json);
                // 或
                // this.canvas.loadFromDatalessJSON(this.json);
            },
            toSvg() {
                this.svg = this.canvas.toSVG();

                // 从SVG URL导入
                // fabric.loadSVGFromURL(url);
                // 从SVG字符串导入
                // fabric.loadSVGFromString(this.svg);
            },
            draw() {
                this.canvas.isDrawingMode = !this.canvas.isDrawingMode;
            },
            lock() {
                this.rect.lockMovementX = true; // x轴移动锁定
                this.rect.lockMovementY = true; // y轴移动锁定
                this.rect.lockRotation = true; // 锁定旋转
                this.rect.lockScalingX = true; // 锁定x轴缩放
                this.rect.lockScalingY = true; // 锁定y轴缩放
            },
            toggleBorderControl() {
                this.rect.hasBorders = !this.rect.hasBorders; // 边框可见性
                this.rect.hasControls = !this.rect.hasControls; // 边角控制可见性
                this.rect.hasRotatingPoint = !this.rect.hasRotatingPoint; // 边角旋转按钮可见性
            },
            borderControlStyle() {
                this.rect.set({
                    cornerColor: 'blue',  // 边角按钮背景色
                    cornerStrokeColor: 'red',  // 边角按钮边框色
                    cornerSize: 12,  // 边角按钮大小
                    cornerStyle: 'circle',  // 边角按钮样式
                    borderColor: 'red',  // 边框颜色
                    padding: 10,
                    borderDashArray: [3, 3],
                    transparentCorners: false,
                })
            },
            zoom() {
                this.canvas.on('mouse:wheel', (opt)=> {
                    const delta = opt.e.deltaY;
                    let zoom = canvas.getZoom();
                    zoom *= 0.999 ** delta;
                    if (zoom > 20) zoom = 20;
                    if (zoom < 0.01) zoom = 0.01;
                    canvas.setZoom(zoom);
                   // canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);  // 根据鼠标所在点缩放
                    opt.e.preventDefault();
                    opt.e.stopPropagation();
                })
            }
        }
    }
</script>

<style scoped>

</style>
