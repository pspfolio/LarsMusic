import api from 'common/utils/axiosUtils';
import { ALBUMS_SUCCESS, ALBUMS_REQUEST } from './albumsConstants';
import { normalizeAlbumData } from 'common/utils/albumDataHelpers';

const requestArtistAlbums = () => ({
  type: ALBUMS_REQUEST
});

const setArtistAlbums = ({ data }) => {
  const payload = normalizeAlbumData(data.items);
  return {
    type: ALBUMS_SUCCESS,
    payload
  };
};

export const fetchArtistAlbums = artistId => {
  return dispatch => {
    dispatch(requestArtistAlbums());
    return api(`/artists/${artistId}/albums?market=FI&limit=50`).then(json => {
      dispatch(setArtistAlbums(json));
    });
  };
};
