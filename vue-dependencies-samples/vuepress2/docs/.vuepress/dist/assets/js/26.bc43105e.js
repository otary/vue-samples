(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{514:function(e,r,t){"use strict";t.r(r);var n=t(56),a=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"_4-2-4-rtciceserver字典"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-4-rtciceserver字典"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"http://w3c.github.io/webrtc-pc/#rtciceserver-dictionary",target:"_blank",rel:"noopener noreferrer"}},[e._v("4.2.4 RTCIceServer字典"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("RTCIceServer 字典用于描述可以被 ICE 代理用于与对等方建立连接的STUN和TURN服务器。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('dictionary RTCIceServer {\n  required (DOMString or sequence<DOMString>) urls;\n  DOMString username;\n  (DOMString or RTCOAuthCredential) credential;\n  RTCIceCredentialType credentialType = "password";\n};\n')])])]),t("p",[e._v("字典"),t("a",{attrs:{href:"http://w3c.github.io/webrtc-pc/#dom-rtciceserver",target:"_blank",rel:"noopener noreferrer"}},[e._v("RTCIceServer"),t("OutboundLink")],1),e._v("成员")]),e._v(" "),t("p",[t("code",[e._v("URL")]),e._v("的类型是 DOMString或序列"),t("DOMString",[e._v("，必填")])],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("zh: [RFC7064]和[RFC7065]或其他URI类型中定义的STUN或TURN URI。\n")])])]),t("p",[t("code",[e._v("username")]),e._v("的类型是 DOMString")]),e._v(" "),t("p",[e._v("如果此 RTCIceServer 对象表示 TURN 服务器，并且 credentialType 为 “password”，则此属性指定用于该TURN服务器的用户名。")]),e._v(" "),t("p",[e._v("如果此RTCIceServer对象表示TURN服务器，并且credentialType为“oauth”，则此属性指定共享对称密钥的密钥ID（kid），该密钥在TURN服务器和授权服务器之间共享，如[RFC7635]中所述。它是一个短暂而唯一的密钥标识符。密钥ID（kid）允许TURN服务器选择适当的密钥材料来解密Access-Token，因此这个密钥ID（kid）识别的密钥被用于“access_token”的加密。 kid值与OAuth响应“kid”参数相同，如[RFC7515]第4.1.4节中所定义。")]),e._v(" "),t("p",[t("code",[e._v("credential")]),e._v("的类型是 DOMString 或 RTCOAuthCredential")]),e._v(" "),t("p",[e._v("如果此 RTCIceServer 对象表示 TURN 服务器，则此属性是要与该 TURN 服务器一起使用的证书。")]),e._v(" "),t("p",[e._v("如果credentialType是“password”，则证书是DOMString类型，并表示长期验证密码，如[RFC5389]第10.2节中所述。")]),e._v(" "),t("p",[e._v("如果credentialType是“oauth”，则证书是RTCOAuthCredential类型，其中包含OAuth访问令牌和MAC密钥。")]),e._v(" "),t("p",[t("code",[e._v("credentialType")]),e._v("的类型是 RTCIceCredentialType，默认为“password”")]),e._v(" "),t("p",[e._v("如果此RTCIceServer对象表示TURN服务器，则此属性指定如何在该 TURN 服务器请求授权时使用证书。")]),e._v(" "),t("p",[e._v("An example array of RTCIceServer objects is:")]),e._v(" "),t("p",[e._v("一个 RTCIceServer 数组的例子：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n[\n  {urls: 'stun:stun1.example.net'},\n  {urls: ['turns:turn.example.org', 'turn:turn.example.net'],\n    username: 'user',\n    credential: 'myPassword',\n    credentialType: 'password'},\n  {urls: 'turns:turn2.example.net',\n    username: '22BIjxU93h/IgwEb',\n    credential: {\n      macKey: 'WmtzanB3ZW9peFhtdm42NzUzNG0=',\n      accessToken: 'AAwg3kPHWPfvk9bDFL936wYvkoctMADzQ5VhNDgeMR3+ZlZ35byg972fW8QjpEl7bx91YLBPFsIhsxloWcXPhA=='\n    },\n    credentialType: 'oauth'}\n];\n        \n")])])])])}),[],!1,null,null,null);r.default=a.exports}}]);