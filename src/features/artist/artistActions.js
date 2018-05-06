import mapKeys from 'lodash/mapKeys';
import { RECEIVE_ARTIST_LIST, REQUEST_ARTIST_LIST } from './artistConstants';
import { artistIdList } from 'data/sampleData';

function requestArtistList() {
  return {
    type: REQUEST_ARTIST_LIST
  };
}

function setArtistList(payload) {
  return {
    type: RECEIVE_ARTIST_LIST,
    payload
  };
}

export default function fetchArtists() {
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
        const result = mapKeys(json.artists, 'id');
        dispatch(setArtistList(result));
      });
  };
}
