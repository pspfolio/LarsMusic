import { RECEIVE_OWNED_ARTISTS, REQUEST_OWNED_ARTISTS } from './userArtistConstants';

const initialState = {
  isFetching: false,
  items: []
};

export default function artistList(state = initialState, action) {
  switch (action.type) {
    case REQUEST_OWNED_ARTISTS:
      return { ...state, isFetching: true };
    case RECEIVE_OWNED_ARTISTS:
      return { ...state, items: [...action.payload], isFetching: false };
    default:
      return state;
  }
}
