<template>
    <div id="app">
        <!--<video
                id="myVideo"
                class="video-js vjs-big-play-centered vjs-fluid"
                controls
                playsinline
                webkit-playsinline
                x5-video-player-type="h5"
                preload="auto"
                width="100%"
                height="100%"
        >
          <source
                    type="application/x-mpeg"
                    src="http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8"
            >
        </video>-->

        <video
                id="myVideo"
                class="video-js vjs-big-play-centered vjs-fluid"
                controls
                preload="auto"
                width="100%"
                height="100%"
        >
            <!-- <source
                     type="application/x-mpegURL"
                     src="http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8"
             >-->
        </video>
    </div>
</template>

<script>
    import videojs from 'video.js';
    import 'video.js/dist/video-js.css'

    export default {
        data() {
            return {}
        },
        mounted() {
            const player = videojs('myVideo', {
                poster: 'https://s.yun-live.com/images/20200715/902844b0f1215ff236ad6b1bd1683555.jpg', // 视频封面图地址
                title: '我是标题',
                playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度列表
                preload: 'none', // [ auto:当页面加载后载入整个视频; meta:当页面加载后只载入元数据; none:当页面加载后不载入视频]
                language: 'zh-CN',
                fluid: true, // 自适应宽高
                muted: false, // 是否静音
                aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                controls: true, // 是否拥有控制条（默认:true）。如果设为false ,那么只能通过api进行控制了。也就是说界面上不会出现任何控制按钮
                autoplay: false, // 如果true,浏览器准备好时开始回放。 autoplay: "muted" // 自动播放属性, muted:静音播放
                loop: true, // 视频播放结束后，是否循环播放
                techOrder: ["html5", "flash"], // 播放顺序
                screenshot: true,
                controlBar: {
                    volumePanel: { //声音样式
                        inline: false // 不使用水平方式
                    },
                    timeDivider: true, // 时间分割线
                    durationDisplay: true, // 总时间
                    progressControl: true, // 进度条
                    remainingTimeDisplay: true, //当前以播放时间
                    fullscreenToggle: true, //全屏按钮
                    pictureInPictureToggle: true, //画中画

                }
            }, function () {
                this.on('error', function () {  // 请求数据时遇到错误
                    console.log("请求数据时遇到错误")
                });
                this.on('stalled', function () { // 网速失速
                    console.log("网速失速")
                });
                this.on('play', function () { // 开始播放
                    console.log("开始播放")
                });
                this.on('pause', function () { // 暂停
                    console.log("暂停")
                });
                this.on('timeupdate', function () {
                    // console.log(this.currentTime())
                })

            });

            player.src({
                src: 'http://hdtv.haust.edu.cn/hls/cctv1hd.m3u8',
                type: 'application/x-mpegURL',
                withCredentials: false, // 跨域请求
            });
        },
        methods: {}
    }
</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
    }

    html, body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }
</style>
