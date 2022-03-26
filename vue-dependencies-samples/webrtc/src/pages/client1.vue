<template>
    <div>
        <h1>Client1</h1>

        <textarea v-model="source" rows="5"/>

        <button @click="sendData">发送</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                source: 'xxxx',
                sendChannel: null
            }
        },
        mounted() {
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
            connection.onicecandidate = (e) => {
                alert(1)
                if (e.candidate) {
                    // 保存自己的candidate
                    localStorage.setItem('candidate1', JSON.stringify({
                        type: 'candidate',
                        label: e.candidate.sdpMLineIndex,
                        id: e.candidate.sdpMid,
                        candidate: e.candidate.candidate,
                    }));

                    let candidate2Data = localStorage.getItem("candidate2");
                    if (candidate2Data) {
                        candidate2Data = JSON.parse(candidate2Data)
                        const candidate2 = new RTCIceCandidate({
                            sdpMLineIndex: candidate2Data.label,
                            candidate: candidate2Data.candidate,
                        });
                        connection.addIceCandidate(candidate2);
                        console.log('添加client2连接成功!');
                    }
                }
            };

            connection.ondatachannel = (e) => {
                alert(33)
                /*if (!dc) {
                    dc = e.channel;
                    dc.onmessage = recevemsg;
                    dc.onopen = dataChannelStateChange;
                    dc.onclose = dataChannelStateChange;
                }*/
            };

            connection.createOffer().then((desc) => {
                    connection.setLocalDescription(desc);

                    // 保存自己的candidate
                    localStorage.setItem('desc1', JSON.stringify(desc));

                    const desc2 = localStorage.getItem('desc2');
                    if (desc2) {
                        connection.setRemoteDescription(new RTCSessionDescription(JSON.parse(desc2)));
                    }
                }
            ).catch((e) => {
                console.log('Failed to create session description: ' + e.toString())
            });

            this.sendChannel = connection.createDataChannel('sendDataChannel');

            this.sendChannel.onopen = function (e) {
                console.log('sendChannel open...', e);
            };
            this.sendChannel.onclose = function (e) {
                console.log('sendChannel close...', e);
            };
        },
        methods: {
            sendData() {
                this.sendChannel.send(this.source);
            }
        }
    }
</script>

<style scoped>

</style>
