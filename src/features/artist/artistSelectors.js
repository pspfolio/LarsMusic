import { createSelector } from 'reselect';
import values from 'lodash/values';

export const getArtists = state => state.artist.entities;

const getArtistByLimit = (state, limit) => {
  console.log('STATE', state);
  console.log('LIMIT', limit);
  return values(state.artist.entities).slice(0, limit);
};

export const selectArtists = createSelector(getArtists, artist => artist);
export const selectArtistByLimit = createSelector(getArtistByLimit, artist => artist);
