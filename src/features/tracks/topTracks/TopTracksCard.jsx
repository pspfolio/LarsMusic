import React, { Component } from 'react';
import styled from 'styled-components';
import TopTracksItem from './TopTracksItem';

const TopTracksCardPaper = styled.article`
  margin: 16px 0 0 32px;
  background-color: white;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1);
`;

const TrackList = styled.ul`
  margin: 0;
  padding-left: 0;
`;

class TopTracksCard extends Component {
  render() {
    const { topTracks, play } = this.props;
    return (
      <TopTracksCardPaper>
        {topTracks && (
          <TrackList>{topTracks.map(track => <TopTracksItem key={track.id} play={play} {...track} />)}</TrackList>
        )}
      </TopTracksCardPaper>
    );
  }
}

export default TopTracksCard;
