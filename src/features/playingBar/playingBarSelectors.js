import { createSelector } from 'reselect';
import { getArtists } from 'features/artist/artistSelectors';
import { selectAllTracks } from 'features/tracks/tracksSelectors';

const getPlayingArtistSelector = state => state.playingBar.artistId;
const getPlayingTrackSelector = state => state.playingBar.trackId;

export const selectPlayingArtists = createSelector(
  [getPlayingArtistSelector, getArtists],
  (artistId, artists) => artists[artistId]
);
export const selectPlayingTrack = createSelector(
  [getPlayingTrackSelector, selectAllTracks],
  (trackId, tracks) => (trackId ? tracks[trackId] : '')
);
