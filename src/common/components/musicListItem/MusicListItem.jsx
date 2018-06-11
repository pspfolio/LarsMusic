import React, { Component } from 'react';
import styled from 'styled-components';

const MusicItem = styled.li`
  margin-top: 32px;
  display: flex;

  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    margin-top: 0;
  }
`;

const MusicItemImage = styled.img`
  height: 64px;
  border-radius: 10px;
`;

const MusicItemNameWrapper = styled.div`
  margin-left: 32px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MusicItemName = styled.span`
  font-size: 20px;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.86);
`;

const MusicItemSecondaryName = styled.span`
  display: block;
  font-size: 18px;
  letter-spacing: 0.25px;
  color: #b2b2b2;
`;

class MusicListItem extends Component {
  render() {
    const { image, name, secondaryName, children } = this.props;
    return (
      <MusicItem>
        <MusicItemImage src={image} alt={`${name} album art`} />
        <MusicItemNameWrapper>
          <MusicItemName>{name}</MusicItemName>
          <MusicItemSecondaryName>{secondaryName}</MusicItemSecondaryName>
        </MusicItemNameWrapper>
        {children()}
      </MusicItem>
    );
  }
}

export default MusicListItem;
