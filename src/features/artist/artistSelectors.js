import { createSelector } from 'reselect';
import values from 'lodash/values';

export const selectArtists = state => state.entities.artist.itemsById;

export const isFetchingArtists = state => state.entities.artist.isFetching;

const getArtistsSearchIdList = state => state.search.searchResult;

const getArtistById = (state, id) => {
  return state.entities.artist.itemsById[id];
};

export const selectArtistByLimit = createSelector([selectArtists, (state, limit) => limit], (artists, limit) => {
  const artistList = values(artists);
  return artistList.length === 0 ? [] : artistList.slice(0, limit);
});

export const selectArtistById = createSelector(getArtistById, artist => artist);

export const selectArtistsByListId = createSelector([selectArtists, getArtistsSearchIdList], (artists, artistIdList) =>
  values(artists).filter(artist => artistIdList.includes(artist.id))
);
export const getArtistTopTracksIdList = createSelector(getArtistById, artist => artist.topTracks);
