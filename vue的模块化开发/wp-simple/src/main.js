import Vue from 'vue'//es6方式引入Vue
import App from './App.vue'
//在整个项目中，带了模版template后缀就是vue，如果没有带模版后缀就是js 
// main.js的主要任务就是用来配置全局整个项目
import router from './router.config.js'//引入路由
import 'animate.css'//没有使用变量引入所以是全局引入，也可以使用require('animate.css')引入，也可以在index.html中引入
import loading from './loading' //引入全局loading插件
Vue.use(loading)//Vue.use会安装第三方loading文件夹里install方法.可以做更多的同时使用
new Vue({
  el: '#app',
  // render:(createElement)=>{
    // createElement('#app',vm,'字符型模版')//第一个参数'#app'可以默认不写，因为el下已经挂载过了，vm是一个可选参数也可以省略，字符型模版没有也可以省略有的话有的话指向组件本身App，等于说把模版App注入到el里面
    // createElement(App)
  // },
  // render:(createElement)=>createElement(App)->
  // render:createElement=>createElement(App)
  render: h => h(App),//render是字符串模版的替代方案，函数是组件就是说函数没有自己的数据，叫无状态。如果制定了render后面跟上了一个构造函数，它不会从template或者el选项指定的挂载元素中提取HTML模版来编译或者渲染这个函数。这是一个手动渲染的过程，也就是说render是一个渲染函数
  router
})
