import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchArtists from '../artistActions';
import { selectArtists } from '../artistSelectors';
import Header from 'common/components/header/Header';

class ArtistList extends Component {
  componentDidMount() {
    const { getArtists } = this.props;
    getArtists();
  }
  render() {
    return (
      <article>
        <Header>Your collection of Artists</Header>
      </article>
    );
  }
}

const mapStateToProps = state => ({
  artists: selectArtists(state)
});

const mapDispatchToProps = dispatch => ({
  getArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList);
