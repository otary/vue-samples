import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import routes from './routes'

Vue.use(ElementUI);

import SvgIcon from './components/SvgIcon' // svg组件
Vue.component('svg-icon', SvgIcon)


/*const req = require.context('@material-design-icons/svg/filled', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)*/

new Vue({
  el: '#app',
  router: routes,
  render: h => h(App)
})
