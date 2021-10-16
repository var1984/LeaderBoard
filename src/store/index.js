import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },

  mutations: {
    SET_USERS_SCORE(state, users) {
      state.users = users.map((user) => ({
        ...user,
        score: user.score || 0, id: user.id
      }));
    },
  },
  actions: {
    async GET_USERS_SCORE({ commit }) {
      const url = 'http://coding-test.cube19.io/frontend/v1/starting-state'
      try {
        const users = await axios
          .get(url)
        commit("SET_USERS_SCORE", users.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    get_users(state) {
      return state.users;
    },
  },
  modules: {},
});
