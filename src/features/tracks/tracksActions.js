import mapKeys from 'lodash/mapKeys';
import { RECEIVE_TRACKS } from './tracksConstants';
import { RECEIVE_ARTIST_TOP_TRACKS } from 'features/artist/artistConstants';
import { RECEIVE_ALBUMS } from 'features/album/albumConstants';
import { fetchSpotify } from 'common/utils/fetcher';
import { normalizeAlbumData } from 'common/utils/albumDataHelpers';

const setTracks = (tracks, albumId) => {
  const data = tracks.map(track => ({
    albumId: track.album ? track.album.id : albumId,
    name: track.name,
    preview_url: track.preview_url,
    id: track.id,
    href: track.href,
    external_urls: track.external_urls,
    track_number: track.track_number
  }));

  const tracksNormalized = mapKeys(data, 'id');

  return {
    type: RECEIVE_TRACKS,
    payload: tracksNormalized
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

const setTopTracksAlbums = trackdata => {
  const albumData = trackdata.tracks.map(track => track.album);
  const data = normalizeAlbumData(albumData);

  return {
    type: RECEIVE_ALBUMS,
    data
  };
};

function fetchTopTracksBasicData(artistId) {
  return (dispatch, getState) => {
    const accessToken = getState().accessToken;
    return fetchSpotify(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=FI`, accessToken)
      .then(response => response.json())
      .then(json => {
        dispatch(setTopTracksAlbums(json));
        dispatch(setTracks(json.tracks));
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

export const fetchAlbumTracks = albumId => {
  return (dispatch, getState) => {
    const accessToken = getState().accessToken;

    return fetchSpotify(`https://api.spotify.com/v1/albums/${albumId}/tracks?limit=50`, accessToken)
      .then(response => response.json())
      .then(json => {
        dispatch(setTracks(json.items, albumId));
      });
  };
};
