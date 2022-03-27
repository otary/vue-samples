<template>
    <div>
        <h1>Client1</h1>

        <textarea v-model="source" rows="5"/>

        <input type="file" id="file"></input>

        <button @click="sendData">发送</button>


        <button @click="submit">提交</button>
    </div>
</template>

<script>
    const that = this;
    export default {
        data() {
            return {
                source: 'xxxx',
                sendChannel: null,
                sendProgress: {
                    max: 0,

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

                this.sendChannel = connection.createDataChannel('sendDataChannel');

                this.sendChannel.onopen = function (e) {
                    console.log('sendChannel open...', e);
                    if (e.type == 'open') {
                        console.log('sendChannel opened!', e);
                    }
                };
                this.sendChannel.onclose = function (e) {
                    console.log('sendChannel close...', e);
                };

                connection.onicecandidate = (e) => {
                    console.log('localConnect onicecandidate', e);
                    if (e.candidate) {
                        // 保存自己的candidate
                        localStorage.setItem('candidate1', JSON.stringify({
                            type: 'candidate',
                            label: e.candidate.sdpMLineIndex,
                            id: e.candidate.sdpMid,
                            candidate: e.candidate.candidate,
                        }));

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


                window.addEventListener("storage", function (e) {

                    if (e.key == 'otherjoin') {
                        console.log('other join...');
                        connection.createOffer().then((desc) => {
                                connection.setLocalDescription(desc);

                                // 保存自己的candidate
                                localStorage.setItem('desc1', JSON.stringify(desc));
                            }
                        ).catch((e) => {
                            console.log('Failed to create session description: ' + e.toString())
                        });
                    } else if (e.key == 'candidate2') {
                        let candidate2Data = e.newValue;
                        if (candidate2Data) {
                            candidate2Data = JSON.parse(candidate2Data)
                            const candidate2 = new RTCIceCandidate({
                                sdpMLineIndex: candidate2Data.label,
                                candidate: candidate2Data.candidate,
                            });
                            connection.addIceCandidate(candidate2).then(() => {
                                console.log('添加client2连接成功!');
                            }).catch((e) => {
                                console.log('添加client2连接错误!', e)
                            });
                        }
                    } else if (e.key == 'answer') {
                        connection.setRemoteDescription(new RTCSessionDescription(JSON.parse(e.newValue)));
                    }
                });
            },
            submit() {
                const fileInput = document.getElementById("file");
                const files = fileInput.files;
                const file = files[0];

                const fileInfo = {
                    size: file.size,
                    name: file.name
                }

                // 8k  8192
                // 16k  16384
                // 32k  32768
                var chunkSize = 8192;

                console.log(this.sendChannel)

                this.sendChannel.send(JSON.stringify({
                    type: 'fileInfo',
                    data: fileInfo
                }));

                const that = this;

                const filereader = new FileReader();

                // 文件分片读取
                function readSlice(offset) {
                    const slice = file.slice(offset, offset + chunkSize);
                    filereader.readAsArrayBuffer(slice);
                }

                var offset = 0;

                // 文件读取后发送到对端
                filereader.onload = function (e) {
                    var result = e.target.result;
                    that.sendChannel.send(result);

                    offset += e.target.result.byteLength;
                    // 发送进度
                    that.sendProgress.value = offset;

                    if (offset < file.size) {
                        readSlice(offset);
                    } else {
                        console.log('发送完成');
                       /* var fileItem = document.createElement('li');
                        var iEl = document.createElement('i');
                        iEl.classList.add('fas', 'fa-cloud-upload-alt');

                        fileItem.textContent = ' ' + file.name;
                        fileItem.insertBefore(iEl, fileItem.firstChild);
                        transferedFileList.appendChild(fileItem);*/
                    }
                };

                readSlice(0);
            }
        }
    }
</script>

<style scoped>

</style>
