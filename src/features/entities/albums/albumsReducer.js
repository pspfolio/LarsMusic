import { RECEIVE_ALBUMS } from './albumsConstants';

const initialState = {
  isFetching: false,
  itemsById: {},
  items: []
};

const albums = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ALBUMS:
      return receiveAlbums(state, action);
    default:
      return state;
  }
};

const receiveAlbums = (state, action) => {
  const itemsById = action.payload;
  const items = Object.keys(itemsById);

  const result = {
    ...state,
    itemsById: { ...state.itemsById, ...itemsById },
    items: [...state.items, ...items],
    isFetching: false
  };

  return result;
};

export default albums;
