import { SEARCH_REQUEST_ARTISTS, SEARCH_RECEIVE_ARTISTS } from './searchConstants';

const initialState = {
  isFetching: false,
  searchResult: [],
  searchTerm: ''
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH_REQUEST_ARTISTS:
      return { ...state, isFetching: true };
    case SEARCH_RECEIVE_ARTISTS:
      return {
        searchResult: action.payload.artists.map(artist => artist.id),
        searchTerm: action.payload.searchTerm,
        isFetching: false
      };
    default:
      return state;
  }
}
