import React, { Component } from 'react';
import styled from 'styled-components';

const PlayingBarLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 25%;
`;

const AlbumArt = styled.img`
  height: 48px;
`;

const TrackName = styled.p`
  font-weight: 500;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.87);
  margin-left: 16px;
`;

class PlayingBarTrack extends Component {
  getAlbumArt = () => {
    const { playingAlbum } = this.props;
    const albumArt = playingAlbum.images[playingAlbum.images.length - 1].url;

    return albumArt;
  };

  render() {
    const { playingTrack } = this.props;
    return (
      <PlayingBarLeft>
        <AlbumArt src={this.getAlbumArt()} alt="album art" />
        <TrackName>{playingTrack.name}</TrackName>
      </PlayingBarLeft>
    );
  }
}

export default PlayingBarTrack;
