import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import {Message}  from 'element-ui';

Vue.use(ElementUI)

Vue.prototype.$message = Message;


new Vue({
  el: '#app',
  render: h => h(App)
})
