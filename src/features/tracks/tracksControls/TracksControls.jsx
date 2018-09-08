import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setPlayTrack } from 'features/playingBar/playingBarActions';
import PlayButton from 'common/components/playButton/PlayButton';

const ControlsWrapper = styled.div`
  display: flex;

  justify-content: flex-end;
  min-width: 120px;
`;

const TracksControls = ({ play, trackId, showPlayButton }) => (
  <ControlsWrapper>{showPlayButton && <PlayButton onClick={() => play(trackId)} size={32} />}</ControlsWrapper>
);

const mapDispatchToProps = (dispatch, ownProps) => {
  return { play: trackId => dispatch(setPlayTrack(trackId, ownProps.artistId, ownProps.albumId)) };
};

export default connect(null, mapDispatchToProps)(TracksControls);
