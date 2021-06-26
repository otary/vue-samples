import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI)


import vuescroll from "vuescroll/dist/vuescroll-native";
import "vuescroll/dist/vuescroll.css";

Vue.use(vuescroll);


new Vue({
  el: '#app',
  render: h => h(App)
})
