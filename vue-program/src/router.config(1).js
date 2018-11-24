import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import home from './components/home.vue' //import是同步引入的，require是异步引入的
// import follow from './components/follow.vue'
// const follow=()=>{return 要加载的组件} //把follow组件打包成一个片，当这个follow组件被
// 加载的时候，它指向follow这个函数，这个函数被激活后内部会异步加载follow组件以及打包后的各
// 个代码块、代码片
//  const follow=()=>{return import('./components/follow.vue')} //配置一个异步路由
 const follow=()=> import(/* webpackChunkName: "group-follow" */'./components/follow.vue') //配置一个异步路由
import column from './components/column.vue'
import detail from './components/detail.vue'
import user from './components/user.vue'
import reg from './components/reg.vue'
import login from './components/login.vue'
import error from './components/error.vue'
let routes=[
    {path:'/home',component:home},
    {path:'/follow',component:follow},
    {path:'/column',component:column},
    {path:'/detail/:aid',component:detail},
    {path:'/login',component:login},
    {path:'/reg',component:reg},
    {path:'/user',component:user},
    {path:'/',redirect: '/home'},
    {path:'*',component:error}
    

]
export default  new VueRouter({
    routes
})