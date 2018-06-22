import { RECEIVE_ALBUMS, TOGGLE_ALBUM_TRACK_LIST } from './albumConstants';
import { fetchSpotify } from 'common/utils/fetcher';
import { normalizeAlbumData } from 'common/utils/albumDataHelpers';

const setArtistAlbums = albumData => {
  const data = normalizeAlbumData(albumData.items);

  return {
    type: RECEIVE_ALBUMS,
    data
  };
};

export const fetchArtistAlbums = artistId => {
  return (dispatch, getState) => {
    const accessToken = getState().accessToken;
    return fetchSpotify(`https://api.spotify.com/v1/artists/${artistId}/albums?market=FI&limit=50`, accessToken)
      .then(response => response.json())
      .then(json => {
        dispatch(setArtistAlbums(json));
      });
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
