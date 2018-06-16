import { RECEIVE_TRACKS } from './tracksConstants';
import { RECEIVE_ARTIST_TOP_TRACKS } from 'features/artist/artistConstants';
import { fetchSpotify } from 'common/utils/fetcher';
import mapKeys from 'lodash/mapKeys';

const setTracks = trackdata => {
  const normalizedData = trackdata.tracks.map(track => ({
    albumId: track.album.id,
    name: track.name,
    images: track.album.images,
    preview_url: track.preview_url,
    id: track.id,
    href: track.href,
    external_urls: track.external_urls
  }));

  const tracks = mapKeys(normalizedData, 'id');

  return {
    type: RECEIVE_TRACKS,
    payload: tracks
  };
};

const setArtistTopTracks = (trackdata, artistId) => {
  const topTrackIdList = trackdata.tracks.map(track => track.id);

  return {
    type: RECEIVE_ARTIST_TOP_TRACKS,
    payload: {
      id: artistId,
      topTracks: topTrackIdList
    }
  };
};

function fetchTopTracksBasicData(artistId) {
  return (dispatch, getState) => {
    const accessToken = getState().accessToken;
    return fetchSpotify(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=FI`, accessToken)
      .then(response => response.json())
      .then(json => {
        dispatch(setTracks(json));
        dispatch(setArtistTopTracks(json, artistId));
      });
  };
}

export function fetchTopTracksIfNeeded(artistId) {
  return (dispatch, getState) => {
    const topTracks = getState().track.entities[artistId];
    if (!topTracks) return dispatch(fetchTopTracksBasicData(artistId));
  };
}
