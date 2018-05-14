import { createSelector } from 'reselect';

export const getTopTracks = state => state.track.topTracks;

const getTopTracksById = (state, id) => {
  return state.track.topTracks[id];
};

export const selectTopTracksByArtistId = createSelector(getTopTracksById, tracks => tracks);
