import { RECEIVE_ARTISTS, REQUEST_ARTIST_LIST, RECEIVE_ARTIST } from './artistConstants';
import { fetchSpotify } from 'common/utils/fetcher';
import { handleArtistData } from 'common/utils/artistDataHelpers';
import { artistIdList } from 'data/sampleData';

const requestArtistList = () => ({
  type: REQUEST_ARTIST_LIST
});

const setArtistList = data => {
  const payload = data.artists.map(handleArtistData);
  return {
    type: RECEIVE_ARTISTS,
    payload
  };
};

const setArtist = data => {
  const payload = handleArtistData(data);
  return {
    type: RECEIVE_ARTIST,
    payload
  };
};

function fetchArtistBasicData(artistId) {
  return (dispatch, getState) => {
    // dispatch request artist
    const accessToken = getState().accessToken;
    return fetchSpotify(`https://api.spotify.com/v1/artists/${artistId}`, accessToken)
      .then(response => response.json())
      .then(json => dispatch(setArtist(json)));
  };
}

export function fetchArtistIfNeeded(artistId) {
  return (dispatch, getState) => {
    const artistFromState = getState().artist.entities[artistId];
    if (!artistFromState) return dispatch(fetchArtistBasicData(artistId));
  };
}

export function fetchArtists() {
  return (dispatch, getState) => {
    dispatch(requestArtistList());
    const accessToken = getState().accessToken;
    const artistIds = artistIdList.join(',');
    const url = `https://api.spotify.com/v1/artists?ids=${artistIds}`;
    fetchSpotify(url, accessToken)
      .then(data => data.json())
      .then(json => dispatch(setArtistList(json)));
  };
}
