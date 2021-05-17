import { createStore } from 'vuex';

const store = createStore({
  state() {

    return {
      count: 0, todos: [
        { id: 1, text: '...1', done: true },
        { id: 2, text: '...2', done: false }
      ]
    }
  },
  mutations: {
    increment(state: any) {
      state.count++
    },
    sub(state: any, step) {
      state.count -= step;
    }
  },
  actions: {
    addNasync(context: any, step) {
      setTimeout(() => {
        context.commit('sub', step);
      }, 3000);
    }
  },
  getters: {
    getTodoById: (state) => (id: any) => {
      return state.todos.find((todo: { id: any; }) => todo.id === id)
    }
  }
})

export default store;
