import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchArtistAlbums } from '../albumActions';

class AlbumList extends Component {
  componentDidMount() {
    const { fetchArtistAlbums } = this.props;
    fetchArtistAlbums();
  }

  render() {
    return (
      <div>
        <h1>This is album list</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchArtistAlbums: () => {
    dispatch(fetchArtistAlbums(ownProps.match.params.id));
  }
});

export default withRouter(connect(null, mapDispatchToProps)(AlbumList));
