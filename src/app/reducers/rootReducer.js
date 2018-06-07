import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import accessToken from 'features/accessToken/accessTokenReducer';
import artist from 'features/artist/artistReducer';
import track from 'features/tracks/tracksReducer';
import playingBar from 'features/playingBar/playingBarReducer';
import search from 'features/search/searchReducer';
import album from 'features/album/albumReducer';

const rootReducer = combineReducers({
  accessToken,
  artist,
  track,
  playingBar,
  search,
  album,
  form: formReducer
});

export default rootReducer;
