import { RECEIVE_USER_PROFILE } from './userConstants';

const user = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_USER_PROFILE:
      return { ...action.payload };
    default:
      return state;
  }
};

export default user;
