import { createSelector } from 'reselect';
import { selectArtists, isFetchingArtists } from 'features/entities/artists/artistsSelectors';

const selectUserArtistIdList = state => state.entities.userArtists.items;

const isFetchingArtistList = state => state.entities.userArtists.isFetching;

export const selectUserArtists = createSelector(
  [selectUserArtistIdList, selectArtists, isFetchingArtistList, isFetchingArtists, (state, limit) => limit],
  (artistIdList, artists, isFetchingArtistList, isFetchingArtists, limit) => {
    if (isFetchingArtistList || isFetchingArtists) return [];
    const limitedArtistIdList = artistIdList.slice(0, limit);
    const result = limitedArtistIdList.map(artistId => artists[artistId]);
    return result;
  }
);