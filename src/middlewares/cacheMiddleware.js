import ric from 'ric-shim';
import { set } from 'idb-keyval';
import { RECEIVE_USER_PROFILE } from 'features/user/userConstants';

const actionsToPersist = {
  [RECEIVE_USER_PROFILE]: ['user']
};

const cacheMiddleware = store => next => action => {
  const result = next(action);
  const shouldPersist = actionsToPersist[action.type];

  if (shouldPersist) {
    ric(() => {
      const appState = store.getState();

      shouldPersist.forEach(reducerName => {
        const stateToPersist = appState[reducerName];
        set(reducerName, stateToPersist);
      });
    });
  }

  return result;
};

export default cacheMiddleware;
