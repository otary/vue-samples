import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI)


// 视频播放 vue-video-player

// require videojs style

// import 'vue-video-player/src/custom-theme.css'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App)
})
