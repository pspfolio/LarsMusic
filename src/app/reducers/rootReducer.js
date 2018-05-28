import { combineReducers } from 'redux';
import accessToken from 'features/accessToken/accessTokenReducer';
import artist from 'features/artist/artistReducer';
import track from 'features/tracks/tracksReducer';
import playingBar from 'features/playingBar/playingBarReducer';

const rootReducer = combineReducers({
  accessToken,
  artist,
  track,
  playingBar
});

export default rootReducer;
