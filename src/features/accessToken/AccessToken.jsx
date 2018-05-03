import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { setAccessToken } from './accessTokenActions';

class AccessToken extends Component {
  componentDidMount() {
    console.log(this.props.location.search);
    const { search } = this.props.location;
    const parsed = queryString.parse(search);
    console.log(parsed.access_token);
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
