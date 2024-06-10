import axios from 'axios';
// import {API_BASE_URL} from '@env';

const HTTP_LOCAL = 'http://10.0.2.2:8000';

export const api = axios.create({
  baseURL: HTTP_LOCAL + '/data/user/',
});

export const apiAuth = axios.create({
  baseURL: 'http://10.0.2.2:8000/auth-user/',
});
api.interceptors.request.use(
  async function (config) {

    config.headers.set('id', 'fdgdfgdf');
    config.headers.set('gym_id', 'dfgdfg');
    config.headers.set('Content-Type', 'application/json');
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const apiTest = axios.create({
  baseURL: 'http://10.0.2.2:8000',
});
