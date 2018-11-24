<template>
  <div id="app">
   <input type="button" value="+" @click="add(1)"> <!-- 此时的add就是dispatch里面的类型'add'，1就是负载payload -->
   <input type="button" value="-" @click="jian(1)">
   <input type="button" value="odd" @click="odd(1)"><!-- 处理逻辑示例 -->
   <input type="button" value="async+" @click="async('count')"><!-- 异步示例 -->
   <br>
   <!-- {{count}} -->
   <!-- {{cptCount}} -->
   {{count}}
   <hr>
   <child></child>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';//从vuex引入mapActions这个函数帮我们管理各种各样的请求;mapGetters这个函数帮我们接收发送过来的请求，并把state状态发送给mutations
import child from './conponents/child'
export default {
  name: 'App',
  components:{
    child
  },
  data(){
    return {
      //  count:0
    }
   
  },
  // methods:{
  //   // add(ev){
  //   // //  console.log(this.$store);
  //   // // 这些都是不正规拿取数据的方式
  //   //  this.$store.dispatch('add',1)// 找到actions,此时的add就是dispatch里面的类型'add',1就是负载payload
  //   //  this.$store.commit('increment',) // 找到mutations
  //   // }
  // }
  // 正常的方法是conponents通过mapActions()发送dispatch请求给actions，mapActions()这个函数帮我们管理将来各种各样的请求，再由
  //  actions通过this.$store.commit传递给mutations，然后mutations在通过state的状态对发送过来的请求进行处理;同时根实例上的计算属性发现组件conponents通过
  // mapGetters这个函数对接收到的各种请求传递给getters,getters通过这些请求就可以拿到state的状态，并返回因为state状态的改变而引起改变的数据
  methods:mapActions([//让mapActions接管methods方法里面的值,返回一个对象
    'add','jian','odd','async'
  ]),
  methods:{
    ...mapActions([
      'add','jian','odd','async'
    ]),
    show(){console.log('show');}
  },
  mounted() {
    this.show()
  },
  // computed:{
  //   cptCount(){// mapGetters函数的实现原理：当计算属性它依赖的数据通过发送一个type类型，发送给actions，actions再交给mutations,mutations又改变了state状态,而state发生改变计算属性就会重新计算。
  //      return this.$store.state.count
  //   }
  // }
  computed:mapGetters([
    'count','count1'
  ])
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
</style>
