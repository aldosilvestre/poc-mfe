import { createStore } from 'vuex'
import countStore from './store/count.store'
import VuexPersistence from 'vuex-persist'

const modules = {
  countStore
}

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})

const store = createStore({
  state: {},
  getters: {},
  actions: {},
  mutations: {
    updateApp(state, payload) {
      Object.keys(state).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  modules,
  plugins: [vuexLocal.plugin]
})

store.subscribe(() => {
  document.dispatchEvent(new Event('storageUpdate'))
})

export default store
