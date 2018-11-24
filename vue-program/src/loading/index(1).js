import loading from './components/loading.vue'//自定义一个vue的插件
export default {
    install:function(Vue){
        console.log('loading install',Vue);
        Vue.component('loading',loading)
    // Vue.component('router-link',routerlink)
    // Vue.component('router-view',routerview)
    }
}