import { createSelector } from 'reselect';
import values from 'lodash/values';
import { selectAlbumsByAlbumId } from 'features/album/albumSelectors';
import { getArtistTopTracksIdList } from 'features/artist/artistSelectors';

const getTopTracksById = (state, artistId, limit) => {
  const topTracksList = getArtistTopTracksIdList(state, artistId).map(trackId => {
    const track = state.track.entities[trackId];
    const album = selectAlbumsByAlbumId(state, track.albumId);

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
  values(state.track.entities).filter(track => track.albumId === state.album.openAlbum);

const selectTracks = state => state.track.entities;

export const selectTopTracksByArtistId = createSelector(getTopTracksById, tracks => tracks);

export const selectAllTracks = createSelector(selectTracks, tracks => tracks);

export const selectTracksByAlbumId = createSelector(getTracksByAlbumId, tracks => tracks);
