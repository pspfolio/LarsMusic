import { RECEIVE_ALBUMS, OPENED_ALBUM_TRACK_LIST } from './albumConstants';

const initialState = {
  isFetching: false,
  entities: {},
  openAlbum: ''
};

const albums = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ALBUMS:
      return { ...state, entities: { ...state.entities, ...action.data }, isFetching: false };
    case OPENED_ALBUM_TRACK_LIST:
      return { ...state, openAlbum: action.payload.albumId };
    default:
      return state;
  }
};

export default albums;
