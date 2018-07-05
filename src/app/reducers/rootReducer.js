import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import accessToken from 'features/accessToken/accessTokenReducer';
import artist from 'features/artist/artistReducer';
import track from 'features/tracks/tracksReducer';
import playingBar from 'features/playingBar/playingBarReducer';
import search from 'features/search/searchReducer';
import album from 'features/album/albumReducer';
import user from 'features/user/userReducer';

const entities = combineReducers({ artist, album, track });
const rootReducer = combineReducers({
  entities,
  accessToken,
  playingBar,
  search,
  user,
  form: formReducer
});

export default rootReducer;
