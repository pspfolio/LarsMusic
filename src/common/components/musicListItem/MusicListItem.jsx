import React from 'react';
import styled from 'styled-components';
import MusicListItemContent from './MusicListItemContent';

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

const MusicListItem = ({ image, name, secondaryName, children }) => (
  <MusicItem>
    {children()}
    <MusicListItemContent image={image} name={name} secondaryName={secondaryName} />
  </MusicItem>
);

export default MusicListItem;
