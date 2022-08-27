import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import router from '@/router/routes'

Vue.config.productionTip = false;
Vue.use(VueRouter);

import 'bootstrap/dist/css/bootstrap.css';

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
