import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, accessToken, ...rest }) => (
  <Route {...rest} render={props => (accessToken ? <Component {...props} /> : <Redirect to="/login" />)} />
);

const mapStateToProps = state => {
  return { accessToken: state.accessToken };
};

export default connect(mapStateToProps, null)(PrivateRoute);
