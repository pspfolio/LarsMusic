import { createSelector } from 'reselect';
import values from 'lodash/values';

export const getArtists = state => state.artist.entities;

const getArtistsSearchIdList = state => state.search.searchResult;

const getArtistById = (state, id) => {
  return state.artist.entities[id];
};

export const selectArtists = createSelector(getArtists, artist => artist);

export const selectArtistByLimit = createSelector([getArtists, (state, limit) => limit], (artists, limit) => {
  const artistList = values(artists);
  return artistList.length === 0 ? [] : artistList.slice(0, limit);
});

export const selectArtistById = createSelector(getArtistById, artist => artist);

export const selectArtistsByListId = createSelector([getArtists, getArtistsSearchIdList], (artists, artistIdList) =>
  values(artists).filter(artist => artistIdList.includes(artist.id))
);
export const getArtistTopTracksIdList = createSelector(getArtistById, artist => artist.topTracks);
