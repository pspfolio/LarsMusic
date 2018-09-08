import React, { Component } from 'react';
import styled from 'styled-components';
import ArtistGenres from '../artistGenres/ArtistGenres';
import TopTracks from 'features/tracks/topTracks/TopTracks';
import AlbumList from 'features/album/albumList/AlbumList';
import TabContainer from 'features/tabs/TabBarContainer';
import Header from 'common/components/header/Header';

const ArtistPanelHeader = styled.article`
  display: flex;
  justify-content: center;
  margin: 48px 32px 72px 32px;
`;

const ArtistPanelTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

const ArtistPanelHeading = styled.h4`
  font-size: 56px;
  font-weight: 500;
  margin: 0;
  letter-spacing: 0.25px;
  color: #3d3333;
`;

const ActionRow = styled.div`
  min-height: 28px;
  text-align: center;
  margin-top: 16px;
`;

const LinkToSpotify = styled.a`
  margin-top: 16px;
  color: #1db954;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
`;

const tabs = [
  { name: 'topTracks', label: 'Top Tracks', component: TopTracks },
  { name: 'albums', label: 'Albums', component: AlbumList }
];

class ArtistPanel extends Component {
  render() {
    const { artist } = this.props;
    return (
      <div>
        <ArtistPanelHeader>
          <ArtistPanelTitle>
            <ArtistPanelHeading>{artist.name}</ArtistPanelHeading>
            <ActionRow>
              <LinkToSpotify target="_blank" alt="link to artist page on Spotify" href={artist.external_urls}>
                Kuuntele Spotifyssa
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
