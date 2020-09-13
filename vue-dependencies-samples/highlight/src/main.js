import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI)

//import Highlight from './assets/highlight';

// 引入全部语言
import hljs from 'highlight.js';

// 自定义选择语言
//import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/tomorrow-night.css';
//import 'highlight.js/styles/github.css';

// 引入插件
Vue.use(hljs.vuePlugin);
// 将hljs注册为全局对象
window.hljs = hljs;

new Vue({
  el: '#app',
  render: h => h(App)
})
