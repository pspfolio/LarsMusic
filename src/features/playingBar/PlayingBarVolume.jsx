import React from 'react';
import styled from 'styled-components';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

const VolumeWrapper = styled.div`
  flex: 0 0 25%;

  .rangeslider-horizontal {
    height: 8px;
    box-shadow: 0 0 0 transparent;

    .rangeslider__handle {
      width: 16px;
      height: 16px;

      &:focus {
        outline: none;
      }

      &::after {
        width: 8px;
        height: 8px;
        top: 4px;
        left: 4px;
        background-color: #5b5b5b;
        box-shadow: 0 0 0 transparent;
      }
    }
  }

  .rangeslider {
    .rangeslider__fill {
      box-shadow: 0 0 0 transparent;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`;

const PlayingBarVolume = ({ volume, handleVolumeChange }) => (
  <VolumeWrapper>
    <Slider value={volume} min={0} max={1} step={0.1} tooltip={false} onChange={handleVolumeChange} />
  </VolumeWrapper>
);

export default PlayingBarVolume;
