import mapKeys from 'lodash/mapKeys';
import {
  RECEIVE_ARTISTS,
  REQUEST_ARTIST_LIST,
  RECEIVE_ARTIST,
  RECEIVE_ARTIST_TOP_TRACKS,
  RECEIVE_OWNED_ARTISTS,
  REQUEST_OWNED_ARTISTS
} from './artistConstants';
import { SEARCH_RECEIVE_ARTISTS } from '../search/searchConstants';

const initialState = {
  isFetching: false,
  entities: {},
  userArtists: {
    loading: false,
    entities: []
  }
};

export default function artistList(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ARTIST_LIST:
      return { ...state, isFetching: true };
    case RECEIVE_ARTISTS:
    case SEARCH_RECEIVE_ARTISTS:
      return { ...state, entities: { ...state.entities, ...mapKeys(action.payload, 'id') }, isFetching: false };
    case RECEIVE_ARTIST:
      return { ...state, entities: { ...state.entities, [action.payload.id]: action.payload }, isFetching: false };
    case RECEIVE_ARTIST_TOP_TRACKS:
      return {
        entities: {
          ...state.entities,
          [action.payload.id]: { ...state.entities[action.payload.id], topTracks: action.payload.topTracks }
        }
      };
    case REQUEST_OWNED_ARTISTS:
      return { ...state, userArtists: { entities: [...state.userArtists.entities], loading: true } };
    case RECEIVE_OWNED_ARTISTS:
      return { ...state, userArtists: { entities: action.payload, loading: false } };
    default:
      return state;
  }
}
