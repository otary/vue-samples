(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{519:function(e,t,n){"use strict";n.r(t);var i=n(56),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"_4-2配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2配置"}},[e._v("#")]),e._v(" 4.2配置")]),e._v(" "),n("h3",{attrs:{id:"_4-2-1-rtcconfiguration字典"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-rtcconfiguration字典"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"http://w3c.github.io/webrtc-pc/#rtcconfiguration-dictionary",target:"_blank",rel:"noopener noreferrer"}},[e._v("4.2.1 RTCConfiguration字典"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("RTCConfiguration定义了一组参数，用于配置 RTCPeerConnection 如何建立或重新建立点对点通信。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('dictionary RTCConfiguration {\n  sequence<RTCIceServer> iceServers;\n  RTCIceTransportPolicy iceTransportPolicy = "all";\n  RTCBundlePolicy bundlePolicy = "balanced";\n  RTCRtcpMuxPolicy rtcpMuxPolicy = "require";\n  DOMString peerIdentity;\n  sequence<RTCCertificate> certificates;\n  [EnforceRange]\n  octet iceCandidatePoolSize = 0;\n};\n\n')])])]),n("p",[e._v("字典RTCConfiguration成员")]),e._v(" "),n("p",[e._v("iceServers of type sequence"),n("RTCIceServer",[e._v(":\nzh:"),n("RTCIceServer",[e._v("类的"),n("code",[e._v("iceServers")])])],1)],1),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("一组可供ICE使用的服务器的描述，例如 STUN 和 TURN 服务器。\n")])])]),n("p",[e._v("一组可供ICE使用的服务器的描述，例如 STUN 和 TURN 服务器。")]),e._v(" "),n("p",[e._v('iceTransportPolicy of type RTCIceTransportPolicy, defaulting to "all":\nzh:RTCIceTransportPolicy 类型的 iceTransportPolicy，默认为“all”')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("指示允许ICE代理使用哪些候选者。\n")])])]),n("p",[e._v("指示允许ICE代理使用哪些候选者。")]),e._v(" "),n("p",[e._v('bundlePolicy of type RTCBundlePolicy, defaulting to "balanced":\nzh:类型为 RTCBundlePolicy 的 bundlePolicy ，默认为“balanced”')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("指示在收集ICE候选项时要使用的媒体捆绑策略。\n")])])]),n("p",[e._v("指示在收集ICE候选项时要使用的媒体捆绑策略。")]),e._v(" "),n("p",[e._v('rtcpMuxPolicy of type RTCRtcpMuxPolicy, defaulting to "require":\nzh:RTCPtcpMuxPolicy类型的rtcpMuxPolicy，默认为“require”')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("指示收集ICE候选项时要使用的 rtcp-mux 策略。\n")])])]),n("p",[e._v("指示收集ICE候选项时要使用的 rtcp-mux 策略。")]),e._v(" "),n("p",[e._v("peerIdentity of type DOMString:\nzh:DOMString类型的peerIdentity")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("设置 RTCPeerConnection 目标对端的标识。 RTCPeerConnection 不会与对端建立连接，除非对端提供名称并用该名称成功验证身份。\n")])])]),n("p",[e._v("设置 RTCPeerConnection 目标对端的标识。 RTCPeerConnection 不会与对端建立连接，除非对端提供名称并用该名称成功验证身份。")]),e._v(" "),n("p",[e._v("certificates of type sequence"),n("RTCCertificate",[e._v(":\n序列号"),n("RTCCertificate",[e._v("的证书。")])],1)],1),e._v(" "),n("p",[e._v("RTCPeerConnection 用于进行身份验证的一组证书。")]),e._v(" "),n("p",[e._v("通过调用 generateCertificate 函数创建此参数的有效值")]),e._v(" "),n("p",[e._v("虽然任何给定的 DTLS 连接仅使用一个证书，但此属性允许调用者提供支持不同算法的多个证书。将根据 DTLS 握手允许哪些证书，来选择最终证书。 RTCPeerConnection 实现选择将哪个证书用于给定连接;如何选择证书超出了本规范的范围。")]),e._v(" "),n("p",[e._v("如果此值不存在，则为每个 RTCPeerConnection 实例生成一组默认证书。")]),e._v(" "),n("p",[e._v("此选项允许应用程序建立密钥连续性。 RTCCertificate 可以保存在 [INDEXEDDB] 中并重复使用。持久性和重用也避免了密钥生成的成本。")]),e._v(" "),n("p",[e._v("最初选择此值后，此配置选项的值不能更改")]),e._v(" "),n("p",[e._v("octet类型的iceCandidatePoolSize，默认为0")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v(" Size of the prefetched ICE pool as defined in [JSEP] (section 3.5.4. and section 4.1.1.). \nzh: [JSEP]（第3.5.4节和第4.1.1节）中定义的预取ICE池的大小。\n")])])]),n("p",[e._v("Size of the prefetched ICE pool as defined in [JSEP] (section 3.5.4. and section 4.1.1.).")]),e._v(" "),n("p",[e._v("[JSEP]（第3.5.4节和第4.1.1节）中定义的预取ICE池的大小。")])])}),[],!1,null,null,null);t.default=r.exports}}]);