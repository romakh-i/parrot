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

    return new Promise((resolve, reject) => {
      if (method === 'GET') {
        requestParams.headers['Authorization'] = 'Bearer ' + store.getState().getIn(["user", "jwt"]);
      } else {
        requestParams.body = JSON.stringify(params);
      }
      console.log(requestParams);

      return fetch(request_url, requestParams)
        .then(response => {
          if (response.ok) {
            response.text().then(text => {
              let type = response.headers.get("Content-Type");
              if (text) {
                if (type.indexOf("text") !== -1)
                  resolve(text)
                else
                  resolve(JSON.parse(text))
              } else {
                resolve(text)
              }
            }).catch(e => {
              reject(e)
            });
          } else {
            response.text().then(text => {
              if (text)
                reject(JSON.parse(text))
              else
                reject(text)
            }).catch(e => reject(e));
          }
        }).catch((error) => reject(error));
    });
  }

  static get = (url, params = {}) => HTTP.request(url, 'GET', params);

  static post = (url, params = {}) => HTTP.request(url, 'POST', params);
}