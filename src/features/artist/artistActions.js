import { database } from 'firebase.js';
import {
  RECEIVE_ARTISTS,
  REQUEST_ARTIST_LIST,
  RECEIVE_ARTIST,
  RECEIVE_OWNED_ARTISTS,
  REQUEST_OWNED_ARTISTS
} from './artistConstants';
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

const setListOfOwnedArtist = artistIdList => ({
  type: RECEIVE_OWNED_ARTISTS,
  payload: artistIdList
});

const setRequestListOfOwnedArtist = () => ({
  type: REQUEST_OWNED_ARTISTS
});

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

const fetchArtists = artistIdList => {
  return (dispatch, getState, { spotifyFetcher }) => {
    dispatch(requestArtistList());
    const artistIds = artistIdList.join(',');
    return spotifyFetcher(`artists?ids=${artistIds}`).then(json => dispatch(setArtistList(json)));
  };
};

export function fetchUserArtists() {
  return (dispatch, getState, { spotifyFetcher }) => {
    dispatch(setRequestListOfOwnedArtist());
    const state = getState();
    database.ref(`album/${state.user.id}`).on('value', snapshot => {
      const artistIds = Object.keys(snapshot.val());
      dispatch(setListOfOwnedArtist(artistIds));
      return dispatch(fetchArtists(artistIds));
    });
  };
}
