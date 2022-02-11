import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import routes from './routes'

//引入markdown编辑器
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

Vue.use(ElementUI)
Vue.use(mavonEditor)

new Vue({
  el: '#app',
  router: routes,
  render: h => h(App)
})
