import axios from 'axios';
import store from 'store';
import { refreshAccessToken } from 'features/accessToken/accessTokenActions';

const instance = axios.create({
  baseURL: 'https://api.spotify.com/v1'
});

instance.interceptors.request.use(
  config => {
    console.log('interceptaccess', getToken('access_token'));
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
          console.log('refersh_token refresh not ok');
        });
    }
  }
);
const getToken = token => {
  const { auth } = store.getState();
  return auth[token];
};

export default instance;
