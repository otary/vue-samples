(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{418:function(e,t,v){"use strict";v.r(t);var r=v(56),c=Object(r.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"_9-3-媒体流轨道"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-媒体流轨道"}},[e._v("#")]),e._v(" 9.3 媒体流轨道")]),e._v(" "),v("p",[v("code",[e._v("MediaStreamTrack")]),e._v("对象在非本地媒体源案例中对其"),v("code",[e._v("MediaStream")]),e._v("的引用（RTP源，每个"),v("code",[e._v("RTCRtpReceiver")]),e._v("关联一个"),v("code",[e._v("MediaStreamTrack")]),e._v("的情况）总是很强。")]),e._v(" "),v("p",[e._v("每当"),v("code",[e._v("RTCRtpReceiver")]),e._v("在相应的MediaStreamTrack被静音的RTP源上接收数据，并且包含"),v("code",[e._v("RTCRtpReceiver")]),e._v("的"),v("code",[e._v("RTCRtpTraceceiver")]),e._v("对象的[[Receptive]]插槽为"),v("code",[e._v("true")]),e._v("时，它必须对任务排序以设置相应MediaStreamTrack的静音状态为"),v("code",[e._v("false")]),e._v("。")]),e._v(" "),v("p",[e._v("当RTCRtpReceiver接收到的RTP源媒体流的SSRC之一由于接收到BYE或超时而被移除时，它必须对任务排序以将相应MediaStreamTrack的静音状态设置为"),v("code",[e._v("true")]),e._v("。注意，"),v("code",[e._v("setRemoteDescription")]),e._v("还可以将"),v("code",[e._v("track")]),e._v("的静音状态设置为值"),v("code",[e._v("true")]),e._v("。")]),e._v(" "),v("p",[e._v("在[GETUSERMEDIA]中指定了添加track，删除track和设置track静音状态的步骤。")]),e._v(" "),v("p",[e._v("当"),v("code",[e._v("RTCRtpReceiver")]),e._v("接收器生成的MediaStreamTrack轨道已经结束[GETUSERMEDIA]时（例如通过调用"),v("code",[e._v("receiver.track.stop")]),e._v("），用户代理可以选择释放为输入流分配的资源，例如通过关闭接收端解码器。")])])}),[],!1,null,null,null);t.default=c.exports}}]);