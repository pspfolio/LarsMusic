import { SET_ACCESSTOKEN } from './accessTokenConstants';

export function setAccessToken(data) {
  return {
    type: SET_ACCESSTOKEN,
    payload: data.access_token
  };
}
