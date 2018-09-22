import { USER_AUTHENTICATED } from './accessTokenConstants';
import { saveTokensState } from 'common/utils/localStorage';
import { fetchUserProfile } from 'features/user/userActions';

const setUserTokens = accessToken => ({
  type: USER_AUTHENTICATED,
  payload: accessToken
});

export const setTokens = ({ access_token, refresh_token }) => {
  const tokens = { access_token, refresh_token };
  saveTokensState(tokens);

  return (dispatch, getState, { spotifyFetcher }) => {
    dispatch(setUserTokens(tokens));
    return dispatch(fetchUserProfile());
  };
};
