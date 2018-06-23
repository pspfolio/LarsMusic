import { SEARCH_REQUEST_ARTISTS, SEARCH_RECEIVE_ARTISTS } from './searchConstants';
import { handleArtistData } from 'common/utils/artistDataHelpers';

const requestSearch = () => ({
  type: SEARCH_REQUEST_ARTISTS
});

const setSearchResult = data => {
  const payload = data.artists.items.map(handleArtistData);
  return {
    type: SEARCH_RECEIVE_ARTISTS,
    payload
  };
};

export function fetchSearch() {
  return (dispatch, getState, { spotifyFetcher }) => {
    dispatch(requestSearch());
    const searchWord = getState().form.search.values.search;
    return spotifyFetcher(`search?q=${searchWord}&type=artist&limit=25`).then(json => dispatch(setSearchResult(json)));
  };
}
