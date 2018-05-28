import React from 'react';
import PlayButton from 'common/components/playButton/PlayButton';
import PauseButton from 'common/components/pauseButton/PauseButton';
import styled from 'styled-components';

const ControlButtons = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const PlayingBarControls = ({ playing, play, pause }) => (
  <ControlButtons>{!playing ? <PlayButton onClick={play} /> : <PauseButton onClick={pause} />}</ControlButtons>
);

export default PlayingBarControls;
