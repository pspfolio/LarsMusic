import accessTokenReducer from './accessTokenReducer';
import { SET_ACCESS_TOKEN } from './accessTokenConstants';

describe('accessToken reducer', () => {
  it('should return the initial state', () => {
    expect(accessTokenReducer(undefined, {})).toEqual('');
  });

  it('should handle SET_ACCESS_TOKEN', () => {
    const accessToken = 'Yolo123';
    const action = {
      type: SET_ACCESS_TOKEN,
      payload: accessToken
    };

    expect(accessTokenReducer(undefined, action)).toEqual(accessToken);
  });
});
