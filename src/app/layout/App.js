import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from 'common/components/Loading';

import './App.css';

const AsyncLoginComponent = Loadable({
  loader: () => import('features/login/Login'),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={AsyncLoginComponent} />
          <Route render={() => <h1>Four oh Four</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
