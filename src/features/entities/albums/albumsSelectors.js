import { createSelector } from 'reselect';
import values from 'lodash/values';

const getAlbumsById = (state, id) =>
  values(state.entities.albums.itemsById).filter(entity => entity.artists.includes(id));

const getAlbumByAlbumId = (state, albumId) => state.entities.albums.itemsById[albumId];

export const getAllAlbums = state => state.entities.albums.itemsById;

export const selectAlbumsByArtistId = createSelector(getAlbumsById, albums => albums);

export const selectAlbumByAlbumId = createSelector(getAlbumByAlbumId, album => album);
