(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{445:function(e,t,c){"use strict";c.r(t);var _=c(56),v=Object(_.a)({},(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[c("h3",{attrs:{id:"_5-6-4-rtcicetransportstate枚举"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-4-rtcicetransportstate枚举"}},[e._v("#")]),e._v(" 5.6.4 RTCIceTransportState枚举")]),e._v(" "),c("div",{staticClass:"language-java extra-class"},[c("pre",{pre:!0,attrs:{class:"language-java"}},[c("code",[c("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("enum")]),e._v(" "),c("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("RTCIceTransportState")]),e._v(" "),c("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),c("span",{pre:!0,attrs:{class:"token string"}},[e._v('"new"')]),c("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),c("span",{pre:!0,attrs:{class:"token string"}},[e._v('"checking"')]),c("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),c("span",{pre:!0,attrs:{class:"token string"}},[e._v('"connected"')]),c("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),c("span",{pre:!0,attrs:{class:"token string"}},[e._v('"completed"')]),c("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),c("span",{pre:!0,attrs:{class:"token string"}},[e._v('"disconnected"')]),c("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),c("span",{pre:!0,attrs:{class:"token string"}},[e._v('"failed"')]),c("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),c("span",{pre:!0,attrs:{class:"token string"}},[e._v('"closed"')]),e._v("\n"),c("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),c("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),c("table",[c("thead",[c("tr",[c("th",[c("code",[e._v("RTCIceTransportState")]),e._v("枚举描述")]),e._v(" "),c("th")])]),e._v(" "),c("tbody",[c("tr",[c("td",[c("code",[e._v("new")])]),e._v(" "),c("td",[c("code",[e._v("RTCIceTransport")]),e._v("正在收集候选者并/或等待被提供远程候选者，并且还未开始校验。")])]),e._v(" "),c("tr",[c("td",[c("code",[e._v("checking")])]),e._v(" "),c("td",[c("code",[e._v("RTCIceTransport")]),e._v("已经接收至少一个远程候选者并且正在校验候选者对，或是未发现连接，或是对之前成功的候选者对的校验已经失败。除此之外，它还可能继续收集。")])]),e._v(" "),c("tr",[c("td",[c("code",[e._v("connected")])]),e._v(" "),c("td",[c("code",[e._v("RTCIceTransport")]),e._v('已经发现一个可用的连接，但是仍在校验其它候选者对试图找到一个更好的连接。它还可能继续收集并且/或等待另外的远程候选者。如果对正在使用的连接的consent check[RFC7675]失败，并且不存在其它成功的候选者对，那么状态转变为"checking"(如果还存在需要校验的候选者对)，或"disconnected"(如果没有候选者对需要校验，但是对等体仍在收集并且/或等待其它的远程候选者)。')])]),e._v(" "),c("tr",[c("td",[c("code",[e._v("completed")])]),e._v(" "),c("td",[c("code",[e._v("RTCIceTransport")]),e._v('已经完成收集，接收到 没有更多远程候选者的指示，完成校验所有候选者对，并且已经发现一个连接。如果对于所有成功的候选者对的consent checks[RFC7675]接连失败，状态转变为"'),c("code",[e._v("failed")]),e._v('".')])]),e._v(" "),c("tr",[c("td",[c("code",[e._v("disconnected")])]),e._v(" "),c("td",[e._v("ICE代理已经确定当前"),c("code",[e._v("RTCIceTransport")]),e._v("的连接丢失。这是一个暂态，在片段网络中可能会间歇触发。确定状态的方式与实现方式相关。例如:丢失正在使用的连接的网络接口，或是接收对STUN请求的响应反复失败。另外，"),c("code",[e._v("RTCIceTransport")]),e._v("已经完成校验所有现存候选者对，还没有发现一个连接，但是它仍在收集或等待额外的远程候选者。")])]),e._v(" "),c("tr",[c("td",[c("code",[e._v("failed")])]),e._v(" "),c("td",[e._v("RTCIceTransport已经完成收集，接收了没有更多远程候选者的指示，完成了对所有候选者对的校验，这是最终状态。")])]),e._v(" "),c("tr",[c("td",[c("code",[e._v("closed")])]),e._v(" "),c("td",[e._v("RTCIceTransport已经断开，不再对STUN请求响应。")])])])]),e._v(" "),c("p",[e._v("ICE重启导致候选收集和连接检查重新开始，如果在"),c("code",[e._v("completed")]),e._v("状态下开始，则转换为"),c("code",[e._v("connected")]),e._v("。如果在暂态"),c("code",[e._v("disconnected")]),e._v("开始，则会导致转变为"),c("code",[e._v("checking")]),e._v("，从而有效的忘记之前丢失的连接。")]),e._v(" "),c("p",[c("code",[e._v("failed")]),e._v("和"),c("code",[e._v("completed")]),e._v("状态需要一个不再有额外远程候选者的指示。这可以通过调用"),c("code",[e._v("addIceCandidate")]),e._v("来实现，其中候选者值的"),c("code",[e._v("candidate")]),e._v("属性被设置为空字符串或者通过"),c("code",[e._v("canTrickleIceCandidates")]),e._v("被设置为"),c("code",[e._v("false")]),e._v("。")]),e._v(" "),c("p",[e._v("一些状态转变的例子包括：")]),e._v(" "),c("ul",[c("li",[e._v("("),c("code",[e._v("RTCIceTransport")]),e._v("首次创建，作为"),c("code",[e._v("setLocalDescription")]),e._v("或"),c("code",[e._v("setRemoteDescription")]),e._v("的结果)："),c("code",[e._v("new")])]),e._v(" "),c("li",[e._v("("),c("code",[e._v("new")]),e._v(",接收远程候选者)："),c("code",[e._v("checking")])]),e._v(" "),c("li",[e._v("("),c("code",[e._v("checking")]),e._v("，发现可用连接)："),c("code",[e._v("connected")])]),e._v(" "),c("li",[e._v("("),c("code",[e._v("checking")]),e._v(",校验失败，仍在收集过程)："),c("code",[e._v("disconnected")])]),e._v(" "),c("li",[e._v("("),c("code",[e._v("checking")]),e._v(",放弃)："),c("code",[e._v("failed")])]),e._v(" "),c("li",[e._v("("),c("code",[e._v("disconnected")]),e._v(",新的本地候选者)："),c("code",[e._v("checking")])]),e._v(" "),c("li",[e._v("("),c("code",[e._v("connected")]),e._v(",完成所有校验)："),c("code",[e._v("completed")])]),e._v(" "),c("li",[e._v("("),c("code",[e._v("completed")]),e._v(",丢失连接)："),c("code",[e._v("disconnected")])]),e._v(" "),c("li",[e._v("("),c("code",[e._v("disconnected")]),e._v("或"),c("code",[e._v("failed")]),e._v("，出现ICE重启)："),c("code",[e._v("checking")])]),e._v(" "),c("li",[e._v("("),c("code",[e._v("completed")]),e._v(",出现ICE重启)："),c("code",[e._v("connected")])]),e._v(" "),c("li",[c("code",[e._v("RTCPeerConnection.close()")]),e._v(":"),c("code",[e._v("closed")])])]),e._v(" "),c("p",[c("img",{attrs:{src:"/image/5_6_4pic.png",alt:""}})])])}),[],!1,null,null,null);t.default=v.exports}}]);