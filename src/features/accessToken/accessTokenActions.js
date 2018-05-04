import { SET_ACCESS_TOKEN } from './accessTokenConstants';

export function setAccessToken(data) {
  return {
    type: SET_ACCESS_TOKEN,
    payload: data.access_token
  };
}
