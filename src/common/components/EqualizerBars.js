import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const upAndDown = keyframes`
  0% {
    opacity: .3;
    transform: scaleY(.05);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
`;

const Equalizer = styled.div`
  i {
    background-color: black;
    content: '';
    display: inline-block;
    height: 30px;
    width: 3px;
    margin: 0 3px;
    animation: ${upAndDown} 0.3s infinite alternate;
    transform-origin: bottom left;
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(1) {
      animation-delay: 0.2;
    }
  }
`;

// .3s, .1s, .2s, .1s

class EqualizerBars extends Component {
  render() {
    return (
      <Equalizer>
        <i />
        <i />
        <i />
      </Equalizer>
    );
  }
}

export default EqualizerBars;
