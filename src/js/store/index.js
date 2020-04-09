import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'

// 要使用 mutations，在 Vuex 的构造函数中，就要将 mutations 选项加进去：
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
})

// Vuex.Store => vuex的构造函数, 来初始化vuex实例
// 将state数据源引入vuex中
