import { database } from 'firebase.js';
import { RECEIVE_OWNED_ARTISTS } from './userArtistConstants';
import { fetchArtists } from '../artists/artistsActions';

const setListOfOwnedArtist = artistIdList => ({
  type: RECEIVE_OWNED_ARTISTS,
  payload: artistIdList
});

export const fetchUserArtists = () => {
  return (dispatch, getState) => {
    const state = getState();
    database
      .ref(`album/${state.user.data.id}`)
      .orderByChild('data/name')
      .on('value', snapshot => {
        const data = snapshot.val();
        if (data) {
          const artistIds = Object.keys(data);
          dispatch(fetchArtists(data));
          dispatch(setListOfOwnedArtist(artistIds));
        }
      });
  };
};
