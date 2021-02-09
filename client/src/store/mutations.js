export default {
  setUser(state, payload) {
    console.log(payload)
    state.token = payload.token,
    state.userId = payload.userId,
    state.tokenExpiration = payload.tokenExpiration,
    state.profile = payload.profile || null
  },
  setError(state, payload) {
    state.error = payload.error
  },
  resetError(state) {
    state.error = ''
  }
}