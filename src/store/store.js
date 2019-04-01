import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  ID: '',
};

export const LOGIN = 'LOGIN';
const mutations = {
  [LOGIN] (state, keyword) {
    state.ID = keyword
  },
};
const actions = {
  [LOGIN] ({ commit }, keyword) {
    commit(LOGIN, keyword)
  },
};
const getters = {
  ID: state => state.ID
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
