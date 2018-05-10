import mapKeys from 'lodash/mapKeys';
import { RECEIVE_ARTIST_LIST, REQUEST_ARTIST_LIST } from './artistConstants';
import { artistIdList } from 'data/sampleData';

function requestArtistList() {
  return {
    type: REQUEST_ARTIST_LIST
  };
}

function setArtistList(json) {
  console.log(json.artists);
  const data = json.artists.map(artist => ({
    ...artist,
    followers: artist.followers['total'],
    images: artist.images.find(image => image.width > 199 && image.width < 350),
    external_urls: artist.external_urls['spotify']
  }));

  const payload = mapKeys(data, 'id');
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
        dispatch(setArtistList(json));
      });
  };
}
