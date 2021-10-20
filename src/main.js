import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles.scss'

import VirtualizedList from "vue-virtualized-list";

Vue.use(VirtualizedList)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
