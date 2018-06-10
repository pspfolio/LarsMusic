import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchArtistAlbums } from '../albumActions';
import { selectTopTracksByArtistId } from '../albumSelectors';

class AlbumList extends Component {
  componentDidMount() {
    const { fetchArtistAlbums } = this.props;
    fetchArtistAlbums();
  }

  render() {
    console.log(this.props.albums);
    return (
      <Fragment>
        <h1>This is album list</h1>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    albums: selectTopTracksByArtistId(state, ownProps.match.params.id)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchArtistAlbums: () => {
    dispatch(fetchArtistAlbums(ownProps.match.params.id));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumList));
