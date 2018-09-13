// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import {Hybrid} from '@/utils/hybrid'
import axios from "axios"
const hybrid = new Hybrid();
console.log( hybrid);

Vue.config.productionTip = false;
Vue.prototype.$hybrid = hybrid;
Vue.prototype.$ajax = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
