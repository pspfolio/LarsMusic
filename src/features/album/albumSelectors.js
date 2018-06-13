import { createSelector } from 'reselect';
import values from 'lodash/values';

const getAlbumsById = (state, id) => values(state.album.entities).filter(entity => entity.artists.includes(id));

export const selectAlbumsByArtistId = createSelector(getAlbumsById, albums => albums);
