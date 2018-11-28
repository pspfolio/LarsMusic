import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchArtistAlbums } from 'features/entities/albums/albumsActions';
import { toggleAlbumTrackList } from '../albumActions';
import { fetchAlbumTracks } from 'features/entities/tracks/tracksActions';
import { selectAlbumsByArtistId, selectOwnedAlbumsByArtistId } from 'features/entities/albums/albumsSelectors';
import { selectTracksByAlbumId } from 'features/entities/tracks/tracksSelectors';
import {
  fetchUserOwnedAlbumsByArtistId,
  toggleLikedAlbum,
  addAlbumType
} from 'features/entities/userAlbums/userAlbumsActions';

class AlbumListContainer extends Component {
  componentDidMount() {
    const { fetchArtistAlbums, fetchUserOwnedAlbumsByArtistId } = this.props;
    fetchArtistAlbums();
    fetchUserOwnedAlbumsByArtistId();
  }

  onAlbumClick = id => {
    const { fetchAlbumTracks, openAlbumTrackList } = this.props;
    fetchAlbumTracks(id);
    openAlbumTrackList(id);
  };

  onAddFavoriteClick = id => {
    const { toggleLikedAlbum } = this.props;
    toggleLikedAlbum(id);
  };

  onAlbumTypeSelect = (id, albumType) => {
    const { addAlbumType } = this.props;
    console.log('albumtype', albumType);
    addAlbumType(id, albumType);
  };

  render() {
    const { children, albums, openAlbum, albumTracks, ownedAlbums, match, isAlbumsLoading } = this.props;

    console.log('ownedalbusm', ownedAlbums);

    const actions = {
      onAlbumClick: this.onAlbumClick,
      onAddFavoriteClick: this.onAddFavoriteClick,
      onAlbumTypeSelect: this.onAlbumTypeSelect
    };

    const data = {
      isAlbumsLoading,
      albums,
      openAlbum,
      albumTracks,
      ownedAlbums,
      match
    };

    return <div>{children({ actions, data })}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAlbumsLoading: state.loading.ALBUMS,
    albums: selectAlbumsByArtistId(state, ownProps.match.params.id),
    ownedAlbums: selectOwnedAlbumsByArtistId(state, ownProps.match.params.id),
    albumTracks: selectTracksByAlbumId(state),
    openAlbum: state.albums.openAlbum
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchArtistAlbums: () => {
    dispatch(fetchArtistAlbums(ownProps.match.params.id));
  },
  fetchAlbumTracks: albumId => {
    dispatch(fetchAlbumTracks(albumId));
  },
  openAlbumTrackList: albumId => {
    dispatch(toggleAlbumTrackList(albumId));
  },
  toggleLikedAlbum: albumId => {
    dispatch(toggleLikedAlbum(ownProps.match.params.id, albumId));
  },
  fetchUserOwnedAlbumsByArtistId: () => {
    dispatch(fetchUserOwnedAlbumsByArtistId(ownProps.match.params.id));
  },
  addAlbumType: (albumId, albumType) => {
    dispatch(addAlbumType(ownProps.match.params.id, albumId, albumType));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumListContainer));
