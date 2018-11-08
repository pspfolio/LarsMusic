import { createSelector } from 'reselect';
import values from 'lodash/values';

const getAlbumsById = (state, id) =>
  values(state.entities.albums.itemsById).filter(entity => entity.artists.includes(id));

const getAlbumByAlbumId = (state, albumId) => state.entities.albums.itemsById[albumId];

const getOwnedAlbums = state => state.entities.userAlbums.items;

export const getAllAlbums = state => state.entities.albums.itemsById;

export const selectAlbumsByArtistId = createSelector(getAlbumsById, getOwnedAlbums, (albums, ownedAlbumIds) => {
  if (albums.length) {
    const result = albums.map(album => {
      return {
        ...album,
        owned: ownedAlbumIds.includes(album.id)
      };
    });

    return result;
  }

  return [];
});

export const selectOwnedAlbumsByArtistId = createSelector(getAlbumsById, getOwnedAlbums, (albums, ownedAlbumIds) => {
  if (albums.length) {
    const ownedAlbums = albums.filter(album => ownedAlbumIds.includes(album.id));
    const result = ownedAlbums.map(album => ({ ...album, owned: true }));
    return result;
  }

  return [];
});

export const selectAlbumByAlbumId = createSelector(getAlbumByAlbumId, album => album);
