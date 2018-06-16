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

export const selectTopTracksByArtistId = createSelector(getTopTracksById, tracks => tracks);
