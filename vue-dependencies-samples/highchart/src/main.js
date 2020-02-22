import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

import HighchartsVue from 'highcharts-vue'

Vue.use(ElementUI)
Vue.use(HighchartsVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
