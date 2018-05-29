import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { fetchTopTracksIfNeeded } from '../tracksActions';
import { setPlayTrack } from 'features/playingBar/playingBarActions';
import { selectTopTracksByArtistId } from '../tracksSelectors';
import TopTracksCard from './TopTracksCard';

const Title = styled.h6`
  margin-left: 32px;
  margin: 0 0 16px 32px;
  font-size: 20px;
  letter-spacing: 0.25px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.86);
`;

class TopTracks extends Component {
  componentDidMount() {
    const { getTopTracks } = this.props;
    getTopTracks();
  }

  render() {
    const { topTracks, play } = this.props;
    return (
      <div>
        <Title>Top Tracks</Title>
        <TopTracksCard topTracks={topTracks} play={play} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const limit = 5;
  return {
    topTracks: selectTopTracksByArtistId(state, ownProps.match.params.id, limit)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getTopTracks: () => dispatch(fetchTopTracksIfNeeded(ownProps.match.params.id)),
  play: trackId => dispatch(setPlayTrack(trackId, ownProps.match.params.id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopTracks));
