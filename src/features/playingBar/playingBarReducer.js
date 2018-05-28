import { SET_PLAY_TRACK, REMOVE_PLAY_TRACK } from './playingBarConstants';

const play = (state = {}, action) => {
  switch (action.type) {
    case SET_PLAY_TRACK:
      const { trackId, artistId } = action.payload;
      return { trackId, artistId };
    case REMOVE_PLAY_TRACK:
      return {};
    default:
      return state;
  }
};

export default play;
