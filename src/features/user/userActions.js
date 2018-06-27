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

/*
export const fetchArtistAlbums = artistId => {
  return (dispatch, getState, { spotifyFetcher }) => {
    spotifyFetcher(`artists/${artistId}/albums?market=FI&limit=50`).then(json => {
      dispatch(setArtistAlbums(json));
    });
  };
};

*/
