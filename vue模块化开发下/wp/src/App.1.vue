<template>
  <div id="app">
   <input type="button" value="+" @click="add">
   <!-- {{count}} -->{{this.$store.state.count}}
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      //  count:0
    }
   
  },
  methods:{
    add(){
    //  console.log(this.$store);
    // 这些都是不正规拿取数据的方式，正常的方法是conponents通过mapActions()发送请求给actions，mapActions()这个函数帮我们管理将来各种各样的请求，再由
    // actions通过this.$store.commit传递给mutations，然后mutations在通过state的状态对发送过了的请求进行处理
    //  this.$store.dispatch('add',)// 找到actions
     this.$store.commit('increment',) // 找到mutations
    }
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
</style>
