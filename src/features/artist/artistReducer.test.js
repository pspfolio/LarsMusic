import artistReducer from './artistReducer';
import { RECEIVE_ARTIST_LIST, REQUEST_ARTIST_LIST } from './artistConstants';

describe('artistReducer', () => {
  it('should return the initial state', () => {
    const initialState = { entities: {}, isFetching: false };
    expect(artistReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle REQUEST_ARTIST_LIST', () => {
    const action = {
      type: REQUEST_ARTIST_LIST
    };
    const state = artistReducer(undefined, action);
    expect(state.isFetching).toEqual(true);
  });

  it('should handle RECEIVE_ARTIST_LIST', () => {
    const action = {
      type: RECEIVE_ARTIST_LIST,
      payload: [{ name: 'artist' }]
    };
    const state = artistReducer(undefined, action);
    expect(state.isFetching).toEqual(false);
    expect(state.entities.length).toEqual(1);
  });
});
