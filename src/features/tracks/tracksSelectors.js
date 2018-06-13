import { createSelector } from 'reselect';
import values from 'lodash/values';

const getTopTracksById = (state, id, limit) => {
  const topTracksById = values(state.track.entities[id]);
  return topTracksById ? topTracksById.slice(0, limit) : topTracksById;
};

export const selectTopTracksByArtistId = createSelector(getTopTracksById, tracks => tracks);
