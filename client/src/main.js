// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Header from './components/Header.vue'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'

Vue.config.productionTip = false

sync(store, router)

Vue.component('app-header', Header)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
