import { USER_AUTHENTICATED } from './accessTokenConstants';

const initialState = {
  refresh_token: '',
  access_token: ''
};

export default function accessToken(state = initialState, action) {
  switch (action.type) {
    case USER_AUTHENTICATED:
      return { ...action.payload };
    default:
      return state;
  }
}
