import React, { Component } from 'react';
import styled from 'styled-components';

const ArtistPanelHeader = styled.article`
  display: flex;
  margin-top: 32px;
`;

const ArtistPanelTitle = styled.h4`
  font-size: 34px;
  font-weight: 400;
  margin: 0 0 0 24px;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.87);
`;

class ArtistPanel extends Component {
  render() {
    const { artist } = this.props;
    const image = artist.images.find(image => image.height > 100 && image.height < 200);
    return (
      <div>
        <ArtistPanelHeader>
          <img src={image.url} alt={`${artist.name}`} />
          <ArtistPanelTitle>{artist.name}</ArtistPanelTitle>
        </ArtistPanelHeader>
      </div>
    );
  }
}

export default ArtistPanel;
