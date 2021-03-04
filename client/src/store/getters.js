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
  },
  profile(state) {
    return state.profile;
  },
  isKid(state) {
    //  If no profile
    if (!state.profile) {
      return false;
    }
    //  If profile and kid
    if (state.profile.access < 1) {
      return true;
    } else {
      return false;
    }
  }
};