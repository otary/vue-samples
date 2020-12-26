<template>
    <div id="app">
        <video-player class="vjs-custom-skin"
                      ref="videoPlayer"
                      :options="playerOptions"
                      @ready="playerReadied">
        </video-player>


        <!-- <video-player class="video-player-box"
                       ref="videoPlayer"
                       :options="playerOptions"
                       :playsinline="true"
                       customEventName="customstatechangedeventname"

                       @play="onPlayerPlay($event)"
                       @pause="onPlayerPause($event)"
                       @ended="onPlayerEnded($event)"
                       @waiting="onPlayerWaiting($event)"
                       @playing="onPlayerPlaying($event)"
                       @loadeddata="onPlayerLoadeddata($event)"
                       @timeupdate="onPlayerTimeupdate($event)"
                       @canplay="onPlayerCanplay($event)"
                       @canplaythrough="onPlayerCanplaythrough($event)"

                       @statechanged="playerStateChanged($event)"
                       @ready="playerReadied"

         >
         </video-player>-->
    </div>
</template>

<script>
    import {videoPlayer} from 'vue-video-player'
    import 'videojs-contrib-hls'
    import 'video.js/dist/video-js.css'

    export default {
        components: {
            videoPlayer
        },
        data() {
            return {
                playerOptions: {
                    //height: '320',
                    width: '100%',
                    sources: [{
                        // mp4
                        //  type: "video/mp4",
                        // src: "http://vjs.zencdn.net/v/oceans.mp4",
                        // webm
                        // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                        // m3u8
                        type: 'application/x-mpegURL',
                        src: "http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8",
                        withCredentials: false
                    }],
                    playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度列表
                    controlBar: {
                        timeDivider: false,
                        durationDisplay: false
                    },
                    flash: {hls: {withCredentials: false}},
                    html5: {hls: {withCredentials: false}},
                    autoplay: true, // 自动播放
                    // controls: true, // 控制条
                    fluid: true, // 按比例缩放适应容器
                    // preload: 'auto', // [ auto:当页面加载后载入整个视频; meta:当页面加载后只载入元数据; none:当页面加载后不载入视频]
                    // muted: true, // 消除所有音频
                    // loop: false, // 循环播放
                    aspectRatio: "16:9",
                    // poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-9.jpg' //首屏图片
                    language: 'zh-CN',
                    muted: false, // 是否静音
                }
            }
        },
        mounted() {

        },
        methods: {
            playerReadied(player) {
                player.tech_.hls.xhr.beforeRequest = function (options) {
                    // console.log(options)
                    return options
                }
            }
        }
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
