import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import {BootstrapVue} from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

import VueSocketIOExt from 'vue-socket.io-extended'
import io from 'socket.io-client'
 
const socket = io('http://localhost:3000')
 
Vue.use(VueSocketIOExt, socket, { store })
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/*
  delete vue-socket.io dependency -> changed for vue-socked.io-extended
  delete uws dependency

*/