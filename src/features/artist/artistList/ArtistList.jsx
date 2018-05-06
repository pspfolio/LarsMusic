import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'common/components/header/Header';
import fetchArtists from '../artistActions';

class ArtistList extends Component {
  componentDidMount() {
    const { getArtists } = this.props;
    getArtists();
  }
  render() {
    return <Header>Your collection of Artists</Header>;
  }
}

const mapDispatchToProps = dispatch => ({
  getArtists: () => dispatch(fetchArtists())
});

export default connect(null, mapDispatchToProps)(ArtistList);
