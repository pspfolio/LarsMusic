import { createSelector } from 'reselect';

export const getTopTracks = state => state.track.topTracks;

const getTopTracksById = (state, id, limit) => {
  const topTracksById = state.track.topTracks[id];
  return topTracksById ? topTracksById.slice(0, limit) : topTracksById;
};

export const selectTopTracksByArtistId = createSelector(getTopTracksById, tracks => tracks);
