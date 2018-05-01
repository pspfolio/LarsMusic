import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import styled from 'styled-components';
import Loading from 'common/components/Loading';

import './App.css';

const FullViewHeight = styled.div`
  height: 100vh;
`;

const AsyncLoginComponent = Loadable({
  loader: () => import('features/login/Login'),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <FullViewHeight>
        <Router>
          <Switch>
            <Route path="/login" component={AsyncLoginComponent} />
            <Route render={() => <h1>Four oh Four</h1>} />
          </Switch>
        </Router>
      </FullViewHeight>
    );
  }
}

export default App;
