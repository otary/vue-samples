(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{452:function(e,n,a){"use strict";a.r(n);var r=a(56),t=Object(r.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"_5-4-2-待机-功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-2-待机-功能"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"http://w3c.github.io/webrtc-pc/#hold-functionality",target:"_blank",rel:"noopener noreferrer"}},[e._v('5.4.2 "待机" 功能'),a("OutboundLink")],1)]),e._v(" "),a("p",[a("code",[e._v("direction")]),e._v("属性和"),a("code",[e._v("replaceTrack")]),e._v("方法一起使开发人员能够实现“待机”方案。")]),e._v(" "),a("p",[e._v("要将音乐发送给对等方并停止呈现接收的音频（音乐待机）：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("EXAMPLE 5\nasync function playMusicOnHold() {\n  try {\n    // Assume we have an audio transceiver and a music track named musicTrack\n    await audio.sender.replaceTrack(musicTrack);\n    // Mute received audio\n    audio.receiver.track.enabled = false;\n    // Set the direction to send-only (requires negotiation)\n    audio.direction = 'sendonly';\n  } catch (err) {\n    console.error(err);\n  }\n}\n")])])]),a("p",[e._v("要响应远程对等方的“sendonly” 提议：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("EXAMPLE 6\nasync function handleSendonlyOffer() {\n  try {\n    // Apply the sendonly offer first,\n    // to ensure the receiver is ready for ICE candidates.\n    await pc.setRemoteDescription(sendonlyOffer);\n    // Stop sending audio\n    await audio.sender.replaceTrack(null);\n    // Align our direction to avoid further negotiation\n    audio.direction = 'recvonly';\n    // Call createAnswer and send a recvonly answer\n    await doAnswer();\n  } catch (err) {\n    // handle signaling error\n  }\n}\n")])])]),a("p",[e._v("停止发送音乐并发送从麦克风捕获的音频，以及呈现接收到的音频：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("EXAMPLE 7\nasync function stopOnHoldMusic() {\n  // Assume we have an audio transceiver and a microphone track named micTrack\n  await audio.sender.replaceTrack(micTrack);\n  // Unmute received audio\n  audio.receiver.track.enabled = true;\n  // Set the direction to sendrecv (requires negotiation)\n  audio.direction = 'sendrecv';\n}\n")])])]),a("p",[e._v("响应被远程对等方取消待机：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("EXAMPLE 8\nasync function onOffHold() {\n  try {\n    // Apply the sendrecv offer first, to ensure receiver is ready for ICE candidates.\n    await pc.setRemoteDescription(sendrecvOffer);\n    // Start sending audio\n    await audio.sender.replaceTrack(micTrack);\n    // Set the direction sendrecv (just in time for the answer)\n    audio.direction = 'sendrecv';\n    // Call createAnswer and send a sendrecv answer\n    await doAnswer();\n  } catch (err) {\n    // handle signaling error\n  }\n}\n")])])])])}),[],!1,null,null,null);n.default=t.exports}}]);