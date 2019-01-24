import { database } from 'firebase.js';
import values from 'lodash/values';
import mapKeys from 'lodash/mapKeys';
import findKey from 'lodash/findKey';
import { RECEIVE_OWNED_ALBUMS, REMOVE_OWNED_ALBUM } from './userAlbumsConstants';

const receiveOwnedAlbums = albums => {
  const normalized = mapKeys(albums, 'albumId');
  return {
    type: RECEIVE_OWNED_ALBUMS,
    payload: normalized
  };
};

const removeAlbum = albumId => ({
  type: REMOVE_OWNED_ALBUM,
  payload: albumId
});

export const addAlbumType = (artistId, albumId, albumType) => {
  return (dispatch, getState) => {
    const user = getState().user;
    const artistRef = database.ref(`album/${user.data.id}/${artistId}/albums`);

    artistRef.once('value', snapshot => {
      const key = findKey(snapshot.val(), item => item.albumId === albumId);
      artistRef.child(key).update({ albumType });
    });
  };
};

export const toggleLikedAlbum = (artistId, albumId, artist) => {
  return (dispatch, getState) => {
    const user = getState().user;
    const artistRef = database.ref(`album/${user.data.id}/${artistId}`);

    artistRef.once('value', snapshot => {
      const data = snapshot.val() ? snapshot.val().albums : [];
      const key = findKey(data, item => item.albumId === albumId);
      if (key) {
        dispatch(removeAlbum(albumId));
        artistRef
          .child(`albums/${key}`)
          .remove()
          .then(() => {
            dispatch(removeAlbum(albumId));
          })
          .catch(error => {
            console.log('ERROR on toggled', error.response);
          });
      } else {
        artistRef.update({ data: { ...artist } });
        artistRef
          .child('albums')
          .push({ albumId })
          .then()
          .catch(error => {
            console.log('ERROR on toggled ELSEE', error.response);
          });
      }
    });
  };
};

export const fetchUserOwnedAlbumsByArtistId = artistId => {
  return (dispatch, getState) => {
    const user = getState().user;
    database.ref(`album/${user.data.id}/${artistId}`).on('value', snapshot => {
      const data = snapshot.val() || [];
      const albums = values(data.albums).map(({ albumId, albumType }) => ({ albumId, albumType }));
      dispatch(receiveOwnedAlbums(albums));
    });
  };
};

export const watchAlbumRemoved = artistId => {
  return (dispatch, getState) => {
    const user = getState().user;
    const databaseRef = database.ref(`album/${user.data.id}/${artistId}`);
    databaseRef.on('child_removed', snapshot => {
      databaseRef.remove();
      dispatch({ type: 'REMOVE_OWNED_ARTIST', payload: { artistId } });
    });
  };
};
