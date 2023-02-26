import axios from 'axios';

export const serverURL = 'http://localhost:2000';

const RESTAPI_URL = serverURL + '/api';
export const serverAPI = axios.create({
    baseURL: RESTAPI_URL,
    withCredentials: true,
});
