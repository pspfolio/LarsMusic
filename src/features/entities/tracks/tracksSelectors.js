import { createSelector } from 'reselect';
import values from 'lodash/values';
import { selectAlbumByAlbumId } from 'features/entities/albums/albumsSelectors';
import { selectTopTracksByArtist } from 'features/entities/artists/artistsSelectors';

const getTopTracksById = (state, artistId, limit) => {
  const topTracksList = selectTopTracksByArtist(state, artistId).map(trackId => {
    const track = state.entities.tracks.itemsById[trackId];
    const album = selectAlbumByAlbumId(state, track.albumId);

    return {
      ...track,
      images: album ? album.images : [],
      albumName: album ? album.name : ''
    };
  });

  const topTracksById = values(topTracksList);
  return topTracksById ? topTracksById.slice(0, limit) : topTracksById;
};

const getTracksByAlbumId = (state, albumId) =>
  values(state.entities.tracks.itemsById)
    .filter(track => track.albumId === state.albums.openAlbum)
    .sort((a, b) => a.track_number - b.track_number);

const selectTracks = state => state.entities.tracks.itemsById;

export const selectTopTracksByArtistId = createSelector(getTopTracksById, tracks => tracks);

export const selectAllTracks = createSelector(selectTracks, tracks => tracks);

export const selectTracksByAlbumId = createSelector(getTracksByAlbumId, tracks => tracks);
