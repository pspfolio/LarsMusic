import { RECEIVE_ARTIST_LIST, REQUEST_ARTIST_LIST } from './artistConstants';

const initialState = {
  isFetching: false,
  entities: {}
};

export default function artistList(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ARTIST_LIST:
      return { ...state, isFetching: true };
    case RECEIVE_ARTIST_LIST:
      return { entities: action.payload, isFetching: false };
    default:
      return state;
  }
}
