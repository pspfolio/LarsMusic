import { SET_PLAY_TRACK, REMOVE_PLAY_TRACK } from './playingBarConstants';

export const setPlayTrack = (trackId, artistId) => ({ type: SET_PLAY_TRACK, payload: { trackId, artistId } });

export const removePlayTrack = () => ({ type: REMOVE_PLAY_TRACK });
