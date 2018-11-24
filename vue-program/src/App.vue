<template>
  <div id="app">
   <!-- <div class="app-box"> -->
   <!-- <div class="box">
      Hello
      <home></home>
    </div> -->
  <!--
     使用非状态管理来加载组件
    <loading v-show="this.$root.$data.bLoading"></loading>
    <navbar v-show="this.$root.$data.bNav"></navbar>
    <footerbar v-show="this.$root.$data.bFoot"></footerbar> 
    
    -->
    <!-- 使用状态管理来加载组件v-show="bLoading" v-show="bNav" v-show="bFoot"-->
    <loading v-show="bLoading"></loading>
    <navbar v-show="bNav"></navbar>
    <footerbar v-show="bFoot"></footerbar> 
    <transition
    enter-active-class="animated fadeIn"
    >
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
import home from './components/home'
import navbar from './components/navbar'
import footerbar from './components/footerbar'
import follow from './components/follow'
import column from './components/column'
import user from './components/user'
import login from './components/login'
import reg from './components/reg'
import detail from './components/detail'
import error from './components/error'
// import $ from 'jquery' //模块化引入，但是必须npm i jquery才能使用
// import 'jquery' //全局模块化引入，但是必须npm i jquery才能使用
import {mapGetters} from 'vuex'
import * as types from './store/type.js'
export default {
  name: 'App',
  components:{
    home,navbar,footerbar,follow,column,user,login,reg,detail,error
  },
  computed:mapGetters([
    'bNav','bFoot','bLoading',
  ]),
  watch:{
  //路由监听:监听的是路由数据。watch监听的是数据，只要变化才会生效。如果数据是一个对象的话，可以通过处理函数里面的参数拿到
  //变化的物体。也就是说data里面的数据都可以通过watch的方式把数据名放在watch里面，一旦数据发生了变化，可以把变化的原内容拿
  //来使用。而$route恰恰是一个对象，所以to就是一个对象，可以通过这个对象发生变化的数据来实现状态管理
    $route(to){
      let path=to.path
    this.routeCheck(path)

    }
  },
  mounted() {
    this.routeCheck(this.$route.path)
  },
  methods:{
    routeCheck(path){
      // console.log(path);
      if(/home|follow|column/.test(path)){
       this.$store.dispatch(types.VIEW_NAV,true)
       this.$store.dispatch(types.VIEW_FOOT,true)
      }
      if(/detail|login|reg/.test(path)){
       this.$store.dispatch(types.VIEW_NAV,false)
       this.$store.dispatch(types.VIEW_FOOT,false)
      }
      if(/user/.test(path)){
       this.$store.dispatch(types.VIEW_NAV,false)
       this.$store.dispatch(types.VIEW_FOOT,true)
      }
    }
  }
}
</script>

<style>
/* .app-box{background: blue} */
.box{background: blue}
</style>
