import React, { Component } from 'react';
import styled from 'styled-components';
import ArtistGenres from '../artistGenres/ArtistGenres';
import TopTracks from 'features/tracks/topTracks/TopTracks';

const ArtistPanelHeader = styled.article`
  display: flex;
  margin: 32px;
`;

const ArtistPanelTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  justify-content: space-between;
`;

const ArtistPanelHeading = styled.h4`
  font-size: 34px;
  font-weight: 400;
  margin: 0;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.87);
`;

const Popularity = styled.span`
  letter-spacing: 0.25px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
`;

const ActionRow = styled.div`
  min-height: 28px;
`;

class ArtistPanel extends Component {
  render() {
    const { artist } = this.props;
    const image = artist.images.find(image => image.height > 100 && image.height < 200);
    return (
      <div>
        <ArtistPanelHeader>
          <img src={image.url} alt={`${artist.name}`} />
          <ArtistPanelTitle>
            <div>
              <ArtistPanelHeading>{artist.name}</ArtistPanelHeading>
              <ArtistGenres genres={artist.genres} />
            </div>
            <ActionRow>
              <Popularity>Popularity: {artist.popularity} / 100</Popularity>
            </ActionRow>
          </ArtistPanelTitle>
        </ArtistPanelHeader>
        <TopTracks />
      </div>
    );
  }
}

export default ArtistPanel;
