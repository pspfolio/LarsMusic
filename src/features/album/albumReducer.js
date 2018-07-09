import { TOGGLE_ALBUM_TRACK_LIST } from './albumConstants';

const initialState = {
  openAlbum: ''
};

const albums = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ALBUM_TRACK_LIST:
      return { ...state, openAlbum: action.payload.albumId === state.openAlbum ? '' : action.payload.albumId };
    default:
      return state;
  }
};

export default albums;
