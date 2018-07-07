import { database } from 'firebase.js';
import { REQUEST_OWNED_ARTISTS, RECEIVE_OWNED_ARTISTS } from './userArtistConstants';
import { fetchArtists } from 'features/artist/artistActions';

const setRequestListOfOwnedArtist = () => ({
  type: REQUEST_OWNED_ARTISTS
});

const setListOfOwnedArtist = artistIdList => ({
  type: RECEIVE_OWNED_ARTISTS,
  payload: artistIdList
});

export function fetchUserArtists() {
  return (dispatch, getState, { spotifyFetcher }) => {
    dispatch(setRequestListOfOwnedArtist());
    const state = getState();
    database.ref(`album/${state.user.id}`).on('value', snapshot => {
      const artistIds = Object.keys(snapshot.val());
      dispatch(fetchArtists(artistIds));
      dispatch(setListOfOwnedArtist(artistIds));
    });
  };
}
