import { RECEIVE_ARTISTS, REQUEST_ARTIST_LIST, RECEIVE_ARTIST } from './artistConstants';

const initialState = {
  isFetching: false,
  entities: {}
};

export default function artistList(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ARTIST_LIST:
      return { ...state, isFetching: true };
    case RECEIVE_ARTISTS:
      return { entities: action.payload, isFetching: false };
    case RECEIVE_ARTIST:
      return { entities: { ...state.entities, [action.payload.id]: action.payload }, isFetching: false };
    default:
      return state;
  }
}
