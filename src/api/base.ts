import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// import {API_BASE_URL} from '@env';

const HTTP_LOCAL = 'http://localhost:8000';
export const apiAuth = axios.create({
  baseURL: HTTP_LOCAL + '/auth-user/',
});

export const api = axios.create({
  baseURL: HTTP_LOCAL + '/data/user/',
});
const getToken = async () => await AsyncStorage.getItem('id');
api.interceptors.request.use(
  async function (config) {
    const id = await getToken();
    config.headers.set('id', id);
    config.headers.set('Content-Type', 'application/json');
    console.log('CONFIG-------------------------------------', config.headers);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);
