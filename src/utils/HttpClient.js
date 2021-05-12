import { getApiToken } from "./Helpers";

class Http {
  BASE_URL = 'http://18.221.234.213';
  API_PREFIX = '/api';

  async request({ route, params = null, method = 'GET' }) {
    let token = await getApiToken();

    const config = {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    };

    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }

    if (method !== 'GET') {
      config['body'] = JSON.stringify(params);
    }

    let url = this.BASE_URL + this.API_PREFIX + route;
    // console.log('url', url, config);
    let response = await fetch(url, config)
    // .then(response => {
    //   console.log('Network Response', response.status)
    //   return response.json()
    // })
    // .catch(error => {
    //   console.log('Network Error', error)
    // });

    // return response;
    return response.json();
  }

  get(route, params = null) {
    return this.request({
      route,
      params,
      method: 'GET'
    });
  }

  post(route, params = null) {
    return this.request({
      route,
      params,
      method: 'POST'
    });
  }

  put(route, params = null) {
    return this.request({
      route,
      params,
      method: 'PUT'
    });
  }

  delete(route, params = null) {
    return this.request({
      route,
      params,
      method: 'DELETE'
    });
  }
}

// Create a singleton instance
const HttpClient = new Http();
Object.freeze(HttpClient);

export default HttpClient;