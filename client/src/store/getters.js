export default {
  error(state) {
    return state.error;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    return !!state.token;
  },
  hasProfileSelected(state) {
    return !!state.profile;
  },
  isAutoLogout(state) {
    return state.didAutoLogout;
  }
};