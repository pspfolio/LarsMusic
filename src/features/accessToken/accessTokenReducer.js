import { SET_ACCESS_TOKEN } from './accessTokenConstants';

export default function accessToken(state = '', action) {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return action.payload;
    default:
      return state;
  }
}
