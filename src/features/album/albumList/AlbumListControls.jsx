import React from 'react';
import styled from 'styled-components';
import like from 'assets/images/like.svg';
import liked from 'assets/images/liked.svg';

const ControlWrapper = styled.div`
  display: flex;
`;

const ImageWrapper = styled.img`
  width: 32px;
  margin-left: 16px;
`;

const AlbumListControls = ({ onClick, owned }) => {
  return (
    <ControlWrapper>
      <ImageWrapper src={owned ? liked : like} alt="like icon" onClick={onClick} />
    </ControlWrapper>
  );
};

export default AlbumListControls;
