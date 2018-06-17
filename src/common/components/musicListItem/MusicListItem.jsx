import React, { Component } from 'react';
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

class MusicListItem extends Component {
  render() {
    const { image, name, secondaryName, children } = this.props;
    return (
      <MusicItem>
        <MusicListItemContent image={image} name={name} secondaryName={secondaryName} />
        {children()}
      </MusicItem>
    );
  }
}

export default MusicListItem;
