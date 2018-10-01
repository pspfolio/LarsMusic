import api from 'common/utils/axiosUtils';
import mapKeys from 'lodash/mapKeys';
import { RECEIVE_TRACKS } from './tracksConstants';
import { RECEIVE_ARTIST_TOP_TRACKS } from 'features/entities/artists/artistsConstants';
import { RECEIVE_ALBUMS } from 'features/entities/albums/albumsConstants';
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

const setArtistTopTracks = ({ data }, artistId) => {
  const topTrackIdList = data.tracks.map(track => track.id);

  return {
    type: RECEIVE_ARTIST_TOP_TRACKS,
    payload: {
      id: artistId,
      topTracks: topTrackIdList
    }
  };
};

const setTopTracksAlbums = ({ data }) => {
  const albumData = data.tracks.map(track => track.album);
  const payload = normalizeAlbumData(albumData);
  return {
    type: RECEIVE_ALBUMS,
    payload
  };
};

function fetchTopTracksBasicData(artistId) {
  return dispatch =>
    api(`/artists/${artistId}/top-tracks?country=FI`).then(json => {
      dispatch(setTopTracksAlbums(json));
      dispatch(setTracks(json.data.tracks));
      dispatch(setArtistTopTracks(json, artistId));
    });
}

export function fetchTopTracksIfNeeded(artistId) {
  return (dispatch, getState) => {
    const topTracks = getState().entities.tracks.itemsById[artistId];
    if (!topTracks) return dispatch(fetchTopTracksBasicData(artistId));
  };
}

export const fetchAlbumTracks = albumId => {
  return dispatch =>
    api(`/albums/${albumId}/tracks?limit=50`).then(({ data }) => dispatch(setTracks(data.items, albumId)));
};
