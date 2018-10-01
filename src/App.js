import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from 'common/components/Loading';
import PrivateRoute from 'common/components/privateRoute/PrivateRoute';
import PlayingBar from 'features/playingBar/PlayingBar';

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

const AsyncSearch = Loadable({
  loader: () => import('features/search/Search'),
  loading: Loading
});

const AsyncUserArtistList = Loadable({
  loader: () => import('features/artist/userOwnedArtist/UserOwnedArtistList'),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <PrivateRoute path="/" exact component={AsyncDashboard} />
            <PrivateRoute path="/artist/:id" component={AsyncArtist} />
            <PrivateRoute path="/search" component={AsyncSearch} />
            <PrivateRoute path="/own" component={AsyncUserArtistList} />
            <Route path="/callback" component={AsyncCallback} />
            <Route path="/login" component={AsyncLogin} />
            <Route render={() => <h1>Four oh Four</h1>} />
          </Switch>
        </Router>
        <PlayingBar />
      </Fragment>
    );
  }
}

export default App;
