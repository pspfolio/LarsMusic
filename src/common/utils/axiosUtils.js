import axios from 'axios';
import store from 'store';
import { refreshAccessToken } from 'features/accessToken/accessTokenActions';
import history from '../history';

const instance = axios.create({
  baseURL: 'https://api.spotify.com/v1'
});

instance.interceptors.request.use(
  config => {
    config.headers.authorization = `Bearer ${getToken('access_token')}`;
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  error => {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      store
        .dispatch(refreshAccessToken())
        .then(() => {
          return axios(originalRequest);
        })
        .catch(() => {
          console.log('going to push historyyy');
          history.push('/login');
        });
    }
  }
);
const getToken = token => {
  const { auth } = store.getState();
  return auth[token];
};

export default instance;
