import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from 'common/theme';
import store from './store';
import './index.css';
import injectGlobalStyles from './injectGlobalStyles';

const rootEl = document.getElementById('root');

const render = () => {
  const App = require('./App').default;
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>,
    rootEl
  );
};

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./App', () => {
      setTimeout(render);
    });
  }
}

injectGlobalStyles();

render();
