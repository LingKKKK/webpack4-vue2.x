const state = {
  todoList: JSON.parse(localStorage.getItem('todoList')) || []
}

export default state

// 声明一个新的变量, 用来全局的状态管理, 全局都可以读取到这个state
