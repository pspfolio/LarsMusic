import mapKeys from 'lodash/mapKeys';
import { RECEIVE_ARTISTS, REQUEST_ARTIST_LIST, RECEIVE_ARTIST, RECEIVE_ARTIST_TOP_TRACKS } from './artistsConstants';
import { SEARCH_RECEIVE_ARTISTS } from 'features/search/searchConstants';

const initialState = {
  isFetching: false,
  itemsById: {},
  items: [],
  topTracks: {}
};

export default function artistList(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ARTIST_LIST:
      return { ...state, isFetching: true };
    case RECEIVE_ARTISTS:
      return receiveArtistList(state, action.payload);
    case SEARCH_RECEIVE_ARTISTS:
      return receiveArtistList(state, action.payload.artists);
    case RECEIVE_ARTIST:
      return { ...state, itemsById: { ...state.itemsById, [action.payload.id]: action.payload }, isFetching: false };
    case RECEIVE_ARTIST_TOP_TRACKS:
      return {
        ...state,
        topTracks: {
          ...state.topTracks,
          [action.payload.id]: action.payload.topTracks
        }
      };

    default:
      return state;
  }
}

const receiveArtistList = (state, data) => {
  const itemsById = mapKeys(data, 'id');
  const items = Object.keys(itemsById);

  const result = {
    ...state,
    itemsById: { ...state.itemsById, ...itemsById },
    items: [...state.items, ...items],
    isFetching: false
  };

  return result;
};
