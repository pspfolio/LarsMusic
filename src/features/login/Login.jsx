import React, { Component } from 'react';
import { backgroundImage, backgroundPlaceholder } from './loginConstants';
import ProgressiveBackground from 'common/components/progressiveBackground/ProgressiveBackground';

class Login extends Component {
  render() {
    return (
      <ProgressiveBackground background={backgroundImage} placeholder={backgroundPlaceholder}>
        <h1>Login</h1>
      </ProgressiveBackground>
    );
  }
}

export default Login;
