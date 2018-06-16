import React, { Component } from 'react';
import styled from 'styled-components';
import TopTracksItem from './TopTracksItem';

const TopTracksCardWrapper = styled.article`
  padding: 0 32px;
`;

const TrackList = styled.ul`
  margin: 32px 0;
  padding-left: 0;
`;

class TopTracksCard extends Component {
  render() {
    const { topTracks, play } = this.props;
    return (
      <TopTracksCardWrapper>
        {topTracks.length > 0 && (
          <TrackList>{topTracks.map(track => <TopTracksItem key={track.id} play={play} {...track} />)}</TrackList>
        )}
      </TopTracksCardWrapper>
    );
  }
}

export default TopTracksCard;
