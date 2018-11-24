import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// console.log(Vuex)
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'
// const store=new Vuex.Store({// 把vuex下面的一个类store实例化
//     actions,
//     mutations,
//     getters,
//     state
// }) 
// export default store;

export default new Vuex.Store({// 把vuex下面的一个类store实例化
  actions,
  mutations,
  getters,
  state
})