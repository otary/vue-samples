<template>
    <div>
        <h1>Client2</h1>

        <textarea v-model="source" rows="5"/>


        <button @click="sendData">发送</button>

        <div>
            max: {{receiveProgress.max}}
            current: {{receiveProgress.value}}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                source: 'yyy',
                sendChannel: null,
                connection: null,
                receiveProgress: {
                    max: '',
                    value: ''
                }
            }
        },
        mounted() {
            this.connect();
        },
        methods: {
            sendData() {
                this.sendChannel.send(this.source);
            },
            connect() {
                const config = {
                    iceServers: [
                        {
                            urls: ['stun:stun.xten.com:3478'],
                        },
                    ],
                    iceTransportPolicy: 'all',
                    iceCandidatePoolSize: '0',
                };
                const connection = new RTCPeerConnection(config);
                this.connection = connection;

                // 发送信道
                this.sendChannel = connection.createDataChannel('sendDataChannel');

                this.sendChannel.onopen = function (e) {
                    console.log('sendChannel open...', e);
                };
                this.sendChannel.onclose = function (e) {
                    console.log('sendChannel close...', e);
                };

                connection.onicecandidate = e => {
                    console.log('localConnect onicecandidate', e);

                    if (e.candidate) {
                        // 保存自己的candidate
                        localStorage.setItem('candidate2', JSON.stringify({
                            type: 'candidate',
                            label: e.candidate.sdpMLineIndex,
                            id: e.candidate.sdpMid,
                            candidate: e.candidate.candidate,
                        }));

                        // 添加IceCandidate
                        /*let candidate1Data = localStorage.getItem("candidate1");
                        if (candidate1Data) {
                            candidate1Data = JSON.parse(candidate1Data)
                            const candidate1 = new RTCIceCandidate({
                                sdpMLineIndex: candidate1Data.label,
                                candidate: candidate1Data.candidate,
                            });
                            connection.addIceCandidate(candidate1).then(()=> {
                                console.log('添加client1连接成功!');
                            }).catch((e)=> {
                                console.log('添加client1连接错误!', e)
                            });
                        }*/

                    }
                };

                const that = this;
                let receiveBuffer = [];
                let receiveSize = 0;
                connection.ondatachannel = (e) => {
                    const dc = e.channel;
                    dc.onmessage = function (e) {
                        if (typeof e.data === 'string') {
                            const data = JSON.parse(e.data);
                            if (data.type === 'fileInfo') {
                               const fileInfo = data.data;

                               console.log('收到文件信息 => ', fileInfo);

                                that.receiveProgress.max = fileInfo.size;
                            }
                            return;
                        }

                        receiveBuffer.push(e.data);
                        receiveSize += e.data.byteLength;

                        that.receiveProgress.value = receiveSize;

                        console.log('收到消息=>', e)
                    };
                    dc.onopen = function (e) {
                        console.log('打开=> ', e)
                    };
                    dc.onclose = function (e) {

                    };

                };

                window.localStorage.setItem("otherjoin", Math.random() + "");


                window.addEventListener("storage", function (e) {
                    if (e.key == 'desc1') {
                        console.log('setRemoteDescription => ', e.newValue)
                        connection.setRemoteDescription(new RTCSessionDescription(JSON.parse(e.newValue)));

                        connection.createAnswer().then((desc) => {
                            console.log('answer => ', desc);
                            connection.setLocalDescription(desc);

                            window.localStorage.setItem("answer", JSON.stringify(desc));
                        }).catch((e) => {
                            console.log('回复client1出错!', e)
                        });
                    } else if (e.key == 'candidate1') {
                        let candidate1Data = e.newValue;
                        if (candidate1Data) {
                            candidate1Data = JSON.parse(candidate1Data)
                            const candidate1 = new RTCIceCandidate({
                                sdpMLineIndex: candidate1Data.label,
                                candidate: candidate1Data.candidate,
                            });

                            connection.addIceCandidate(candidate1).then(() => {
                                console.log('添加client1连接成功!');
                            }).catch((e) => {
                                console.log('添加client1连接错误!', e)
                            });
                        }
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>
