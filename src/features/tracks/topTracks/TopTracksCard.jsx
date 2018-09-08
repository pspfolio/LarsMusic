import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import TopTracksItem from './TopTracksItem';

const TrackList = styled.ul`
  margin: 32px 0;
  padding-left: 0;
`;

class TopTracksCard extends Component {
  render() {
    const { topTracks, artistId } = this.props;
    return (
      <Fragment>
        {topTracks.length > 0 && (
          <TrackList>
            {topTracks.map(track => <TopTracksItem key={track.id} artistId={artistId} {...track} />)}
          </TrackList>
        )}
      </Fragment>
    );
  }
}

export default TopTracksCard;
