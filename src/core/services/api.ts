import { create } from 'apisauce';
// import { store, AppState } from 'store';

const dev = 'http://192.168.88.68:9094/api/v1/';

// define the api
const api = create({
  baseURL: dev,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Authorization: 'Bearer none',
  },
});

// api.axiosInstance.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${store.getState().auth.token}`;
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

export default api;
