import { combineReducers } from 'redux';
import accessToken from 'features/accessToken/accessTokenReducer';

const rootReducer = combineReducers({
  accessToken
});

export default rootReducer;
