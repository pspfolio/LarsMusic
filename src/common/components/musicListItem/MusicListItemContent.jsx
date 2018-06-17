import React, { Fragment } from 'react';
import styled from 'styled-components';

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

const MusicListItemContent = ({ image, name, secondaryName }) => (
  <Fragment>
    <MusicItemImage src={image} alt={`${name} album art`} />
    <MusicItemNameWrapper>
      <MusicItemName>{name}</MusicItemName>
      <MusicItemSecondaryName>{secondaryName}</MusicItemSecondaryName>
    </MusicItemNameWrapper>
  </Fragment>
);

export default MusicListItemContent;
