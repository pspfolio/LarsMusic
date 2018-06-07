import React, { Component } from 'react';
import styled from 'styled-components';
import ArtistListItem from './ArtistListItem';

const ArtistContainer = styled.article`
  display: flex;
  justify-content: space-between;
`;

class ArtistList extends Component {
  render() {
    const { artists } = this.props;
    return (
      <div>
        <ArtistContainer>{artists.map(artist => <ArtistListItem key={artist.id} {...artist} />)}</ArtistContainer>
      </div>
    );
  }
}

export default ArtistList;
