import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'app/store/configureStore';
import { loadPresistedTokens } from 'common/utils/localStorage';
import { get } from 'idb-keyval';
import './index.css';

const persistedTokens = loadPresistedTokens();
const rootEl = document.getElementById('root');

const render = () => {
  get('user').then(persistedUser => {
    const App = require('app/layout/App').default;
    const persistedState = { user: persistedUser, auth: { ...persistedTokens } };
    const store = configureStore(persistedState);

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      rootEl
    );
  });
};

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('app/layout/App', () => {
      setTimeout(render);
    });
  }
}

render();
