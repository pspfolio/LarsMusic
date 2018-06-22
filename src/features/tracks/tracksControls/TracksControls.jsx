import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setPlayTrack } from 'features/playingBar/playingBarActions';
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

const TracksControls = ({ play, trackId, spotifyUrl }) => (
  <ControlsWrapper>
    <PlayButton onClick={() => play(trackId)} size={32} />
    <SpotifyLink href={spotifyUrl} target="_blank">
      <SpotifyLogo src={spotify_logo_black} alt="spotify logo" />
    </SpotifyLink>
  </ControlsWrapper>
);

const mapDispatchToProps = (dispatch, ownProps) => {
  return { play: trackId => dispatch(setPlayTrack(trackId, ownProps.artistId, ownProps.albumId)) };
};

export default connect(null, mapDispatchToProps)(TracksControls);
