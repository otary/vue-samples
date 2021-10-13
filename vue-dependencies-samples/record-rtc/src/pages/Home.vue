<template>
    <div>

        <video id="video" controls autoplay playsinline></video>

        <img src=""/>

        <div id="testBox" style="width: 500px; height: 300px; border: 1px solid #ccc;">
           <input></input>
            <button>xxx</button>
        </div>

        <canvas id="background-canvas" style="position:absolute; top:-99999999px; left:-9999999999px;"></canvas>

        <el-button @click="startVideoRecord">开始摄像头录制</el-button>
        <el-button @click="stopVideoRecord">停止摄像头录制</el-button>

        <el-button @click="startScreenRecord">开始屏幕录制</el-button>
        <el-button @click="stopScreenRecord">停止屏幕录制</el-button>

        <el-button @click="startGifRecord">开始Gif录制</el-button>
        <el-button @click="stopGifRecord">停止Gif录制</el-button>


        <el-button @click="startFormRecord">开始表单录制</el-button>
        <el-button @click="stopFormRecord">停止表单录制</el-button>
    </div>
</template>

<script>
    import RecordRTC from 'recordrtc'
    import html2canvas from 'html2canvas'

    function captureCamera(callback) {
        navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(function (camera) {
            callback(camera);
        }).catch(function (error) {
            alert('Unable to capture your camera. Please check console logs.');
            console.error(error);
        });
    }


    function addStreamStopListener(stream, callback) {
        stream.addEventListener('ended', function () {
            callback();
            callback = function () {
            };
        }, false);
        stream.addEventListener('inactive', function () {
            callback();
            callback = function () {
            };
        }, false);
        stream.getTracks().forEach(function (track) {
            track.addEventListener('ended', function () {
                callback();
                callback = function () {
                };
            }, false);
            track.addEventListener('inactive', function () {
                callback();
                callback = function () {
                };
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

        if (navigator.mediaDevices.getDisplayMedia) {
            navigator.mediaDevices.getDisplayMedia(displaymediastreamconstraints).then(success).catch(error);
        } else {
            navigator.getDisplayMedia(displaymediastreamconstraints).then(success).catch(error);
        }
    }

    function captureScreen(callback) {
        invokeGetDisplayMedia(function (screen) {
            addStreamStopListener(screen, function () {
                // document.getElementById('btn-stop-recording').click();
            });
            callback(screen);
        }, function (error) {
            console.error(error);
            alert('Unable to capture your screen. Please check console logs.\n' + error);
        });
    }


    function checkGetDisplayMediaSupport() {
        if (!navigator.getDisplayMedia && !navigator.mediaDevices.getDisplayMedia) {
            throw Error("xxx");
        }
    }

    let isRecordingStarted = false;
    let isStoppedRecording = false;

    (function looper() {
        if(!isRecordingStarted) {
            return setTimeout(looper, 500);
        }

        const testBox = document.getElementById("testBox");
        var canvas2d = document.getElementById('background-canvas');
        var context = canvas2d.getContext('2d');

        html2canvas(testBox).then(function(canvas) {
            context.clearRect(0, 0, canvas2d.width, canvas2d.height);
            context.drawImage(canvas, 0, 0, canvas2d.width, canvas2d.height);

            if(isStoppedRecording) {
                return;
            }

            requestAnimationFrame(looper);
        });
    })();


    export default {
        data() {
            return {
                recorder: null
            }
        },
        methods: {
            startVideoRecord() {
                const _this = this;
                var video = document.querySelector('video');
                captureCamera(function (camera) {
                    video.muted = true;
                    video.volume = 0;
                    video.srcObject = camera;

                    _this.recorder = RecordRTC(camera, {
                        type: 'video'
                    });

                    _this.recorder.startRecording();

                    // release camera on stopRecording
                    _this.recorder.camera = camera;
                });
            },
            stopVideoRecord() {
                const _this = this;
                this.recorder.stopRecording(function () {
                    video.src = video.srcObject = null;
                    video.muted = false;
                    video.volume = 1;
                    video.src = URL.createObjectURL(_this.recorder.getBlob());

                    _this.recorder.camera.stop();
                    _this.recorder.destroy();
                    _this.recorder = null;
                });
            },


            startScreenRecord() {
                // 检查是否支持
                // checkGetDisplayMediaSupport();
                const _this = this;
                var video = document.querySelector('video');
                captureScreen(function (screen) {
                    video.srcObject = screen;

                    _this.recorder = RecordRTC(screen, {
                        type: 'video'
                    });

                    _this.recorder.startRecording();

                    // release screen on stopRecording
                    _this.recorder.screen = screen;
                });
            },
            stopScreenRecord() {
                const _this = this;
                this.recorder.stopRecording(function () {
                    video.src = video.srcObject = null;
                    video.src = URL.createObjectURL(_this.recorder.getBlob());

                    _this.recorder.screen.stop();
                    _this.recorder.destroy();
                    _this.recorder = null;
                });
            },
            startGifRecord() {
                const _this = this;
                captureCamera(function(camera) {
                    _this.recorder = RecordRTC(camera, {
                        type: 'gif',
                        frameRate: 1,
                        quality: 10,
                        width: 360,
                        hidden: 240,
                        onGifRecordingStarted: function() {
                            //document.querySelector('h1').innerHTML = 'Gif recording started.';
                        },
                        onGifPreview: function(gifURL) {
                            image.src = gifURL;
                        }
                    });

                    _this.recorder.startRecording();

                    // release camera on stopRecording
                    _this.recorder.camera = camera;

                   // document.getElementById('btn-stop-recording').disabled = false;
                });
            },
            stopGifRecord() {
                recorder.stopRecording(function () {
                    image.src = URL.createObjectURL(recorder.getBlob());
                    recorder.camera.stop();
                    recorder.destroy();
                    recorder = null;
                });
            },
            startFormRecord() {
                isRecordingStarted = true;

                var canvas2d = document.getElementById('background-canvas');

                var testBox = document.getElementById('testBox');
                canvas2d.width = testBox.clientWidth;
                canvas2d.height = testBox.clientHeight;

                this.recorder = new RecordRTC(canvas2d, {
                    type: 'canvas',
                    disableLogs: true
                });
                this.recorder.startRecording();
            },
            stopFormRecord() {
                const _this = this;
                const video = document.getElementById("video");
                this.recorder.stopRecording(function() {
                    var blob = _this.recorder.getBlob();
                    video.src = URL.createObjectURL(blob);
                });
            }
        }
    }
</script>

<style scoped>

</style>
