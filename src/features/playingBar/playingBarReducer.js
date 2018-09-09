import { SET_PLAY_TRACK, REMOVE_PLAY_TRACK, SET_PLAYING_STATUS } from './playingBarConstants';

const initialState = {
  isPlaying: false
};

const play = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_PLAY_TRACK:
      const { trackId, artistId, albumId } = action.payload;
      return { isPlaying: true, trackId, artistId, albumId };
    case REMOVE_PLAY_TRACK:
      return {};
    case SET_PLAYING_STATUS:
      return { ...state, isPlaying: action.payload };
    default:
      return state;
  }
};

export default play;
