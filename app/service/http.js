import axios from 'axios';

const camelcaseKeys = require('camelcase-keys');
const snakecaseKeys = require('snakecase-keys');

class Http {
  constructor() {
    const service = axios.create({
      baseURL: process.env.API_URL,
      headers: {
        common: {
          Accept: 'application/json',
        },
      },
    });

    service.interceptors.request.use(
      (config) => {
        const { token } = JSON.parse(localStorage.getItem('user'));
        // eslint-disable-next-line no-param-reassign
        if (token) {
          config.headers.common.Authorization = `Bearer ${token}`;
        }

        if (['/users/upload', '/users'].includes(config.url)) {
          // eslint-disable-next-line no-param-reassign
          config.headers.post['Content-Type'] = 'multipart/form-data';
        }

        if (
          config.data instanceof FormData ||
          config.method === 'delete' ||
          config.method === 'get'
        ) {
          return config;
        }

        return { ...config, data: snakecaseKeys(config.data) };
      },
      (error) => Promise.reject(error)
    );

    service.interceptors.response.use(
      (response) =>
        camelcaseKeys(response.data, {
          deep: true,
        }),
      (error) =>
        Promise.reject(
          camelcaseKeys(error.response.data, {
            deep: true,
          })
        )
    );

    this.service = service;
  }

  get(path) {
    return this.service.get(path);
  }

  post(path, payload) {
    return this.service.post(path, payload);
  }

  put(path, payload) {
    return this.service.put(path, payload);
  }

  delete(path, payload) {
    return this.service.delete(path, payload);
  }
}
export default new Http();
