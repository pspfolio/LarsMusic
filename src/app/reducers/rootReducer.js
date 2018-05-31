import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import accessToken from 'features/accessToken/accessTokenReducer';
import artist from 'features/artist/artistReducer';
import track from 'features/tracks/tracksReducer';
import playingBar from 'features/playingBar/playingBarReducer';

const rootReducer = combineReducers({
  accessToken,
  artist,
  track,
  playingBar,
  form: formReducer
});

export default rootReducer;
