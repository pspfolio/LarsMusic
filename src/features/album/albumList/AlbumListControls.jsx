import React, { Component } from 'react';
import styled from 'styled-components';
import like from 'assets/images/like.svg';
import arrowDown from 'assets/images/arrowdown.svg';

const ImageWrapper = styled.img`
  width: 32px;
  margin-left: 16px;
`;

class AlbumListControls extends Component {
  render() {
    return (
      <div>
        <ImageWrapper src={like} alt="like icon" />
        <ImageWrapper src={arrowDown} alt="arrowdown icon" />
      </div>
    );
  }
}

export default AlbumListControls;
