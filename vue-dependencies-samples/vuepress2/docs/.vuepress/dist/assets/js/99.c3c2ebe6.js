(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{441:function(t,a,e){"use strict";e.r(a);var n=e(56),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"_6-1-1-3-连接步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-1-3-连接步骤"}},[t._v("#")]),t._v(" 6.1.1.3 连接步骤")]),t._v(" "),e("p",[e("code",[t._v("一旦SCTP传输建立连接")]),t._v("，这意味着"),e("code",[t._v("RTCSctpTransport")]),t._v("的SCTP关联已经被建立，运行下列步骤：")]),t._v(" "),e("p",[t._v("1.让transport成为"),e("code",[t._v("RTCSCTPTransport")]),t._v("对象。")]),t._v(" "),e("p",[t._v("2.让connection成为与transport关联的"),e("code",[t._v("RTCPeerConnection")]),t._v("对象。")]),t._v(" "),e("p",[t._v("3.设置[MaxChannels]为协商好的输入输出SCTP流的最小值。")]),t._v(" "),e("p",[t._v("4.在transport发起一个名为"),e("code",[t._v("statechange")]),t._v("的事件。")]),t._v(" "),e("p",[t._v("5.对于connection的每一个"),e("code",[t._v("RTCDataChannel")]),t._v(":")]),t._v(" "),e("ol",[e("li",[t._v("让channel成为RTCDataChannel对象。")]),t._v(" "),e("li",[t._v("如果channel的[DataChannelId]插槽大于等于transport的[MaxChannels]插槽，由于失败关闭channel。否则，声明channel为open。")])]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exposed")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Window")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RTCSctpTransport")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventTarget")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    readonly        attribute "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RTCDtlsTransport")]),t._v(" transport"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    readonly        attribute "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RTCSctpTransportState")]),t._v(" state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    readonly        attribute unrestricted "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" maxMessageSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    readonly        attribute unsigned "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("short")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" maxChannels"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    attribute "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventHandler")]),t._v("     onstatechange"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[e("strong",[t._v("属性")])]),t._v(" "),e("p",[e("code",[t._v("RTCDtlsTransport")]),t._v("类型的"),e("code",[t._v("transport")]),t._v("，只读：数据通道的所有SCTP数据包通过此传输发送和接收。"),e("a",{attrs:{href:"https://github.com/web-platform-tests/wpt/blob/master/webrtc/RTCIceTransport.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("测试2"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("code",[t._v("RTCSctpTransportState")]),t._v("类型的"),e("code",[t._v("state")]),t._v("，只读：SCTP传输的目前状态。当获取时，此属性必须返回[SctpTransportState]插槽的值。")]),t._v(" "),e("p",[t._v("无限制double类型的"),e("code",[t._v("maxMessageSize")]),t._v("，只读：可以被传入"),e("code",[t._v("RTCDataChannel")]),t._v("的"),e("code",[t._v("send()")]),t._v("方法的最大数据量。此属性，返回[MaxMessageSize]插槽的值。")]),t._v(" "),e("p",[t._v("无符号short类型的"),e("code",[t._v("maxChannels")]),t._v(",只读，可以为null：可以被同时使用的"),e("code",[t._v("RTCDataChannel")]),t._v("的最大量。此属性必须返回[MaxChannels]插槽的值。")]),t._v(" "),e("blockquote",[e("p",[t._v("NOTE:此属性的值将会为null，直到SCTP传输进入connected状态。")])]),t._v(" "),e("p",[t._v("EventHadnler类型的"),e("code",[t._v("onstatechange")]),t._v(":此event handler的事件类型是"),e("code",[t._v("statechange")]),t._v("。")])])}),[],!1,null,null,null);a.default=s.exports}}]);