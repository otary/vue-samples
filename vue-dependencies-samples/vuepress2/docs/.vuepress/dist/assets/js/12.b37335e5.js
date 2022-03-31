(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{503:function(t,e,r){"use strict";r.r(e);var a=r(56),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_11-错误处理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-错误处理"}},[t._v("#")]),t._v(" 11 错误处理")]),t._v(" "),r("p",[t._v("某些操作抛出或引起"),r("code",[t._v("RTCError")]),t._v("。这是"),r("code",[t._v("DOMException")]),t._v("的扩展，包含了额外的WebRTC信息。")]),t._v(" "),r("h2",{attrs:{id:"_11-1-rtcerror接口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-1-rtcerror接口"}},[t._v("#")]),t._v(" 11.1 "),r("code",[t._v("RTCError")]),t._v("接口")]),t._v(" "),r("div",{staticClass:"language-java extra-class"},[r("pre",{pre:!0,attrs:{class:"language-java"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exposed")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Window")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Constructor")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RTCErrorInit")]),t._v(" init"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" optional "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DOMString")]),t._v(" message "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RTCError")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*: DOMException*/")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    readonly attribute "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RTCErrorDetailType")]),t._v(" errorDetail"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    readonly attribute "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" sdpLineNumber"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    readonly attribute "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" httpRequestStatusCode"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    readonly attribute "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" sctpCauseCode"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    readonly attribute unsigned "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" receivedAlert"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    readonly attribute unsigned "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" sentAlert"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("h3",{attrs:{id:"_11-1-1-构造函数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-1-1-构造函数"}},[t._v("#")]),t._v(" 11.1.1 构造函数")]),t._v(" "),r("p",[r("code",[t._v("RTCError")])]),t._v(" "),r("p",[t._v("运行下列步骤：")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("让init成为构造函数的第一个参数。")])]),t._v(" "),r("li",[r("p",[t._v("让message成为构造函数的第二个参数。")])]),t._v(" "),r("li",[r("p",[t._v("让e成为新的"),r("code",[t._v("RTCError")]),t._v("对象。")])]),t._v(" "),r("li",[r("p",[t._v("将"),r("code",[t._v("message")]),t._v("参数设置为message，"),r("code",[t._v("name")]),t._v("参数设置为"),r("code",[t._v("“RTCError”")]),t._v("，触发e的"),r("code",[t._v("DOMException")]),t._v("构造函数。")]),t._v(" "),r("blockquote",[r("p",[t._v("NOTE:这个name不具有对legacy的映射，因此e的"),r("code",[t._v("code")]),t._v("属性返回0。")])])]),t._v(" "),r("li",[r("p",[t._v("设置e的所有"),r("code",[t._v("RTCError")]),t._v("属性为init中的对应属性的值，如果存在，否则设置为"),r("code",[t._v("null")]),t._v("。"),r("a",{attrs:{href:"https://github.com/web-platform-tests/wpt/blob/master/webrtc/RTCError.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("测试：1"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[t._v("返回e。")])])]),t._v(" "),r("h3",{attrs:{id:"_11-1-2-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-1-2-属性"}},[t._v("#")]),t._v(" 11.1.2 属性")]),t._v(" "),r("p",[t._v("RTCErrorDetailType类型的"),r("code",[t._v("errorDetail")]),t._v("，只读：针对出现错误类型的WebRTC特定错误代码。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/web-platform-tests/wpt/blob/master/webrtc/RTCPeerConnection-setRemoteDescription-offer.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("测试：2"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/web-platform-tests/wpt/blob/master/webrtc/RTCError.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("测试：2"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("long类型的"),r("code",[t._v("sdpLineNumber")]),t._v(",只读，可以为null：如果"),r("code",[t._v("errorDetail")]),t._v("为"),r("code",[t._v("“sdp-syntax-error”")]),t._v(",这是错误被检测到的行号(第一行行号为1)。")]),t._v(" "),r("p",[t._v("long类型的"),r("code",[t._v("httpRequestStatusCode")]),t._v(",只读，可以为null：如果"),r("code",[t._v("errorDetail")]),t._v("为"),r("code",[t._v("“idp-load-failure”")]),t._v("，这是IdP URI回应的HTTP状态码。")]),t._v(" "),r("p",[t._v("long类型的"),r("code",[t._v("sctpCauseCode")]),t._v(",只读，可以为null：如果"),r("code",[t._v("errorDetail")]),t._v("是"),r("code",[t._v("“actp-failure”")]),t._v("，这是SCTP协商失败的SCTP原因代码。")]),t._v(" "),r("p",[t._v("unsigned long类型的"),r("code",[t._v("receiveAlert")]),t._v(",只读，可以为null：如果"),r("code",[t._v("errorDetail")]),t._v("是"),r("code",[t._v("“dtls-failure”，并且接收到致命的DTLS警报，这是接收到的DTLS警报的值。")])]),t._v(" "),r("p",[t._v("unsigned long类型的"),r("code",[t._v("sentAlert")]),t._v("，只读，可以为null：如果"),r("code",[t._v("errorDetail")]),t._v("是"),r("code",[t._v('"dtls-failure"，并且发送了')]),t._v("致命的DTLS警报，这是发送的DTLS警报值。")]),t._v(" "),r("p",[r("strong",[t._v("RTCErrorInit字典")])]),t._v(" "),r("div",{staticClass:"language-java extra-class"},[r("pre",{pre:!0,attrs:{class:"language-java"}},[r("code",[t._v("dictionary "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RTCErrorInit")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    required "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RTCErrorDetailType")]),t._v(" errorDetail"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" sdpLineNumber"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" httpRequestStatusCode"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" sctpCauseCode"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    unsigned "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" receivedAlert"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    unsigned "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" sentAlert"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("p",[r("code",[t._v("RTCErrorInit")]),t._v("的"),r("code",[t._v("errorDetail")]),t._v(","),r("code",[t._v("sdpLineNumber")]),t._v(","),r("code",[t._v("httpRequestStatusCode")]),t._v(","),r("code",[t._v("sctpCauseCode")]),t._v(","),r("code",[t._v("receivedAlert")]),t._v("和"),r("code",[t._v("sentAlert")]),t._v("成员与"),r("code",[t._v("RTCError")]),t._v("的同名属性具有相同的定义。")]),t._v(" "),r("h3",{attrs:{id:"_11-1-3-字典rtcerror成员"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-1-3-字典rtcerror成员"}},[t._v("#")]),t._v(" 11.1.3 字典"),r("code",[t._v("RTCError")]),t._v("成员")]),t._v(" "),r("p",[t._v("RTCErrorDetailType类型的"),r("code",[t._v("errorDetail")]),t._v("，必需的：查看"),r("code",[t._v("RTCError")]),t._v("的"),r("code",[t._v("errorDetail")]),t._v("。")]),t._v(" "),r("p",[t._v("long类型的"),r("code",[t._v("sdpLineNumber")]),t._v(":查看"),r("code",[t._v("RTCError")]),t._v("的"),r("code",[t._v("sdpLineNumber")]),t._v("。")]),t._v(" "),r("p",[t._v("long类型的"),r("code",[t._v("httpRequestStatusCode")]),t._v(":查看"),r("code",[t._v("RTCError")]),t._v("的"),r("code",[t._v("httpRequestStatusCode")]),t._v("。")]),t._v(" "),r("p",[t._v("long类型的"),r("code",[t._v("sctpCauseCode")]),t._v(":查看"),r("code",[t._v("RTCError")]),t._v("的"),r("code",[t._v("sctpCauseCode")]),t._v("。")]),t._v(" "),r("p",[t._v("unsigned long类型的"),r("code",[t._v("receivedAlert")]),t._v(":查看"),r("code",[t._v("RTCError")]),t._v("的"),r("code",[t._v("receivedAlert")]),t._v("。")]),t._v(" "),r("p",[t._v("unsigned long类型的"),r("code",[t._v("sentAlert")]),t._v("：查看"),r("code",[t._v("RTCError")]),t._v("的"),r("code",[t._v("sentAlert")]),t._v("。")]),t._v(" "),r("h3",{attrs:{id:"_11-1-4-rtcerrordetailtype枚举"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-1-4-rtcerrordetailtype枚举"}},[t._v("#")]),t._v(" 11.1.4 "),r("code",[t._v("RTCErrorDetailType")]),t._v("枚举")]),t._v(" "),r("div",{staticClass:"language-java extra-class"},[r("pre",{pre:!0,attrs:{class:"language-java"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RTCErrorDetailType")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data-channel-failure"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dtls-failure"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fingerprint-failure"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"idp-bad-script-failure"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"idp-execution-failure"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"idp-load-failure"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"idp-need-login"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"idp-timeout"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"idp-tls-failure"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"idp-token-expired"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"idp-token-invalid"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sctp-failure"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sdp-syntax-error"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hardware-encoder-not-available"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hardware-encoder-error"')]),t._v("\n          "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("p",[t._v("名称以“idp”为前缀的错误详细信息类型由[WEBRTC-IDENTIFY]规范使用。这里描述了它们，因为WebIDL枚举必须只能在一个地方描述。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("枚举描述")]),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("data-channel-failure")])]),t._v(" "),r("td",[t._v("数据通道已经失败。")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("dtls-failure")])]),t._v(" "),r("td",[t._v("DTLS协商已经失败，或者连接由于致命错误被中断。"),r("code",[t._v("message")]),t._v("包含关于error的信息。如果接收到致命DTLS警报，"),r("code",[t._v("receivedAlert")]),t._v("属性被设置为接收到的DTLS警报。如果发送了致命TLS警报，"),r("code",[t._v("sentAlert")]),t._v("属性被设置为发送的DTLS警报的值。")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("fingerprint-failure")])]),t._v(" "),r("td",[r("code",[t._v("RTCDtlsTransport")]),t._v('的远程证书与SDP提供的指纹不匹配。如果远程对等体不能将本地证书与提供的指纹匹配，则不会生成此错误。可能会从远程对等体接收到一个"bad-certificate" DTLS警报，这会导致“dtls-failure”。')])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("idp-bad-script-failure")])]),t._v(" "),r("td",[t._v("从身份提供方加载的脚本不是有效的JavaScript或没有实现正确的接口。")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("idp-execution-failure")])]),t._v(" "),r("td",[t._v("身份提供方抛出异常或返回了rejected的承诺。")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("idp-load-failure")])]),t._v(" "),r("td",[t._v("Idp URI的加载已经失败。"),r("code",[t._v("httpRequestStatusCode")]),t._v("属性被设置为回应的HTTP状态码。")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("idp-need-login")])]),t._v(" "),r("td",[t._v("身份提供方需要用户登录。"),r("code",[t._v("idpLoginUrl")]),t._v("属性被设置为可以被用来登录的URL。")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("idp-timeout")])]),t._v(" "),r("td",[t._v("Idp timer已经失效。")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("idp-tls-failure")])]),t._v(" "),r("td",[t._v("用户Idp HTTPS连接的TLS证书不受信任。")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("idp-token-expired")])]),t._v(" "),r("td",[t._v("Idp token已经失效。")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("idp-token-invalid")])]),t._v(" "),r("td",[t._v("Idp token是无效的。")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("sctp-failure")])]),t._v(" "),r("td",[t._v("SCTP协商已经失败，或者连接由于致命错误而被终止。"),r("code",[t._v("sctpCauseCode")]),t._v("属性被设置为SCTP原因码。")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("sdp-syntax-error")]),r("a",{attrs:{href:"https://github.com/web-platform-tests/wpt/blob/master/webrtc/RTCPeerConnection-setRemoteDescription-offer.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("测试:1"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("SDP语法无效。"),r("code",[t._v("sdpLineNumber")]),t._v("属性被设置为SDP中检测到语法错误的行号。")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("hardware-encoder-not-available")])]),t._v(" "),r("td",[t._v("请求的操作所需的硬件编码器资源不可用。")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("hardware-encoder-error")])]),t._v(" "),r("td",[t._v("硬件编码器不支持提供的参数。")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);