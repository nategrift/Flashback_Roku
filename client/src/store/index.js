import { createStore } from 'vuex'

import rootMutations from './mutations.js';
import rootGetters from './getters.js';
import rootActions from './actions.js';

const store = createStore({
  state() {
    return {
      token: '',
      userId: '',
      tokenExpiration: '',
      profile: null,
      error: ''
    };
  },
  mutations: rootMutations,
  getters: rootGetters,
  actions: rootActions
});

export default store;