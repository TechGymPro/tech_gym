import axios from 'axios';
import {API_BASE_URL} from '@env';

export const apiAuth = axios.create({
    baseURL: API_BASE_URL + '/auth-user/',
});

export const api = axios.create({
    baseURL: API_BASE_URL + '/data/user/',
});
