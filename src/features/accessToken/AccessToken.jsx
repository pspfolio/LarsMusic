import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { setAccessToken } from './accessTokenActions';

export class AccessToken extends Component {
  componentDidMount() {
    const { search } = this.props.location;
    const parsed = queryString.parse(search);
    this.props.setAccessToken(parsed);
  }

  render() {
    return <h1>Redirecting</h1>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAccessToken: accessToken => dispatch(setAccessToken(accessToken))
  };
};

export default connect(null, mapDispatchToProps)(AccessToken);
