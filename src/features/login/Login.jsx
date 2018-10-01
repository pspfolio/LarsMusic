import React, { Component } from 'react';
import { backgroundImage, backgroundPlaceholder } from './loginConstants';
import ProgressiveBackground from 'common/components/progressiveBackground/ProgressiveBackground';
import styled from 'styled-components';
import spotifyWhiteIcon from 'assets/images/Spotify_White.png';

const LoginContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 40px;
  text-align: center;

  @media (max-width: 375px) {
    padding: 0 24px;
  }
`;

const MainHeader = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #fff;
  margin: 32px 0;
`;

const LoginParagraph = styled.p`
  color: white;
  font-size: 1.5rem;
  letter-spacing: 0.75px;
  margin: 0 0 24px 0;
`;

const LoginButton = styled.a`
  background-color: #1db954;
  height: 50px;
  border-radius: 500px;
  padding: 8px 48px 6px;
  min-width: 160px;
  border-width: 0;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  white-space: normal;
  color: white;
  transition-property: background-color;
  transition-duration: 0.3s;
  text-decoration: none;
  font-weight: 500;
  line-height: 50px;
  display: flex;
  align-items: center;
  margin-top: 32px;
  justify-content: center;
  &:hover {
    background-color: #168d40;
  }
`;

const SpotifyIcon = styled.img`
  height: 30px;
  position: relative;
  padding: 0 8px;
`;

class Login extends Component {
  render() {
    return (
      <ProgressiveBackground background={backgroundImage} placeholder={backgroundPlaceholder}>
        <LoginContainer>
          <MainHeader>LarsMusic</MainHeader>
          <LoginParagraph>Track your album and vinyl collection and use Spotify data to help it</LoginParagraph>
          <LoginParagraph>Please login to Spotify and start use the application</LoginParagraph>
          <LoginButton href="http://localhost:8888/login">
            Log in <SpotifyIcon src={spotifyWhiteIcon} alt="logo of Spotify" />
          </LoginButton>
        </LoginContainer>
      </ProgressiveBackground>
    );
  }
}

export default Login;
