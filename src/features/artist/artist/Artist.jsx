import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardLayout from 'features/dashboard//DashboardLayout';
import { fetchArtistIfNeeded } from '../artistActions';
import { selectArtistById } from '../artistSelectors';
import ArtistPanel from './ArtistPanel';

class Artist extends Component {
  componentDidMount() {
    const { fetchArtist, artist } = this.props;
    const { id } = this.props.match.params;
    console.log('ARTIST!!', artist);
    fetchArtist(id);
  }
  render() {
    const { artist } = this.props;
    return <DashboardLayout>{artist ? <ArtistPanel artist={artist} /> : <h3>Loading</h3>}</DashboardLayout>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  artist: selectArtistById(state, ownProps.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  fetchArtist: id => {
    dispatch(fetchArtistIfNeeded(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
