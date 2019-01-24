import union from 'lodash/union';
import { RECEIVE_OWNED_ARTISTS, REQUEST_OWNED_ARTISTS, REMOVE_OWNED_ARTIST } from './userArtistConstants';

const initialState = {
  isFetching: false,
  items: []
};

export default function userArtistList(state = initialState, action) {
  switch (action.type) {
    case REQUEST_OWNED_ARTISTS:
      return { ...state, isFetching: true };
    case RECEIVE_OWNED_ARTISTS:
      return { ...state, items: union(state.items, action.payload), isFetching: false };
    case REMOVE_OWNED_ARTIST:
      return {
        ...state,
        items: state.items.filter(item => action.payload.artistId !== item)
      };
    default:
      return state;
  }
}
