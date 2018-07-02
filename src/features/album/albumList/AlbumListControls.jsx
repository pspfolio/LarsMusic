import React from 'react';
import styled from 'styled-components';
import like from 'assets/images/like.svg';
import arrowDown from 'assets/images/arrowdown.svg';

const ControlWrapper = styled.div`
  display: flex;
`;

const ImageWrapper = styled.img`
  width: 32px;
  margin-left: 16px;
`;

const AlbumListControls = ({ onClick }) => (
  <ControlWrapper>
    <ImageWrapper src={like} alt="like icon" onClick={onClick} />
    <ImageWrapper src={arrowDown} alt="arrowdown icon" />
  </ControlWrapper>
);

export default AlbumListControls;
