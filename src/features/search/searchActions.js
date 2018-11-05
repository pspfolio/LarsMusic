import api from 'common/utils/axiosUtils';
import { SEARCH_REQUEST_ARTISTS, SEARCH_RECEIVE_ARTISTS } from './searchConstants';
import { handleArtistData } from 'common/utils/artistDataHelpers';

const requestSearch = () => ({
  type: SEARCH_REQUEST_ARTISTS
});

const setSearchResult = ({ data }, searchTerm) => {
  const artists = data.artists.items.map(handleArtistData);
  return {
    type: SEARCH_RECEIVE_ARTISTS,
    payload: {
      artists,
      searchTerm
    }
  };
};

export function fetchSearch() {
  return (dispatch, getState) => {
    dispatch(requestSearch());
    const searchTerm = getState().form.search.values.search;
    return api(`/search?q=${searchTerm}&type=artist&limit=25`).then(json => {
      return dispatch(setSearchResult(json, searchTerm));
    });
  };
}
