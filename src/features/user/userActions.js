import api from 'common/utils/axiosUtils';
import { RECEIVE_USER_PROFILE } from './userConstants';

const setUserProfile = payload => ({
  type: RECEIVE_USER_PROFILE,
  payload
});

export const fetchUserProfile = () => {
  return dispatch => {
    api('/me').then(json => dispatch(setUserProfile(json)));
  };
};
