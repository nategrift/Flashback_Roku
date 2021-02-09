import config from '../config.js';

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

    context.commit('setUser', {
      token: responseData.token,
      tokenExpiration: responseData.tokenExpiration,
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

    context.commit('setUser', {
      token: responseData.token,
      tokenExpiration: responseData.tokenExpiration,
      userId: responseData.userId,
    });
    context.commit('resetError');
  },
  setError(context, payload) {
    context.commit('setError', {
      error: payload.error.message || payload.error || 'An error occured',
    });
  },
};
