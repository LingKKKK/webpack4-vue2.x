// mutations.js
import * as types from './mutation-types'

const mutations = {
  [types.SET_TODO_LIST](state, todoList) {
    state.todoList = todoList
  }
}
export default mutations

// 可以看到， mutations 是一个对象，一个“事件类型”就对应可一个处理函数。
// 处理函数接受 state 作为它的第一个参数，第二个参数是额外的，一般称之为“荷载(payload) ”。
// 这里我们的荷载是一个 todoList，这个处理函数将 state 原来的 todoList 改为传入的荷载。

// todo-list.vue
// import { mapGetters, mapMutations } from 'vuex'

// export default {
//   ...
//   methods: {
//     ...
//     addItem () {
//       let itemText  = window.prompt('请输入要添加的事项：')
//       if (itemText) {
//         let list = this.todoList.slice();
//         list.push({
//           text: itemText,
//           done: false,
//           checked: false
//         })
//         this.setTodoList(list)
//       }
//     }
//     ...
//     ...mapMutations({
//       setTodoList: 'SET_TODO_LIST'
//     })
//   }
// }
