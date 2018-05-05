import { SET_ACCESS_TOKEN } from './accessTokenConstants';
import { saveAccessTokenState } from 'common/utils/localStorage';

export function setAccessToken(data) {
  saveAccessTokenState(data.access_token);

  return {
    type: SET_ACCESS_TOKEN,
    payload: data.access_token
  };
}
