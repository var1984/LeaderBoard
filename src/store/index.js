import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    posts: []
  },

  mutations: {
    SET_USERS_SCORE(state, users) {
      state.users = users.map((user) => ({
        ...user,
        score: user.score || 0,

      }));
    },
    SET_NEW_SCORE(state, newScore) {
      state.users.filter(user => user.name === newScore.name ? user.score = newScore.score : user)
    },
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    SET_NEW_USER(state, newUser) {
      state.users.push(newUser)
    }
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
    async GET_POSTS({ commit }) {
      const url = 'https://jsonplaceholder.typicode.com/posts'
      try {
        const posts = await axios
          .get(url)
        commit("SET_POSTS", posts.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    get_users(state) {
      return state.users
      // .sort((a, b) => b.score - a.score)

    },
    top_leader(state) {
      // console.log(state.users);
      return state.users
        .map(user => user)
        .slice(0, 4).sort((a, b) => b.score - a.score);

    },
    posts(state) {
      return state.posts
    }
  },
  modules: {},
});
