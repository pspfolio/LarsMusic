import union from 'lodash/union';
import { RECEIVE_OWNED_ALBUMS } from './userAlbumsConstants';

const initialState = {
  items: []
};

const userAlbums = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_OWNED_ALBUMS:
      return { items: union(state.items, action.payload) };
    default:
      return state;
  }
};

export default userAlbums;
