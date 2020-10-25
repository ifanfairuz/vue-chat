import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { LoaderPlugin } from 'vue-google-login'

Vue.config.productionTip = false
Vue.use(LoaderPlugin, {
  client_id: '852266590854-187280ijdp2cer8pgmh6gkemlnl4osnv.apps.googleusercontent.com'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
