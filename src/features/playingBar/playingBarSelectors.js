import { createSelector } from 'reselect';
import { selectArtists } from 'features/entities/artists/artistsSelectors';
import { selectAllTracks } from 'features/entities/tracks/tracksSelectors';
import { getAllAlbums } from 'features/entities/albums/albumsSelectors';

const getPlayingArtistSelector = state => state.playingBar.artistId;
const getPlayingTrackSelector = state => state.playingBar.trackId;
const getPlayingAlbumSelector = state => state.playingBar.albumId;

export const selectIsPlaying = state => state.playingBar.isPlaying;

export const selectPlayingArtists = createSelector([getPlayingArtistSelector, selectArtists], (artistId, artists) => {
  return artists[artistId];
});
export const selectPlayingTrack = createSelector(
  [getPlayingTrackSelector, selectAllTracks],
  (trackId, tracks) => (trackId ? tracks[trackId] : '')
);

export const selectPlayingAlbum = createSelector(
  [getPlayingAlbumSelector, getAllAlbums],
  (albumId, albums) => albums[albumId]
);
