<template>
    <div>
        <textarea v-model="source" rows="5"/>

        <button @click="handSendData">发送</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                source: 'hello',
                sendChannel: null
            }
        },
        mounted() {
            this.createConnection();
        },
        methods: {
            createConnection() {
                const localConnection = new RTCPeerConnection();

                // 发送信道
                const sendChannel = localConnection.createDataChannel('sendDataChannel');

                this.sendChannel = sendChannel;

                localConnection.onicecandidate = e => {
                    console.log('localConnect onicecandidate', e);

                    // 添加目标服务器
                    remoteConnection.addIceCandidate(e.candidate).then(()=> {
                        console.log('AddIceCandidate success.');
                    }, ()=> {
                        console.log(`Failed to add Ice Candidate: ${error.toString()}`);
                    });

                };

                sendChannel.onopen = function (e) {
                    console.log('sendChannel open...', e);
                };
                sendChannel.onclose = function (e) {
                    console.log('sendChannel close...', e);
                };


                // 接受通道
                const remoteConnection = new RTCPeerConnection();
                remoteConnection.onicecandidate = (e) => {
                    console.log('remoteConnect onicecandidate', e);

                    // 添加目标服务器
                    localConnection.addIceCandidate(e.candidate).then(()=> {
                        console.log('AddIceCandidate success.');
                    }, ()=> {
                        console.log(`Failed to add Ice Candidate: ${error.toString()}`);
                    });
                };
                remoteConnection.ondatachannel = function (e) {
                    console.log('remote receive channel', e);

                    const receiveChannel = e.channel;
                    receiveChannel.onmessage = function (e) {
                        console.log('received message', e.data);
                    };
                    receiveChannel.onopen = function (e) {
                        console.log('receiveChannel open', receiveChannel.readyState);
                    };
                    receiveChannel.onclose = function (e) {
                        console.log('receiveChannel close', receiveChannel.readyState);
                    };
                };


                localConnection.createOffer().then(
                    // 获取描述
                    function (desc) {
                        localConnection.setLocalDescription(desc);
                       // remoteConnection.setRemoteDescription(desc);

                        // 回复
                        remoteConnection.createAnswer().then(
                            function (desc) {
                                remoteConnection.setLocalDescription(desc);
                                console.log('Answer from remoteConnection => ', desc.sdp)
                                localConnection.setRemoteDescription(desc);
                            },
                            function (e) {
                                console.log('Failed to create session description: ' + e.toString())
                            }
                        );
                    },
                    // 创建失败回调
                    function (e) {
                        console.log('Failed to create session description: ' + e.toString())
                    }
                );
            },
            handSendData() {
                this.sendChannel.send(this.source);
            }
        }
    }
</script>

<style scoped>

</style>
