import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import TracksControls from '../tracksControls/TracksControls';

const TrackWrapper = styled.div`
  display: flex;
  margin: 0 40px;
  justify-content: space-between;
`;

const TrackItem = styled.div`
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
        {tracks.map(track => {
          console.log(track);
          return (
            <TrackWrapper key={track.id}>
              <TrackItem>
                <TrackNumber>{track.track_number}</TrackNumber>
                <TrackName>{track.name}</TrackName>
              </TrackItem>
              <TracksControls
                trackId={track.id}
                artistId={artistId}
                albumId={albumId}
                spotifyUrl={track.external_urls['spotify']}
              />
            </TrackWrapper>
          );
        })}
      </Fragment>
    );
  }
}

export default TracksList;
