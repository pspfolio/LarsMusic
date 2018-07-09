import { TOGGLE_ALBUM_TRACK_LIST } from './albumConstants';

export const toggleAlbumTrackList = albumId => {
  return {
    type: TOGGLE_ALBUM_TRACK_LIST,
    payload: {
      albumId
    }
  };
};
