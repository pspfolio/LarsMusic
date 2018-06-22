import { SET_PLAY_TRACK, REMOVE_PLAY_TRACK } from './playingBarConstants';

export const setPlayTrack = (trackId, artistId, albumId) => ({
  type: SET_PLAY_TRACK,
  payload: { trackId, artistId, albumId }
});

export const removePlayTrack = () => ({ type: REMOVE_PLAY_TRACK });
