import Vue from 'vue'
import Vuex from 'vuex'
import authority from './modules/authority'
import getters from './getters'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    authority,
  },
  getters
})
