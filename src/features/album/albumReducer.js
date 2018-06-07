import { REQUEST_ALBUMS, RECEIVE_ALBUMS } from './albumConstants';

const initialState = {
  isFetching: false,
  artistAlbums: {}
};

const albums = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ALBUMS:
      return { artistAlbums: { ...state.artistAlbums, [action.artistId]: action.data }, isFetching: false };
    default:
      return state;
  }
};

export default albums;
