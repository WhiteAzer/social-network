import axios from 'axios';

export const serverURL = 'https://zavod-backend.vercel.app';

const RESTAPI_URL = serverURL + '/api';
export const serverAPI = axios.create({
	baseURL: RESTAPI_URL,
	withCredentials: true,
});
