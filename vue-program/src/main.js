import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// import './assets/css/test.css' //第一种引入CSS样式的方法：全局引入
import './assets/css/base.css'
import './assets/js/font'
import './assets/js/jquery-1.7.2' //引入的是一个cdn打包后的jq，它内部会向全局暴露一个jq的$
// import Swipe from './assets/js/swipe' //因为swipe没有对外暴露，所以我们需要在引入的资源中./assets/js/swipe.js手工对外暴露一个swipe

import router from './router.config.js'
import axios from 'axios'
axios.interceptors.request.use(function (config) {//axios的拦截器
  // Do something before request is sent
  store.dispatch('VIEW_LOADING',true)
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  store.dispatch('VIEW_LOADING',false)
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

Vue.prototype.$http=axios
import filters from './filters'
Object.keys(filters).forEach(key =>Vue.filter(key,filters[key]) );//函数式编程的写法。object.keys(对象)，返回的是一个数组['key1','key2']

import loading from './loading' //引入loading插件
Vue.use(loading) //安装loading插件

import store from './store'
import 'animate.css'
new Vue({
  el: '#app',
  // data:{ //不使用状态管理加载组件的方法：把要加载的组件绑定到根实例头上，通过this.$root.$data中的状态（true/false）来判断组件是否显示
  //   bNav:true,
  //   bFoot:true,
  //   bLoading:false
  // },
  components: { App },
  template: '<App/>',
  router,store
})
