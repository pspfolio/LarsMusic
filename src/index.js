import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import injectGlobalStyles from './injectGlobalStyles';

const rootEl = document.getElementById('root');

const render = () => {
  const App = require('./App').default;
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

injectGlobalStyles();

render();
