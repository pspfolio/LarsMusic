import api from 'common/utils/axiosUtils';
import { RECEIVE_ARTISTS, REQUEST_ARTIST_LIST, RECEIVE_ARTIST } from './artistsConstants';
import { handleArtistData } from 'common/utils/artistDataHelpers';

const requestArtistList = () => ({
  type: REQUEST_ARTIST_LIST
});

const setArtistList = ({ data }) => {
  const payload = data.artists.map(handleArtistData);
  return {
    type: RECEIVE_ARTISTS,
    payload
  };
};

const setArtist = ({ data }) => {
  const payload = handleArtistData(data);
  return {
    type: RECEIVE_ARTIST,
    payload
  };
};

function fetchArtistBasicData(artistId) {
  return dispatch => api.get(`/artists/${artistId}`).then(json => dispatch(setArtist(json)));
}

export function fetchArtistIfNeeded(artistId) {
  return (dispatch, getState) => {
    const artistFromState = getState().entities.artists.itemsById[artistId];
    if (!artistFromState) return dispatch(fetchArtistBasicData(artistId));
  };
}

export const fetchArtists = data => {
  return dispatch => {
    dispatch({
      type: RECEIVE_ARTISTS,
      payload: data
    });
  };
};
