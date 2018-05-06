import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import styled from 'styled-components';
import Loading from 'common/components/Loading';
import PrivateRoute from 'common/components/privateRoute/PrivateRoute';

import './App.css';

const FullViewHeight = styled.div`
  height: 100vh;
  font-family: 'Roboto', sans-serif;
`;

const AsyncLogin = Loadable({
  loader: () => import('features/login/Login'),
  loading: Loading
});

const AsyncCallback = Loadable({
  loader: () => import('features/accessToken/AccessToken'),
  loading: Loading
});

const AsyncDashboard = Loadable({
  loader: () => import('features/dashboard/Dashboard'),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <FullViewHeight>
        <Router>
          <Switch>
            <PrivateRoute path="/" exact component={AsyncDashboard} />
            <Route path="/callback" component={AsyncCallback} />
            <Route path="/login" component={AsyncLogin} />
            <Route render={() => <h1>Four oh Four</h1>} />
          </Switch>
        </Router>
      </FullViewHeight>
    );
  }
}

export default App;
