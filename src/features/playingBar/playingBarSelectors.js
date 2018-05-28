import { createSelector } from 'reselect';
import { getArtists } from 'features/artist/artistSelectors';

const getPlayingArtistSelector = state => state.playingBar.artistId;
const getPlayingTrackSelector = state => state.playingBar.trackId;

const getTracks = state => state.track.topTracks;

export const selectPlayingArtists = createSelector(
  [getPlayingArtistSelector, getArtists],
  (artistId, artists) => artists[artistId]
);
export const selectPlayingTrack = createSelector(
  [getPlayingTrackSelector, getPlayingArtistSelector, getTracks],
  (trackId, artistId, tracks) => (artistId ? tracks[artistId][trackId] : '')
);
