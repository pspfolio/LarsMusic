import { RECEIVE_TOP_TRACKS } from './tracksConstants';

const initialState = {
  isFetching: false,
  topTracks: {}
};

export default function topTracks(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TOP_TRACKS:
      return { topTracks: { ...state.topTracks, ...action.payload }, isFetching: false };
    default:
      return state;
  }
}
