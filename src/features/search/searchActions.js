import { SEARCH_REQUEST_ARTISTS, SEARCH_RECEIVE_ARTISTS } from './searchConstants';
import { fetchSpotify } from 'common/utils/fetcher';
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
  return (dispatch, getState) => {
    dispatch(requestSearch());
    console.log('state', getState());
    const accessToken = getState().accessToken;
    const searchWord = getState().form.search.values.search;
    const url = `https://api.spotify.com/v1/search?q=${searchWord}&type=artist&limit=25`;
    fetchSpotify(url, accessToken)
      .then(data => data.json())
      .then(json => dispatch(setSearchResult(json)));
  };
}
