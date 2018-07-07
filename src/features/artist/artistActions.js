import { RECEIVE_ARTISTS, REQUEST_ARTIST_LIST, RECEIVE_ARTIST } from './artistConstants';
import { handleArtistData } from 'common/utils/artistDataHelpers';

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
  return (dispatch, getState, { spotifyFetcher }) =>
    spotifyFetcher(`artists/${artistId}`).then(json => dispatch(setArtist(json)));
}

export function fetchArtistIfNeeded(artistId) {
  return (dispatch, getState) => {
    const artistFromState = getState().entities.artist.entities[artistId];
    if (!artistFromState) return dispatch(fetchArtistBasicData(artistId));
  };
}

export const fetchArtists = artistIdList => {
  return (dispatch, getState, { spotifyFetcher }) => {
    dispatch(requestArtistList());
    const artistIds = artistIdList.join(',');
    return spotifyFetcher(`artists?ids=${artistIds}`).then(json => dispatch(setArtistList(json)));
  };
};
