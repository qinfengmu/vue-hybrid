// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Hybrid} from './utils/hybrid'
const hybrid = new Hybrid();
console.log( hybrid);

Vue.config.productionTip = false;
Vue.prototype.$hybrid = hybrid;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
console.log(Vue.prototype)