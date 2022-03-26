<template>
    <div>
        <h1>Client2</h1>

        <textarea v-model="source" rows="5"/>

        <button @click="sendData">发送</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                source: 'yyy'
            }
        },
        mounted() {
            const config = {
                iceServers: [
                    {
                        urls: ['stun:stun.oonnnoo.com:3478'],
                    },
                ],
                iceTransportPolicy: 'all',
                iceCandidatePoolSize: '0',
            };
            const connection = new RTCPeerConnection(config);
            connection.onicecandidate = (e) => {
                if (e.candidate) {
                    // 保存自己的candidate
                    localStorage.setItem('candidate2', JSON.stringify({
                        type: 'candidate',
                        label: e.candidate.sdpMLineIndex,
                        id: e.candidate.sdpMid,
                        candidate: e.candidate.candidate,
                    }));

                    let candidate1Data = localStorage.getItem("candidate1");
                    if (candidate1Data) {
                        candidate1Data = JSON.parse(candidate1Data);
                        const candidate1 = new RTCIceCandidate({
                            sdpMLineIndex: candidate1Data.label,
                            candidate: candidate1Data.candidate,
                        });
                        connection.addIceCandidate(candidate1);
                        console.log('添加client1连接成功!');
                    }
                }
            };

            connection.ondatachannel = (e) => {

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
                    localStorage.setItem('desc2', JSON.stringify(desc));

                    const desc1 = localStorage.getItem('desc1');
                    if (desc1) {
                        connection.setRemoteDescription(new RTCSessionDescription(JSON.parse(desc1)));
                    }
                }
            ).catch((e) => {
                console.log('Failed to create session description: ' + e.toString())
            });
        },
        methods: {
            sendData() {

            }
        }
    }
</script>

<style scoped>

</style>
