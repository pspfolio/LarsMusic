import { createSelector } from 'reselect';

const getPlayingArtistSelector = state => state.play.artistId;
const getPlayingTrackSelector = state => state.play.trackId;

const getArtists = state => state.artist.entities;
const getTracks = state => state.track.topTracks;

export const selectPlayingArtists = createSelector(
  [getPlayingArtistSelector, getArtists],
  (artistId, artists) => artists[artistId]
);
export const selectPlayingTrack = createSelector(
  [getPlayingTrackSelector, getPlayingArtistSelector, getTracks],
  (trackId, artistId, tracks) => (artistId ? tracks[artistId][trackId] : '')
);
