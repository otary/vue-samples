// 子线程使用self 或 this监听
self.addEventListener('message', function (e) {
    self.postMessage('You said: ' + e);
}, false);
