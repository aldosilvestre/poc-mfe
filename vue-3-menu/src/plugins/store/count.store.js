export default {
  namespaced: true,
  state: {
    count: 0
  },
  reducers: {
    getCount (state) {
      return state.count
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
  },
  getters: {
    getCount (state) {
      return state.count
    }
  }
}
