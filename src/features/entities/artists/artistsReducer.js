import mapKeys from 'lodash/mapKeys';
import { RECEIVE_ARTISTS, REQUEST_ARTIST_LIST, RECEIVE_ARTIST, RECEIVE_ARTIST_TOP_TRACKS } from './artistsConstants';
import { SEARCH_RECEIVE_ARTISTS } from 'features/search/searchConstants';

const initialState = {
  isFetching: false,
  itemsById: {},
  items: []
};

export default function artistList(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ARTIST_LIST:
      return { ...state, isFetching: true };
    case RECEIVE_ARTISTS:
    case SEARCH_RECEIVE_ARTISTS:
      return receiveArtistList(state, action);
    case RECEIVE_ARTIST:
      return { ...state, itemsById: { ...state.itemsById, [action.payload.id]: action.payload }, isFetching: false };
    case RECEIVE_ARTIST_TOP_TRACKS:
      return {
        ...state,
        itemsById: {
          ...state.itemsById,
          [action.payload.id]: { ...state.itemsById[action.payload.id], topTracks: action.payload.topTracks }
        }
      };
    default:
      return state;
  }
}

const receiveArtistList = (state, action) => {
  const itemsById = mapKeys(action.payload, 'id');
  const items = Object.keys(itemsById);

  const result = {
    ...state,
    itemsById: { ...state.itemsById, ...itemsById },
    items: [...state.items, ...items],
    isFetching: false
  };

  return result;
};
