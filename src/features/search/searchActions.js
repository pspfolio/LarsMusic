import { SEARCH_REQUEST_ARTISTS, SEARCH_RECEIVE_ARTISTS } from './searchConstants';
import { handleArtistData } from 'common/utils/artistDataHelpers';

const requestSearch = () => ({
  type: SEARCH_REQUEST_ARTISTS
});

const setSearchResult = (data, searchTerm) => {
  console.log('data', data);
  const artists = data.artists.items.map(handleArtistData);
  console.log('artists', artists);
  return {
    type: SEARCH_RECEIVE_ARTISTS,
    payload: {
      artists,
      searchTerm
    }
  };
};

export function fetchSearch() {
  return (dispatch, getState, { spotifyFetcher }) => {
    dispatch(requestSearch());
    const searchTerm = getState().form.search.values.search;
    return spotifyFetcher(`search?q=${searchTerm}&type=artist&limit=25`).then(json =>
      dispatch(setSearchResult(json, searchTerm))
    );
  };
}
