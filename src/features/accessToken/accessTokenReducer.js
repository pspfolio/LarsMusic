import { SET_ACCESSTOKEN } from './accessTokenConstants';

export default function accessToken(state = '', action) {
  switch (action.type) {
    case SET_ACCESSTOKEN:
      return action.payload;
    default:
      return state;
  }
}
