import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectAccessToken } from 'features/accessToken/accessTokenSelectors';

const PrivateRoute = ({ component: Component, accessToken, ...rest }) => (
  <Route {...rest} render={props => (accessToken ? <Component {...props} /> : <Redirect to="/login" />)} />
);

const mapStateToProps = state => ({ accessToken: selectAccessToken(state) });

export default connect(mapStateToProps, null)(PrivateRoute);
