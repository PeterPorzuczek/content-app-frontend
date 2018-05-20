import axios from 'axios';

const mutations = {
  ADD_RESULTS(state, results) {
    state.results.push(results);
  },
};

const actions = {
  PUSH({ commit }, results) {
    commit('ADD_RESULTS', results);
  },
  async LOAD_RESULTS({ commit }, payload) {
    const { data } = await axios.get(`https://rster.herokuapp.com/search/batch/${payload.lang}/${payload.q}`);
    commit('ADD_RESULTS', data);
  },
};

const getters = {
  GET_RESULTS(state) {
    return state.results;
  },
  GET_RESULTS_COUNT(state) {
    return state.results.length;
  },
  GET_LAST_RESULTS(state) {
    return state.results.slice(-1).pop();
  },
};

const state = {
  results: [],
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
