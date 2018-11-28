import { RECEIVE_OWNED_ALBUMS, REMOVE_OWNED_ALBUM } from './userAlbumsConstants';

const initialState = {
  items: {}
};

const userAlbums = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_OWNED_ALBUMS:
      return { items: { ...state.items, ...action.payload } };
    case REMOVE_OWNED_ALBUM:
      const items = { ...state.items };
      delete items[action.payload];
      return { items };
    default:
      return state;
  }
};

export default userAlbums;
