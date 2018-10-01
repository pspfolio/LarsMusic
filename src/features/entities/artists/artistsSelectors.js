import { createSelector } from 'reselect';
import values from 'lodash/values';

export const selectArtists = state => state.entities.artists.itemsById;
export const isFetchingArtists = state => state.entities.artists.isFetching;

const getArtistsSearchIdList = state => state.search.searchResult;

export const selectArtistByLimit = createSelector([selectArtists, (state, limit) => limit], (artists, limit) => {
  const artistList = values(artists);
  return artistList.length === 0 ? [] : artistList.slice(0, limit);
});

export const selectArtistById = createSelector([selectArtists, (state, id) => id], (artists, id) => {
  return artists[id];
});

export const selectArtistsByListId = createSelector([selectArtists, getArtistsSearchIdList], (artists, artistIdList) =>
  values(artists).filter(artist => artistIdList.includes(artist.id))
);
export const getArtistTopTracksIdList = createSelector(selectArtistById, artist => artist.topTracks);
