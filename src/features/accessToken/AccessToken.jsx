import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { setTokens } from './accessTokenActions';

export class AccessToken extends Component {
  componentDidMount() {
    const {
      history,
      location: { search },
      setTokens
    } = this.props;

    const parsed = queryString.parse(search);
    console.log('parsed', parsed);
    setTokens(parsed);
    history.push('/');
  }

  render() {
    return <h1>Redirecting</h1>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTokens: tokens => dispatch(setTokens(tokens))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(AccessToken));
