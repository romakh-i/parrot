import { store } from "../components/AppRouter";

const API_URL = 'https://ski-rent-api.herokuapp.com/api';

export default class HTTP {
  static request(url, method, params) {
    let requestParams = {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const request_url = API_URL + url;

    if (method === 'GET') {
      requestParams.headers['Authorization'] = 'Bearer ' + store.getState().user.jwt;
    } else {
      requestParams.body = JSON.stringify(params);
    }
    console.log(requestParams);
    return fetch(request_url, requestParams)
      .then(response => response.json())
      .catch((error) => error);
  }

  static get = (url, params = {}) => HTTP.request(url, 'GET', params);

  static post = (url, params = {}) => HTTP.request(url, 'POST', params);
}