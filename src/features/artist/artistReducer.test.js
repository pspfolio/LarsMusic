import artistReducer from './artistReducer';
import { RECEIVE_ARTISTS, REQUEST_ARTIST_LIST, RECEIVE_ARTIST } from './artistConstants';

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

  it('should handle RECEIVE_ARTISTS', () => {
    const action = {
      type: RECEIVE_ARTISTS,
      payload: { yolo: { id: 'yolo', name: 'artist' }, yolo1: { id: 'yolo1', name: 'artist1' } }
    };
    const state = artistReducer(undefined, action);
    expect(state.isFetching).toEqual(false);
    expect(state.entities['yolo1'].name).toEqual('artist1');
  });

  it('should handle RECEIVE_ARTIST', () => {
    const action = {
      type: RECEIVE_ARTIST,
      payload: { id: 'yolo', name: 'Yolo' }
    };

    const state = artistReducer(undefined, action);
    expect(state.isFetching).toEqual(false);
    expect(state.entities['yolo'].name).toEqual('Yolo');
  });
});
