import Vue from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import vueSmoothScroll from 'vue-smooth-scroll'
// scroll
Vue.use(vueSmoothScroll)
// vuetify
Vue.use(Vuetify, vueSmoothScroll)

new Vue({
  el: '#app',
  render: h => h(App)
})
