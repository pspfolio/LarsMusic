import { combineReducers } from 'redux';
import accessToken from 'features/accessToken/accessTokenReducer';
import artist from 'features/artist/artistReducer';

const rootReducer = combineReducers({
  accessToken,
  artist
});

export default rootReducer;
