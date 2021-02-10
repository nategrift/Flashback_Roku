import config from '../config.js';
import fetchServer from '../util/requestsJwt'

let clearTokenTimer;

export default {
  async login(context, payload) {
    payload.url = '/api/auth/login';
    await context.dispatch('auth', payload);
  },
  async signup(context, payload) {
    payload.url = '/api/auth/create-account';
    await context.dispatch('auth', payload);
  },
  async selectProfile(context, payload) {
    const res = await fetchServer('/api/user/profiles/' + payload.profile_id, 'POST', payload.token, payload.pin);

    const profile = {
      token: res.token,
      userId: res.userId,
      profile: res.profile
    }
    localStorage.setItem('token', profile.token);
    localStorage.setItem('userId', profile.userId);
    localStorage.setItem('profile', profile.profile);

    await context.commit('setUser', profile);
  },
  async auth(context, payload) {
    let url = payload.url;
    delete payload.url;

    const response = await fetch(config.domain + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseData = await response.json();
    if (!response.ok || !responseData.ok) {
      const error = new Error(
        responseData.message || 'Failed to authenticate'
      );
      throw error;
    }

    const expiresIn = +responseData.tokenExpiration * 1000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('token', responseData.token);
    localStorage.setItem('userId', responseData.userId);
    localStorage.setItem('tokenExpiration', expirationDate);

    clearTokenTimer = setTimeout(function () {
      context.dispatch('autoLogout');
    }, expiresIn)

    context.commit('setUser', {
      token: responseData.token,
      userId: responseData.userId,
    });
    context.commit('resetError');
  },

  // Setting errors
  setError(context, payload) {
    context.commit('setError', {
      error: payload.error.message || payload.error || 'An error occured',
    });
  },

  // Logout and remove tokens
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('profile');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(clearTokenTimer);

    context.commit('setUser', {
      token: '',
      userId: '',
      profile: ''
    });
    context.commit('resetError');

  },

  // Logout and remove tokens
  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();

    // If it will expire in 10 seconds
    if (expiresIn < 10000) {
      return;
    }

    clearTokenTimer = setTimeout(function () {
      context.dispatch('autoLogout');
    }, expiresIn)

    const profile = localStorage.getItem('profile');

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
        profile: profile || ''
      })
    }
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout')
  }
};
