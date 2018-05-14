import React, { Component } from 'react';
import styled from 'styled-components';
import ArtistGenres from '../artistGenres/ArtistGenres';

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

const SpotifyButton = styled.a`
  background-color: #1db954;
  padding: 10px 40px;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 1.25px;
  font-size: 14px;
  border-radius: 500px;
  line-height: 1.6;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #1ed760;
  }
`;

const Popularity = styled.span`
  margin-left: 24px;
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
    console.log(artist);
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
              <SpotifyButton href={artist.external_urls} target="_blank">
                Open in Spotify
              </SpotifyButton>
              <Popularity>Popularity: {artist.popularity}</Popularity>
            </ActionRow>
          </ArtistPanelTitle>
        </ArtistPanelHeader>
      </div>
    );
  }
}

export default ArtistPanel;
