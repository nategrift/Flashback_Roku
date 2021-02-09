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
  isAutoLogout(state) {
    return state.didAutoLogout;
  }
};