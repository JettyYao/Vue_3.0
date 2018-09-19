import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/element.js'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './assets/css/global.scss'
import './assets/js/global.js'

Vue.use(mavonEditor)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
