// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '@/config/axios'
import '@/style/style.less'
import '@/style/common.less'

Vue.config.productionTip = false

/* eslint-disable no-new */
router.onReady(function () {
  Vue.use(axios, { router })
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
