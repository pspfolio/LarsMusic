import { createSelector } from 'reselect';
import { getArtists } from 'features/artist/artistSelectors';
import { selectAllTracks } from 'features/tracks/tracksSelectors';
import { getAllAlbums } from 'features/album/albumSelectors';

const getPlayingArtistSelector = state => state.playingBar.artistId;
const getPlayingTrackSelector = state => state.playingBar.trackId;
const getPlayingAlbumSelector = state => state.playingBar.albumId;

export const selectPlayingArtists = createSelector(
  [getPlayingArtistSelector, getArtists],
  (artistId, artists) => artists[artistId]
);
export const selectPlayingTrack = createSelector(
  [getPlayingTrackSelector, selectAllTracks],
  (trackId, tracks) => (trackId ? tracks[trackId] : '')
);

export const selectPlayingAlbum = createSelector(
  [getPlayingAlbumSelector, getAllAlbums],
  (albumId, albums) => albums[albumId]
);
