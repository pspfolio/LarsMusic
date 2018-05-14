import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTopTracksIfNeeded } from '../tracksActions';
import { selectTopTracksByArtistId } from '../tracksSelectors';

class TopTracks extends Component {
  componentDidMount() {
    const { getTopTracks } = this.props;
    getTopTracks();
  }

  render() {
    const { topTracks } = this.props;
    return <article>{topTracks && <ul> {topTracks.map(track => <h4>{track.name}</h4>)}</ul>}</article>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    topTracks: selectTopTracksByArtistId(state, ownProps.match.params.id)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getTopTracks: () => dispatch(fetchTopTracksIfNeeded(ownProps.match.params.id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopTracks));
