import React from 'react';
import styled from 'styled-components';
import spotify_logo_black from 'assets/images/Spotify_Icon_RGB_Black.png';
import PlayButton from 'common/components/playButton/PlayButton';

const ControlsWrapper = styled.div`
  display: flex;
`;

const SpotifyLink = styled.a`
  margin-left: 16px;
  display: flex;
  align-items: center;
`;

const SpotifyLogo = styled.img`
  width: 32px;
`;

const TopTracksControls = ({ play, trackId, spotifyUrl }) => (
  <ControlsWrapper>
    <PlayButton onClick={() => play(trackId)} size={32} />
    <SpotifyLink href={spotifyUrl} target="_blank">
      <SpotifyLogo src={spotify_logo_black} alt="spotify logo" />
    </SpotifyLink>
  </ControlsWrapper>
);

export default TopTracksControls;
