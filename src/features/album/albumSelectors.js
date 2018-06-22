import { createSelector } from 'reselect';
import values from 'lodash/values';

const getAlbumsById = (state, id) => values(state.album.entities).filter(entity => entity.artists.includes(id));

const getAlbumByAlbumId = (state, albumId) => state.album.entities[albumId];

export const getAllAlbums = state => state.album.entities;

export const selectAlbumsByArtistId = createSelector(getAlbumsById, albums => albums);

export const selectAlbumByAlbumId = createSelector(getAlbumByAlbumId, album => album);
