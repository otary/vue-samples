<template>
    <div>
        <audio id='myAudio'
               :src="audioSrc"
               muted
               autopaly
               controls
        />
        <canvas id="myCanvas"
                width="500px"
                height="200px"
        />
        <div id="visualisation">

        </div>
        <!--<el-button @click="play">
            播放
        </el-button>-->
    </div>
</template>

<script>


    export default {
        name: "Audio",
        data() {
            return {
                myAudio: null,
                canvasCtx: null,
                analyser: null,
                bufferLength: 0,
                dataArray: [],
                audioSrc: '/static/samples.mp3'
            }
        },
        mounted() {
            this.myAudio = document.getElementById('myAudio');
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            const audioContext = new AudioContext();

            const myCanvas = document.getElementById('myCanvas');
            this.canvasCtx = myCanvas.getContext('2d');

            this.analyser = audioContext.createAnalyser();
            this.analyser.fftSize = 2048;
            const source = audioContext.createMediaElementSource(
                this.myAudio
            );
            source.connect(this.analyser);
            this.analyser.connect(audioContext.destination);

            this.bufferLength = this.analyser.frequencyBinCount;
            this.dataArray = new Uint8Array(
                this.bufferLength
            );
            this.draw();
           // this.draw2();
        },
        /*mounted() {
            this.myAudio = document.getElementById('myAudio');

            var context = new (window.AudioContext || window.webkitAudioContext)();
            var source = null;

            var analyser = context.createAnalyser();
            analyser.fftSize = 64;
            analyser.minDecibels = -90;
            analyser.maxDecibels = -10;
            analyser.smoothingTimeConstant = 0.85;

            var frequencyData = new Uint8Array(analyser.frequencyBinCount);
            var visualisation = document.getElementById("visualisation");
            var barSpacingPercent = 100 / analyser.frequencyBinCount;
            for (var i = 0; i < analyser.frequencyBinCount; i++) {
                const el = document.createElement("div");
                el.style.left = i * barSpacingPercent + "%";
                visualisation.appendChild(el);
            }
            var bars = visualisation.childNodes;

            function update() {
                window.requestAnimationFrame(update);
                analyser.getByteFrequencyData(frequencyData);
                for (let i = 0; i < bars.length; i++) {
                    const bar = bars[i];
                    bar.style.height = frequencyData[i] + 'px';
                    //console.debug(frequencyData[i]);
                }
            };
            this.myAudio = document.getElementById('myAudio');
            this.myAudio.addEventListener('canplay', () => {
                source = context.createMediaElementSource(this.myAudio);
                source.connect(analyser);
                update();
            });
        },*/
        methods: {
            play() {
                this.myAudio.play()//音频自动播放
            },
            draw() {
                const width = 500, height = 200;
                this.canvasCtx.clearRect(0, 0, width, height); // 清除画布
                this.analyser.getByteFrequencyData(this.dataArray); // 将当前频率数据复制到传入其中的Uint8Array
                const requestAnimFrame = window.requestAnimationFrame(this.draw)
                    || window.webkitRequestAnimationFrame(this.draw);
                this.canvasCtx.fillStyle = '#000130';
                this.canvasCtx.fillRect(0, 0, width, height);
                let barWidth = (width * 1 / this.bufferLength) * 2;
                let barHeight;
                let x = 0;
                for (let i = 0; i < this.bufferLength; i++) {
                    barHeight = this.dataArray[i] + 1;
                    this.canvasCtx.fillStyle = 'rgb(0, 255, 30)';
                    this.canvasCtx.fillRect(x, height / 2 - barHeight / 2, barWidth, barHeight);
                    x += barWidth + 1;
                }

            },
            draw2() {
                var frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
                var visualisation = document.getElementById("visualisation");
                var barSpacingPercent = 100 / this.analyser.frequencyBinCount;
                for (var i = 0; i < this.analyser.frequencyBinCount; i++) {
                    const el = document.createElement("div");
                    el.style.left = i * barSpacingPercent + "%";
                    visualisation.appendChild(el);
                }
                var bars = visualisation.childNodes;
                const analyser =  this.analyser;

                function update() {
                    window.requestAnimationFrame(update);
                    analyser.getByteFrequencyData(frequencyData);
                    for (let i = 0; i < bars.length; i++) {
                        const bar = bars[i];
                        bar.style.height = frequencyData[i] + 'px';
                        console.debug(frequencyData[i]);
                    }
                };
                update();
               /* this.myAudio = document.getElementById('myAudio');
                this.myAudio.addEventListener('canplay', () => {
                    source = audioContext.createMediaElementSource(this.myAudio);
                    source.connect(this.analyser);
                    update();
                });*/
            },

        }
    }
</script>

<style>

    #visualisation {
        position: relative;
    }

    #visualisation > div {
        position: absolute;
    }
</style>
