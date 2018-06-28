import { RECEIVE_USER_PROFILE } from './userConstants';

const setUserProfile = payload => ({
  type: RECEIVE_USER_PROFILE,
  payload
});

export const fetchUserProfile = () => {
  return (dispatch, getState, { spotifyFetcher }) => {
    spotifyFetcher('me').then(json => {
      return dispatch(setUserProfile(json));
    });
  };
};
