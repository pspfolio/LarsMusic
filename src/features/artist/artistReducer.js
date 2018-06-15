import mapKeys from 'lodash/mapKeys';
import { RECEIVE_ARTISTS, REQUEST_ARTIST_LIST, RECEIVE_ARTIST, RECEIVE_ARTIST_TOP_TRACKS } from './artistConstants';
import { SEARCH_RECEIVE_ARTISTS } from '../search/searchConstants';

const initialState = {
  isFetching: false,
  entities: {}
};

export default function artistList(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ARTIST_LIST:
      return { ...state, isFetching: true };
    case RECEIVE_ARTISTS:
    case SEARCH_RECEIVE_ARTISTS:
      return { entities: { ...state.entities, ...mapKeys(action.payload, 'id') }, isFetching: false };
    case RECEIVE_ARTIST:
      return { entities: { ...state.entities, [action.payload.id]: action.payload }, isFetching: false };
    case RECEIVE_ARTIST_TOP_TRACKS:
      return {
        entities: {
          ...state.entities,
          [action.payload.id]: { ...state.entities[action.payload.id], topTracks: action.payload.topTracks }
        }
      };
    default:
      return state;
  }
}
