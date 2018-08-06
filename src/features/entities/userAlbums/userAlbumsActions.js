import { database } from 'firebase.js';
import values from 'lodash/values';
import { RECEIVE_OWNED_ALBUMS } from './userAlbumsConstants';

const receiveOwnedAlbums = albumIds => ({
  type: RECEIVE_OWNED_ALBUMS,
  payload: albumIds
});

export const fetchUserOwnedAlbumsByArtistId = artistId => {
  return (dispatch, getState) => {
    const user = getState().user;
    database.ref(`album/${user.id}/${artistId}`).on('value', snapshot => {
      const data = snapshot.val();
      const albumIds = values(data).map(item => item.albumId);
      dispatch(receiveOwnedAlbums(albumIds));
    });
  };
};
