import React from 'react';
import styled from 'styled-components';
import IconAdder from '../iconAdder/IconAdder';
import play_icon from 'assets/images/play_icon.svg';

const PlayButtonStyle = styled.button`
  width: ${props => (props.size ? `${props.size}px` : '48px')};
  height: ${props => (props.size ? `${props.size}px` : '48px')};
  border: 2px solid rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 500%;
  cursor: pointer;
  will-change: transform;
  transition: all 0.2s ease-in-out;
  background: #fff;

  img {
    height: ${props => (props.size ? `${props.size / 2}px` : '24px')};
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(50, 50, 93, 0.1);
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
  }
`;

const PlayButton = ({ onClick, size }) => (
  <IconAdder tag={PlayButtonStyle} onClick={onClick} src={play_icon} alt="play" size={size} />
);

export default PlayButton;
