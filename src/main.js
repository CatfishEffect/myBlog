// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

//定义默认地址
Vue.prototype.$url = 'http://www.blog.php/uploads/'

//api
import api from './assets/api/api'
Vue.prototype.$api = api;

//axios
//axios.defaults.baseURL = 'http://www.blog.php'
import axios from 'axios'
Vue.prototype.$axios = axios;


//qs
import qs from 'qs';
Vue.prototype.$qs = qs;




router.beforeEach((to, from, next) => {
  console.log(111);
  if( to.name == 'share' ){
    console.log(222);
  };
  next();
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
