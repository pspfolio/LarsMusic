import { database } from 'firebase.js';
import { REQUEST_OWNED_ARTISTS, RECEIVE_OWNED_ARTISTS } from './userArtistConstants';
import { fetchArtists } from '../artists/artistsActions';

const setRequestListOfOwnedArtist = () => ({
  type: REQUEST_OWNED_ARTISTS
});

const setListOfOwnedArtist = artistIdList => ({
  type: RECEIVE_OWNED_ARTISTS,
  payload: artistIdList
});

export const addArtist = (artistId, albumId) => {
  return (dispatch, getState) => {
    const user = getState().user;
    database.ref(`album/${user.id}/${artistId}`).push({ albumId: albumId });
    dispatch(fetchUserArtists());
  };
};

export const fetchUserArtists = () => {
  return (dispatch, getState) => {
    dispatch(setRequestListOfOwnedArtist());
    const state = getState();
    database.ref(`album/${state.user.id}`).on('value', snapshot => {
      const artistIds = Object.keys(snapshot.val());
      dispatch(fetchArtists(artistIds));
      dispatch(setListOfOwnedArtist(artistIds));
    });
  };
};
