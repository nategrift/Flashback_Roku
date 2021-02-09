import { createStore } from 'vuex'

import rootMutations from './mutations.js';
import rootGetters from './getters.js';
import rootActions from './actions.js';

const store = createStore({
  state() {
    return {
      token: '',
      userId: '',
      profile: null,
      error: '',
      didAutoLogout: false
    };
  },
  mutations: rootMutations,
  getters: rootGetters,
  actions: rootActions
});

export default store;