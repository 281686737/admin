 
<template>
<!--App.vue是一个单文件组件,可以只有模版，没有逻辑，也可以没有样式。一个组件只认一个模版，一个组件里面没有逻辑也可以导出，引入时候如何保存，如何注册决定了如何使用 -->
  <div id="app">
    
        <loading :title="'加载中'">
          <div slot="s1">ah</div>
        </loading><!-- 使用自定义的loading插件 -->
    <!-- <img src="./assets/logo.png">
    <h1>{{ msg }}</h1> -->
    <hd class="hd"></hd>
    <!-- <buycar></buycar> -->
    <transition 
    enter-active-class="animated bounceInLeft"
    leave-active-class="animated bounceOutRight"
    >
     <router-view class="rt-view"></router-view>
    </transition>
   
    <ft class="ft-style"></ft>
  </div>
</template>

<script>
import hd from './components/hd'//引入外部组件
import ft from './components/ft'//引入外部组件
import buycar from './components/buycar'//引入外部组件
// let App={
//   name: 'app',
//   data () {
//     return {
//       msg: 'Welcome to Your Vue.js App'
//     }
//   }
// }
// export default App等价于下面的写法
export default {
  name: 'app',
  data () {
    return {
      msg: '我是App组件'
    }
  },
  components:{
    hd,ft,buycar//注册外部组件
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.rt-view{position: absolute;left: 0;top: 200px;right: 0;bottom: 0;}
.ft-style{position: absolute;left: 0;top: 360px;right: 0;bottom: 0;}
.hd{margin:10px}
</style>
