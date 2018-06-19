import { RECEIVE_ALBUMS } from './albumConstants';

const initialState = {
  isFetching: false,
  entities: {},
  albumClicked: ''
};

const albums = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ALBUMS:
      return { entities: { ...state.entities, ...action.data }, isFetching: false };
    default:
      return state;
  }
};

export default albums;
