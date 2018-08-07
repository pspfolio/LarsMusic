import union from 'lodash/union';
import { RECEIVE_OWNED_ALBUMS, REMOVE_OWNED_ALBUM } from './userAlbumsConstants';

const initialState = {
  items: []
};

const userAlbums = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_OWNED_ALBUMS:
      return { items: union(state.items, action.payload) };
    case REMOVE_OWNED_ALBUM:
      return { items: state.items.filter(item => item !== action.payload) };
    default:
      return state;
  }
};

export default userAlbums;
