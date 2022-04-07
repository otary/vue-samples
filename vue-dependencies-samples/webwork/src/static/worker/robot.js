// 加载资源
// importScripts('script1.js', 'script2.js');


// 子线程使用self 或 this监听
self.addEventListener('message', function (e) {
    console.log(e);

    self.postMessage('child said: ' + e.data);

}, false);
