import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPlayingArtists, selectPlayingTrack } from '../playSelectors';

class Play extends Component {
  render() {
    const { playingArtist, playingTrack } = this.props;
    return <div>{playingArtist && playingTrack ? <h2>Playing</h2> : null}</div>;
  }
}

const mapStateToProps = state => ({
  playingArtist: selectPlayingArtists(state),
  playingTrack: selectPlayingTrack(state)
});

export default connect(mapStateToProps)(Play);
