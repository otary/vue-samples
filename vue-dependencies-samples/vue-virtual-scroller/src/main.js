import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI)

import VueVirtualScroller from 'vue-virtual-scroller'

Vue.use(VueVirtualScroller)


new Vue({
  el: '#app',
  render: h => h(App)
})
