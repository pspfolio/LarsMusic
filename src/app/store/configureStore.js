import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import spotifyFetcher from 'middlewares/spotifyFetcher';
import cacheMiddleware from 'middlewares/cacheMiddleware';

import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

export default function configureStore(preloadedState) {
  const middlewares = [
    thunk.withExtraArgument({
      spotifyFetcher: spotifyFetcher(() => store.getState())
    }),
    cacheMiddleware
  ];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  const composedEnhancer = composeWithDevTools(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('../reducers/rootReducer', () => {
        const newRootReducer = require('../reducers/rootReducer').default;
        store.replaceReducer(newRootReducer);
      });
    }
  }

  return store;
}
