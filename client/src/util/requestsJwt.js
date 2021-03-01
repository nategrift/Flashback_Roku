import config from '../config.js';

export default async (url, method, token, payload) => {



    const response = await fetch(config.domain + url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token
      },
      body: JSON.stringify(payload)
    });

    const responseData = await response.json();
    if (!response.ok || !responseData.ok) {
      const error = new Error(
        responseData.message || 'Something went wrong!'
      );
      throw error;
    }
    return responseData;
}