import { RECEIVE_ALBUMS } from './albumConstants';
import { fetchSpotify } from 'common/utils/fetcher';
import mapKeys from 'lodash/mapKeys';

const setArtistAlbums = albumData => {
  const normalizedData = albumData.items.map(item => ({
    ...item,
    artists: item.artists.map(artist => artist.id)
  }));

  const data = mapKeys(normalizedData, 'id');

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
