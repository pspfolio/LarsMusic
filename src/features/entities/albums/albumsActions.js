import { RECEIVE_ALBUMS } from './albumsConstants';
import { normalizeAlbumData } from 'common/utils/albumDataHelpers';

const setArtistAlbums = albumData => {
  const payload = normalizeAlbumData(albumData.items);
  return {
    type: RECEIVE_ALBUMS,
    payload
  };
};

export const fetchArtistAlbums = artistId => {
  return (dispatch, getState, { spotifyFetcher }) => {
    spotifyFetcher(`artists/${artistId}/albums?market=FI&limit=50`).then(json => {
      dispatch(setArtistAlbums(json));
    });
  };
};
