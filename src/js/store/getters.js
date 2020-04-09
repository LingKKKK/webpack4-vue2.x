export const todoList = state => state.todoList
// export const todoList1 = state => state.todoList1
// export const todoList2 = state => state.todoList2
// export const todoList3 = state => state.todoList3

// getter 仅是一个读取的操作, 在state中拿取数据
// 函数的参数是state 返回值是state.todoList; 可以将变量映射到computed属性下

// 调取参数 =>
// import { mapGetters } from 'vuex'
// ...
// export default {
//   ...
//   computed: {
//     ...mapGetters([
//     'todoList'
//   ])
// }
//   ...
// }
