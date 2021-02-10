export default {
  setUser(state, payload) {
    state.token = payload.token,
      state.userId = payload.userId,
      state.profile = payload.profile || null
  },
  setError(state, payload) {
    state.error = payload.error
  },
  resetError(state) {
    state.error = ''
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  }
}