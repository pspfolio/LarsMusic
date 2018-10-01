import api from 'common/utils/axiosUtils';
import { RECEIVE_ALBUMS } from './albumsConstants';
import { normalizeAlbumData } from 'common/utils/albumDataHelpers';

const setArtistAlbums = ({ data }) => {
  const payload = normalizeAlbumData(data.items);
  return {
    type: RECEIVE_ALBUMS,
    payload
  };
};

export const fetchArtistAlbums = artistId => {
  return dispatch =>
    api(`/artists/${artistId}/albums?market=FI&limit=50`).then(json => {
      dispatch(setArtistAlbums(json));
    });
};
