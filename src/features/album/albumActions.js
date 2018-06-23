import { RECEIVE_ALBUMS, TOGGLE_ALBUM_TRACK_LIST } from './albumConstants';
import { normalizeAlbumData } from 'common/utils/albumDataHelpers';

const setArtistAlbums = albumData => {
  const data = normalizeAlbumData(albumData.items);

  return {
    type: RECEIVE_ALBUMS,
    data
  };
};

export const toggleAlbumTrackList = albumId => {
  return {
    type: TOGGLE_ALBUM_TRACK_LIST,
    payload: {
      albumId
    }
  };
};

export const fetchArtistAlbums = artistId => {
  return (dispatch, getState, { spotifyFetcher }) => {
    spotifyFetcher(`artists/${artistId}/albums?market=FI&limit=50`).then(json => {
      dispatch(setArtistAlbums(json));
    });
  };
};
