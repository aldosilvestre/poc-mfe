import { createStore } from 'vuex'

const countStore = {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
}

export default createStore({
  state: {},
  modules: {
    countStore
  }
})
