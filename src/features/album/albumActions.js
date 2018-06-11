import { RECEIVE_ALBUMS } from './albumConstants';
import { fetchSpotify } from 'common/utils/fetcher';

const setArtistAlbums = (data, artistId) => ({
  type: RECEIVE_ALBUMS,
  data: data.items,
  artistId
});

export const fetchArtistAlbums = artistId => {
  return (dispatch, getState) => {
    const accessToken = getState().accessToken;
    return fetchSpotify(`https://api.spotify.com/v1/artists/${artistId}/albums?market=FI&limit=50`, accessToken)
      .then(response => response.json())
      .then(json => {
        dispatch(setArtistAlbums(json, artistId));
      });
  };
};
