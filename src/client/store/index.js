import Vue from 'vue'
import Vuex from 'vuex'
import { get, post } from '../http';

Vue.use(Vuex)

const handleError = e => {
  console.error(e);
  return {
    success: false,
    message: '客户端异常'
  }
}

export default new Vuex.Store({
  state: {
    todolist: []
  },
  mutations: {
    setTodolist(state, todolist) {
      state.todolist = todolist;
    }
  },
  actions: {
    fetchTodolist({commit}, querys = {}) {
      return get('/api/todo/getTodolist', querys).then(res => {
        if (res.success) {
          commit('setTodolist', res.data);
        }
        return res;
      }).catch(e => handleError(e));
    },
    addTodoItem({commit, rootState}, item) {
      return post('/api/todo/addTodoItem', item).then(res => {
        if (res.success) {
          const { todolist } = rootState;
          todolist.push(item);
          commit('setTodolist', todolist);
        }
        return res;
      }).catch(e => handleError(e));
    },
    doToggleState({commit, rootState}, item) {
      const state = item.state == 1 ? 0 : 1;
      item.state = state;
      return post('/api/todo/updateItem', item).then(res => {
        if (res.success) {
          const { todolist } = rootState;
          const itemItem = todolist.findIndex(i => i.name === item.name);
          todolist[itemItem].state = state;
          commit('setTodolist', todolist);
        }
        return res;
      }).catch(e => handleError(e));
    }
  }
})
