import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTopTracksIfNeeded } from '../tracksActions';
import { selectTopTracksByArtistId } from '../tracksSelectors';
import TopTracksCard from './TopTracksCard';

class TopTracks extends Component {
  componentDidMount() {
    const { getTopTracks } = this.props;
    getTopTracks();
  }

  render() {
    const { topTracks, match } = this.props;
    return (
      <div>
        <TopTracksCard topTracks={topTracks} artistId={match.params.id} />
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
  getTopTracks: () => dispatch(fetchTopTracksIfNeeded(ownProps.match.params.id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopTracks));
