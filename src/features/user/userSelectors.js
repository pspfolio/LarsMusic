import { createSelector } from 'reselect';

const selectUserState = state => state.user;

export const selectUserDisplayName = createSelector(
  selectUserState,
  userState => (userState ? userState.display_name : '')
);
