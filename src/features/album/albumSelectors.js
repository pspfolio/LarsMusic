import { createSelector } from 'reselect';

const getAlbumsById = (state, id) => state.album.artistAlbums[id];

export const selectTopTracksByArtistId = createSelector(getAlbumsById, albums => albums);
