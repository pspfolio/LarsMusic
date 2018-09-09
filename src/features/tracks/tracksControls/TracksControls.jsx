import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setPlayTrack } from 'features/playingBar/playingBarActions';
import PlayButton from 'common/components/playButton/PlayButton';
import EqualizerBars from 'common/components/EqualizerBars';

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 80px;
  align-items: center;
`;

const TracksControls = ({ play, trackId, showPlayButton, playingTrackId, isPlaying }) => {
  const currentTrack = playingTrackId === trackId;

  return (
    <ControlsWrapper>
      {currentTrack && isPlaying ? (
        <EqualizerBars />
      ) : (
        showPlayButton && <PlayButton onClick={() => play(trackId)} size={32} />
      )}
    </ControlsWrapper>
  );
};

const mapStateToProps = state => ({
  playingTrackId: state.playingBar.trackId,
  isPlaying: state.playingBar.isPlaying
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  play: trackId => dispatch(setPlayTrack(trackId, ownProps.artistId, ownProps.albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TracksControls);
