import { SEARCH_REQUEST_ARTISTS, SEARCH_RECEIVE_ARTISTS } from './searchConstants';

const initialState = {
  isFetching: false,
  searchResult: []
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH_REQUEST_ARTISTS:
      return { ...state, isFetching: true };
    case SEARCH_RECEIVE_ARTISTS:
      return { searchResult: action.payload.map(artist => artist.id), isFetching: false };
    default:
      return state;
  }
}
