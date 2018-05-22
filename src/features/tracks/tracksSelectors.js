import { createSelector } from 'reselect';
import values from 'lodash/values';

export const getTopTracks = state => state.track.topTracks;

const getTopTracksById = (state, id, limit) => {
  const topTracksById = values(state.track.topTracks[id]);
  return topTracksById ? topTracksById.slice(0, limit) : topTracksById;
};

export const selectTopTracksByArtistId = createSelector(getTopTracksById, tracks => tracks);
