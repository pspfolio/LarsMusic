import { database } from 'firebase.js';
import values from 'lodash/values';
import findKey from 'lodash/findKey';
import { RECEIVE_OWNED_ALBUMS, REMOVE_OWNED_ALBUM } from './userAlbumsConstants';

const receiveOwnedAlbums = albumIds => ({
  type: RECEIVE_OWNED_ALBUMS,
  payload: albumIds
});

const removeAlbum = albumId => ({
  type: REMOVE_OWNED_ALBUM,
  payload: albumId
});

export const toggleLikedAlbum = (artistId, albumId) => {
  return (dispatch, getState) => {
    const user = getState().user;
    const artistRef = database.ref(`album/${user.id}/${artistId}`);

    artistRef.once('value', snapshot => {
      const key = findKey(snapshot.val(), item => item.albumId === albumId);
      if (key) {
        dispatch(removeAlbum(albumId));
        artistRef
          .child(key)
          .remove()
          .then()
          .catch(() => {
            dispatch(receiveOwnedAlbums([albumId]));
          });
      } else {
        artistRef.push({ albumId: albumId });
      }
    });
  };
};

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
