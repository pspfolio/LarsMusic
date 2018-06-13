import { createSelector } from 'reselect';

const getAlbumsById = (state, id) => state.album.artistAlbums[id];

export const selectAlbumsByArtistId = createSelector(getAlbumsById, albums => albums);
