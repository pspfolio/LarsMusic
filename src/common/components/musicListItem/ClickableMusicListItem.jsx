import React from 'react';
import styled from 'styled-components';
import MusicListItemContent from './MusicListItemContent';

const MusicItem = styled.li`
  margin-top: 32px;
  display: flex;
  cursor: pointer;

  &:hover {
    background-color: red;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    margin-top: 0;
  }
`;

const ClickableMusicListItem = ({ image, name, secondaryName, children, onClick }) => (
  <MusicItem onClick={onClick}>
    <MusicListItemContent image={image} name={name} secondaryName={secondaryName} />
    {children()}
  </MusicItem>
);

export default ClickableMusicListItem;
