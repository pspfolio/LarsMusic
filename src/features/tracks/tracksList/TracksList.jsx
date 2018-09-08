import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import TracksControls from '../tracksControls/TracksControls';

const TrackWrapper = styled.div`
  display: flex;
  margin: 0 146px;
  justify-content: space-between;
`;

const TrackItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const TrackNumber = styled.p`
  text-align: center;
  width: 25px;
`;

const TrackName = styled.p`
  margin-left: 24px;
  font-size: 1.2em;
`;

class TracksList extends Component {
  render() {
    const { tracks, artistId, albumId } = this.props;
    return (
      <Fragment>
        {tracks.map(track => (
          <TrackWrapper key={track.id}>
            <TracksControls
              trackId={track.id}
              artistId={artistId}
              albumId={albumId}
              spotifyUrl={track.external_urls['spotify']}
              showPlayButton={!!track.preview_url}
            />
            <TrackItem>
              <TrackNumber>{track.track_number}</TrackNumber>
              <TrackName>{track.name}</TrackName>
            </TrackItem>
          </TrackWrapper>
        ))}
      </Fragment>
    );
  }
}

export default TracksList;
