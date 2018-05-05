import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { setAccessToken } from './accessTokenActions';

export class AccessToken extends Component {
  componentDidMount() {
    const {
      history,
      location: { search },
      setAccessToken
    } = this.props;

    const parsed = queryString.parse(search);
    setAccessToken(parsed);
    history.push('/');
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

export default withRouter(connect(null, mapDispatchToProps)(AccessToken));
