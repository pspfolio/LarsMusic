import { createSelector } from 'reselect';
import values from 'lodash/values';

const getTopTracksById = (state, id, limit) => {
  const topTracksIds = state.artist.entities[id].topTracks;
  console.log('toptracksids', topTracksIds);
  const topTracksList = topTracksIds.map(trackId => {
    const track = state.track.entities[trackId];
    const album = state.album.entities[track.albumId];
    console.log(album);
    return {
      ...track,
      images: album.images || [],
      albumName: album.name || ''
    };
  });
  const topTracksById = values(topTracksList);
  console.log(topTracksById);
  return topTracksById ? topTracksById.slice(0, limit) : topTracksById;
};

export const selectTopTracksByArtistId = createSelector(getTopTracksById, tracks => tracks);
