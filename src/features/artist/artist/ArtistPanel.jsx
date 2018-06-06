import React, { Component } from 'react';
import styled from 'styled-components';
import ArtistGenres from '../artistGenres/ArtistGenres';
import TopTracks from 'features/tracks/topTracks/TopTracks';
import TabContainer from 'features/tabs/TabBarContainer';

const ArtistPanelHeader = styled.article`
  display: flex;
  margin: 48px 32px 72px 32px;
`;

const ArtistImage = styled.img`
  height: 200px;
`;

const ArtistPanelTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  justify-content: space-between;
`;

const ArtistPanelHeading = styled.h4`
  font-size: 36px;
  font-weight: 400;
  margin: 0;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.87);
`;

const Popularity = styled.span`
  display: block;
  margin-top: 16px;
  letter-spacing: 0.25px;
  font-size: 18px;
  color: #9fa6ac;
`;

const ActionRow = styled.div`
  min-height: 28px;
`;

const LinkToSpotify = styled.a`
  color: #1db954;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
`;

const tabs = [{ name: 'topTracks', label: 'Top Tracks', component: TopTracks }];

class ArtistPanel extends Component {
  render() {
    const { artist } = this.props;
    const image = artist.images.find(image => image.height > 100 && image.height < 301);
    return (
      <div>
        <ArtistPanelHeader>
          <ArtistImage src={image.url} alt={`${artist.name}`} />
          <ArtistPanelTitle>
            <div>
              <ArtistPanelHeading>{artist.name}</ArtistPanelHeading>
              <Popularity>Popularity: {artist.popularity}%</Popularity>
              <ArtistGenres genres={artist.genres} />
            </div>
            <ActionRow>
              <LinkToSpotify target="_blank" alt="link to artist page on Spotify" href={artist.external_urls}>
                In Spotify
              </LinkToSpotify>
            </ActionRow>
          </ArtistPanelTitle>
        </ArtistPanelHeader>
        <TabContainer tabs={tabs} />
      </div>
    );
  }
}

export default ArtistPanel;
