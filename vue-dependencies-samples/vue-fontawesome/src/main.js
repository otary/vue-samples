import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import routes from './routes'
/**
 * font awesome
 */
/*import {library} from '@fortawesome/fontawesome-svg-core';
// 实心（按需引入）
import {faAlignLeft, faSpinner, faUserSecret} from '@fortawesome/free-solid-svg-icons';
// 品牌（按需引入）
import {faFontAwesome} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
library.add(faUserSecret, faSpinner, faAlignLeft, faFontAwesome);
Vue.component('font-awesome-icon', FontAwesomeIcon);*/

// 全局引入
import {library} from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
// 收费
// import { fal } from '@fortawesome/free-light-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
// 图层组合组件非必须
import {FontAwesomeLayers, FontAwesomeLayersText} from '@fortawesome/vue-fontawesome';
library.add(fab, fas, far);
Vue.component('font-awesome-icon', FontAwesomeIcon);
// 非必须
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);


Vue.use(ElementUI);

new Vue({
  el: '#app',
  router: routes,
  render: h => h(App)
})
