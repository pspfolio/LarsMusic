import { REQUEST_TOP_TRACKS, RECEIVE_TOP_TRACKS } from './tracksConstants';
import { fetchSpotify } from 'common/utils/fetcher';

const setTopTracks = (data, artistId) => {
  const payload = { [artistId]: data.tracks };
  return {
    type: RECEIVE_TOP_TRACKS,
    payload
  };
};

function fetchTopTracksBasicData(artistId) {
  return (dispatch, getState) => {
    const accessToken = getState().accessToken;
    return fetchSpotify(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=FI`, accessToken)
      .then(response => response.json())
      .then(json => {
        dispatch(setTopTracks(json, artistId));
      });
  };
}

export function fetchTopTracksIfNeeded(artistId) {
  return (dispatch, getState) => {
    const topTracks = getState().track.topTracks[artistId];
    if (!topTracks) return dispatch(fetchTopTracksBasicData(artistId));
  };
}