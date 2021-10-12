<template>
    <div>

        <video controls autoplay playsinline></video>


        <el-button @click="startVideoRecord">开始录制</el-button>
        <el-button @click="stopVideoRecord">停止录制</el-button>

        <el-button @click="startScreenRecord">开始屏幕录制</el-button>
        <el-button @click="stopScreenRecord">停止屏幕录制</el-button>

    </div>
</template>

<script>
    import RecordRTC from 'recordrtc'


    function captureCamera(callback) {
        navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(function(camera) {
            callback(camera);
        }).catch(function(error) {
            alert('Unable to capture your camera. Please check console logs.');
            console.error(error);
        });
    }


    function addStreamStopListener(stream, callback) {
        stream.addEventListener('ended', function() {
            callback();
            callback = function() {};
        }, false);
        stream.addEventListener('inactive', function() {
            callback();
            callback = function() {};
        }, false);
        stream.getTracks().forEach(function(track) {
            track.addEventListener('ended', function() {
                callback();
                callback = function() {};
            }, false);
            track.addEventListener('inactive', function() {
                callback();
                callback = function() {};
            }, false);
        });
    }

    function invokeGetDisplayMedia(success, error) {

        // 不生效
        let displaymediastreamconstraints = {
            video: {
                displaySurface: 'application', // monitor, window, application, browser
                logicalSurface: true,
                cursor: 'never' // never, always, motion
            }
        };

        // above constraints are NOT supported YET
        // that's why overriding them
     /*   displaymediastreamconstraints = {
            video: true
        };*/

        if(navigator.mediaDevices.getDisplayMedia) {
            navigator.mediaDevices.getDisplayMedia(displaymediastreamconstraints).then(success).catch(error);
        } else {
            navigator.getDisplayMedia(displaymediastreamconstraints).then(success).catch(error);
        }
    }

    function captureScreen(callback) {
        invokeGetDisplayMedia(function(screen) {
            addStreamStopListener(screen, function() {
                // document.getElementById('btn-stop-recording').click();
            });
            callback(screen);
        }, function(error) {
            console.error(error);
            alert('Unable to capture your screen. Please check console logs.\n' + error);
        });
    }


    function checkGetDisplayMediaSupport() {
        if(!navigator.getDisplayMedia && !navigator.mediaDevices.getDisplayMedia) {
            throw Error("xxx");
        }
    }


    export default {
        data() {
          return {
              recorder: null
          }
        },
        methods: {
            startVideoRecord() {
                var video = document.querySelector('video');
                captureCamera(function(camera) {
                    video.muted = true;
                    video.volume = 0;
                    video.srcObject = camera;

                    this.recorder = RecordRTC(camera, {
                        type: 'video'
                    });

                    this.recorder.startRecording();

                    // release camera on stopRecording
                    this.recorder.camera = camera;
                });
            },
            stopVideoRecord() {
                this.recorder.stopRecording(function () {
                    video.src = video.srcObject = null;
                    video.muted = false;
                    video.volume = 1;
                    video.src = URL.createObjectURL(this.recorder.getBlob());

                    this.recorder.camera.stop();
                    this.recorder.destroy();
                    this.recorder = null;
                });
            },


            startScreenRecord() {
                // 检查是否支持
                checkGetDisplayMediaSupport();

                var video = document.querySelector('video');

                let recorder = this.recorder;
                captureScreen(function(screen) {
                    video.srcObject = screen;

                    recorder = RecordRTC(screen, {
                        type: 'video'
                    });

                    recorder.startRecording();

                    // release screen on stopRecording
                    recorder.screen = screen;
                });
            },
            stopScreenRecord() {
                let recorder = this.recorder;
                this.recorder.stopRecording(function () {
                    video.src = video.srcObject = null;
                    video.src = URL.createObjectURL(recorder.getBlob());

                    recorder.screen.stop();
                    recorder.destroy();
                    recorder = null;
                });
            }
        }
    }
</script>

<style scoped>

</style>
