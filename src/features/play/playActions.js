import { SET_PLAY_TRACK, REMOVE_PLAY_TRACK } from './playConstants';

export const setPlayTrack = id => ({ action: SET_PLAY_TRACK, payload: id });

export const removePlayTrack = () => ({ action: REMOVE_PLAY_TRACK });
