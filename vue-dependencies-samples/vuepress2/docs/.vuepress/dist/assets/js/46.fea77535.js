(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{489:function(e,a,i){"use strict";i.r(a);var n=i(56),l=Object(n.a)({},(function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h4",{attrs:{id:"_4-4-3-1方法扩展"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-3-1方法扩展"}},[e._v("#")]),e._v(" "),i("a",{attrs:{href:"http://w3c.github.io/webrtc-pc/#method-extensions",target:"_blank",rel:"noopener noreferrer"}},[e._v("4.4.3.1方法扩展"),i("OutboundLink")],1)]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("partial interface RTCPeerConnection {\n    Promise<void> createOffer(RTCSessionDescriptionCallback successCallback,\n                              RTCPeerConnectionErrorCallback failureCallback,\n                              optional RTCOfferOptions options);\n    Promise<void> setLocalDescription(RTCSessionDescriptionInit description,\n                                      VoidFunction successCallback,\n                                      RTCPeerConnectionErrorCallback failureCallback);\n    Promise<void> createAnswer(RTCSessionDescriptionCallback successCallback,\n                               RTCPeerConnectionErrorCallback failureCallback);\n    Promise<void> setRemoteDescription(RTCSessionDescriptionInit description,\n                                       VoidFunction successCallback,\n                                       RTCPeerConnectionErrorCallback failureCallback);\n    Promise<void> addIceCandidate(RTCIceCandidateInit candidate,\n                                  VoidFunction successCallback,\n                                  RTCPeerConnectionErrorCallback failureCallback);\n};\n\n")])])]),i("p",[i("strong",[e._v("方法")])]),e._v(" "),i("p",[i("code",[e._v("createOffer")])]),e._v(" "),i("p",[e._v("调用createOffer方法时，用户代理必须执行以下步骤：")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("让successCallback成为方法的第一个参数。")])]),e._v(" "),i("li",[i("p",[e._v("让failureCallback成为方法第二个参数指示的回调。")])]),e._v(" "),i("li",[i("p",[e._v("让options成为方法第三个参数指示的回调。")])]),e._v(" "),i("li",[i("p",[e._v("运行RTCPeerConnection的createOffer（）方法指定的步骤，将options作为唯一参数，并将p作为生成的promise。")])]),e._v(" "),i("li",[i("p",[e._v("当p完成并返回 offer 时，以 offer 作为参数调用 successCallback。")])]),e._v(" "),i("li",[i("p",[e._v("当p被拒绝并返回原因 r 时，以 r 作为参数调用 failureCallback。")])]),e._v(" "),i("li",[i("p",[e._v("返回使用 undefined 作为 resolved 的 promise。")])])]),e._v(" "),i("p",[i("code",[e._v("setLocalDescription")])]),e._v(" "),i("p",[e._v("zh:调用 setLocalDescription 方法时，用户代理必须运行以下步骤：")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("让 description 成为方法的第一个参数。")])]),e._v(" "),i("li",[i("p",[e._v("让 successCallback 成为方法第二个参数指示的回调。")])]),e._v(" "),i("li",[i("p",[e._v("让 failureCallback 成为方法第三个参数指示的回调。")])]),e._v(" "),i("li",[i("p",[e._v("运行 RTCPeerConnection 的 setLocalDescription 方法指定的步骤，将 description 作为唯一参数，并将p作为生成的promise。")])]),e._v(" "),i("li",[i("p",[e._v("完成p后，使用undefined作为参数调用 successCallback。")])]),e._v(" "),i("li",[i("p",[e._v("当p被拒绝并返回原因 r 时，以r作为参数调用 failureCallback。")])]),e._v(" "),i("li",[i("p",[e._v("返回使用 undefined 作为 resolved 的 promise。")])])]),e._v(" "),i("p",[i("code",[e._v("createAnswer")])]),e._v(" "),i("p",[e._v("NOTE\n旧版 createAnswer 方法不接受 RTCAnswerOptions 参数，因为没有任何已知的旧版 createAnswer 实现支持它。")]),e._v(" "),i("p",[e._v("调用createAnswer方法时，用户代理必须运行以下步骤：")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("让successCallback成为方法的第一个参数。")])]),e._v(" "),i("li",[i("p",[e._v("让failureCallback成为方法第二个参数指示的回调。")])]),e._v(" "),i("li",[i("p",[e._v("运行RTCPeerConnection的createAnswer（）方法指定的步骤，不带参数，让p为结果的promise。")])]),e._v(" "),i("li",[i("p",[e._v("当p完成并返回 answer 时，调用 successCallback 并将 answer 作为参数。")])]),e._v(" "),i("li",[i("p",[e._v("当p被拒绝并返回原因 r 时时，以 r 作为参数调用 failureCallback。")])]),e._v(" "),i("li",[i("p",[e._v("返回使用 undefined 作为 resolved 的 promise。")])])]),e._v(" "),i("p",[i("code",[e._v("setRemoteDescription")])]),e._v(" "),i("p",[e._v("调用setRemoteDescription方法时，用户代理必须执行以下步骤：")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("让描述成为方法的第一个参数。")])]),e._v(" "),i("li",[i("p",[e._v("让 successCallback 成为方法第二个参数指示的回调。")])]),e._v(" "),i("li",[i("p",[e._v("让 failureCallback 成为方法第三个参数指示的回调。")])]),e._v(" "),i("li",[i("p",[e._v("运行 RTCPeerConnection 的 setRemoteDescription 方法指定的步骤，将 description 作为唯一参数，并将 p 作为生成的 promise。")])]),e._v(" "),i("li",[i("p",[e._v("完成 p 后，使用 undefined 作为参数调用 successCallback。")])]),e._v(" "),i("li",[i("p",[e._v("当 p 被拒绝并返回原因 r 时，以 r 作为参数调用failureCallback。")])]),e._v(" "),i("li",[i("p",[e._v("返回使用 undefined 作为 resolved 的 promise。")])])]),e._v(" "),i("p",[i("code",[e._v("addIceCandidate")])]),e._v(" "),i("p",[e._v("调用 addIceCandidate 方法时，用户代理必须执行以下步骤：")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("让候选人成为方法的第一个参数。")])]),e._v(" "),i("li",[i("p",[e._v("让 successCallback 成为方法第二个参数指示的回调。")])]),e._v(" "),i("li",[i("p",[e._v("让 failureCallback 成为方法第三个参数指示的回调。")])]),e._v(" "),i("li",[i("p",[e._v("运行 RTCPeerConnection 的 addIceCandidate（）方法指定的步骤，候选者作为唯一参数，让 p 为结果承诺。")])]),e._v(" "),i("li",[i("p",[e._v("完成 p 后，使用 undefined 作为参数调用 successCallback。")])]),e._v(" "),i("li",[i("p",[e._v("当 p 被拒绝并返回原因 r 时时，以 r 作为参数调用 failureCallback。")])]),e._v(" "),i("li",[i("p",[e._v("返回使用 undefined 作为 resolved 的 promise。")])])]),e._v(" "),i("p",[e._v("Callback Definitions")]),e._v(" "),i("p",[e._v("这些回调仅用于旧版API。")]),e._v(" "),i("p",[i("strong",[i("code",[e._v("RTCPeerConnectionErrorCallback")])])]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("callback RTCPeerConnectionErrorCallback = void (DOMException error);\n")])])]),i("p",[e._v("Callback RTCPeerConnectionErrorCallback Parameters")]),e._v(" "),i("p",[e._v("error of type DOMException\nAn error object encapsulating information about what went wrong.")]),e._v(" "),i("p",[i("strong",[i("code",[e._v("RTCSessionDescriptionCallback")])])]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("callback RTCSessionDescriptionCallback = void (RTCSessionDescriptionInit description);\n")])])]),i("p",[e._v("Callback RTCSessionDescriptionCallback Parameters\ndescription of type RTCSessionDescriptionInit\nThe object containing the SDP [SDP].")])])}),[],!1,null,null,null);a.default=l.exports}}]);