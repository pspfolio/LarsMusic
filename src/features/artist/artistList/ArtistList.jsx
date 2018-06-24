import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import ArtistListItem from './ArtistListItem';

const ArtistContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
`;

class ArtistList extends Component {
  render() {
    const { artists } = this.props;
    return (
      <Fragment>
        <ArtistContainer>{artists.map(artist => <ArtistListItem key={artist.id} {...artist} />)}</ArtistContainer>
      </Fragment>
    );
  }
}

export default ArtistList;
