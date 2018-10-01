import { USER_AUTHENTICATED } from './accessTokenConstants';
import { saveToLocalStorage } from 'common/utils/localStorage';
import { fetchUserProfile } from 'features/user/userActions';

const setUserTokens = accessToken => ({
  type: USER_AUTHENTICATED,
  payload: accessToken
});

export const setTokens = ({ access_token, refresh_token }) => {
  const tokens = { access_token, refresh_token };
  saveToLocalStorage('tokens', tokens);

  return dispatch => {
    dispatch(setUserTokens(tokens));
    return dispatch(fetchUserProfile());
  };
};

export const refreshAccessToken = () => {
  return (dispatch, getState) => {
    console.log('REFRESHING');
    const { refresh_token } = getState().auth;

    return fetch(`http://localhost:8888/refreshToken?refresh_token=${refresh_token}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        const { access_token } = data;
        console.log('access_token', access_token);
        setTokens({ access_token, refresh_token });
      })
      .catch(error => {
        console.log('error', error);
      });
  };
};
