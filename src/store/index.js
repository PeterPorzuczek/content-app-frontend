import Vue from 'vue';
import Vuex from 'vuex';

import searchresults from './modules/searchresults';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  modules: {
    searchresults,
  },
  state: {},
  mutations: {},
  plugins: [],
});

export default store;
