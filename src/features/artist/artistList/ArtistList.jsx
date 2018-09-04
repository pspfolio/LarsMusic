import React, { Component } from 'react';
import styled from 'styled-components';
import ArtistListItem from './ArtistListItem';

const ArtistContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
`;

class ArtistList extends Component {
  render() {
    const { artists } = this.props;
    return <ArtistContainer>{artists.map(artist => <ArtistListItem key={artist.id} {...artist} />)}</ArtistContainer>;
  }
}

export default ArtistList;
