import { SET_ACCESS_TOKEN } from './accessTokenConstants';
import { saveAccessTokenState } from 'common/utils/localStorage';
import { fetchUserProfile } from 'features/user/userActions';

const accessTokenAction = accessToken => ({
  type: SET_ACCESS_TOKEN,
  payload: accessToken
});

export const setAccessToken = ({ access_token }) => {
  saveAccessTokenState(access_token);

  return (dispatch, getState, { spotifyFetcher }) => {
    dispatch(accessTokenAction(access_token));
    return dispatch(fetchUserProfile());
  };
};
