import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    SET_USERS_SCORE(state, user) {
      state.users = user
    }
  },
  actions: {
    async GET_USERS_SCORE({ commit }) {
      await axios.get('http://coding-test.cube19.io/frontend/v1/starting-state')
        .then(user => { commit("SET_USERS_SCORE", user.data) })
    }
  },
  getters: {
    USERS(state) {
      return state.users
    }
  },
  modules: {
  }
})
