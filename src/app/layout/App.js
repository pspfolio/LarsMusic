import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import styled from 'styled-components';
import Loading from 'common/components/Loading';
import PrivateRoute from 'common/components/privateRoute/PrivateRoute';
import PlayingBar from 'features/playingBar/playingBar/PlayingBar';

import './App.css';

const FullViewHeight = styled.div`
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  background-color: #f8f8f8;
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

const AsyncArtist = Loadable({
  loader: () => import('features/artist/artist/Artist'),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <FullViewHeight>
        <Router>
          <Switch>
            <PrivateRoute path="/" exact component={AsyncDashboard} />
            <PrivateRoute path="/artist/:id" component={AsyncArtist} />
            <Route path="/callback" component={AsyncCallback} />
            <Route path="/login" component={AsyncLogin} />
            <Route render={() => <h1>Four oh Four</h1>} />
          </Switch>
        </Router>
        <PlayingBar />
      </FullViewHeight>
    );
  }
}

export default App;
