import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)//安装，模块化环境下vueRouter等插件要安装到vue头上
// Vue.component('router-link',routerlink)
// Vue.component('router-view',routerview)

import home from './components/home.vue'
import product from './components/proudct.vue'
import user from './components/user.vue'
import login from './components/login.vue'
import reg from './components/reg.vue'
import detail from './components/detail.vue'
import error from './components/error.vue'

let routes=[
    {path:'/home',component:home},
    {
        path:'/product',
        component:product,
        children:[
            {name:'detail',path:'/detail/:aid',component:detail}
        ]
    },
    {path:'/user',component:user},
    {path:'/login',component:login},
    {path:'/reg',component:reg},
   
    {path:'/',redirect: home},
    {path:'*',component:error},

]
let router=new VueRouter({
    routes
})
export default router