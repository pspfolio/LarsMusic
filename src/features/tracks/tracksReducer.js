import { RECEIVE_TRACKS } from './tracksConstants';

const initialState = {
  isFetching: false,
  entities: {}
};

export default function topTracks(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TRACKS:
      return { entities: { ...state.entities, ...action.payload }, isFetching: false };
    default:
      return state;
  }
}
