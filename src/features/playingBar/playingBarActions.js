import { SET_PLAY_TRACK, REMOVE_PLAY_TRACK, SET_PLAYING_STATUS } from './playingBarConstants';

export const setPlayStatus = isPlaying => {
  return {
    type: SET_PLAYING_STATUS,
    payload: isPlaying
  };
};

export const setPlayTrack = (trackId, artistId, albumId) => ({
  type: SET_PLAY_TRACK,
  payload: { trackId, artistId, albumId }
});

export const removePlayTrack = () => ({ type: REMOVE_PLAY_TRACK });
