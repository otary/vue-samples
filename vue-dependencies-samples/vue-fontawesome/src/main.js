import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import routes from './routes'
/**
 * font awesome
 */
import {library} from '@fortawesome/fontawesome-svg-core';
// 实心（按需引入）
import {faAlignLeft, faSpinner, faUserSecret} from '@fortawesome/free-solid-svg-icons';
// 全局引入
// import { fab } from '@fortawesome/free-brands-svg-icons'
// library.add(fab);
// 品牌（按需引入）
import {faFontAwesome} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';


library.add(faUserSecret, faSpinner, faAlignLeft, faFontAwesome);
Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.use(ElementUI)

new Vue({
  el: '#app',
  router: routes,
  render: h => h(App)
})
