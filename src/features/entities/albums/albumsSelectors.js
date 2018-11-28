import { createSelector } from 'reselect';
import values from 'lodash/values';

const getAlbumsById = (state, id) =>
  values(state.entities.albums.itemsById).filter(entity => entity.artists.includes(id));

const getAlbumByAlbumId = (state, albumId) => state.entities.albums.itemsById[albumId];

const getOwnedAlbums = state => state.entities.userAlbums.items;

export const getAllAlbums = state => state.entities.albums.itemsById;

export const selectAlbumsByArtistId = createSelector(getAlbumsById, getOwnedAlbums, (albums, ownedAlbums) => {
  if (albums.length) {
    const ownedAlbumIds = values(ownedAlbums).map(item => item.albumId);
    const result = albums.map(album => {
      return {
        ...album,
        owned: ownedAlbumIds.includes(album.id),
        albumType: ownedAlbums[album.id] ? ownedAlbums[album.id].albumType : ''
      };
    });

    return result;
  }

  return [];
});

export const selectOwnedAlbumsByArtistId = createSelector(getAlbumsById, getOwnedAlbums, (albums, ownedAlbums) => {
  const ownedAlbumIds = values(ownedAlbums).map(item => item.albumId);
  if (albums.length) {
    const owned = albums.filter(album => ownedAlbumIds.includes(album.id));
    const result = owned.map(album => {
      const ownedAlbum = ownedAlbums[album.id];
      if (!ownedAlbum) return { ...album, owned: true };

      const albumType = ownedAlbums[album.id].albumType;
      return { ...album, owned: true, albumType };
    });
    return result;
  }

  return [];
});

export const selectAlbumByAlbumId = createSelector(getAlbumByAlbumId, album => album);
