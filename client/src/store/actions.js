import config from '../config.js';

let clearTokenTimer;

export default {
  async login(context, payload) {
    const requestBody = {
      username: payload.username,
      password: payload.password,
    };
    const response = await fetch(config.domain + '/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
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

    clearTokenTimer = setTimeout(function() {
      context.dispatch('autoLogout');
    }, expiresIn)

    context.commit('setUser', {
      token: responseData.token,
      userId: responseData.userId,
    });
    context.commit('resetError');
  },

  async signup(context, payload) {
    const requestBody = {
      email: payload.email,
      password: payload.password,
      username: payload.username,
      pin: payload.pin,
    };
    console.log(requestBody);
    const response = await fetch(
      config.domain + '/api/auth/create-account',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      }
    );
    console.log(response);
    const responseData = await response.json();
    console.log(responseData);
    if (!response.ok || !responseData.ok) {
      const error = new Error(
        responseData.message || 'Failed to authenticate'
      );
      throw error;
    }

    const expiresIn = +responseData.tokenExpiration * 1000;
    const expirationDate = new Date().getTime() + expiresIn;


    localStorage.setItem('tokenExpiration', expirationDate);
    localStorage.setItem('token', responseData.token);
    localStorage.setItem('userId', responseData.userId);



    context.commit('setUser', {
      token: responseData.token,
      userId: responseData.userId,
    });
    context.commit('resetError');
  },
  setError(context, payload) {
    context.commit('setError', {
      error: payload.error.message || payload.error || 'An error occured',
    });
  },
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
  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();
    
    // If it will expire in 10 seconds
    if (expiresIn < 10000) {
      return;
    }

    clearTokenTimer = setTimeout(function() {
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
