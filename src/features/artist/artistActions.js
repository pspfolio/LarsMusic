import mapKeys from 'lodash/mapKeys';
import { RECEIVE_ARTISTS, REQUEST_ARTIST_LIST, RECEIVE_ARTIST } from './artistConstants';
import { artistIdList } from 'data/sampleData';

function requestArtistList() {
  return {
    type: REQUEST_ARTIST_LIST
  };
}

function setArtistList(json) {
  const data = json.artists.map(handleArtistData);

  const payload = mapKeys(data, 'id');
  return {
    type: RECEIVE_ARTISTS,
    payload
  };
}

function setArtist(artist) {
  const payload = handleArtistData(artist);

  return {
    type: RECEIVE_ARTIST,
    payload
  };
}

const handleArtistData = artist => ({
  ...artist,
  followers: artist.followers['total'],
  external_urls: artist.external_urls['spotify']
});

function fetchArtistBasicData(artistId) {
  return (dispatch, getState) => {
    // dispatch request artist
    const accessToken = getState().accessToken;
    return fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log('ARTISTFETCHED', json);
        dispatch(setArtist(json));
      });
  };
}

export function fetchArtist(artistId) {
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
    fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`
      })
    })
      .then(data => data.json())
      .then(json => {
        dispatch(setArtistList(json));
      });
  };
}
