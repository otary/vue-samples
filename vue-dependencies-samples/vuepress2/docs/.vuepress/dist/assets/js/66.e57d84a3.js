(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{409:function(e,n,r){"use strict";r.r(n);var t=r(56),v=Object(t.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"_5-1-rtcpeerconnection-interface-extensions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-rtcpeerconnection-interface-extensions"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"http://w3c.github.io/webrtc-pc/#rtcpeerconnection-interface-extensions",target:"_blank",rel:"noopener noreferrer"}},[e._v("5.1 RTCPeerConnection Interface Extensions"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("RTP媒体API扩展了RTCPeerConnection接口，如下所述。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("partial interface RTCPeerConnection {\n    sequence<RTCRtpSender>      getSenders ();\n    sequence<RTCRtpReceiver>    getReceivers ();\n    sequence<RTCRtpTransceiver> getTransceivers ();\n    RTCRtpSender                addTrack (MediaStreamTrack track, MediaStream... streams);\n    void                        removeTrack (RTCRtpSender sender);\n    RTCRtpTransceiver           addTransceiver ((MediaStreamTrack or DOMString) trackOrKind, optional RTCRtpTransceiverInit init);\n                    attribute EventHandler ontrack;\n};\n")])])]),r("p",[r("strong",[e._v("属性")])]),e._v(" "),r("p",[r("em",[e._v("ontrack")]),e._v(" 数据类型为EventHandler:")]),e._v(" "),r("p",[e._v("该事件句柄的事件类型是track。")]),e._v(" "),r("p",[r("strong",[e._v("方法")])]),e._v(" "),r("p",[r("code",[e._v("getSenders")])]),e._v(" "),r("p",[e._v("该方法返回一系列RTCRtpSender对象，这些对象是RTP数据的发送者，从属于未停止的RTCRtpTransceiver对象，并且当前被附加到此RTCPeerConnection中。")]),e._v(" "),r("p",[e._v("当调用getSenders方法时，用户代理必须返回执行CollectSenders算法的结果。")]),e._v(" "),r("p",[e._v("CollectSenders算法定义如下：")]),e._v(" "),r("ol",[r("li",[e._v("执行CollectTransceivers算法，结果得到一个收发器序列。")]),e._v(" "),r("li",[e._v("将发送者序列置为空。")]),e._v(" "),r("li",[e._v("遍历收发器序列中的每个收发器，\n"),r("ol",[r("li",[e._v("如果收发器的[[Stopped]]为false，则将该收发器的[[Sender]]添加到发送者序列。")])])]),e._v(" "),r("li",[e._v("返回发送者序列。")])]),e._v(" "),r("p",[r("code",[e._v("getReceivers")])]),e._v(" "),r("p",[e._v("该方法返回一系列RTCRtpReceiver对象，这些对象是RTP数据的接收者，从属于未停止的RTCRtpTransceiver对象，并且当前被附加到此RTCPeerConnection中。")]),e._v(" "),r("p",[e._v("当调用getReceivers方法时，用户代理必须运行以下步骤：")]),e._v(" "),r("ol",[r("li",[e._v("执行CollectTransceivers算法，结果得到一个收发器序列。")]),e._v(" "),r("li",[e._v("将接收者序列置为空。")]),e._v(" "),r("li",[e._v("遍历收发器序列中的每个收发器，\n"),r("ol",[r("li",[e._v("如果收发器的[[Stopped]]为false，则将该收发器的[[Receiver]]添加到接收者序列。")])])]),e._v(" "),r("li",[e._v("返回接收者序列。")])]),e._v(" "),r("p",[r("code",[e._v("getTransceivers")])]),e._v(" "),r("p",[e._v("该方法返回一系列RTCRtpTransceiver对象，这些对象是RTP数据的收发器，且当前被附加到此RTCPeerConnection中。")]),e._v(" "),r("p",[e._v("getTransceivers方法必须返回执行CollectTransceivers算法的结果。")]),e._v(" "),r("p",[e._v("CollectTransceivers算法定义如下：")]),e._v(" "),r("ol",[r("li",[e._v("将收发器序列置为空，由该RTCPeerConnection对象收集所有RTCRtpTransceiver对象并插入收发器序列，按插入顺序排列。")]),e._v(" "),r("li",[e._v("返回收发器序列。")])]),e._v(" "),r("p",[r("code",[e._v("addTrack")])]),e._v(" "),r("p",[e._v("向RTCPeerConnection添加新轨道，并表明它包含在指定的MediaStream中。")]),e._v(" "),r("p",[e._v("当调用addTrack方法时，用户代理必须运行以下步骤：")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("让connection成为调用此方法的RTCPeerConnection对象。")])]),e._v(" "),r("li",[r("p",[e._v("让track成为方法第一个参数指示的MediaStreamTrack对象。")])]),e._v(" "),r("li",[r("p",[e._v("让kind成为track.kind。")])]),e._v(" "),r("li",[r("p",[e._v("剩余参数为MediaStream对象列表，如果使用单个参数调用该方法，则该列表为空。")])]),e._v(" "),r("li",[r("p",[e._v("如果connection的slot为true，则抛出InvalidStateError。")])]),e._v(" "),r("li",[r("p",[e._v("发送者列表应该是执行CollectSenders算法的结果，如果track中的RTCRtpSender已经存在，则抛出InvalidAccessError。")])]),e._v(" "),r("li",[r("p",[e._v("以下步骤描述了如何确定是否可以重用现有发送者对象。这样做可以在将来调用createOffer和createAnswer时能够将相应的media描述标记为sendrecv或sendonly，并添加发送者流的MSID，如[JSEP]（第5.2.2节和第5.3.2节）中所定义。")]),e._v(" "),r("p",[e._v("如果发送者序列中的任何RTCRtpSender对象符合以下所有条件，则让该发送者成为可重用的对象，否则为null：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("发送者的track为空。")])]),e._v(" "),r("li",[r("p",[e._v("发送者和与其相关联的收发器的kind类型相匹配。")])]),e._v(" "),r("li",[r("p",[e._v("收发器没有停止。更确切地说，与发送者关联的收发器的[[Stopped]]为false。")])]),e._v(" "),r("li",[r("p",[e._v("发送者从未被用来发送。更确切地说，与发送者关联的收发器的[[CurrentDirection]]从未具有sendrecv或sendonly的值。")])])])]),e._v(" "),r("li",[r("p",[e._v("如果发送者不为空，请执行以下步骤以使用该发送者：")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("将发送者设置到track里面。")])]),e._v(" "),r("li",[r("p",[e._v("将发送者的[[AssociatedMediaStreamIds]]设置为空集。")])]),e._v(" "),r("li",[r("p",[e._v("对于流列表中的每个流，如果stream.id在[[AssociatedMediaStreamIds]]中不存在则将id添加进去。")])]),e._v(" "),r("li",[r("p",[e._v("让收发器成为与发送者关联的RTCRtpTransceiver对象。")])]),e._v(" "),r("li",[r("p",[e._v("如果收发器的[[Direction]]值是recvonly，请将收发器的[[Direction]]值设置为sendrecv。")])]),e._v(" "),r("li",[r("p",[e._v("如果收发器的[[Direction]]为无效值，则将收发器的[[Direction]]设置为sendonly。")])])])]),e._v(" "),r("li",[r("p",[e._v("如果发送者为空，请执行以下步骤：")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("创建一个包含track，kind和streams的发送者。")])]),e._v(" "),r("li",[r("p",[e._v("创建一个包含kind的接收器。")])]),e._v(" "),r("li",[r("p",[e._v("创建一个包含之前创建的发送者，接收者并且RTCRtpTransceiverDirection值为sendrecv的收发器。")])]),e._v(" "),r("li",[r("p",[e._v("将收发器添加到connection的收发器集")])])])]),e._v(" "),r("li",[r("p",[e._v("track中可能包含应用程序无法访问的内容。这可能是由于track被标记了peerIdentity选项或任何会使track CORS交叉起源的选项。这些track可以提供给addTrack方法，并为它们创建一个RTCRtpSender对象，但内容绝不能被传输，除非它们也标记为peerIdentity并且它们符合发送要求（参见隔离流）。应用程序无法访问的所有其他tracks不得发送给对端，取而代之的是发送静音（音频），黑帧（视频）或等效的内容。请注意，此属性可能会随时间而变化。")])]),e._v(" "),r("li",[r("p",[e._v("更新连接所需的协商标志。")])]),e._v(" "),r("li",[r("p",[e._v("返回发送者对象。")])])]),e._v(" "),r("p",[r("code",[e._v("removeTrack")])]),e._v(" "),r("p",[e._v("发送者停止发送媒体数据，但getSenders仍然可以获取RTCRtpSender。这样将来调用createOffer时可以将相应收发器的媒体描述标记为recvonly或inactive，如[JSEP]（第5.2.2节）中所定义。")]),e._v(" "),r("p",[e._v("当另一端用这种方式停止发送一个track，这个track将从最初在track事件中显示的任何远端MediaStream中移除，并且如果MediaStreamTrack尚未静音，则在轨道处触发静音事件。")]),e._v(" "),r("p",[e._v("当调用removeTrack方法时，用户代理必须执行以下步骤：")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("让sender成为removeTrack的参数。")])]),e._v(" "),r("li",[r("p",[e._v("让connection成为调用该方法的RTCPeerConnection对象。")])]),e._v(" "),r("li",[r("p",[e._v("如果connection的[[IsClosed]]值为true，则抛出InvalidStateError异常。")])]),e._v(" "),r("li",[r("p",[e._v("如果sender不是connection创建的，则抛出InvalidAccessError异常。")])]),e._v(" "),r("li",[r("p",[e._v("执行CollectSenders算法返回所有的sender。")])]),e._v(" "),r("li",[r("p",[e._v("如果sender不在sender列表中（表示由于设置了“回滚”类型的RTCSessionDescription而将其删除），则中止这些步骤。")])]),e._v(" "),r("li",[r("p",[e._v("如果sender的[[SenderTrack]]值为空，则中止这些步骤。")])]),e._v(" "),r("li",[r("p",[e._v("将sender的[[SenderTrack]]值设置为null。")])]),e._v(" "),r("li",[r("p",[e._v("将收发器设置为与发送者对应的RTCRtpTransceiver对象。")])]),e._v(" "),r("li",[r("p",[e._v("如果收发器的[[Direction]]值是sendrecv，请将收发器的[[Direction]]值设置为recvonly。")])]),e._v(" "),r("li",[r("p",[e._v("如果收发器的[[Direction]]值是sendonly，则将收发器的[[Direction]]值设置为inactive。")])]),e._v(" "),r("li",[r("p",[e._v("更新连接所需的协商标志。")])])]),e._v(" "),r("p",[r("code",[e._v("addTransceiver")])]),e._v(" "),r("p",[e._v("创建一个新的RTCRtpTransceiver并将其添加到收发器序列。")]),e._v(" "),r("p",[e._v("添加一个收发器，则将来调用createOffer会为相应的收发器添加媒体描述，如[JSEP]（第5.2.2节）中所定义。")]),e._v(" "),r("p",[e._v("mid的初始值为null，设置新的RTCSessionDescription可能会将其更改为非空值，如[JSEP]（第5.5节和第5.6节）中所定义。")]),e._v(" "),r("p",[e._v("sendEncodings参数可用于指定提供的联播编码的数量，以及可选的RID和编码参数。")]),e._v(" "),r("p",[e._v("当调用此方法时，用户代理必须执行以下步骤：")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("让init成为第二个参数。")])]),e._v(" "),r("li",[r("p",[e._v("让streams成为init的streams成员。")])]),e._v(" "),r("li",[r("p",[e._v("让sendEncodings成为init的sendEncodings成员。")])]),e._v(" "),r("li",[r("p",[e._v("让direction成为init的direction成员。")])]),e._v(" "),r("li",[r("p",[e._v("如果第一个参数是一个字符串，那就让它成为kind，然后运行以下步骤：")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("如果kind不是合法的MediaStreamTrack类型，则抛出TypeError。")])]),e._v(" "),r("li",[r("p",[e._v("将track置为空。")])])])]),e._v(" "),r("li",[r("p",[e._v("如果第一个参数是MediaStreamTrack，那么让它成为track并将kind赋值track.kind。")])]),e._v(" "),r("li",[r("p",[e._v("如果connection的[[IsClosed]]值为true，则抛出InvalidStateError异常。")])]),e._v(" "),r("li",[r("p",[e._v("通过运行以下步骤验证sendEncodings合法性：")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("验证sendEncodings中的每个rid值仅由字母数字字符（a-z，A-Z，0-9）组成，最多16个字符。如果其中一个RID不满足这些要求，则抛出TypeError异常。")])]),e._v(" "),r("li",[r("p",[e._v("如果sendEncodings中的任何RTCRtpEncodingParameters字典包含除rid之外的只读参数，则抛出InvalidAccessError异常。")])]),e._v(" "),r("li",[r("p",[e._v("验证sendEncodings中的每个scaleResolutionDownBy值是否大于或等于1.0。如果scaleResolutionDownBy值之一不满足此要求，则抛出RangeError异常。")])]),e._v(" "),r("li",[r("p",[e._v("验证sendEncodings中的每个maxFramerate值是否大于或等于0.0。如果其中一个maxFramerate值不满足此要求，则抛出RangeError异常。")])]),e._v(" "),r("li",[r("p",[e._v("令maxN为用户代理可以支持的最大同时编码的数量，至少为1.这应该是一个乐观的数字，因为要使用的编解码器还不知道。")])]),e._v(" "),r("li",[r("p",[e._v("如果存储在sendEncodings中的RTCRtpEncodingParameters的数量超过maxN，则从尾部修剪sendEncodings直到其长度为maxN。")])]),e._v(" "),r("li",[r("p",[e._v("如果现在存储在sendEncodings中的RTCRtpEncodingParameters的数量为1，则从单个条目中删除任何rid成员。")])])]),e._v(" "),r("p",[e._v("注意：\n如果在sendEncodings中只提供单个默认RTCRtpEncodingParameters，则允许应用程序随后使用setParameters方法设置编码参数，即使未使用联播也是如此。")])]),e._v(" "),r("li",[r("p",[e._v("创建一个包含track，kind，streams和sendEncodings的RTCRtpSender。")]),e._v(" "),r("p",[e._v("如果设置了sendEncodings，则后续调用createOffer时将被配置为发送多个RTP编码，定义在[JSEP]（第5.2.2节和第5.2.1节）。当使用能够接收多个RTP编码，定义在[JSEP]（第3.7节），的相应远程描述调用setRemoteDescription方法时，RTCRtpSender可以发送多个RTP编码，并且通过收发器的sender.getParameters()检索的参数可以反映出来协商的编码格式。")])]),e._v(" "),r("li",[r("p",[e._v("创建一个带有kind的RTCRtpReceiver。")])]),e._v(" "),r("li",[r("p",[e._v("创建一个带sender，receiver和direction的RTCRtpTransceiver。")])]),e._v(" "),r("li",[r("p",[e._v("将收发器添加到connection的收发器序列")])]),e._v(" "),r("li",[r("p",[e._v("更新connection所需的协商标志。")])]),e._v(" "),r("li",[r("p",[e._v("返回收发器。")])])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('dictionary RTCRtpTransceiverInit {\n             RTCRtpTransceiverDirection         direction = "sendrecv";\n             sequence<MediaStream>              streams = [];\n             sequence<RTCRtpEncodingParameters> sendEncodings = [];\n};\n')])])]),r("p",[r("strong",[e._v("字典 "),r("code",[e._v("RTCRtpTransceiverInit")]),e._v(" 的参数列表")])]),e._v(" "),r("p",[r("em",[e._v("direction")]),e._v(" 类型为RTCRtpTransceiverDirection，默认为“sendrecv”")]),e._v(" "),r("p",[e._v("该参数属于RTCRtpTransceiver的成员。")]),e._v(" "),r("p",[r("em",[e._v("streams")]),e._v(" 类型为"),r("MediaStream",[e._v("序列")])],1),e._v(" "),r("p",[e._v("当远程PeerConnection的track事件触发与正在添加的RTCRtpReceiver相对应时，这些streams将被放入事件中。")]),e._v(" "),r("p",[r("em",[e._v("sendEncodings")]),e._v(" 类型为"),r("RTCRtpEncodingParameters",[e._v("序列")])],1),e._v(" "),r("p",[e._v("包含用于发送媒体的RTP编码的参数的序列。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('enum RTCRtpTransceiverDirection {\n    "sendrecv",\n    "sendonly",\n    "recvonly",\n    "inactive"\n};\n')])])]),r("table",[r("tr",[r("td",{attrs:{colspan:"2"}},[e._v("\n\t\tRTCRtpTransceiverDirection 枚举值描述\n\t\t")])]),e._v(" "),r("tr",[r("td",[e._v("\n\t\tsendrecv\n\t\t")]),e._v(" "),r("td",[e._v("\n\t\tRTCRtpTransceiver的类型为RTCRtpSender的sender将提供去发送RTP，并且如果远程对等方接受并且sender.getParameters().encodings[i].active对于任何i的值为true，则将发送RTP数据。 RTCRtpTransceiver的RTCRtpReceiver将提供去接收RTP，并在对端接受时接收RTP。\n\t\t")])]),e._v(" "),r("tr",[r("td",[e._v("\n\t\tsendonly\n\t\t")]),e._v(" "),r("td",[e._v("\n\t\tRTCRtpTransceiver的类型为RTCRtpSender的sender将提供去发送RTP，并且如果远程对等方接受并且sender.getParameters().encodings[i].active对于任何i的值为true，则将发送RTP。 RTCRtpTransceiver的RTCRtpReceiver不会提供去接收RTP，也不会接收RTP。\n\t\t")])]),e._v(" "),r("tr",[r("td",[e._v("\n\t\trecvonly\n\t\t")]),e._v(" "),r("td",[e._v("\n\t\tRTCRtpTransceiver的RTCRtpSender不会提供去发送RTP，也不会发送RTP。 RTCRtpTransceiver的RTCRtpReceiver将提供去接收RTP，并在对端接受时接收RTP。\n\t\t")])]),e._v(" "),r("tr",[r("td",[e._v("\n\t\tinactive\n\t\t")]),e._v(" "),r("td",[e._v("\n\t\tRTCRtpTransceiver的RTCRtpSender不会提供去发送RTP，也不会发送RTP。 RTCRtpTransceiver的RTCRtpReceiver不会提供去接收RTP，也不会接收RTP。\n\t\t")])])])])}),[],!1,null,null,null);n.default=v.exports}}]);