import { combineReducers } from 'redux';
import accessToken from 'features/accessToken/accessTokenReducer';
import artist from 'features/artist/artistReducer';
import track from 'features/tracks/tracksReducer';

const rootReducer = combineReducers({
  accessToken,
  artist,
  track
});

export default rootReducer;
