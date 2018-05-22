import { combineReducers } from 'redux';
import accessToken from 'features/accessToken/accessTokenReducer';
import artist from 'features/artist/artistReducer';
import track from 'features/tracks/tracksReducer';
import play from 'features/play/playReducer';

const rootReducer = combineReducers({
  accessToken,
  artist,
  track,
  play
});

export default rootReducer;
