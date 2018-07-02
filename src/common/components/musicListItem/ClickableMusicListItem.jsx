import React, { Fragment } from 'react';
import styled from 'styled-components';
import MusicListItemContent from './MusicListItemContent';

const MusicListItem = styled.li`
  margin-top: 32px;
  cursor: pointer;
  list-style-type: none;
  display: flex;
`;

const MusicContent = styled.div`
  display: flex;
  flex: 2;
  &:hover {
    background-color: #efefef;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    margin-top: 0;
  }
`;

const ClickableMusicListItem = ({ image, name, secondaryName, children, onClick }) => (
  <Fragment>
    <MusicListItem>
      <MusicContent onClick={onClick}>
        <MusicListItemContent image={image} name={name} secondaryName={secondaryName} />
      </MusicContent>
      {children()}
    </MusicListItem>
  </Fragment>
);

export default ClickableMusicListItem;
