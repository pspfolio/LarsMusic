import React, { Component } from 'react';
import styled from 'styled-components';
import { loadImage } from 'common/utils/imageLoader';
import { bgImageBase64 } from './loginConstants';

const BackgroundImage = styled.div`
  height: 100%;
  filter: ${props => (props.isLoaded ? 'none' : `blur(1px)`)};
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.3s linear;
`;

class Login extends Component {
  state = {
    bgImage: bgImageBase64,
    isLoaded: false
  };

  componentDidMount() {
    loadImage('login_bg.jpg')
      .then(bgImage => {
        this.setState({ bgImage, isLoaded: true });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { bgImage, isLoaded } = this.state;
    return <BackgroundImage image={bgImage} isLoaded={isLoaded} />;
  }
}

export default Login;
