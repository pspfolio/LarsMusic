import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'app/store/configureStore';
import { loadAccessTokenState } from 'common/utils/localStorage';
import './index.css';

const persistedAccessToken = loadAccessTokenState();
const store = configureStore({ accessToken: persistedAccessToken });

const rootEl = document.getElementById('root');

const render = () => {
  const App = require('app/layout/App').default;

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  );
};

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('app/layout/App', () => {
      setTimeout(render);
    });
  }
}

render();
