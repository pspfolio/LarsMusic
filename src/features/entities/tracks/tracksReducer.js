import { RECEIVE_TRACKS } from './tracksConstants';

const initialState = {
  isFetching: false,
  itemsById: {},
  items: []
};

export default function tracks(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TRACKS:
      return receiveTracks(state, action);
    default:
      return state;
  }
}

const receiveTracks = (state, action) => {
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
