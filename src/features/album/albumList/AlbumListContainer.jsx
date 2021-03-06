import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchArtistAlbums } from 'features/entities/albums/albumsActions';
import { toggleAlbumTrackList } from '../albumActions';
import { fetchAlbumTracks } from 'features/entities/tracks/tracksActions';
import { selectArtistById } from 'features/entities/artists/artistsSelectors';
import { selectAlbumsByArtistId, selectOwnedAlbumsByArtistId } from 'features/entities/albums/albumsSelectors';
import { selectTracksByAlbumId } from 'features/entities/tracks/tracksSelectors';
import {
  fetchUserOwnedAlbumsByArtistId,
  toggleLikedAlbum,
  addAlbumType,
  watchAlbumRemoved
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
    const { toggleLikedAlbum, artist } = this.props;
    toggleLikedAlbum(id, artist);
  };

  onAlbumTypeSelect = (id, albumType) => {
    const { addAlbumType } = this.props;
    addAlbumType(id, albumType);
  };

  render() {
    const { children, albums, openAlbum, albumTracks, ownedAlbums, match, isAlbumsLoading } = this.props;

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
    artist: selectArtistById(state, ownProps.match.params.id),
    openAlbum: state.albums.openAlbum
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch(watchAlbumRemoved(ownProps.match.params.id));
  return {
    fetchArtistAlbums: () => {
      dispatch(fetchArtistAlbums(ownProps.match.params.id));
    },
    fetchAlbumTracks: albumId => {
      dispatch(fetchAlbumTracks(albumId));
    },
    openAlbumTrackList: albumId => {
      dispatch(toggleAlbumTrackList(albumId));
    },
    toggleLikedAlbum: (albumId, artist) => {
      dispatch(toggleLikedAlbum(ownProps.match.params.id, albumId, artist));
    },
    fetchUserOwnedAlbumsByArtistId: () => {
      dispatch(fetchUserOwnedAlbumsByArtistId(ownProps.match.params.id));
    },
    addAlbumType: (albumId, albumType) => {
      dispatch(addAlbumType(ownProps.match.params.id, albumId, albumType));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumListContainer));
