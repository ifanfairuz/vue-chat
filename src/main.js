import Vue from 'vue'
import Vuex from 'vuex'
import { LoaderPlugin } from 'vue-google-login'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(LoaderPlugin, {
  client_id: '852266590854-187280ijdp2cer8pgmh6gkemlnl4osnv.apps.googleusercontent.com'
})

new Vue({
  router,
  store: new Vuex.Store(store),
  render: h => h(App)
}).$mount('#app')
