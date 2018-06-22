import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import TopTracksControls from '../topTracks/TopTracksControls';

const TrackItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

const TrackName = styled.p`
  margin-left: 24px;
  font-size: 1.2em;
`;

class TracksList extends Component {
  render() {
    const { tracks } = this.props;
    return (
      <Fragment>
        {tracks.map(track => {
          return (
            <TrackItem key={track.id}>
              <span>{track.track_number}</span>
              <TrackName>{track.name}</TrackName>
              <TopTracksControls />
            </TrackItem>
          );
        })}
      </Fragment>
    );
  }
}

export default TracksList;
